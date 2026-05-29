"use client";

import { motion } from "framer-motion";
import {
  DollarSign,
  Gift,
  Zap,
  Crown,
  Heart,
  TrendingUp,
} from "lucide-react";
import { Button } from "./ui/Button";

const perks = [
  {
    icon: DollarSign,
    title: "Monthly Recurring Revenue",
    description: "Predictable income that compounds month over month.",
  },
  {
    icon: Gift,
    title: "Exclusive Member Perks",
    description: "Custom benefits that make membership irresistible.",
  },
  {
    icon: Zap,
    title: "Priority Access",
    description: "Members get first access to events, tables, and experiences.",
  },
  {
    icon: Crown,
    title: "VIP Benefits",
    description: "Skip lines, reserved seating, and premium treatment.",
  },
  {
    icon: Heart,
    title: "Loyalty Rewards",
    description: "Points and perks that keep members engaged and returning.",
  },
  {
    icon: TrendingUp,
    title: "Increased Retention",
    description: "Build a community of loyal guests who choose you every night.",
  },
];

const revenueData = [
  { month: "Jan", value: 12 },
  { month: "Feb", value: 18 },
  { month: "Mar", value: 24 },
  { month: "Apr", value: 32 },
  { month: "May", value: 41 },
  { month: "Jun", value: 52 },
  { month: "Jul", value: 65 },
  { month: "Aug", value: 78 },
];

export function Memberships() {
  const maxValue = Math.max(...revenueData.map((d) => d.value));

  return (
    <section id="memberships" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(126,226,240,0.12),transparent_60%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-accent text-sm tracking-[0.2em] uppercase mb-4">
              Memberships
            </p>
            <h2 className="font-[family-name:var(--font-syne)] text-3xl md:text-5xl font-bold mb-6">
              Turn Guests Into{" "}
              <span className="gradient-text">Members</span>
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Build predictable recurring revenue and stronger customer loyalty
              with digital memberships designed for nightlife.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {perks.map((perk, i) => (
                <motion.div
                  key={perk.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex gap-3"
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                    <perk.icon className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-0.5">
                      {perk.title}
                    </h4>
                    <p className="text-xs text-muted">{perk.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button variant="primary" href="#consultation">
              Start Building Memberships
            </Button>
          </motion.div>

          {/* Revenue Growth Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-strong rounded-3xl p-8 neon-glow"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-sm text-muted">Monthly Recurring Revenue</p>
                <p className="text-xs text-muted/70 mt-1 italic">Example projection</p>
              </div>
            </div>

            <div className="relative h-48">
              <div className="absolute inset-0 flex items-end justify-between gap-2">
                {revenueData.map((d, i) => (
                  <motion.div
                    key={d.month}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${(d.value / maxValue) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.6 }}
                    className="flex-1 relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-accent/80 to-accent/30 rounded-t-lg group-hover:from-accent group-hover:to-accent/50 transition-colors" />
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-muted">
                      {d.month}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-white/10 text-center">
              <p className="text-xs text-muted">
                Illustrative example — not actual venue data
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
