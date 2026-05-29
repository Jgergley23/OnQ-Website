"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { PhoneMockup, type ScreenType } from "./ui/PhoneMockup";

const phones: {
  screen: ScreenType;
  label: string;
  style: React.CSSProperties;
  float: { y: number[]; duration: number; delay: number };
  size: "md" | "lg";
  zIndex: number;
}[] = [
  {
    screen: "tickets",
    label: "Tickets",
    style: {
      transform: "rotateY(28deg) rotateZ(-6deg) translateX(-55%) translateZ(-80px)",
    },
    float: { y: [0, 10, 0], duration: 5.5, delay: 0.8 },
    size: "md",
    zIndex: 10,
  },
  {
    screen: "discover",
    label: "Discover",
    style: {
      transform: "rotateY(0deg) translateZ(60px) scale(1.06)",
    },
    float: { y: [0, -14, 0], duration: 5, delay: 0 },
    size: "lg",
    zIndex: 30,
  },
  {
    screen: "membership",
    label: "Access",
    style: {
      transform: "rotateY(-28deg) rotateZ(6deg) translateX(55%) translateZ(-80px)",
    },
    float: { y: [0, -8, 0], duration: 6, delay: 1.2 },
    size: "md",
    zIndex: 10,
  },
];

function PhoneStage({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[340px] md:h-[340px] rounded-full bg-accent/20 blur-[100px] animate-pulse-glow pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[200px] h-[200px] rounded-full bg-purple-500/10 blur-[80px] pointer-events-none" />

      {/* Floor reflection arc */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[70%] h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[50%] h-16 bg-accent/5 blur-2xl rounded-full pointer-events-none" />

      {/* 3D stage */}
      <div
        className="relative mx-auto w-[300px] md:w-[380px] h-[420px] md:h-[500px]"
        style={{ perspective: "1400px" }}
      >
        <div
          className="relative w-full h-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          {phones.map((phone, i) => (
            <motion.div
              key={phone.screen}
              initial={{ opacity: 0, y: 40, rotateX: 10 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.7, delay: 0.35 + i * 0.12, ease: "easeOut" }}
              className="absolute inset-0 flex items-center justify-center"
              style={{ zIndex: phone.zIndex, ...phone.style }}
            >
              <motion.div
                animate={{ y: phone.float.y }}
                transition={{
                  duration: phone.float.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: phone.float.delay,
                }}
                className="relative group"
              >
                {phone.zIndex === 30 && (
                  <div className="absolute -inset-4 rounded-[2.5rem] bg-accent/10 blur-xl opacity-60 group-hover:opacity-80 transition-opacity" />
                )}
                <PhoneMockup
                  screen={phone.screen}
                  size={phone.size}
                  eager={phone.screen === "discover"}
                  glow={phone.zIndex === 30}
                />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] md:text-xs tracking-[0.15em] uppercase text-muted/80 font-medium">
                  {phone.label}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden pt-28 pb-20">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-accent/5 blur-[120px] animate-pulse-glow" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-8rem)]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left z-10"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-accent text-sm md:text-base font-medium tracking-[0.2em] uppercase mb-6"
            >
              One App. Every Night Out.
            </motion.p>

            <h1 className="font-[family-name:var(--font-syne)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
              The Operating System for{" "}
              <span className="gradient-text">Nightlife</span>
            </h1>

            <p className="text-muted text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10">
              Discover events, book VIP tables, manage memberships, skip lines,
              and experience nightlife like never before—all while helping
              venues increase revenue and streamline operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="primary" size="lg" href="#consultation">
                Book a Consultation
              </Button>
              <Button variant="secondary" size="lg" href="#download">
                Download the App
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.25 }}
            className="hidden md:flex items-center justify-center"
          >
            <PhoneStage />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="md:hidden flex justify-center py-4"
          >
            <PhoneStage className="scale-[0.72] origin-top" />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
