"use client";

import { motion } from "framer-motion";
import { Crown, CalendarDays, Zap } from "lucide-react";

const pillars = [
  {
    id: "exclusive",
    icon: Crown,
    title: "Exclusive Access",
    description:
      "Reserved entry, member nights, and spaces that stay off the open list.",
  },
  {
    id: "events",
    icon: CalendarDays,
    title: "Pop-up Events",
    description:
      "Day and night pop-ups curated for members who show up for the experience.",
  },
  {
    id: "entry",
    icon: Zap,
    title: "Fast Entry",
    description:
      "Your membership is your pass—scan once and move past the line.",
  },
];

export function GuestPillars() {
  return (
    <section id="exclusive" className="py-24 section-gradient relative">
      <div className="absolute inset-0 grid-bg opacity-45" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(109,221,235,0.12),transparent_65%)]" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm tracking-[0.25em] uppercase mb-4">
            Member Life
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-semibold">
            Exclusive. Active.{" "}
            <span className="gradient-text italic">Day &amp; night.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.id}
              id={pillar.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-strong rounded-3xl p-8 relative overflow-hidden group scroll-mt-28 hover:border-accent/40 transition-colors"
            >
              <div className="absolute top-0 right-0 w-44 h-44 bg-accent/15 rounded-full blur-[60px] group-hover:bg-accent/25 transition-colors duration-500" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-accent/20 border border-accent/25 flex items-center justify-center mb-6">
                  <pillar.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold mb-3">
                  {pillar.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
