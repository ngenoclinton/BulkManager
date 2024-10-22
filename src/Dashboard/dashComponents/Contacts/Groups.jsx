import React, { useState } from 'react'
import { Plus, Edit, Trash2, Users } from 'lucide-react'


const initialGroups= [
  { id: 1, name: "Customers", memberCount: 150 },
  { id: 2, name: "Suppliers", memberCount: 50 },
  { id: 3, name: "Employees", memberCount: 75 },
  // Add more sample data as needed
]

export default function Groups() {
  const [groups, setGroups] = useState(initialGroups)
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [newGroupName, setNewGroupName] = useState('')

  const handleCreateGroup = () => {
    if (newGroupName.trim()) {
      const newGroup = {
        id: groups.length + 1,
        name: newGroupName.trim(),
        memberCount: 0
      }
      setGroups([...groups, newGroup])
      setNewGroupName('')
      setShowCreateModal(false)
    }
  }

  const handleDeleteGroup = (id) => {
    if (window.confirm("Are you sure you want to delete this group?")) {
      setGroups(groups.filter(group => group.id !== id))
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Contact Groups</h1>
        <button
          onClick={() => setShowCreateModal(true)}
          className="px-4 py-2 bg-[#f15c22] text-white rounded-md hover:bg-[#d94d1a] transition-colors flex items-center"
        >
          <Plus className="h-5 w-5 mr-2" />
          Create New Group
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {groups.map(group => (
          <div key={group.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{group.name}</h2>
            <p className="text-gray-600 mb-4">
              <Users className="h-5 w-5 inline mr-2" />
              {group.memberCount} members
            </p>
            <div className="flex justify-end space-x-2">
              <button className="p-2 text-blue-600 hover:text-blue-800">
                <Edit className="h-5 w-5" />
              </button>
              <button className="p-2 text-red-600 hover:text-red-800" onClick={() => handleDeleteGroup(group.id)}>
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Create Group Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Create New Group</h2>
            <input
              type="text"
              placeholder="Group Name"
              value={newGroupName}
              onChange={(e) => setNewGroupName(e.target.value)}
              className="w-full p-2 border rounded-md mb-4"
            />
            <div className="flex justify-end space-x-2">
              <button
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
                onClick={() => setShowCreateModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-[#f15c22] text-white rounded-md hover:bg-[#d94d1a] transition-colors"
                onClick={handleCreateGroup}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}