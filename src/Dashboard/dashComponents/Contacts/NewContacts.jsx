import React, { useState } from 'react'
import { Save, X, Plus } from 'lucide-react'


const initialForm = {
  fullName: '',
  countryCode: '',
  phoneNumber: '',
  email: '',
  notes: ''
}

const countryCodes = [
  { code: '+1', country: 'USA/Canada' },
  { code: '+44', country: 'UK' },
  { code: '+91', country: 'India' },
  // Add more country codes as needed
]

export default function NewContacts() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}
    if (!form.fullName) newErrors.fullName = 'Full name is required'
    if (!form.phoneNumber) newErrors.phoneNumber = 'Phone number is required'
    else if (!/^\+?[1-9]\d{1,14}$/.test(form.phoneNumber)) newErrors.phoneNumber = 'Invalid phone number'
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Invalid email address'
    if (!form.countryCode) newErrors.countryCode = 'Country Code is required';
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', form)
      alert('Contact added successfully!')
      setForm(initialForm)
    }
  }

  const handleAddAnother = () => {
    if (validateForm()) {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', form)
      alert('Contact added successfully!')
      setForm(initialForm)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Add New Contact</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name *</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#f15c22] focus:ring focus:ring-[#f15c22] focus:ring-opacity-50 ${errors.fullName ? 'border-red-500' : ''}`}
          />
          {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="countryCode" className="block text-sm font-medium text-gray-700">Country Code *</label>
          <select
            id="countryCode"
            name="countryCode"
            value={form.countryCode}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#f15c22] focus:ring focus:ring-[#f15c22] focus:ring-opacity-50"
          >
            <option value="">Select a country code</option>
            {countryCodes.map((country) => (
              <option key={country.code} value={country.code}>
                {country.code} ({country.country})
              </option>
            ))}
          </select>
          {errors.countryCode && <p className="mt-1 text-sm text-red-500">{errors.countryCode}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number *</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={form.phoneNumber}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#f15c22] focus:ring focus:ring-[#f15c22] focus:ring-opacity-50 ${errors.phoneNumber ? 'border-red-500' : ''}`}
          />
          {errors.phoneNumber && <p className="mt-1 text-sm text-red-500">{errors.phoneNumber}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium  text-gray-700">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#f15c22] focus:ring focus:ring-[#f15c22] focus:ring-opacity-50 ${errors.email ? 'border-red-500' : ''}`}
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Notes</label>
          <textarea
            id="notes"
            name="notes"
            value={form.notes}
            onChange={handleChange}
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#f15c22] focus:ring focus:ring-[#f15c22] focus:ring-opacity-50"
          ></textarea>
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f15c22]"
          >
            <X className="h-5 w-5 mr-2 inline" />
            Cancel
          </button>
          <div>
            <button
              type="button"
              onClick={handleAddAnother}
              className="mr-2 px-4 py-2 border border-[#f15c22] rounded-md text-sm font-medium text-[#f15c22] hover:bg-[#f15c22] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f15c22]"
            >
              <Plus className="h-5 w-5 mr-2 inline" />
              Add Another
            </button>
            <button
              type="submit"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#f15c22] hover:bg-[#d94d1a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f15c22]"
            >
              <Save className="h-5 w-5 mr-2 inline" />
              Save Contact
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}