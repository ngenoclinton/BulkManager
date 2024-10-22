import React, { useState, useCallback } from 'react'
import { Upload, FileText, Download, Check, X, Filter, RefreshCw, Trash2, Users, Send } from 'lucide-react'



export default function ContactsImports() {
  const [contacts, setContacts] = useState([])
  const [importHistory, setImportHistory] = useState([])
  const [isDragging, setIsDragging] = useState(false)

  const handleDragOver = useCallback((e) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const handleDrop = useCallback((e) => {
    e.preventDefault()
    setIsDragging(false)
    const files = e.dataTransfer.files
    if (files.length) {
      handleFileUpload(files[0])
    }
  }, [])

  const handleFileUpload = useCallback((file) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const content = e.target?.result
      const lines = content.split('\n')
      const newContacts= lines.slice(1).map((line, index) => {
        const [name, phone, email] = line.split(',')
        return { id: index, name, phone, email, selected: false }
      })
      setContacts(newContacts)
      alert(`${newContacts.length} contacts have been uploaded successfully.`)
      setImportHistory(prev => [`Imported ${newContacts.length} contacts on ${new Date().toLocaleString()}`, ...prev])
    }
    reader.readAsText(file)
  }, [])

  const handleCheckboxChange = useCallback((id) => {
    setContacts(prev => prev.map(contact =>
      contact.id === id ? { ...contact, selected: !contact.selected } : contact
    ))
  }, [])

  const handleSelectAll = useCallback(() => {
    setContacts(prev => prev.map(contact => ({ ...contact, selected: true })))
  }, [])

  const handleDeselectAll = useCallback(() => {
    setContacts(prev => prev.map(contact => ({ ...contact, selected: false })))
  }, [])

  const handleDeleteSelected = useCallback(() => {
    const selectedCount = contacts.filter(c => c.selected).length
    setContacts(prev => prev.filter(contact => !contact.selected))
    alert(`${selectedCount} contacts have been deleted.`)
  }, [contacts])

  const handleImportSelected = useCallback(() => {
    const selectedCount = contacts.filter(c => c.selected).length
    setTimeout(() => {
      alert(`${selectedCount} contacts have been imported successfully.`)
      setContacts([])
    }, 1000)
  }, [contacts])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Import Contacts</h1>
      
      {/* Drag and Drop Area */}
      <div
        className={`border-2 border-dashed rounded-lg p-8 mb-6 text-center ${
          isDragging ? 'border-[#f15c22] bg-orange-50' : 'border-gray-300'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <Upload className="mx-auto h-12 w-12 text-gray-400" />
        <p className="mt-2 text-sm text-gray-600">
          Drag and drop your CSV or Excel file here, or
          <label htmlFor="file-upload" className="ml-1 text-[#f15c22] hover:text-[#d94d1a] cursor-pointer">
            browse
          </label>
        </p>
        <input
          id="file-upload"
          type="file"
          className="hidden"
          onChange={(e) => e.target.files && handleFileUpload(e.target.files[0])}
          accept=".csv,.xlsx"
        />
      </div>

      {/* Sample CSV Download Link */}
      <div className="mb-6">
        <button className="flex items-center px-4 py-2 border rounded-md text-[#f15c22] border-[#f15c22] hover:bg-[#f15c22] hover:text-white transition-colors">
          <Download className="mr-2 h-4 w-4" />
          Download Sample CSV
        </button>
      </div>

      {/* Uploaded Contacts Table */}
      {contacts.length > 0 && (
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Uploaded Contacts</h2>
            <div className="flex space-x-2">
              <button className="px-3 py-1 text-sm border rounded-md" onClick={handleSelectAll}>
                Select All
              </button>
              <button className="px-3 py-1 text-sm border rounded-md" onClick={handleDeselectAll}>
                Deselect All
              </button>
              <button className="px-3 py-1 text-sm border rounded-md flex items-center">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </button>
            </div>
          </div>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Select</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {contacts.map((contact) => (
                <tr key={contact.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      checked={contact.selected}
                      onChange={() => handleCheckboxChange(contact.id)}
                      className="h-4 w-4 text-[#f15c22] focus:ring-[#f15c22] border-gray-300 rounded"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{contact.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{contact.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{contact.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4 flex justify-end space-x-2">
            <button
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors flex items-center"
              onClick={handleDeleteSelected}
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Delete Selected
            </button>
            <button
              className="px-4 py-2 bg-[#f15c22] text-white rounded-md hover:bg-[#d94d1a] transition-colors flex items-center"
              onClick={handleImportSelected}
            >
              <Check className="h-4 w-4 mr-2" />
              Import Selected
            </button>
          </div>
        </div>
      )}

      {/* Import History */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Import History</h2>
        <ul className="space-y-2">
          {importHistory.map((entry, index) => (
            <li key={index} className="bg-gray-100 p-3 rounded-md text-sm">
              {entry}
            </li>
          ))}
        </ul>
      </div>

      {/* Bulk Actions */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Bulk Actions</h2>
        <div className="flex space-x-2">
          <button className="px-4 py-2 border rounded-md text-[#f15c22] border-[#f15c22] hover:bg-[#f15c22] hover:text-white transition-colors flex items-center">
            <Users className="h-4 w-4 mr-2" />
            Add to Group
          </button>
          <button className="px-4 py-2 border rounded-md text-[#f15c22] border-[#f15c22] hover:bg-[#f15c22] hover:text-white transition-colors flex items-center">
            <Send className="h-4 w-4 mr-2" />
            Send Message
          </button>
        </div>
      </div>
    </div>
  )
}