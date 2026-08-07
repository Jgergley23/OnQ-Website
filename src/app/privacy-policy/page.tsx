import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — OnQ",
  description:
    "How ONQ collects, uses, and protects your information when you use the ONQ mobile app and related services.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy — OnQ",
    description:
      "How ONQ collects, uses, and protects your information when you use the ONQ mobile app and related services.",
    url: "/privacy",
  },
};

const EFFECTIVE_DATE = "August 7, 2026";
const SUPPORT_EMAIL = "onq@yopmail.com";

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    body: "This Privacy Policy explains how ONQ collects, uses, and protects your information when you use the ONQ mobile application and related services. By creating an account or using the app, you agree to the practices described here. If you do not agree, please do not use ONQ.",
  },
  {
    id: "age-requirement",
    title: "Age Requirement",
    body: "ONQ is a nightlife and events platform intended only for users who are 21 years of age or older. We do not knowingly collect information from anyone under 21. If we learn that we have collected information from someone under 21, we will delete it.",
  },
  {
    id: "information-you-provide",
    title: "Information You Provide",
    body: "When you sign up and use ONQ, we collect the details you enter, including your full name, email address, phone number, password, and optional profile picture. If you contact support, we also collect the information you choose to share.",
  },
  {
    id: "social-login",
    title: "Social Login Information",
    body: "If you sign in with Google, Facebook, or Apple, we receive basic profile information from that service, such as your name and email, according to their permissions. We do not receive your social account password. Your use of those services is also governed by their own privacy policies.",
  },
  {
    id: "location",
    title: "Location Information",
    body: "You select your state and city so we can show you relevant venues and events. With your permission, ONQ can also use your device location to suggest nearby venues and events. You can turn location access on or off at any time in your device settings.",
  },
  {
    id: "payment",
    title: "Payment Information",
    body: "Payments for tickets, memberships, reservations, and deposits are processed by Stripe. We do not collect or store your full card details. Stripe handles your payment information under its own terms, and we receive limited transaction information needed to manage your purchases, memberships, and payouts to venues.",
  },
  {
    id: "purchases",
    title: "Purchases, Tickets, and QR Codes",
    body: "We collect and store information about your ticket purchases, memberships, and reservations, including event details, membership status, reservation details, and the QR codes generated for entry and check-in. This lets you access your passes, add them to Apple Wallet, and view your purchase history.",
  },
  {
    id: "automatic",
    title: "Automatically Collected Information",
    body: "We automatically collect standard technical and usage data, such as device type, operating system, app version, in-app activity, and crash logs. This helps us operate, secure, and improve the app.",
  },
  {
    id: "notifications",
    title: "Notifications",
    body: "With your permission, ONQ sends push notifications, including confirmations for purchases, memberships, and reservations, and promotional messages from venues you engage with. You can manage notification permissions in your device settings, and a history of notifications is kept in your in-app notification hub.",
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
    body: "We use your information to create and manage your account, show location-relevant venues and events, process purchases and reservations, generate and manage QR passes, send notifications, provide support, prevent fraud and misuse, and meet legal obligations.",
  },
  {
    id: "how-we-share",
    title: "How We Share Information",
    body: "We share information with venues and promoters when you buy a ticket, join a membership, or make a reservation, so they can honor and manage it. We also share with payment, hosting, analytics, and infrastructure providers who help operate the app, and when required by law. We do not sell your personal information.",
  },
  {
    id: "retention",
    title: "Data Retention",
    body: "We keep your information while your account is active and as long as needed to provide the service and meet legal, tax, and dispute obligations. Some records, such as transaction history, may be kept longer where required by law. When information is no longer needed, we delete or de-identify it.",
  },
  {
    id: "deletion",
    title: "Account and Data Deletion",
    body: "You can delete your account at any time from the app settings. When you confirm deletion, we remove your account and associated personal data, except for information we must keep for legal, tax, or security reasons, such as records of completed transactions.",
  },
  {
    id: "security",
    title: "Data Security",
    body: "We use reasonable technical and organizational measures to protect your information, and payments are handled by trusted providers. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.",
  },
  {
    id: "rights",
    title: "Your Rights and Choices",
    body: "You can view and edit your profile, manage location and notification permissions, manage saved payment methods, and delete your account in the app. Depending on where you live, you may have rights to access, correct, or delete your personal information, and to opt out of the sale or sharing of personal information. We do not sell your personal information.",
  },
  {
    id: "international",
    title: "International Users",
    body: "Your information may be processed in countries other than where you live. Where information is transferred across borders, we take steps to protect it as described in this policy and as required by law.",
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    body: "We may update this Privacy Policy from time to time. We will notify you of significant changes through the app or by email, and the effective date below will be updated. Continued use after changes take effect means you accept the update.",
  },
  {
    id: "contact",
    title: "Contact Us",
    body: `If you have questions about this Privacy Policy or your information, contact us at ${SUPPORT_EMAIL}.`,
  },
] as const;

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen hero-gradient">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-28 md:pt-36">
          {/* Hero */}
          <header className="relative mb-14 max-w-3xl md:mb-20">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Legal
            </p>
            <h1 className="font-[family-name:var(--font-syne)] text-4xl font-extrabold tracking-tight text-white md:text-6xl">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              How ONQ collects, uses, and protects your information when you use
              the app and related services.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm text-accent">
                Effective {EFFECTIVE_DATE}
              </span>
              <Link
                href="/"
                className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-muted transition-colors hover:border-accent/40 hover:text-accent"
              >
                ← Back to home
              </Link>
            </div>
          </header>

          <div className="grid gap-10 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-14">
            {/* TOC */}
            <aside className="hidden lg:block">
              <nav
                aria-label="Privacy policy sections"
                className="glass sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto rounded-2xl p-5 scrollbar-hide"
              >
                <p className="mb-4 font-[family-name:var(--font-syne)] text-xs font-bold uppercase tracking-wider text-white/80">
                  On this page
                </p>
                <ol className="space-y-1">
                  {sections.map((section, index) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="group flex gap-2 rounded-lg px-2 py-1.5 text-sm text-muted transition-colors hover:bg-white/5 hover:text-accent"
                      >
                        <span className="shrink-0 tabular-nums text-accent/70 group-hover:text-accent">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="leading-snug">{section.title}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>

            {/* Sections */}
            <div className="space-y-5 md:space-y-6">
              {sections.map((section, index) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-colors hover:border-accent/20 md:p-8"
                >
                  <div className="mb-4 flex items-start gap-4">
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-accent/25 bg-accent/10 font-[family-name:var(--font-syne)] text-sm font-bold text-accent"
                      aria-hidden
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="pt-1.5 font-[family-name:var(--font-syne)] text-xl font-bold tracking-tight text-white md:text-2xl">
                      {section.title}
                    </h2>
                  </div>
                  <p className="pl-0 text-[15px] leading-relaxed text-muted md:pl-14 md:text-base md:leading-7">
                    {section.id === "contact" ? (
                      <>
                        If you have questions about this Privacy Policy or your
                        information, contact us at{" "}
                        <a
                          href={`mailto:${SUPPORT_EMAIL}`}
                          className="font-medium text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent"
                        >
                          {SUPPORT_EMAIL}
                        </a>
                        .
                      </>
                    ) : (
                      section.body
                    )}
                  </p>
                </section>
              ))}

              <div className="rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/10 via-transparent to-transparent p-6 md:p-8">
                <p className="font-[family-name:var(--font-syne)] text-lg font-semibold text-white">
                  Questions about your data?
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">
                  Reach the ONQ team anytime — we&apos;re here to help with
                  privacy requests and account questions.
                </p>
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="mt-5 inline-flex items-center justify-center rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-black transition-transform hover:scale-[1.02] neon-glow"
                >
                  Email {SUPPORT_EMAIL}
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
