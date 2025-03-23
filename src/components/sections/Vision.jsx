import Image from 'next/image';

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

const eventItems = [
  { title: 'EVENT 1', description: 'This is a description for an upcoming event that will highlight a link to the details' },
  { title: 'EVENT 1', description: 'This is a description for an upcoming event that will highlight a link to the details' },
  { title: 'EVENT 1', description: 'This is a description for an upcoming event that will highlight a link to the details' },
  { title: 'EVENT 1', description: 'This is a description for an upcoming event that will highlight a link to the details' },
  { title: 'EVENT 1', description: 'This is a description for an upcoming event that will highlight a link to the details' },
  { title: 'EVENT 1', description: 'This is a description for an upcoming event that will highlight a link to the details' },
];

export function Vision() {
  return (
    <div className="relative">
      {/* Vision Section */}
      <section className="py-20 bg-[#1e3a8a]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            OUR VISION
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {visionItems.map((item, index) => (
              <div key={index} className="flex flex-col">
                <div className="aspect-w-16 aspect-h-9 mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section with Arc Design */}
      <section className="relative bg-[#1e3a8a]">
        <div className="container mx-auto px-4 pb-32">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">UPCOMING EVENTS</h2>
            <p className="text-white/80">
              Join us for these exciting opportunities to learn, grow, and connect with the HBCU community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventItems.map((event, index) => (
              <div
                key={index}
                className="bg-white/5 p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-all cursor-pointer"
              >
                <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                <p className="text-white/70 text-sm">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Arc Design */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden" style={{ height: '15vw' }}>
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