"use client"

import { useState } from 'react'

export function EventsContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventInterest: '',
    message: ''
  })
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false
  })
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Simulate form submission
    try {
      console.log('Form data submitted:', formData)
      setFormStatus({
        submitted: true,
        error: false
      })
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventInterest: '',
        message: ''
      })
    } catch (error) {
      console.error('Error submitting form:', error)
      setFormStatus({
        submitted: false,
        error: true
      })
    }
  }
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center text-[#1a237e]">Interested in an Event?</h2>
          <p className="text-lg text-gray-600 text-center mb-8">
            Fill out this form and we'll contact you with more information
          </p>
          
          {formStatus.submitted ? (
            <div className="bg-green-50 p-6 rounded-lg border border-green-200 text-center">
              <h3 className="text-xl font-semibold text-green-800 mb-2">Thank You!</h3>
              <p className="text-green-700">
                Your inquiry has been submitted. We'll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="eventInterest" className="block text-sm font-medium text-gray-700 mb-1">
                    Event of Interest
                  </label>
                  <select
                    id="eventInterest"
                    name="eventInterest"
                    value={formData.eventInterest}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select an event</option>
                    <option value="Youth Entrepreneur Expo">Youth Entrepreneur Expo</option>
                    <option value="Cheer & Dance Competition">Cheer & Dance Competition</option>
                    <option value="Youth Football Tournament">Youth Football Tournament</option>
                    <option value="STEAM Fair">STEAM Fair</option>
                    <option value="Spelling Bee">Spelling Bee</option>
                    <option value="Other">Other (please specify)</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Let us know any specific questions or information you need..."
                ></textarea>
              </div>
              
              {formStatus.error && (
                <div className="bg-red-50 p-4 rounded-md border border-red-200 text-red-700">
                  There was an error submitting your form. Please try again.
                </div>
              )}
              
              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#1a237e] text-white rounded-md hover:bg-[#303f9f] transition-colors font-medium"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
} 