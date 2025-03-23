import { Hero } from "@/components/sections/Hero"
import { Vision } from "@/components/sections/Vision"
import { About } from "@/components/sections/About"
import { Mission } from "@/components/sections/Mission"
import { WhatWeDo } from "@/components/sections/WhatWeDo"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { SocialBar } from "@/components/layout/SocialBar"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SocialBar />
      <Header />

      <main className="flex-1">
        <Hero />
        <Vision />
        <About />
        <Mission />
        <WhatWeDo />
      </main>

      <Footer />
    </div>
  );
}
