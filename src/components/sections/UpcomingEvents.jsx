import { events } from "@/data/events"
import { EventCard } from "@/components/ui/EventCard"
import { Heading2 } from "@/components/ui"

export function UpcomingEvents({ 
  limit = 3, 
  showViewAll = true,
  title = "Upcoming Events",
  description = "Join us for these exciting Road to the Classic events",
  background = "gray-50",
  customEvents = null,
  titleColor = "primary"
}) {
  // Use custom events if provided, otherwise use default events
  const upcomingEvents = customEvents ? customEvents.slice(0, limit) : events.slice(0, limit)

  return (
    <section className={`py-12 ${background.startsWith("[") ? `bg-${background}` : `bg-${background}`}`}>
      <div className="container mx-auto px-4 md:px-16">
        <Heading2 color={titleColor} className="text-4xl font-bold text-center mb-8">{title}</Heading2>
        {description && (
          <p className="text-lg text-gray-600 text-center mb-8">
            {description}
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map((event, index) => (
            <EventCard key={event.id || index} event={event} />
          ))}
        </div>

        {showViewAll && (
          <div className="text-center mt-8">
            <a
              href="/events"
              className="inline-block px-6 py-3 bg-[#1a237e] text-white rounded-lg hover:bg-[#283593] transition-colors text-lg font-medium"
            >
              View All Events
            </a>
          </div>
        )}
      </div>
    </section>
  )
} 