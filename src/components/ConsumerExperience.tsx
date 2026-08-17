"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { PhoneMockup, type ScreenType } from "./ui/PhoneMockup";

const features: {
  id: ScreenType;
  title: string;
  description: string;
}[] = [
  {
    id: "discover",
    title: "Discover",
    description:
      "Find bars, clubs, events, festivals, and experiences happening tonight and beyond.",
  },
  {
    id: "tickets",
    title: "Tickets",
    description:
      "Purchase and manage tickets instantly. No more waiting in line or searching your inbox.",
  },
  {
    id: "vip",
    title: "VIP",
    description:
      "Reserve tables without phone calls or back-and-forth messaging. Book in seconds.",
  },
  {
    id: "membership",
    title: "Memberships",
    description:
      "Store and use memberships digitally. Your perks, always in your pocket.",
  },
  {
    id: "entry",
    title: "Fast Entry",
    description:
      "Scan and enter in seconds. Skip the line and walk straight in.",
  },
  {
    id: "rewards",
    title: "Rewards",
    description:
      "Unlock exclusive perks and experiences. Earn points every night out.",
  },
];

export function ConsumerExperience() {
  const [active, setActive] = useState<ScreenType>("discover");
  const activeFeature = features.find((f) => f.id === active)!;

  return (
    <section id="experience" className="py-24 relative overflow-hidden scroll-mt-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(126,226,240,0.06),transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm tracking-[0.2em] uppercase mb-4">
            Inside the App
          </p>
          <h2 className="font-[family-name:var(--font-syne)] text-3xl md:text-5xl font-bold">
            Everything You Need for the{" "}
            <span className="gradient-text">Perfect Night Out</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-3">
            {features.map((feature, i) => {
              const isActive = active === feature.id;
              return (
                <motion.button
                  key={feature.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setActive(feature.id)}
                  className="relative w-full text-left group"
                >
                  <div
                    className={`absolute -inset-1 rounded-2xl bg-accent/20 blur-2xl transition-opacity duration-300 pointer-events-none ${
                      isActive ? "opacity-70" : "opacity-30 group-hover:opacity-45"
                    }`}
                  />
                  <div
                    className={`relative p-5 rounded-2xl glass-strong transition-all duration-300 ${
                      isActive
                        ? "border border-accent/40 neon-glow"
                        : "border border-white/10 shadow-[0_0_24px_rgba(126,226,240,0.12)] group-hover:border-accent/20 group-hover:shadow-[0_0_32px_rgba(126,226,240,0.18)]"
                    }`}
                  >
                    <h3
                      className={`font-[family-name:var(--font-syne)] text-lg font-bold mb-1 transition-colors duration-300 ${
                        isActive ? "text-accent" : "group-hover:text-white"
                      }`}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted">{feature.description}</p>
                  </div>
                </motion.button>
              );
            })}
          </div>

          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-accent/10 blur-[60px] rounded-full scale-75" />
              <PhoneMockup screen={active} size="lg" />
              <p className="text-center text-sm text-muted mt-6">
                {activeFeature.title} — {activeFeature.description.split(".")[0]}.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
