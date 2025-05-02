import { EventsHero } from "@/components/sections/EventsHero"
import { EventsList } from "@/components/sections/EventsList"

export const metadata = {
  title: "Road to the Classic | Events",
  description: "Upcoming Road to the Classic Black College Football Hall of Fame HBCU Events",
}

export default function EventsPage() {
  return (
    <>
      <EventsHero />
      <EventsList />
    </>
  )
} 