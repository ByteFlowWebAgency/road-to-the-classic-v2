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
            >
              Learn More
            </Button>
            <Button 
              variant="primary" 
              size="lg"
            >
              Get Involved
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 