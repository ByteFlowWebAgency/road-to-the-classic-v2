import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Mission() {
  return (
    <section className="py-16 bg-[#1a237e] text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
              <Image
                src="/images/image 10.png"
                alt="Students participating in activities"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">JOIN OUR MISSION</h2>
            <p className="mb-6 leading-relaxed">
              Our mission is to increase the knowledge of the impact of Historically Black Colleges and Universities
              on the building of American society and the contributions of African Americans and people of color
              that have shaped our nation through education, science, technology, innovation, engineering, sports,
              arts, business, and literature.
            </p>
            <div className="flex gap-4">
              <Link href="/about">
                <Button variant="primary" className="bg-white text-[#1a237e] hover:bg-gray-100 hover:text-[#1a237e]">About Us</Button>
              </Link>
              <Link href="/contact">
                <Button variant="secondary" className="text-white hover:bg-[#1a237e] hover:text-white border-white">Get Involved</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 