"use client";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative h-[600px] w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          src="/images/HomePage Video.mp4"
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
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            BRIDGING EDUCATION &<br />
            EXPERIENCE FOR IMPACT
          </h1>
          <div className="flex gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={() => (window.location.href = "/about")}
            >
              Learn More
            </Button>
            <Button
              variant="primary"
              size="lg"
              onClick={() => (window.location.href = "/contact")}
            >
              Get Involved
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
