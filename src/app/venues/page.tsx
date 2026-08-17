import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { VenuePitch } from "@/components/VenuePitch";
import { ConsultationForm } from "@/components/ConsultationForm";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "For Venues — OnQ",
  description:
    "Fill more nights and grow revenue with memberships, tickets, and VIP booking. Book a meeting with OnQ.",
  openGraph: {
    title: "For Venues — OnQ",
    description:
      "Fill more nights and grow revenue with memberships, tickets, and VIP booking. Book a meeting with OnQ.",
    url: "/venues",
  },
};

export default function VenuesPage() {
  return (
    <>
      <Header />
      <main>
        <VenuePitch />
        <ConsultationForm />
      </main>
      <Footer />
    </>
  );
}
