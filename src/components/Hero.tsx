"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { PhoneMockup } from "./ui/PhoneMockup";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-28 pb-20">
      <div className="absolute inset-0 bg-[#02080c]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_40%,rgba(109,221,235,0.28),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_15%_70%,rgba(109,221,235,0.12),transparent_50%)]" />
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#04141a] to-transparent" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-8rem)]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left z-10"
          >
            <p className="text-accent text-xs sm:text-sm font-medium tracking-[0.3em] uppercase mb-5">
              Always on the list
            </p>

            <h1 className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-semibold leading-[0.92] tracking-tight mb-6">
              Access
              <br />
              <span className="gradient-text italic">Reserved</span>
            </h1>

            <p className="text-white/65 text-lg md:text-xl leading-relaxed max-w-md mx-auto lg:mx-0 mb-10">
              Exclusive membership for people who live for events and
              experiences—day and night.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button variant="primary" size="lg" href="#contact">
                Contact Us
              </Button>
              <Button variant="secondary" size="lg" href="#download">
                Download the App
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.12 }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative py-6 px-4">
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full bg-accent/25 blur-[90px] pointer-events-none"
                aria-hidden="true"
              />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                <PhoneMockup screen="splash" size="xl" glow eager />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
