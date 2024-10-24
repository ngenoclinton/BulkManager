import {react } from 'react';

function Contacts() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Contacts</h1>
      <div className="bg-white shadow-sm rounded-lg p-6">
        <div className="mb-4 flex justify-between items-center">
          <input type="text" placeholder="Search contacts" className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#f15c22] focus:border-[#f15c22]" />
          <button className="bg-[#f15c22] text-white px-4 py-2 rounded-md hover:bg-[#d94d1a] transition-colors">Add Contact</button>
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Group</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
              <td className="px-6 py-4 whitespace-nowrap">+1234567890</td>
              <td className="px-6 py-4 whitespace-nowrap">Customers</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <a href="#" className="text-[#f15c22] hover:text-[#d94d1a]">Edit</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}


export default Contacts;