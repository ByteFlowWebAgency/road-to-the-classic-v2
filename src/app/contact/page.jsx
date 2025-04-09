'use client';
import { Button } from "@/components/ui/button"
import { Partners } from "@/components/sections/Partners"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const impactImages = [
  {
    src: '/images/IMG_6388.jpg',
    alt: 'Students engaging in educational activities',
    caption: 'Transform a student&apos;s future: Your support helped 500+ youth access life-changing educational programs last year'
  },
  {
    src: '/images/IMG_6387.jpg',
    alt: 'Community mentorship program',
    caption: '92% of our mentored students achieve their academic goals. Be the mentor they&apos;ll remember forever'
  },
  {
    src: '/images/IMG_5781.jpg',
    alt: 'Cultural celebration event',
    caption: 'Your donation amplifies diverse voices: 1000+ students discovered their heritage through our cultural programs'
  },
  {
    src: '/images/IMG_5142.jpg',
    alt: 'STEM education workshop',
    caption: 'Build tomorrow&apos;s innovators: 78% of our STEM students pursue technology careers. Your support makes it possible'
  },
  {
    src: '/images/IMG_2729.jpg',
    alt: 'Youth leadership program',
    caption: 'Empower future leaders: 200+ students developed crucial leadership skills through your generous support'
  },
  {
    src: '/images/IMG_2049.jpeg',
    alt: 'Arts and creativity session',
    caption: 'Unleash creative potential: Your gift gives 300+ young artists the tools to express their unique voices'
  },
  {
    src: '/images/IMG_2048.jpeg',
    alt: 'Community outreach event',
    caption: 'Create lasting change: Every $100 provides a month of transformative programs for an aspiring student'
  },
  {
    src: '/images/IMG_2047.jpeg',
    alt: 'Student achievement celebration',
    caption: '100% of your donation goes directly to student success. Join us in celebrating their achievements'
  }
];

export default function ContactPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % impactImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + impactImages.length) % impactImages.length);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="text-center bg-[#1a237e] p-6">        
        <h1 className="text-3xl font-bold text-center text-white mb-6">Contact Us</h1>
        <p className="text-white text-center mb-6 leading-relaxed">
          Get in touch with us and discover how we can work together to make a difference.
        </p>
      </div>

      {/* Partners Section */}
      <div className="bg-gray-50">
        <Partners />
      </div>

      {/* Your Impact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#1a237e] mb-6">Your Impact</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Every contribution makes a difference in our community. Your support helps us create lasting change
            through education, mentorship, and youth development programs.
          </p>

          {/* Impact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="text-4xl font-bold text-[#1a237e] mb-2">5,000+</h3>
              <p className="text-gray-600">Students Impacted</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="text-4xl font-bold text-[#1a237e] mb-2">100%</h3>
              <p className="text-gray-600">Funds to Programs</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="text-4xl font-bold text-[#1a237e] mb-2">20+</h3>
              <p className="text-gray-600">Community Partners</p>
            </div>
          </div>

          {/* Featured Impact Carousel */}
          <div className="mb-16">
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
              {/* Main Carousel Image */}
              <div className="relative h-full w-full">
                <Image
                  src={impactImages[currentSlide].src}
                  alt={impactImages[currentSlide].alt}
                  fill
                  className="object-cover transition-opacity duration-500"
                  priority
                />
                {/* Caption Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white text-lg md:text-xl text-center">
                    {impactImages[currentSlide].caption}
                  </p>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full backdrop-blur-sm transition-all"
                aria-label="Previous slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full backdrop-blur-sm transition-all"
                aria-label="Next slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Thumbnail Navigation */}
            <div className="grid grid-cols-4 gap-2 mt-4">
              {impactImages.slice(0, 4).map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`relative aspect-[16/9] rounded-lg overflow-hidden ${
                    currentSlide === index ? 'ring-2 ring-[#1a237e]' : ''
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 25vw, 20vw"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Video Section */}
          <div className="relative rounded-xl overflow-hidden mb-16">
            <video
              className="w-full aspect-video"
              controls
              preload="metadata"
            >
              <source src="/images/Dance Class-1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Get Involved Section - Replacing previous CTA */}
          <div className="text-center bg-[#1a237e] p-12 rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-4">Join Our Mission</h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Your time and expertise can transform a student&apos;s future. Whether through mentorship,
              volunteering at events, or sharing your professional experience, you can make a lasting
              impact in our community.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 p-6 rounded-lg">
                <h4 className="text-white font-semibold mb-2">Become a Mentor</h4>
                <p className="text-white/80 text-sm">
                  Share your knowledge and experience with students who need your guidance.
                </p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h4 className="text-white font-semibold mb-2">Volunteer at Events</h4>
                <p className="text-white/80 text-sm">
                  Help organize and support our educational and cultural programs.
                </p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h4 className="text-white font-semibold mb-2">Share Your Expertise</h4>
                <p className="text-white/80 text-sm">
                  Lead workshops or speak about your career path to inspire students.
                </p>
              </div>
            </div>
            <Link href="#"> {/* TODO: Add donate link */}
              <Button 
                variant="outline"
                className="bg-white text-[#1a237e] hover:bg-gray-100 px-8 py-3 hover:text-[#1a237e]"
               
              >
                Give Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <div id="contact-form" className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[#1a237e] mb-4">Get In Touch</h2>
              <p className="text-gray-600">
                We&apos;d love to hear from you. Please fill out the form or contact us using the information below.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-[#1a237e]">Address</h3>
                <p className="text-gray-600">PO Box 6005<br />Akron, OH 44312</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#1a237e]">Phone</h3>
                <p className="text-gray-600">+1 (330) 906-9736</p>
              </div>

              <div>
                <h3 className="font-semibold text-[#1a237e]">Email</h3>
                <p className="text-gray-600">mbentley@roadtoclassic.org</p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-4">
              <h3 className="font-semibold text-[#1a237e] mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-[#1a237e]">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/roadtotheclassic25?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className="text-gray-600 hover:text-[#1a237e]">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-[#1a237e]">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
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

    </main>
  )
} 