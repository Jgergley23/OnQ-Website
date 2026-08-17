import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Memberships } from "@/components/Memberships";
import { GuestPillars } from "@/components/GuestPillars";
import { VenueTeaser } from "@/components/VenueTeaser";
import { ConsumerContact } from "@/components/ConsumerContact";
import { DownloadSection } from "@/components/DownloadSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Memberships />
        <GuestPillars />
        <VenueTeaser />
        <ConsumerContact />
        <DownloadSection />
      </main>
      <Footer />
    </>
  );
}
