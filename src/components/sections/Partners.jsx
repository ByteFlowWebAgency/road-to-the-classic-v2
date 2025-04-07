import Image from "next/image"

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
  }
];

export function Partners() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#1a237e] mb-12">Our Partners</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partnerLogos.map((partner, index) => (
            <a 
              key={index}
              href={partner.href}
              className="group relative aspect-square bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex items-center justify-center p-4"
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
      </div>
    </section>
  )
} 