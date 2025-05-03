<<<<<<< HEAD
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative h-[600px] w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/IMG_5015.jpg"
          alt="Students in classroom"
          fill
          className="object-cover"
          priority
=======
"use client";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative h-[600px] w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          src="/images/Takling to a class-1.mp4"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
>>>>>>> 71d6ceef00fa3b4b3f39f59c88f30275fb3add89
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>
<<<<<<< HEAD
      
=======

>>>>>>> 71d6ceef00fa3b4b3f39f59c88f30275fb3add89
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            BRIDGING EDUCATION &<br />
            EXPERIENCE FOR IMPACT
          </h1>
          <div className="flex gap-4">
<<<<<<< HEAD
            <Button 
              variant="primary" 
              size="lg"
            >
              Learn More
            </Button>
            <Button 
              variant="primary" 
              size="lg"
=======
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
>>>>>>> 71d6ceef00fa3b4b3f39f59c88f30275fb3add89
            >
              Get Involved
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
<<<<<<< HEAD
} 
=======
}
>>>>>>> 71d6ceef00fa3b4b3f39f59c88f30275fb3add89
