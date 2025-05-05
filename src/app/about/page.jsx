<<<<<<< HEAD
import { About } from '@/components/sections/About';
=======
import { About } from "@/components/sections/About";
>>>>>>> bf8f4a521af6c81923acab65eac6e2328b1e346f

export default function AboutPage() {
  return (
    <>
      {/* Hero Section with Video Background */}
      <section className="relative h-[500px] w-full overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            src="/images/Playing a bord game-1.mp4"
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
<<<<<<< HEAD
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">ABOUT US</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Learn about our mission, vision, and the core principles that drive our work to empower youth through education and HBCU awareness
=======
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ABOUT US
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Learn about our mission, vision, and the core principles that
              drive our work to empower youth through education and HBCU
              awareness
>>>>>>> bf8f4a521af6c81923acab65eac6e2328b1e346f
            </p>
          </div>
        </div>
      </section>

      <About />
    </>
  );
}
