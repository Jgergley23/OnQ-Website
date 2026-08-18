const footerLinks = {
  Guests: [
    { label: "Memberships", href: "/#memberships" },
    { label: "Exclusive Access", href: "/#exclusive" },
    { label: "Events", href: "/events" },
    { label: "Contact Us", href: "/#contact" },
    { label: "Download", href: "/#download" },
  ],
  Venues: [
    { label: "For Venues", href: "/venues" },
    { label: "Book a Demo", href: "/venues#consultation" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/#" },
    { label: "Cookie Policy", href: "/#" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-accent/20 bg-[#02080c] pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(109,221,235,0.1),transparent_55%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="OnQ"
              width={140}
              height={46}
              className="h-11 w-auto mb-6"
            />
            <p className="text-muted text-sm leading-relaxed max-w-sm mb-6">
              Access Reserved. Exclusive membership—always on the list. A
              lifestyle brand that keeps you active day and night.
            </p>
            <p className="text-accent text-sm font-medium tracking-wide">
              Always on the list
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-[family-name:var(--font-display)] text-sm font-semibold mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted hover:text-accent transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-accent/15 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} OnQ. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Instagram", "TikTok", "Twitter", "LinkedIn"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-xs text-muted hover:text-accent transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
