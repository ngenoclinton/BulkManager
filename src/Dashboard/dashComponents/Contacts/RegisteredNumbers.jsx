import React, { useState } from 'react'
import { Search, Edit, Trash2, Plus, ChevronLeft, ChevronRight, Send, Users } from 'lucide-react'



const initialContacts= [
  { id: 1, fullName: "John Doe", countryCode: "+1", phoneNumber: "1234567890", group: "Customers" },
  { id: 2, fullName: "Jane Smith", countryCode: "+44", phoneNumber: "2345678901", group: "Suppliers" },
  // Add more sample data as needed
]

export default function RegisteredNumbers() {
  const [contacts, setContacts] = useState(initialContacts)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedContacts, setSelectedContacts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(10)
  const [showMessageModal, setShowMessageModal] = useState(false)
  const [messageText, setMessageText] = useState("")

  const filteredContacts = contacts.filter(contact => 
    contact.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.phoneNumber.includes(searchTerm)
  )

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentContacts = filteredContacts.slice(indexOfFirstItem, indexOfLastItem)

  const totalPages = Math.ceil(filteredContacts.length / itemsPerPage)

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
    setCurrentPage(1)
  }

  const handleCheckboxChange = (id) => {
    setSelectedContacts(prev => 
      prev.includes(id) ? prev.filter(contactId => contactId !== id) : [...prev, id]
    )
  }

  const handleSelectAll = () => {
    if (selectedContacts.length === currentContacts.length) {
      setSelectedContacts([])
    } else {
      setSelectedContacts(currentContacts.map(contact => contact.id))
    }
  }

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      setContacts(contacts.filter(contact => contact.id !== id))
    }
  }

  const handleBulkAction = (action) => {
    switch (action) {
      case 'delete':
        if (window.confirm(`Are you sure you want to delete ${selectedContacts.length} contacts?`)) {
          setContacts(contacts.filter(contact => !selectedContacts.includes(contact.id)))
          setSelectedContacts([])
        }
        break
      case 'sendMessage':
        setShowMessageModal(true)
        break
    }
  }

  const handleSendMessage = () => {
    // Here you would typically send the message to your backend
    console.log(`Sending message: "${messageText}" to ${selectedContacts.length} contacts`)
    setShowMessageModal(false)
    setMessageText("")
    setSelectedContacts([])
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Registered Numbers</h1>
      
      <div className="flex justify-between items-center mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search numbers or names..."
            className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#f15c22]"
            value={searchTerm}
            onChange={handleSearch}
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
        <button className="px-4 py-2 bg-[#f15c22] text-white rounded-md hover:bg-[#d94d1a] transition-colors flex items-center">
          <Plus className="h-5 w-5 mr-2" />
          Add New Contact
        </button>
      </div>

      <div className="mb-4 flex space-x-2">
        <select
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#f15c22]"
          onChange={(e) => handleBulkAction(e.target.value)}
        >
          <option value="">Bulk Actions</option>
          <option value="delete">Delete Selected</option>
          <option value="sendMessage">Send Message</option>
        </select>
        <button
          className="px-4 py-2 bg-[#f15c22] text-white rounded-md hover:bg-[#d94d1a] transition-colors flex items-center"
          onClick={() => setShowMessageModal(true)}
          disabled={selectedContacts.length === 0}
        >
          <Send className="h-5 w-5 mr-2" />
          Send Message to Selected
        </button>
      </div>

      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <input
                type="checkbox"
                checked={selectedContacts.length === currentContacts.length}
                onChange={handleSelectAll}
                className="h-4 w-4 text-[#f15c22] focus:ring-[#f15c22] border-gray-300 rounded"
              />
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Full Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Country Code</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone Number</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Group</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {currentContacts.map((contact) => (
            <tr key={contact.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <input
                  type="checkbox"
                  checked={selectedContacts.includes(contact.id)}
                  onChange={() => handleCheckboxChange(contact.id)}
                  className="h-4 w-4 text-[#f15c22] focus:ring-[#f15c22] border-gray-300 rounded"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{contact.fullName}</td>
              <td className="px-6 py-4 whitespace-nowrap">{contact.countryCode}</td>
              <td className="px-6 py-4 whitespace-nowrap">{contact.phoneNumber}</td>
              <td className="px-6 py-4 whitespace-nowrap">{contact.group}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button className="text-indigo-600 hover:text-indigo-900 mr-2">
                  <Edit className="h-5 w-5" />
                </button>
                <button className="text-red-600 hover:text-red-900 mr-2" onClick={() => handleDelete(contact.id)}>
                  <Trash2 className="h-5 w-5" />
                </button>
                <button className="text-green-600 hover:text-green-900" onClick={() => {
                  setSelectedContacts([contact.id])
                  setShowMessageModal(true)
                }}>
                  <Send className="h-5 w-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="mt-4 flex justify-between items-center">
        <div>
          Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredContacts.length)} of {filteredContacts.length} entries
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded-md disabled:opacity-50"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded-md disabled:opacity-50"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Message Modal */}
      {showMessageModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Send Message</h2>
            <textarea
              className="w-full h-32 p-2 border rounded-md mb-4"
              placeholder="Type your message here..."
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
            ></textarea>
            <div className="flex justify-end space-x-2">
              <button
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
                onClick={() => setShowMessageModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-[#f15c22] text-white rounded-md hover:bg-[#d94d1a] transition-colors"
                onClick={handleSendMessage}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}