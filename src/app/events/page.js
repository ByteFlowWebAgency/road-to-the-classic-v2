import { EventsHero } from "@/components/sections/EventsHero"
<<<<<<< HEAD
import { EventsCalendar } from "@/components/sections/EventsCalendar"
import { EventsList } from "@/components/sections/EventsList"
import { EventsContactForm } from "@/components/sections/EventsContactForm"
=======
import { EventsList } from "@/components/sections/EventsList"
>>>>>>> bf8f4a521af6c81923acab65eac6e2328b1e346f

export const metadata = {
  title: "Road to the Classic | Events",
  description: "Upcoming Road to the Classic Black College Football Hall of Fame HBCU Events",
}

export default function EventsPage() {
  return (
    <>
      <EventsHero />
<<<<<<< HEAD
      {/* <EventsCalendar /> */}
      <EventsList />
      <EventsContactForm />
=======
      <EventsList />
>>>>>>> bf8f4a521af6c81923acab65eac6e2328b1e346f
    </>
  )
} 