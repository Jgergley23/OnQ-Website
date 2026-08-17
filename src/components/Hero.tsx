"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-28 pb-20">
      {/* Fresh hero atmosphere — deep night + Q cyan wash */}
      <div className="absolute inset-0 bg-[#02080c]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_40%,rgba(109,221,235,0.32),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_15%_70%,rgba(109,221,235,0.14),transparent_50%)]" />
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#04141a] to-transparent" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-8rem)]">
          {/* Slogan */}
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
                Book a Demo
              </Button>
              <Button variant="secondary" size="lg" href="#download">
                Download the App
              </Button>
            </div>
          </motion.div>

          {/* Shiny turquoise card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.12 }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[520px]">
              {/* Turquoise bloom behind card */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[70%] rounded-full bg-[#6dddeb]/40 blur-[90px] pointer-events-none" />
              <div className="absolute left-[20%] top-[30%] w-40 h-40 rounded-full bg-[#9aebf5]/20 blur-[50px] pointer-events-none" />

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
                style={{ perspective: "1200px" }}
              >
                <div
                  className="relative"
                  style={{
                    transform: "rotateY(-12deg) rotateX(6deg) rotateZ(-3deg)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Specular sweep */}
                  <div className="absolute inset-0 z-10 overflow-hidden rounded-2xl pointer-events-none">
                    <div className="card-shine" />
                  </div>

                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/membership-card.png"
                    alt="OnQ membership card"
                    width={472}
                    height={304}
                    className="relative w-full h-auto rounded-2xl shadow-[0_40px_80px_rgba(0,0,0,0.55),0_0_60px_rgba(58,213,234,0.25)]"
                  />
                </div>
              </motion.div>

              <p className="mt-10 text-center text-[11px] tracking-[0.28em] uppercase text-white/40">
                Your membership card
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
