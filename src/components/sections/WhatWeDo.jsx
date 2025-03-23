import Image from "next/image"

export function WhatWeDo() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-[#1a237e]">What We Do</h2>
            <p className="text-gray-700 mb-6">
              Road to the Classic is a coalition partnering with non-profits to create educational programs that
              provide hands-on experiences for youth. Our initiatives focus on education, cultural actualization,
              and team building. Each initiative culminates in a showcase of talent leading up to the Classic game
              in the host city.
            </p>
          </div>
          <div>
            <Image
              src="/images/IMG_5066.jpg"
              alt="Youth community service"
              width={500}
              height={400}
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
} 