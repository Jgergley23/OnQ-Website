const footerLinks = {
  Product: [
    { label: "For Guests", href: "/#consumers" },
    { label: "For Venues", href: "/#venues" },
    { label: "Memberships", href: "/#memberships" },
    { label: "AI Marketing", href: "/#compare" },
  ],
  Company: [
    { label: "About", href: "/#" },
    { label: "Careers", href: "/#" },
    { label: "Press", href: "/#" },
    { label: "Contact", href: "/#consultation" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/#" },
    { label: "Cookie Policy", href: "/#" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="OnQ"
              width={120}
              height={40}
              className="h-10 w-auto mb-6"
            />
            <p className="text-muted text-sm leading-relaxed max-w-sm mb-6">
              The operating system for nightlife. One app connecting guests,
              members, promoters, and venues in one seamless ecosystem.
            </p>
            <p className="text-accent text-sm font-medium tracking-wide">
              One App. Every Night Out.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-[family-name:var(--font-syne)] text-sm font-bold mb-4">
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

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
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
