import { Hero } from "@/components/Hero";
import { Ticker } from "@/components/Ticker";
import { ConceptSection } from "@/components/ConceptSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { CalendarSection } from "@/components/CalendarSection";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { FooterCTA } from "@/components/FooterCTA";
import { LandingFooter } from "@/components/LandingFooter";
import { LandingNavbar } from "@/components/LandingNavbar";

export default function Page() {
  return (
    <main className="landing" style={{ background: "#0A0A0A", color: "#F2EDE4" }}>
      <LandingNavbar />
      <Hero />
      <Ticker />
      <ConceptSection />
      <BenefitsSection />
      <PortfolioSection />
      <CalendarSection />
      <PricingSection />
      <FAQSection />
      <FooterCTA />
      <LandingFooter />
    </main>
  );
}
