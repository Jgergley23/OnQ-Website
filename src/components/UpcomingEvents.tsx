"use client";

import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import type { OnQEvent } from "@/data/events";
import { Button } from "./ui/Button";

function formatEventDate(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function EventRow({ event }: { event: OnQEvent }) {
  const content = (
    <>
      <p className="text-accent text-xs tracking-[0.2em] uppercase mb-2">
        {formatEventDate(event.date)}
        {event.time ? ` · ${event.time}` : ""}
      </p>
      <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-semibold mb-2">
        {event.title}
      </h2>
      {(event.venue || event.city) && (
        <p className="text-muted text-sm mb-2">
          {[event.venue, event.city].filter(Boolean).join(" · ")}
        </p>
      )}
      {event.description && (
        <p className="text-white/60 text-sm leading-relaxed max-w-xl">
          {event.description}
        </p>
      )}
    </>
  );

  if (event.href) {
    return (
      <a
        href={event.href}
        className="block border-b border-accent/15 py-8 hover:border-accent/40 transition-colors group"
      >
        <div className="group-hover:text-accent transition-colors">{content}</div>
      </a>
    );
  }

  return <div className="border-b border-accent/15 py-8">{content}</div>;
}

export function UpcomingEvents({ events }: { events: OnQEvent[] }) {
  return (
    <section className="relative min-h-[70vh] pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#02080c]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(109,221,235,0.18),transparent_55%)]" />
      <div className="absolute inset-0 grid-bg opacity-35" />

      <div className="relative max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-accent text-sm tracking-[0.25em] uppercase mb-4">
            Upcoming
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-semibold mb-4">
            Events
          </h1>
          <p className="text-muted text-lg max-w-md mx-auto">
            Member nights, pop-ups, and experiences—coming soon to OnQ.
          </p>
        </motion.div>

        {events.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-center py-16"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/15 border border-accent/25 mb-6">
              <CalendarDays className="w-7 h-7 text-accent" />
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-semibold mb-3">
              No upcoming events
            </h2>
            <p className="text-muted text-base max-w-sm mx-auto mb-8">
              Nothing is scheduled yet. Check back soon, or download the app to
              stay first in line.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="primary" href="/#download">
                Download the App
              </Button>
              <Button variant="secondary" href="/#contact">
                Contact Us
              </Button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            {events.map((event) => (
              <EventRow key={event.id} event={event} />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
