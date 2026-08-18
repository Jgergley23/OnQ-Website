"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";

export function VenueTeaser() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(109,221,235,0.14),transparent_70%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="max-w-3xl mx-auto px-6 relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-accent text-sm tracking-[0.25em] uppercase mb-4">
            Own a Venue?
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-semibold mb-4">
            Venues have their{" "}
            <span className="gradient-text italic">own page</span>
          </h2>
          <p className="text-muted text-lg mb-8 max-w-xl mx-auto">
            Partner with OnQ for memberships, tickets, and VIP—plus Brand Pilot
            marketing when you&apos;re ready. Book a demo with our
            team.
          </p>
          <Button variant="secondary" size="lg" href="/venues">
            For Venues
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
