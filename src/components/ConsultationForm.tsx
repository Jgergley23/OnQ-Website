"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "./ui/Button";

const venueTypes = [
  "Nightclub",
  "Bar / Lounge",
  "Restaurant",
  "Festival / Event",
  "Multi-Venue Group",
  "Other",
];

const ticketingSystems = [
  "Eventbrite",
  "Dice",
  "Tixr",
  "In-house / Manual",
  "None",
  "Other",
];

const membershipPrograms = [
  "Yes, active program",
  "Yes, but manual",
  "Planning to launch",
  "No membership program",
];

export function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="consultation" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(109,221,235,0.14),transparent_70%)]" />

      <div className="max-w-3xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-accent text-sm tracking-[0.25em] uppercase mb-4">
            Venue Contact
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-semibold mb-4">
            Contact{" "}
            <span className="gradient-text italic">Us</span>
          </h2>
          <p className="text-muted text-lg">
            Tell us about your venue. We&apos;ll set a short meeting and show
            what fits—including Brand Pilot if you want marketing support.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-3xl p-8 md:p-10 neon-glow"
        >
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold mb-2">
                Message sent
              </h3>
              <p className="text-muted">
                Our team will reach out within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-muted mb-2">Name</label>
                  <input
                    required
                    type="text"
                    name="name"
                    className="w-full bg-accent/5 border border-accent/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent/60 focus:bg-accent/10 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted mb-2">
                    Business Name
                  </label>
                  <input
                    required
                    type="text"
                    name="business"
                    className="w-full bg-accent/5 border border-accent/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent/60 focus:bg-accent/10 transition-colors"
                    placeholder="Venue name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-muted mb-2">
                  Venue Type
                </label>
                <select
                  required
                  name="venueType"
                  className="w-full bg-accent/5 border border-accent/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent/60 focus:bg-accent/10 transition-colors appearance-none"
                >
                  <option value="" className="bg-black">
                    Select venue type
                  </option>
                  {venueTypes.map((type) => (
                    <option key={type} value={type} className="bg-black">
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-muted mb-2">Email</label>
                  <input
                    required
                    type="email"
                    name="email"
                    className="w-full bg-accent/5 border border-accent/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent/60 focus:bg-accent/10 transition-colors"
                    placeholder="you@venue.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted mb-2">Phone</label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    className="w-full bg-accent/5 border border-accent/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent/60 focus:bg-accent/10 transition-colors"
                    placeholder="(555) 000-0000"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-muted mb-2">
                    Current Ticketing System
                  </label>
                  <select
                    name="ticketing"
                    className="w-full bg-accent/5 border border-accent/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent/60 focus:bg-accent/10 transition-colors appearance-none"
                  >
                    <option value="" className="bg-black">
                      Select system
                    </option>
                    {ticketingSystems.map((sys) => (
                      <option key={sys} value={sys} className="bg-black">
                        {sys}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-muted mb-2">
                    Current Membership Program
                  </label>
                  <select
                    name="membership"
                    className="w-full bg-accent/5 border border-accent/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent/60 focus:bg-accent/10 transition-colors appearance-none"
                  >
                    <option value="" className="bg-black">
                      Select status
                    </option>
                    {membershipPrograms.map((prog) => (
                      <option key={prog} value={prog} className="bg-black">
                        {prog}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm text-muted mb-2">
                  Biggest Challenge
                </label>
                <textarea
                  required
                  name="challenge"
                  rows={3}
                  className="w-full bg-accent/5 border border-accent/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent/60 focus:bg-accent/10 transition-colors resize-none"
                  placeholder="What would make the biggest difference for your venue right now?"
                />
              </div>

              <div>
                <label className="block text-sm text-muted mb-2">
                  Preferred Consultation Time
                </label>
                <input
                  type="text"
                  name="preferredTime"
                  className="w-full bg-accent/5 border border-accent/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent/60 focus:bg-accent/10 transition-colors"
                  placeholder="e.g., Weekday mornings, Tuesday afternoons"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full mt-2"
              >
                Contact Us
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
