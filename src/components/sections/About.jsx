import Image from "next/image"

export function About() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-gray-700 mb-6">
              Road to the Classic is a Coalition built on collaborative partnerships with Non-Profits with joint
              missions to establish programming to enhance educational experiences by pairing with hands-on
              experiences by participating in strategically planned events and activities based on scholastic
              subject matter.
            </p>
          </div>
          <div className="order-first lg:order-last">
            <Image
              src="/images/IMG_5015.jpg"
              alt="Student with mascot"
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