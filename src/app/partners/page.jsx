<<<<<<< HEAD
import { Partners } from "@/components/sections/Partners"
=======
import { Partners } from "@/components/sections/Partners";
>>>>>>> bf8f4a521af6c81923acab65eac6e2328b1e346f

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
<<<<<<< HEAD
      <div className="text-center bg-[#1a237e] p-6">        
        <h1 className="text-3xl font-bold text-center text-white mb-6">Our Partners & Sponsors</h1>
        <p className="text-white text-center mb-6 leading-relaxed">
          We are grateful to our partners who make our mission possible. Their support enables us to create lasting impact in our community.
        </p>
      </div>
=======
      <section className="relative h-[500px] w-full overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            src="/images/Playing with blocks-1.mp4"
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Our Partners & Sponsors
            </h1>
            {/* <p className="text-2xl md:text-3xl font-light text-white mb-8 leading-tight"> */}
            <p className="text-xl text-white/90 leading-relaxed">
              We are grateful to our partners who make our mission possible.
              Their support enables us to create lasting impact in our
              community.
            </p>
          </div>
        </div>
      </section>
>>>>>>> bf8f4a521af6c81923acab65eac6e2328b1e346f

      {/* Partners Section */}
      <Partners />

      {/* Partnership Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
<<<<<<< HEAD
          <h2 className="text-3xl font-bold text-center text-[#1a237e] mb-12">Partnership Benefits</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#1a237e] mb-4">Community Impact</h3>
              <p className="text-gray-600">
                Make a meaningful difference in the lives of youth and contribute to educational excellence.
=======
          <h2 className="text-3xl font-bold text-center text-[#1a237e] mb-12">
            Partnership Benefits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#1a237e] mb-4">
                Community Impact
              </h3>
              <p className="text-gray-600">
                Make a meaningful difference in the lives of youth and
                contribute to educational excellence.
>>>>>>> bf8f4a521af6c81923acab65eac6e2328b1e346f
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
<<<<<<< HEAD
              <h3 className="text-xl font-semibold text-[#1a237e] mb-4">Brand Visibility</h3>
              <p className="text-gray-600">
                Gain exposure through our events, website, and promotional materials.
=======
              <h3 className="text-xl font-semibold text-[#1a237e] mb-4">
                Brand Visibility
              </h3>
              <p className="text-gray-600">
                Gain exposure through our events, website, and promotional
                materials.
>>>>>>> bf8f4a521af6c81923acab65eac6e2328b1e346f
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
<<<<<<< HEAD
              <h3 className="text-xl font-semibold text-[#1a237e] mb-4">Network Access</h3>
              <p className="text-gray-600">
                Connect with other community leaders and organizations sharing similar values.
=======
              <h3 className="text-xl font-semibold text-[#1a237e] mb-4">
                Network Access
              </h3>
              <p className="text-gray-600">
                Connect with other community leaders and organizations sharing
                similar values.
>>>>>>> bf8f4a521af6c81923acab65eac6e2328b1e346f
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="bg-[#1a237e] py-16">
        <div className="container mx-auto px-6 text-center">
<<<<<<< HEAD
          <h2 className="text-3xl font-bold text-white mb-6">Become a Partner</h2>
          <p className="text-white mb-8 max-w-2xl mx-auto">
            Join our mission to empower youth through education and HBCU awareness. Together, we can make a lasting difference.
=======
          <h2 className="text-3xl font-bold text-white mb-6">
            Become a Partner
          </h2>
          <p className="text-white mb-8 max-w-2xl mx-auto">
            Join our mission to empower youth through education and HBCU
            awareness. Together, we can make a lasting difference.
>>>>>>> bf8f4a521af6c81923acab65eac6e2328b1e346f
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
<<<<<<< HEAD
  )
} 
=======
  );
}
>>>>>>> bf8f4a521af6c81923acab65eac6e2328b1e346f
