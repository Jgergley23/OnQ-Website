"use client";

import { motion } from "framer-motion";
import { Users, Sparkles, DoorOpen } from "lucide-react";
import { Button } from "./ui/Button";

const outcomes = [
  {
    icon: Users,
    title: "Members who come back",
    description:
      "Turn one-time guests into members who choose your venue first.",
  },
  {
    icon: Sparkles,
    title: "Nights that feel premium",
    description:
      "Tickets, VIP, and membership access in one guest experience.",
  },
  {
    icon: DoorOpen,
    title: "A smoother door",
    description:
      "Cleaner entry, less chaos, and a night that runs like it should.",
  },
];

export function VenuePitch() {
  return (
    <>
      <section className="relative min-h-[85vh] hero-gradient overflow-hidden pt-28 pb-20">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-accent/5 blur-[120px]" />

        <div className="relative max-w-4xl mx-auto px-6 flex flex-col items-center justify-center min-h-[calc(85vh-7rem)] text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="text-accent text-sm md:text-base font-medium tracking-[0.25em] uppercase mb-6"
          >
            For Venues
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.02] tracking-tight mb-6"
          >
            Fill more nights.{" "}
            <span className="gradient-text italic">Partner with OnQ.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-muted text-lg md:text-xl leading-relaxed max-w-xl mb-10"
          >
            Memberships, tickets, and VIP booking for your guests—with optional
            Brand Pilot marketing support when you&apos;re ready. We&apos;ll
            show you in a meeting, not a long product tour.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <Button variant="primary" size="lg" href="#consultation">
              Book a Demo
            </Button>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </section>

      <section className="py-24 section-gradient relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-accent text-sm tracking-[0.25em] uppercase mb-4">
              What Changes
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-semibold">
              Outcomes—shown in your demo
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {outcomes.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass rounded-2xl p-8"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center glass-strong rounded-3xl p-8 md:p-10"
          >
            <p className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-semibold mb-4">
              Core offer + Brand Pilot when you want it
            </p>
            <p className="text-muted text-sm md:text-base leading-relaxed mb-6">
              Guests come for memberships, tickets, and VIP. Brand Pilot AI
              marketing is available as an add-on—we&apos;ll walk through it in
              your demo, not dump it on the page.
            </p>
            <Button variant="primary" href="#consultation">
              Book a Demo
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
