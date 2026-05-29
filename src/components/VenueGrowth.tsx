"use client";

import { motion } from "framer-motion";
import {
  Repeat,
  Ticket,
  Crown,
  Database,
  DoorOpen,
  Bot,
} from "lucide-react";

const benefits = [
  {
    icon: Repeat,
    title: "Membership Revenue",
    description:
      "Generate recurring monthly income with digital memberships that keep guests coming back.",
  },
  {
    icon: Ticket,
    title: "Ticket Sales",
    description:
      "Increase event attendance with seamless ticketing, dynamic pricing, and instant delivery.",
  },
  {
    icon: Crown,
    title: "VIP Management",
    description:
      "Simplify reservations and maximize table sales with real-time availability and instant booking.",
  },
  {
    icon: Database,
    title: "Customer Data",
    description:
      "Understand your audience and drive repeat business with actionable insights and analytics.",
  },
  {
    icon: DoorOpen,
    title: "Door Operations",
    description:
      "Reduce wait times and eliminate manual processes with digital scanning and payments.",
  },
  {
    icon: Bot,
    title: "AI Marketing",
    description:
      "Automatically create and distribute content to grow attendance without a large marketing team.",
  },
];

export function VenueGrowth() {
  return (
    <section className="py-24 section-gradient relative">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm tracking-[0.2em] uppercase mb-4">
            For Venues
          </p>
          <h2 className="font-[family-name:var(--font-syne)] text-3xl md:text-5xl font-bold">
            Built to Help Venues{" "}
            <span className="gradient-text">Grow Revenue</span>
          </h2>
          <p className="text-muted text-lg mt-4 max-w-2xl mx-auto">
            OnQ gives venues the tools to increase revenue, streamline
            operations, and build lasting customer relationships.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-2xl p-6 hover:glass-strong transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <benefit.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
