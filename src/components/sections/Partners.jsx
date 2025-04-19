'use client';

import Image from "next/image"
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

const partnerLogos = [
  {
    src: '/images/PARTNER KEG GROUP.jpg',
    alt: 'KEG GROUP',
    href: 'https://www.keggroup.org/'
  },
  {
    src: '/images/PARTNER GATE OF HEAVEN.png',
    alt: 'Gate of Heaven',
    href: '#'
  },
  {
    src: '/images/PARTNER BY DIVINE VISION.png',
    alt: 'By Divine Vision',
    href: '#'
  },
  {
    src: '/images/ROO STOMPS 2.png',
    alt: 'ROO STOMPS',
    href: '#'
  },
  {
    src: '/images/partner1.webp',
    alt: 'Partner 1',
    href: '#'
  },
  {
    src: '/images/partner2.jpeg',
    alt: 'Partner 2',
    href: '#'
  },
  {
    src: '/images/partner3.jpg',
    alt: 'Partner 3',
    href: '#'
  },
  {
    src: '/images/partner4.jpg',
    alt: 'Partner 4',
    href: '#'
  },
  {
    src: '/images/partner5.PNG',
    alt: 'Partner 5',
    href: '#'
  },
  {
    src: '/images/partner6.PNG',
    alt: 'Partner 6',
    href: '#'
  },
  {
    src: '/images/partner7.png',
    alt: 'Partner 7',
    href: '#'
  },
  {
    src: '/images/partner8.webp',
    alt: 'Partner 8',
    href: '#'
  }
];

export function Partners() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % partnerLogos.length);
      }, 3000); // Change slide every 3 seconds
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? partnerLogos.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % partnerLogos.length
    );
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Calculate visible partners (show 4 at a time)
  const getVisiblePartners = () => {
    const visiblePartners = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % partnerLogos.length;
      visiblePartners.push(partnerLogos[index]);
    }
    return visiblePartners;
  };

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#1a237e] mb-12">Our Partners</h2>
        
        {/* Carousel Container */}
        <div className="relative">
          {/* Previous Button */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white/80 hover:bg-white text-[#1a237e] p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Previous partners"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Partners Grid with Animation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-transform duration-1000 ease-in-out">
            {getVisiblePartners().map((partner, index) => (
              <a 
                key={`${partner.src}-${index}`}
                href={partner.href}
                className="group relative aspect-square bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center p-4"
                style={{
                  opacity: 1,
                  transform: 'translateX(0)',
                  transition: 'all 0.5s ease-in-out'
                }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
              </a>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white/80 hover:bg-white text-[#1a237e] p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Next partners"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Controls and Navigation */}
          <div className="mt-8 flex flex-col items-center gap-4">
            {/* Play/Pause Button */}
            <button
              onClick={togglePlayPause}
              className="flex items-center gap-2 text-[#1a237e] hover:bg-[#1a237e]/10 px-4 py-2 rounded-full transition-colors"
              aria-label={isPlaying ? "Pause autoplay" : "Play autoplay"}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-4 h-4" />
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  <span>Play</span>
                </>
              )}
            </button>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2">
              {partnerLogos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    Math.floor(currentIndex) === index 
                      ? 'bg-[#1a237e] w-4' 
                      : 'bg-gray-300 hover:bg-[#1a237e]/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add CSS animation keyframes */}
      <style jsx global>{`
        @keyframes slideLeft {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(-100%);
            opacity: 0;
          }
        }

        @keyframes slideRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .partner-slide-enter {
          animation: slideRight 0.5s forwards;
        }

        .partner-slide-exit {
          animation: slideLeft 0.5s forwards;
        }
      `}</style>
    </section>
  );
} 