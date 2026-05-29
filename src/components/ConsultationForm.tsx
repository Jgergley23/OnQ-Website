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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(126,226,240,0.08),transparent_70%)]" />

      <div className="max-w-3xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-accent text-sm tracking-[0.2em] uppercase mb-4">
            Get Started
          </p>
          <h2 className="font-[family-name:var(--font-syne)] text-3xl md:text-5xl font-bold mb-4">
            Ready To Modernize{" "}
            <span className="gradient-text">Your Venue?</span>
          </h2>
          <p className="text-muted text-lg">
            Book a free consultation with our team and discover how OnQ can
            transform your business.
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
              <h3 className="font-[family-name:var(--font-syne)] text-2xl font-bold mb-2">
                Consultation Requested!
              </h3>
              <p className="text-muted">
                Our team will reach out within 24 hours to schedule your
                consultation.
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
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent/50 transition-colors"
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
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent/50 transition-colors"
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
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent/50 transition-colors appearance-none"
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
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent/50 transition-colors"
                    placeholder="you@venue.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted mb-2">Phone</label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent/50 transition-colors"
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
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent/50 transition-colors appearance-none"
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
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent/50 transition-colors appearance-none"
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
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent/50 transition-colors resize-none"
                  placeholder="What's your biggest operational or revenue challenge?"
                />
              </div>

              <div>
                <label className="block text-sm text-muted mb-2">
                  Preferred Consultation Time
                </label>
                <input
                  type="text"
                  name="preferredTime"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent/50 transition-colors"
                  placeholder="e.g., Weekday mornings, Tuesday afternoons"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full mt-2"
              >
                Book My Consultation
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
