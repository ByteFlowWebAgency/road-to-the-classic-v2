import Image from "next/image"

export function About() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#1a237e]">EMPOWERING YOUTH</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Road to the Classic is a Coalition built on collaborative partnerships with Non-Profits with joint
              missions to establish programming to enhance educational experiences by pairing with hands-on
              experiences by participating in strategically planned events and activities based on scholastic
              subject matter.
            </p>
          </div>
          <div className="order-first lg:order-last">
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
              <Image
                src="/images/IMG_5015.jpg"
                alt="Student with mascot"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 