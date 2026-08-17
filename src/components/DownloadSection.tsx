"use client";

import { motion } from "framer-motion";
import { PhoneMockup } from "./ui/PhoneMockup";
import { Button } from "./ui/Button";

export function DownloadSection() {
  return (
    <section id="download" className="py-24 section-gradient relative overflow-hidden scroll-mt-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(109,221,235,0.16),transparent_60%)]" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <p className="text-accent text-sm tracking-[0.25em] uppercase mb-4">
              Get OnQ
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-semibold mb-4">
              Your next membership{" "}
              <span className="gradient-text italic">starts here</span>
            </h2>
            <p className="text-muted text-lg mb-8 max-w-md mx-auto lg:mx-0">
              Download OnQ and carry exclusive access, pop-up events, and fast
              entry in one place.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
              <a
                href="#"
                className="inline-flex items-center gap-3 glass-strong rounded-2xl px-6 py-4 hover:bg-accent/15 hover:border-accent/40 transition-all duration-300 group"
              >
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <p className="text-[10px] text-muted">Download on the</p>
                  <p className="text-sm font-semibold group-hover:text-accent transition-colors">
                    App Store
                  </p>
                </div>
              </a>

              <a
                href="#"
                className="inline-flex items-center gap-3 glass-strong rounded-2xl px-6 py-4 hover:bg-accent/15 hover:border-accent/40 transition-all duration-300 group"
              >
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a1.326 1.326 0 01-.357-.774V2.588c0-.299.125-.573.357-.774zm2.983 20.365l9.447-9.447-2.474-2.474-7.033 7.033a.796.796 0 00-.23.559v.329a.794.794 0 00.29.559zm11.878-9.447L6.592 1.814l7.033 7.033 2.474-2.474 1.371 1.371zM17.408 1.814a1.326 1.326 0 01.357.774v18.824c0 .299-.125.573-.357.774L6.592 12l10.816-10.186z" />
                </svg>
                <div className="text-left">
                  <p className="text-[10px] text-muted">Get it on</p>
                  <p className="text-sm font-semibold group-hover:text-accent transition-colors">
                    Google Play
                  </p>
                </div>
              </a>
            </div>

            <Button variant="ghost" href="#contact">
              Or book a demo →
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative py-8 px-4">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full bg-accent/20 blur-[90px] pointer-events-none" />
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <PhoneMockup screen="discover" size="xl" glow eager />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
