import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TwoSidedMarketplace } from "@/components/TwoSidedMarketplace";
import { ConsumerExperience } from "@/components/ConsumerExperience";
import { VenueGrowth } from "@/components/VenueGrowth";
import { Memberships } from "@/components/Memberships";
import { AIMarketing } from "@/components/AIMarketing";
import { ComparisonTable } from "@/components/ComparisonTable";
import { ConsultationForm } from "@/components/ConsultationForm";
import { DownloadSection } from "@/components/DownloadSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TwoSidedMarketplace />
        <ConsumerExperience />
        <VenueGrowth />
        <Memberships />
        <AIMarketing />
        <ComparisonTable />
        <ConsultationForm />
        <DownloadSection />
      </main>
      <Footer />
    </>
  );
}
