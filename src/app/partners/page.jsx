import { Partners } from "@/components/sections/Partners"

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="text-center bg-[#1a237e] p-6">        
        <h1 className="text-3xl font-bold text-center text-white mb-6">Our Partners & Sponsors</h1>
        <p className="text-white text-center mb-6 leading-relaxed">
          We are grateful to our partners who make our mission possible. Their support enables us to create lasting impact in our community.
        </p>
      </div>

      {/* Partners Section */}
      <Partners />

      {/* Partnership Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#1a237e] mb-12">Partnership Benefits</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#1a237e] mb-4">Community Impact</h3>
              <p className="text-gray-600">
                Make a meaningful difference in the lives of youth and contribute to educational excellence.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#1a237e] mb-4">Brand Visibility</h3>
              <p className="text-gray-600">
                Gain exposure through our events, website, and promotional materials.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#1a237e] mb-4">Network Access</h3>
              <p className="text-gray-600">
                Connect with other community leaders and organizations sharing similar values.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="bg-[#1a237e] py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Become a Partner</h2>
          <p className="text-white mb-8 max-w-2xl mx-auto">
            Join our mission to empower youth through education and HBCU awareness. Together, we can make a lasting difference.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#1a237e] px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </main>
  )
} 