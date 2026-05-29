"use client";

import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";

const features = [
  "Ticketing",
  "VIP Booking",
  "Memberships",
  "Event Discovery",
  "Door Payments",
  "Scanner App",
  "AI Marketing",
  "Promoter Management",
  "Consumer Mobile App",
  "Venue Dashboard",
];

type Support = "full" | "partial" | "none";

const competitors: { name: string; support: Support[] }[] = [
  {
    name: "OnQ",
    support: Array(10).fill("full") as Support[],
  },
  {
    name: "Eventbrite",
    support: [
      "full",
      "none",
      "none",
      "partial",
      "none",
      "partial",
      "none",
      "none",
      "partial",
      "partial",
    ],
  },
  {
    name: "Resy / OpenTable",
    support: [
      "none",
      "full",
      "none",
      "partial",
      "none",
      "none",
      "none",
      "none",
      "partial",
      "partial",
    ],
  },
  {
    name: "POS Systems",
    support: [
      "partial",
      "none",
      "none",
      "none",
      "full",
      "partial",
      "none",
      "none",
      "none",
      "partial",
    ],
  },
];

function SupportIcon({ support }: { support: Support }) {
  if (support === "full")
    return (
      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
        <Check className="w-3.5 h-3.5 text-accent" />
      </div>
    );
  if (support === "partial")
    return (
      <div className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center">
        <Minus className="w-3.5 h-3.5 text-yellow-500" />
      </div>
    );
  return (
    <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center">
      <X className="w-3.5 h-3.5 text-white/20" />
    </div>
  );
}

export function ComparisonTable() {
  return (
    <section id="compare" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm tracking-[0.2em] uppercase mb-4">
            Why OnQ Wins
          </p>
          <h2 className="font-[family-name:var(--font-syne)] text-3xl md:text-5xl font-bold max-w-3xl mx-auto">
            Most Platforms Solve One Problem.{" "}
            <span className="gradient-text">OnQ Solves The Entire Night.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-3xl overflow-hidden"
        >
          <div className="overflow-x-auto scrollbar-hide">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-4 md:p-6 text-sm text-muted font-normal">
                    Features
                  </th>
                  {competitors.map((comp) => (
                    <th
                      key={comp.name}
                      className={`p-4 md:p-6 text-sm font-bold ${
                        comp.name === "OnQ" ? "text-accent bg-accent/5" : ""
                      }`}
                    >
                      {comp.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((feature, fi) => (
                  <tr
                    key={feature}
                    className="border-b border-white/5 hover:bg-white/[0.02]"
                  >
                    <td className="p-4 md:p-6 text-sm">{feature}</td>
                    {competitors.map((comp) => (
                      <td
                        key={`${comp.name}-${feature}`}
                        className={`p-4 md:p-6 text-center ${
                          comp.name === "OnQ" ? "bg-accent/5" : ""
                        }`}
                      >
                        <div className="flex justify-center">
                          <SupportIcon support={comp.support[fi]} />
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <div className="flex justify-center gap-6 mt-6 text-xs text-muted">
          <div className="flex items-center gap-2">
            <SupportIcon support="full" />
            <span>Full Support</span>
          </div>
          <div className="flex items-center gap-2">
            <SupportIcon support="partial" />
            <span>Partial</span>
          </div>
          <div className="flex items-center gap-2">
            <SupportIcon support="none" />
            <span>Not Available</span>
          </div>
        </div>
      </div>
    </section>
  );
}
