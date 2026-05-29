"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Ticket,
  Crown,
  CreditCard,
  ScanLine,
  Sparkles,
  Smartphone,
  Users,
  BarChart3,
  Megaphone,
  Scan,
  DollarSign,
} from "lucide-react";
import { Button } from "./ui/Button";

const consumerFeatures = [
  { icon: Calendar, text: "Discover what's happening tonight" },
  { icon: Ticket, text: "Buy tickets in seconds" },
  { icon: Crown, text: "Book VIP tables instantly" },
  { icon: CreditCard, text: "Store memberships digitally" },
  { icon: Sparkles, text: "Access member-only perks" },
  { icon: ScanLine, text: "Skip lines with seamless entry" },
  { icon: Smartphone, text: "Keep all nightlife experiences in one app" },
];

const venueFeatures = [
  { icon: Users, text: "Sell memberships" },
  { icon: Crown, text: "Manage VIP reservations" },
  { icon: Ticket, text: "Sell tickets" },
  { icon: DollarSign, text: "Accept payments" },
  { icon: Scan, text: "Scan guests instantly" },
  { icon: Megaphone, text: "Run AI-powered marketing campaigns" },
  { icon: BarChart3, text: "Track revenue and customer activity" },
];

export function TwoSidedMarketplace() {
  return (
    <section id="marketplace" className="py-24 section-gradient relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm tracking-[0.2em] uppercase mb-4">
            Two-Sided Platform
          </p>
          <h2 className="font-[family-name:var(--font-syne)] text-3xl md:text-5xl font-bold">
            One Ecosystem.{" "}
            <span className="gradient-text">Every Night Out.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Consumers */}
          <motion.div
            id="consumers"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-strong rounded-3xl p-8 md:p-10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] group-hover:bg-accent/10 transition-colors duration-500" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-medium mb-6">
                <Smartphone className="w-3.5 h-3.5" />
                For Consumers
              </div>
              <h3 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold mb-8">
                Your Nightlife, Simplified
              </h3>
              <ul className="space-y-4 mb-10">
                {consumerFeatures.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-white/80 text-sm md:text-base pt-1">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
              <Button variant="primary" href="#download">
                Download OnQ
              </Button>
            </div>
          </motion.div>

          {/* Venues */}
          <motion.div
            id="venues"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-strong rounded-3xl p-8 md:p-10 relative overflow-hidden group"
          >
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-[80px] group-hover:bg-purple-500/10 transition-colors duration-500" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/20 text-white/80 text-xs font-medium mb-6">
                <BarChart3 className="w-3.5 h-3.5" />
                For Venues
              </div>
              <h3 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold mb-8">
                Grow Revenue. Run Smarter.
              </h3>
              <ul className="space-y-4 mb-10">
                {venueFeatures.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-white/80 text-sm md:text-base pt-1">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
              <Button variant="secondary" href="#consultation">
                Book a Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
