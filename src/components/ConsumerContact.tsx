"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "./ui/Button";

export function ConsumerContact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative scroll-mt-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(109,221,235,0.14),transparent_70%)]" />

      <div className="max-w-3xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-accent text-sm tracking-[0.25em] uppercase mb-4">
            Contact Us
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-semibold mb-4">
            Book a{" "}
            <span className="gradient-text italic">demo</span>
          </h2>
          <p className="text-muted text-lg">
            Want the membership walkthrough? Tell us a little about yourself and
            we&apos;ll set up a short demo.
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
                Demo requested
              </h3>
              <p className="text-muted">
                We&apos;ll reach out within 24 hours to lock in a time.
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
                  <label className="block text-sm text-muted mb-2">Email</label>
                  <input
                    required
                    type="email"
                    name="email"
                    className="w-full bg-accent/5 border border-accent/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent/60 focus:bg-accent/10 transition-colors"
                    placeholder="you@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-muted mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full bg-accent/5 border border-accent/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent/60 focus:bg-accent/10 transition-colors"
                  placeholder="(555) 000-0000"
                />
              </div>
              <div>
                <label className="block text-sm text-muted mb-2">
                  What are you looking for?
                </label>
                <textarea
                  required
                  name="interest"
                  rows={3}
                  className="w-full bg-accent/5 border border-accent/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent/60 focus:bg-accent/10 transition-colors resize-none"
                  placeholder="Membership, events, VIP experiences…"
                />
              </div>
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full mt-2"
              >
                Book My Demo
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
