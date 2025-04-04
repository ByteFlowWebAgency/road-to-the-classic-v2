"use client"

import { useState, useMemo } from "react"
import { EventCard } from "@/components/ui/EventCard"
import { events } from "@/data/events"

// Helper function to extract month from date string
const getMonth = (dateStr) => {
  const monthMatch = dateStr.match(/(January|February|March|April|May|June|July|August|September|October|November|December)/i)
  return monthMatch ? monthMatch[0].toLowerCase() : ""
}

export function EventsList() {
  const [activeFilter, setActiveFilter] = useState("all")
  
  // Get unique months from events
  const months = useMemo(() => {
    const uniqueMonths = new Set()
    
    events.forEach(event => {
      const month = getMonth(event.date)
      if (month) uniqueMonths.add(month)
    })
    
    return Array.from(uniqueMonths).sort((a, b) => {
      const monthOrder = {
        "january": 1, "february": 2, "march": 3, "april": 4, 
        "may": 5, "june": 6, "july": 7, "august": 8, 
        "september": 9, "october": 10, "november": 11, "december": 12
      }
      return monthOrder[a] - monthOrder[b]
    })
  }, [])
  
  // Filter and sort events
  const filteredEvents = useMemo(() => {
    let filtered = [...events]
    
    // Apply month filter
    if (activeFilter !== "all") {
      filtered = filtered.filter(event => {
        const month = getMonth(event.date)
        return month.toLowerCase() === activeFilter.toLowerCase()
      })
    }
    
    // Sort by date
    return filtered.sort((a, b) => {
      const dateA = new Date(a.date.split(',')[0].replace(/(.*?)\s*(\d+).*/, '$2 $1 2023'))
      const dateB = new Date(b.date.split(',')[0].replace(/(.*?)\s*(\d+).*/, '$2 $1 2023'))
      return dateA - dateB
    })
  }, [activeFilter])

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-2 text-center text-[#1a237e]">Upcoming Events</h2>
        <p className="text-lg text-gray-600 text-center mb-8">
          Join us for these exciting Road to the Classic events
        </p>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === "all" 
              ? "bg-[#1a237e] text-white" 
              : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            All Events
          </button>
          
          {months.map(month => (
            <button
              key={month}
              onClick={() => setActiveFilter(month)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === month 
                ? "bg-[#1a237e] text-white" 
                : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {month.charAt(0).toUpperCase() + month.slice(1)}
            </button>
          ))}
        </div>

        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">No events found for this filter.</p>
          </div>
        )}
      </div>
    </section>
  )
} 