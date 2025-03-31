import Image from "next/image"
import { Heading2 } from "../ui"

const corePrinciplesItems = [
  {
    title: 'Unity',
    description: 'Celebrate cultural diversity and history through shared experiences.',
  },
  {
    title: 'Self-Determination',
    description: 'Empower students to pursue education and goals through mentorship.',
  },
  {
    title: 'Collective Work & Responsibility',
    description: 'Build stronger communities across discipline and entrepreneurship.',
  },
  {
    title: 'Cooperative Economics',
    description: 'Develop financial literacy and business skills for future success.',
  },
  {
    title: 'Purpose',
    description: 'Guide youth to discover their unique talents and contributions.',
  },
  {
    title: 'Creativity',
    description: 'Foster innovation and artistic expression in all endeavors.',
  },
  {
    title: 'Faith',
    description: 'Encourage self-actualization and belief in one\'s potential.',
  },
  {
    title: 'Prevention Measures',
    description: 'Provide positive alternatives to decrease violence and unhealthy behaviors.',
  },
];




export function About() {
  return (
    <section className="pt-0 py-16 bg-white">

      {/* About Us Section */}
      <div className="text-center bg-[#1a237e]  p-6 m-0">        
        <h2 className="text-3xl font-bold text-center text-white mb-6">ABOUT US</h2>
        <p className="text-white text-center mb-6 leading-relaxed">
            Learn about our mission, vision, and the core principles that 
            drive our work to empower youth through education and HBCU awareness.
        </p>

      </div> 

      {/* Our Mission & Our Vision Section*/}
      <div className="container mx-auto px-6 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          <div className="space-y-10">

            {/* Our Mission */}
            <div>
              <h2 className="text-3xl font-bold mb-4 text-[#1a237e]">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                Our mission is to increase the knowledge of the impact of Historically Black Colleges and Universities
                on the building of American society and the contributions of African Americans and people of color that
                have influenced America through their contributions to medicine, science, technology, innovation,
                engineering, sports, arts, buisiness, and literature. 
              </p>
            </div>

            {/* Our Vision */}
            <div>
              <h2 className="text-3xl font-bold mb-4 text-[#1a237e]">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                Our vision is to increase the capacity of students that consider HBCU'S as the first option for attendance
                therefore giving birth to future leaders and Hall of Famers who have graduate from these institutions.
              </p>
            </div>


          </div>


          <div className="order-first lg:order-last flex items-start ">
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden w-full h-[350px] ">
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



      {/* Who We Are Section*/}
      <div className="bg-gray-200 py-2 mt-5">

        <div className="container mx-auto px-6 mt-10">

          <h2 className="text-3xl font-bold my-5 text-[#1a237e] text-center">Who We Are</h2>
            
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center my-10">
            
            <div className="order-first lg:order-none ">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden w-full">
                <Image
                  src="/images/IMG_5015.jpg"
                  alt="Who We Are Image"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
            </div>

            <div className="space-y-5">
        
                <p className="text-gray-700 leading-relaxed">
                  Road to the Classic is a Coalition built on collaborative partnerships with Non-Profits with joint missions
                  to establish programming to enhance education by providing the youth with hands-on experiences by 
                  participating in strategically planned events and activities based on scholastic subject matter.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  These programs highlight history, social emotional learning, science, technology, engineering, media, performing arts, 
                  entrepreneurship, spirituality(self-actualization), and team building. Every program leads up to a celebration and 
                  expression of talent during the weeks leading up to the "HCBU Classic" game in the host city.
                </p>
           
            </div>

          </div>

      </div>


      </div>


      
      {/* Our Core Principles Section */}

      <section className="relative bg-[#1a237e] py-10">
        <div className="container mx-auto px-4 pb-32">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Core Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {corePrinciplesItems.map((event, index) => (
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
      
      </section>
    
    </section>
  )
} 