export function EventsHero() {
  return (
<<<<<<< HEAD
    <section className="relative bg-[#1a237e] py-24 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Road To The Classic Events
          </h1>
          <p className="text-xl opacity-90 mb-8">
            Join us for these exciting Black College Football Hall of Fame HBCU events throughout the season
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-16"></div>
    </section>
  )
} 
=======
    <section className="relative h-[500px] w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          src="/images/Steel Drum Band-1.mp4"
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
            Road To The Classic Events
          </h1>
          {/* <p className="text-2xl md:text-3xl font-light text-white mb-8 leading-tight"> */}
          <p className="text-xl text-white/90 leading-relaxed">
            Join us for these exciting Black College Football Hall of Fame HBCU
            events throughout the season
          </p>
        </div>
      </div>
    </section>
  );
}
>>>>>>> bf8f4a521af6c81923acab65eac6e2328b1e346f
