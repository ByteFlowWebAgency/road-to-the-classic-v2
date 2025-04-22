import Image from "next/image";

export function EmpoweringYouth() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#1a237e]">
              EMPOWERING YOUTH
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Road to the Classic is a Coalition built on collaborative
              partnerships with Non-Profits with joint missions to establish
              programming to enhance education by providing the youth with
              hands-on experiences by participating in strategically planned
              events and activities based on scholastic subject matter.
            </p>
          </div>

          <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden">
            <Image
              src="/images/IMG_2242.jpg"
              alt="Youth empowerment activities"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
