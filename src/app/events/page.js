import { EventsHero } from "@/components/sections/EventsHero"
import { EventsCalendar } from "@/components/sections/EventsCalendar"
import { EventsList } from "@/components/sections/EventsList"
import { EventsContactForm } from "@/components/sections/EventsContactForm"

export const metadata = {
  title: "Road to the Classic | Events",
  description: "Upcoming Road to the Classic Black College Football Hall of Fame HBCU Events",
}

export default function EventsPage() {
  return (
    <>
      <EventsHero />
      {/* <EventsCalendar /> */}
      <EventsList />
      <EventsContactForm />
    </>
  )
} 