import Image from "next/image"
import { Button } from "@/components/ui/button"

const partnerLogos = [
  {
    src: '/images/PARTNER KEG GROUP.jpg',
    alt: 'KEG GROUP',
    href: '#'
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

export function Contact() {
  return (
    <section className="py-16 bg-white">
      {/* Hero Section */}
      <div className="text-center bg-[#1a237e] p-6">        
        <h2 className="text-3xl font-bold text-center text-white mb-6">Contact Us</h2>
        <p className="text-white text-center mb-6 leading-relaxed">
          Get in touch with us and discover how we can work together to make a difference.
        </p>
      </div>

      {/* Partners Section */}
      <div className="container mx-auto px-6 py-16">
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

      {/* Contact Form Section */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#1a237e] mb-4">Get In Touch</h3>
              <p className="text-gray-600">
                We&apos;d love to hear from you. Please fill out the form or contact us using the information below.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-[#1a237e]">Address</h4>
                <p className="text-gray-600">123 Classic Drive, Suite 100<br />Atlanta, GA 30303</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-[#1a237e]">Phone</h4>
                <p className="text-gray-600">+1 (404) 555-0123</p>
              </div>

              <div>
                <h4 className="font-semibold text-[#1a237e]">Email</h4>
                <p className="text-gray-600">info@roadtotheclassic.org</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6 bg-gray-50 p-8 rounded-lg">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1a237e] focus:border-[#1a237e]"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1a237e] focus:border-[#1a237e]"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1a237e] focus:border-[#1a237e]"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1a237e] focus:border-[#1a237e]"
                required
              ></textarea>
            </div>

            <Button type="submit" variant="primary" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
} 