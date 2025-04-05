"use client"

import { useState } from "react"
import { events } from "@/data/events"
import { Calendar } from "lucide-react"

// Helper function to extract date object from date string
const getEventDate = (dateStr) => {
  const dateMatch = dateStr.match(/(\w+)\s+(\d+)/)
  if (!dateMatch) return null
  
  const [_, month, day] = dateMatch
  const monthMap = {
    "January": 0, "February": 1, "March": 2, "April": 3, 
    "May": 4, "June": 5, "July": 6, "August": 7, 
    "September": 8, "October": 9, "November": 10, "December": 11
  }
  
  // Default to 2023 as mentioned in the data
    return new Date(2025, monthMap[month], parseInt(day))
}

// Helper to check if an event falls on a specific day
const eventOnDay = (event, date) => {
  // For multi-day events
  if (event.date.includes("-")) {
    const dateRangeMatch = event.date.match(/(\w+)\s+(\d+).*?(\w+)\s+(\d+)/)
    if (!dateRangeMatch) return false
    
    const [_, startMonth, startDay, endMonth, endDay] = dateRangeMatch
    const monthMap = {
      "January": 0, "February": 1, "March": 2, "April": 3, 
      "May": 4, "June": 5, "July": 6, "August": 7, 
      "September": 8, "October": 9, "November": 10, "December": 11
    }
    
    const startDate = new Date(2023, monthMap[startMonth], parseInt(startDay))
    const endDate = new Date(2023, monthMap[endMonth] || monthMap[startMonth], parseInt(endDay))
    
    return date >= startDate && date <= endDate
  }
  
  // For single day events
  const eventDate = getEventDate(event.date)
  if (!eventDate) return false
  
  return eventDate.getDate() === date.getDate() && 
         eventDate.getMonth() === date.getMonth()
}

export function EventsCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
  const [currentYear] = useState(2025) // Using 2023 as the default year
  
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]
  
  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate()
  }
  
  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay()
  }
  
  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear)
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear)
    const days = []
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-24 border border-gray-100"></div>)
    }
    
    // Add calendar days
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentYear, currentMonth, day)
      const dayEvents = events.filter(event => eventOnDay(event, date))
      
      days.push(
        <div key={`day-${day}`} className="h-24 border border-gray-100 p-1 overflow-hidden">
          <div className={`text-sm font-medium ${dayEvents.length > 0 ? 'bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center' : ''}`}>
            {day}
          </div>
          
          {dayEvents.length > 0 && (
            <div className="mt-1">
              {dayEvents.slice(0, 2).map((event, idx) => (
                <div key={idx} className="text-xs bg-blue-50 text-blue-800 p-1 mb-1 rounded truncate">
                  {event.title.split(' ').slice(0, 3).join(' ')}...
                </div>
              ))}
              {dayEvents.length > 2 && (
                <div className="text-xs text-blue-600 font-medium">
                  +{dayEvents.length - 2} more
                </div>
              )}
            </div>
          )}
        </div>
      )
    }
    
    return days
  }
  
  const handlePrevMonth = () => {
    setCurrentMonth(prev => (prev === 0 ? 11 : prev - 1))
  }
  
  const handleNextMonth = () => {
    setCurrentMonth(prev => (prev === 11 ? 0 : prev + 1))
  }
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-[#1a237e]">Events Calendar</h2>
          <div className="flex items-center">
            <Calendar className="h-6 w-6 mr-2 text-blue-600" />
            <span className="text-gray-700">2023</span>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
          {/* Calendar Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <button 
              onClick={handlePrevMonth}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              &lt;
            </button>
            <h3 className="text-xl font-medium">
              {months[currentMonth]} {currentYear}
            </h3>
            <button 
              onClick={handleNextMonth}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              &gt;
            </button>
          </div>
          
          {/* Days of Week */}
          <div className="grid grid-cols-7 border-b border-gray-200">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="py-2 text-center text-sm font-medium text-gray-700">
                {day}
              </div>
            ))}
          </div>
          
          {/* Calendar Grid */}
          <div className="grid grid-cols-7">
            {renderCalendar()}
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Click on an event in the calendar to view details or use the events listing below
            for more comprehensive information.
          </p>
        </div>
      </div>
    </section>
  )
} 