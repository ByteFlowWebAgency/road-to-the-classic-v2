import { Hero } from "@/components/sections/Hero"
import { Vision } from "@/components/sections/Vision"
import { Mission } from "@/components/sections/Mission"
import { EmpoweringYouth } from "@/components/sections/EmpoweringYouth"
import { UpcomingEvents } from "@/components/sections/UpcomingEvents"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Vision />
      <EmpoweringYouth />
      <Mission />
    </>
  );
}
