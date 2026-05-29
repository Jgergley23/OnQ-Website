"use client";

import { motion } from "framer-motion";
import {
  Wand2,
  Calendar,
  Users,
  Share2,
  MessageCircle,
  LineChart,
} from "lucide-react";

const capabilities = [
  {
    icon: Wand2,
    title: "Automated Content Creation",
    description:
      "AI generates stunning event flyers, social posts, and promotional materials in seconds.",
  },
  {
    icon: Calendar,
    title: "Event Promotions",
    description:
      "Launch targeted campaigns for every event with optimized messaging and timing.",
  },
  {
    icon: Users,
    title: "Membership Campaigns",
    description:
      "Drive membership sign-ups with personalized campaigns that convert guests into members.",
  },
  {
    icon: Share2,
    title: "Social Media Publishing",
    description:
      "Schedule and publish across Instagram, TikTok, and more—all from one dashboard.",
  },
  {
    icon: MessageCircle,
    title: "Audience Engagement",
    description:
      "Automated responses and engagement that keeps your community active and excited.",
  },
  {
    icon: LineChart,
    title: "Performance Tracking",
    description:
      "Real-time analytics on campaign performance, reach, and conversion rates.",
  },
];

export function AIMarketing() {
  return (
    <section className="py-24 section-gradient relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="glass-strong rounded-3xl p-6 neon-glow">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs text-accent font-medium">
                  AI Marketing Engine
                </span>
              </div>

              <div className="space-y-3">
                <div className="glass rounded-xl p-4">
                  <p className="text-xs text-muted mb-2">Generated Content</p>
                  <div className="rounded-lg bg-gradient-to-br from-purple-900/60 to-accent/20 h-32 flex items-end p-3">
                    <div>
                      <p className="text-sm font-bold">NEON SATURDAYS</p>
                      <p className="text-xs text-accent">
                        This Saturday · Members get free entry
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="glass rounded-xl p-3">
                    <p className="text-[10px] text-muted">Reach</p>
                    <p className="text-lg font-bold text-accent">24.8K</p>
                  </div>
                  <div className="glass rounded-xl p-3">
                    <p className="text-[10px] text-muted">Conversions</p>
                    <p className="text-lg font-bold">847</p>
                  </div>
                </div>

                <div className="glass rounded-xl p-3">
                  <p className="text-[10px] text-muted mb-2">
                    Scheduled Posts
                  </p>
                  <div className="space-y-2">
                    {["Instagram Story", "TikTok Reel", "Email Blast"].map(
                      (channel) => (
                        <div
                          key={channel}
                          className="flex items-center justify-between text-xs"
                        >
                          <span>{channel}</span>
                          <span className="text-accent">Scheduled ✓</span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <p className="text-accent text-sm tracking-[0.2em] uppercase mb-4">
              AI Marketing
            </p>
            <h2 className="font-[family-name:var(--font-syne)] text-3xl md:text-5xl font-bold mb-6">
              AI That Markets{" "}
              <span className="gradient-text">Your Venue</span>
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-10">
              Grow your venue without hiring a large marketing team. OnQ&apos;s
              AI creates, schedules, and optimizes campaigns so you can focus
              on delivering unforgettable experiences.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex gap-3"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                    <cap.icon className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-0.5">
                      {cap.title}
                    </h4>
                    <p className="text-xs text-muted">{cap.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
