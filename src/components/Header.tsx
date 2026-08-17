"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button } from "./ui/Button";

const guestLinks = [
  { label: "Memberships", href: "/#memberships" },
  { label: "Exclusive", href: "/#exclusive" },
  { label: "Events", href: "/#events" },
  { label: "Contact", href: "/#contact" },
];

const venueLinks = [
  { label: "For Guests", href: "/" },
  { label: "Contact", href: "/venues#consultation" },
];

export function Header() {
  const pathname = usePathname();
  const isVenues = pathname?.startsWith("/venues");
  const navLinks = isVenues ? venueLinks : guestLinks;

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
            className="fixed inset-0 bg-[#02080c]/92 backdrop-blur-md z-40 md:hidden"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          mobileOpen
            ? "bg-[#02080c] border-b border-accent/20 py-3"
            : scrolled
              ? "glass-strong border-b border-accent/15 py-3"
              : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">
          <a href="/" className="relative z-10 bg-transparent">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="OnQ"
              width={160}
              height={52}
              className="h-11 md:h-12 w-auto"
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
            {!isVenues && (
              <a
                href="/venues"
                className="text-sm text-muted hover:text-accent transition-colors duration-300"
              >
                For Venues
              </a>
            )}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            {isVenues ? (
              <Button variant="primary" size="sm" href="/venues#consultation">
                Contact Us
              </Button>
            ) : (
              <>
                <Button variant="ghost" size="sm" href="/#contact">
                  Contact Us
                </Button>
                <Button variant="primary" size="sm" href="/#download">
                  Download App
                </Button>
              </>
            )}
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
                className="absolute left-0 right-0 top-full bg-[#031016] border-t border-accent/20 overflow-hidden md:hidden shadow-[0_24px_48px_rgba(0,0,0,0.5)]"
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
                  {!isVenues && (
                    <a
                      href="/venues"
                      className="text-lg text-white py-3 px-2 rounded-xl hover:text-accent hover:bg-white/5 transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      For Venues
                    </a>
                  )}
                  <div className="flex flex-col gap-3 pt-4 mt-2 border-t border-accent/20">
                    {isVenues ? (
                      <Button
                        variant="primary"
                        href="/venues#consultation"
                        onClick={() => setMobileOpen(false)}
                      >
                        Contact Us
                      </Button>
                    ) : (
                      <>
                        <Button
                          variant="secondary"
                          href="/#contact"
                          onClick={() => setMobileOpen(false)}
                        >
                          Contact Us
                        </Button>
                        <Button
                          variant="primary"
                          href="/#download"
                          onClick={() => setMobileOpen(false)}
                        >
                          Download App
                        </Button>
                      </>
                    )}
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
