"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "./ui/Button";

const navLinks = [
  { label: "For Guests", href: "/#consumers" },
  { label: "For Venues", href: "/#venues" },
  { label: "Memberships", href: "/#memberships" },
  { label: "Why OnQ", href: "/#compare" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-40 md:hidden"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          mobileOpen
            ? "bg-black border-b border-white/10 py-3"
            : scrolled
              ? "glass-strong py-3"
              : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">
          <a href="/" className="relative z-10 bg-transparent">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="OnQ"
              width={100}
              height={33}
              className="h-8 w-auto"
            />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-accent transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" href="/#download">
              Download App
            </Button>
            <Button variant="primary" size="sm" href="/#consultation">
              Book a Consultation
            </Button>
          </div>

          <button
            className="md:hidden relative z-10 p-2 -mr-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>

          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="absolute left-0 right-0 top-full bg-black border-t border-white/10 overflow-hidden md:hidden shadow-[0_24px_48px_rgba(0,0,0,0.5)]"
              >
                <nav className="flex flex-col gap-1 p-6">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-lg text-white py-3 px-2 rounded-xl hover:text-accent hover:bg-white/5 transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}
                  <div className="flex flex-col gap-3 pt-4 mt-2 border-t border-white/10">
                    <Button
                      variant="secondary"
                      href="/#download"
                      onClick={() => setMobileOpen(false)}
                    >
                      Download App
                    </Button>
                    <Button
                      variant="primary"
                      href="/#consultation"
                      onClick={() => setMobileOpen(false)}
                    >
                      Book a Consultation
                    </Button>
                  </div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
}
