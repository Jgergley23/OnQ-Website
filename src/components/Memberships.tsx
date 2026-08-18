"use client";

import { motion } from "framer-motion";
import { Sparkles, CalendarDays, Zap, Crown } from "lucide-react";
import { Button } from "./ui/Button";
import { MembershipCard } from "./MembershipCard";

const perks = [
  {
    icon: Crown,
    title: "Exclusive Access",
    description:
      "Members-only nights, rooms, and experiences reserved for people on the list.",
  },
  {
    icon: CalendarDays,
    title: "Pop-up Events",
    description:
      "Curated day-to-night pop-ups—be first to know, first to get in.",
  },
  {
    icon: Zap,
    title: "Fast Entry",
    description:
      "Skip the line. Scan your membership and walk straight in.",
  },
  {
    icon: Sparkles,
    title: "Create Experiences",
    description:
      "Not just tickets—nights, tables, and moments built for members.",
  },
];

export function Memberships() {
  return (
    <section
      id="memberships"
      className="py-24 relative overflow-hidden scroll-mt-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(109,221,235,0.18),transparent_60%)]" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-accent text-sm tracking-[0.25em] uppercase mb-4">
              Memberships
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-semibold leading-tight mb-5">
              Always on the{" "}
              <span className="gradient-text italic">list</span>
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-8 max-w-lg">
              Exclusive membership for people who want events, access, and
              experiences—kept active day and night.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mb-10">
              {perks.map((perk, i) => (
                <motion.div
                  key={perk.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex gap-3"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/20 border border-accent/25 flex items-center justify-center">
                    <perk.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold mb-1">
                      {perk.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {perk.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button variant="primary" href="#download">
              Start Your Membership
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="relative w-full max-w-lg">
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[50%] bg-accent/25 blur-[70px] rounded-full pointer-events-none"
                aria-hidden="true"
              />
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <MembershipCard />
              </motion.div>
            </div>
            <p className="text-muted text-sm mt-6 text-center max-w-xs">
              The card you carry—digital membership, exclusive access, always
              ready.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
