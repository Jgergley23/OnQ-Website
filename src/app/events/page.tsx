import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { UpcomingEvents } from "@/components/UpcomingEvents";
import { getUpcomingEvents } from "@/data/events";

export const metadata: Metadata = {
  title: "Events — OnQ",
  description:
    "Upcoming OnQ member nights, pop-ups, and exclusive experiences.",
  openGraph: {
    title: "Events — OnQ",
    description:
      "Upcoming OnQ member nights, pop-ups, and exclusive experiences.",
    url: "/events",
  },
};

export default function EventsPage() {
  const upcoming = getUpcomingEvents();

  return (
    <>
      <Header />
      <main>
        <UpcomingEvents events={upcoming} />
      </main>
      <Footer />
    </>
  );
}
