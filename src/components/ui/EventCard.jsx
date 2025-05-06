import { Calendar, Clock, MapPin, User, Mail, Link as LinkIcon, Video } from "lucide-react";

// Helper function to extract day and month from date string
const extractDateParts = (dateStr) => {
  const dayMatch = dateStr.match(/\b(\d{1,2})\b/);
  const monthMatch = dateStr.match(/(January|February|March|April|May|June|July|August|September|October|November|December)/i);
  return {
    day: dayMatch ? dayMatch[0] : "",
    month: monthMatch ? monthMatch[0].slice(0, 3) : ""
  };
};

export function EventCard({ event, noShadow = false }) {
  const { title, date, time, location, host, contact, contactEmail, registrationLink, videoLink } = event;
  const { day, month } = extractDateParts(date);
  const isMultiDay = date.includes("-");

  return (
    <div className={`bg-white rounded-lg overflow-hidden border border-gray-100 ${noShadow ? '' : 'shadow-md hover:shadow-lg'} transition-shadow`}>
      <div className="flex p-6">
        {/* Date Display */}
        {!isMultiDay && day && month && (
          <div className="mr-4 flex-shrink-0 flex flex-col items-center justify-center bg-[#1a237e] text-white rounded-lg w-16 h-16">
            <span className="text-2xl font-bold">{day}</span>
            <span className="text-xs uppercase">{month}</span>
          </div>
        )}
        {/* Event Content */}
        <div className={`${isMultiDay ? 'w-full' : ''}`}>
          <h3 className="text-xl font-semibold text-[#1a237e] mb-3">{title}</h3>
          <div className="space-y-2 text-gray-600">
            {date && (
              <div className="flex items-start">
                <Calendar className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>{date}</span>
              </div>
            )}
            {time && (
              <div className="flex items-start">
                <Clock className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>{time}</span>
              </div>
            )}
            {location && (
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>{location}</span>
              </div>
            )}
            {host && (
              <div className="flex items-start">
                <User className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Host: {host}</span>
              </div>
            )}
            {contact && (
              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>
                  Contact: {contact}
                  {contactEmail && (
                    <a 
                      href={`mailto:${contactEmail}`}
                      className="ml-2 text-blue-600 hover:text-blue-800"
                    >
                      ({contactEmail})
                    </a>
                  )}
                </span>
              </div>
            )}
            <div className="flex flex-wrap gap-2 mt-4">
              {registrationLink && (
                <a
                  href={registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-[#1a237e] text-white rounded-md hover:bg-[#283593] transition-colors text-sm"
                >
                  <LinkIcon className="h-4 w-4 mr-2" />
                  Register Now
                </a>
              )}
              {videoLink && (
                <a
                  href={videoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors text-sm"
                >
                  <Video className="h-4 w-4 mr-2" />
                  Watch Video
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 