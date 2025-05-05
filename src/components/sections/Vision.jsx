import Image from 'next/image';
import { events } from '@/data/events';
import { EventCard } from '@/components/ui/EventCard';

// Helper function to extract date object from date string
const getEventDate = (dateStr) => {
  // Handle date ranges (e.g., "August 12-14, 2023")
  const dateRangeMatch = dateStr.match(/(\w+)\s+(\d+)(?:-\d+)?(?:,\s*(\d{4}))?/);
  if (!dateRangeMatch) return null;
  
  const [_, month, day, yearStr] = dateRangeMatch;
  const year = yearStr ? parseInt(yearStr) : 2025; // Default to 2025 if year not specified
  
  const monthMap = {
    "January": 0, "February": 1, "March": 2, "April": 3, 
    "May": 4, "June": 5, "July": 6, "August": 7, 
    "September": 8, "October": 9, "November": 10, "December": 11
  };
  
  return new Date(year, monthMap[month], parseInt(day));
};

// Format date for display
const formatEventDate = (dateStr) => {
  const date = getEventDate(dateStr);
  if (!date) return dateStr;

  // Check if it's a date range
  if (dateStr.includes("-")) {
    return dateStr; // Keep original format for ranges
  }

  // Format single dates
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
};

// Get upcoming events
const getUpcomingEvents = () => {
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0); // Normalize to start of day

  return events
    .filter(event => {
      const eventDate = getEventDate(event.date);
      if (!eventDate) return false;
      return eventDate >= currentDate;
    })
    .sort((a, b) => {
      const dateA = getEventDate(a.date);
      const dateB = getEventDate(b.date);
      return dateA - dateB;
    })
    .slice(0, 6); // Show next 6 upcoming events
};

const visionItems = [
  {
    title: 'UNITY',
    description: 'Building unity and collective work and responsibility to solve our own problems.',
    image: '/images/IMG_5015.jpg'
  },
  {
    title: 'SELF-DETERMINATION',
    description: 'Defining, naming, and creating for ourselves through education and experience.',
    image: '/images/IMG_5066.jpg'
  },
  {
    title: 'WORK & RESPONSIBILITY',
    description: 'Instilling the value of hard work, discipline, and responsibility in our youth.',
    image: '/images/IMG_5651.jpg'
  },
  {
    title: 'COOPERATIVE ECONOMICS',
    description: 'Building and maintaining our own businesses and institutions within our community.',
    image: '/images/IMG_2242.jpg'
  }
];

export function Vision() {
  const upcomingEvents = getUpcomingEvents();

  return (
    <div className="relative">
      {/* Vision Section */}
      <section className="py-20 bg-[#1a237e]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            OUR VISION
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {visionItems.map((item, index) => (
              <div key={index} className="relative rounded-lg overflow-hidden">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  {/* Dark gradient overlay at bottom for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Text container at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/80 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section with Arc Design */}
      <section className="relative bg-[#1a237e]">
        {/* Events Container - Added z-index to ensure content stays above the arc */}
        <div className="container mx-auto px-4 pb-32 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">UPCOMING EVENTS</h2>
            <p className="text-white/80">
              Join us for these exciting opportunities to learn, grow, and connect with the HBCU community.
            </p>
          </div>
          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="bg-white rounded-lg relative z-20">
                  <EventCard event={event} noShadow />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-white/70">
              <p>No upcoming events scheduled at this time. Please check back later!</p>
            </div>
          )}
        </div>
        
        {/* Arc Design - Moved below content and adjusted z-index */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden z-0" style={{ height: '15vw' }}>
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute bottom-0 w-full h-full"
            style={{ transform: 'scale(1.5, 1)' }}
          >
            <path
              d="M0,100 C30,90 70,90 100,100 L100,100 L0,100 Z"
              fill="white"
            />
          </svg>
        </div>
      </section>
    </div>
  );
} 