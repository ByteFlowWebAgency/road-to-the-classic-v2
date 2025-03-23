import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function Mission() {
  return (
    <section className="py-16 bg-[#1a237e] text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <Image
              src="/images/IMG_5651.jpg"
              alt="Students participating in activities"
              width={500}
              height={400}
              className="rounded-lg w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">JOIN OUR MISSION</h2>
            <p className="mb-6">
              Our mission is to increase the knowledge of the impact of Historically Black Colleges and Universities
              on the building of American society and the contributions of African Americans and people of color
              that have shaped our nation through education, science, technology, innovation, engineering, sports,
              arts, business, and literature.
            </p>
            <div className="flex gap-4">
              <Button className="bg-white text-[#1a237e] hover:bg-gray-100">About Us</Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/20">
                Get Involved
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 