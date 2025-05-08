import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const corePrinciplesItems = [
  {
    title: "Unity",
    description:
      "Celebrate cultural diversity and history through shared experiences.",
  },
  {
    title: "Self-Determination",
    description:
      "Empower students to pursue education and goals through mentorship.",
  },
  {
    title: "Collective Work & Responsibility",
    description:
      "Build stronger communities across discipline and entrepreneurship.",
  },
  {
    title: "Purpose",
    description:
      "Guide youth to discover their unique talents and contributions.",
  },
  {
    title: "Creativity",
    description: "Foster innovation and artistic expression in all endeavors.",
  },
  {
    title: "Faith",
    description: "Encourage self-actualization and belief in one's potential.",
  },
];

export function About() {
  return (
    <section className="pt-0 py-16 bg-white">
      {/* Our Mission & Our Vision Section*/}
      <div className="container mx-auto px-6 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-10">
            {/* Our Mission */}
            <div>
              <h2 className="text-3xl font-bold mb-4 text-[#1a237e]">
                Our Mission
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our mission is to increase the knowledge of the impact of
                Historically Black Colleges and Universities on the building of
                American society and the contributions of African Americans and
                people of color that have influenced America through their
                contributions to medicine, science, technology, innovation,
                engineering, sports, arts, buisiness, and literature.
              </p>
            </div>

            {/* Our Vision */}
            <div>
              <h2 className="text-3xl font-bold mb-4 text-[#1a237e]">
                Our Vision
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our vision is to increase the capacity of students that consider
                HBCU&apos;S as the first option for attendance therefore giving
                birth to future leaders and Hall of Famers who have graduate
                from these institutions.
              </p>
            </div>
          </div>

          <div className="order-first lg:order-last flex items-start ">
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden w-full h-[350px] ">
              <Image
                src="/images/IMG_4300.jpg"
                alt="Mission and Vision Image"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Who We Are Section*/}
      <div className="bg-gray-200 py-2 mt-5">
        <div className="container mx-auto px-6 mt-10">
          <h2 className="text-3xl font-bold my-5 text-[#1a237e] text-center">
            Who We Are
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center my-10">
            <div className="order-first lg:order-none ">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden w-full">
                <Image
                  src="/images/IMG_5159.jpg"
                  alt="Who We Are Image"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
            </div>

            <div className="space-y-5">
              <p className="text-gray-700 leading-relaxed">
                Road to the Classic is a Coalition built on collaborative
                partnerships with Non-Profits with joint missions to establish
                programming to enhance education by providing the youth with
                hands-on experiences by participating in strategically planned
                events and activities based on scholastic subject matter.
              </p>

              <p className="text-gray-700 leading-relaxed">
                These programs highlight history, social emotional learning,
                science, technology, engineering, media, performing arts,
                entrepreneurship, spirituality(self-actualization), and team
                building. Every program leads up to a celebration and expression
                of talent during the weeks leading up to the "HCBU Classic" game
                in the host city.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Core Principles Section */}
      <section className="relative bg-[#1a237e] py-16">
        <div className="container mx-auto px-4 pb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our Core Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {corePrinciplesItems.map((event, index) => (
              <div
                key={index}
                className="bg-white/5 p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-all cursor-pointer"
              >
                <h3 className="text-xl font-bold text-white mb-2">
                  {event.title}
                </h3>
                <p className="text-white/70 text-sm">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Mission Section */}
      <div className="container mx-auto px-6 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-[#1a237e]">
                Join Our Mission
              </h2>
              <p className="text-gray-700 leading-relaxed">
                By providing positive alternatives and using data driven and
                evidence-based prevention measures, we can decrease the amount
                of violence, alcohol and drug use as well as unhealthy behaviors
                that devalue the community.
              </p>
            </div>

            <div>
              <Link href="/contact">
                <Button
                  className="w-full sm:w-1/4 px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base md:px-8 md:py-4 "
                  variant="primary"
                >
                  Get Involved
                </Button>
              </Link>
            </div>
          </div>

          <div className="order-first lg:order-last flex items-start ">
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden w-full h-[350px] ">
              <Image
                src="/images/JOIN_OUR_MISSION.png"
                alt="Join Our Mission Image"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Partner Logos Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1a237e] mb-8">
            Our Partners
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Collaborating with leading organizations to create meaningful impact
            in our communities and empower the next generation of leaders.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
            {[
              { src: "/images/partner1.webp", alt: "Partner 1" },
              { src: "/images/partner2.jpeg", alt: "Partner 2" },
              { src: "/images/partner3.jpg", alt: "Partner 3" },
              { src: "/images/partner4.jpg", alt: "Partner 4" },
              { src: "/images/partner5.PNG", alt: "Partner 5" },
              { src: "/images/partner6.PNG", alt: "Partner 6" },
              { src: "/images/partner7.png", alt: "Partner 7" },
              {
                src: "/images/PARTNER BY DIVINE VISION.png",
                alt: "Partner Divine Vision",
              },
              {
                src: "/images/PARTNER GATE OF HEAVEN.png",
                alt: "Partner Gate of Heaven",
              },
              {
                src: "/images/PARTNER KEG GROUP.jpg",
                alt: "Partner KEG Group",
              },
            ].map((partner, index) => (
              <div
                key={index}
                className="relative w-full aspect-[3/2] max-w-[200px] transition-transform hover:scale-105"
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  fill
                  className="object-contain filter hover:brightness-110 transition-all duration-300"
                  sizes="(max-width: 768px) 40vw, (max-width: 1200px) 25vw, 20vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become A Sponsor Section */}
      <section className="relative bg-[#1a237e] py-16  mt-10 flex items-center justify-center text-white">
        <div className="container mx-auto px-4 flex flex-col items-center text-center space-y-10">
          <h2 className="text-3xl font-bold">Become A Sponsor</h2>

          <p className="max-w-2xl">
            Join our community of supporters and help us make a difference. Your
            sponsorship directly contributes to our mission.
          </p>

          <Link href="/contact">
            <Button
              className="px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base md:px-15 md:py-5 text-[#1a237e]"
              variant="outline"
            >
              Support Our Cause <span className="text-lg">&rarr;</span>
            </Button>
          </Link>
        </div>
      </section>
    </section>
  );
}
