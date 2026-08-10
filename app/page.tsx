import { BenefitsSection } from "@/components/BenefitsSection";
import { CalendarSection } from "@/components/CalendarSection";
import { ConceptSection } from "@/components/ConceptSection";
import { FAQSection } from "@/components/FAQSection";
import { FooterCTA } from "@/components/FooterCTA";
import { Hero } from "@/components/Hero";
import { LandingFooter } from "@/components/LandingFooter";
import { LandingNavbar } from "@/components/LandingNavbar";
import { PortfolioSection } from "@/components/PortfolioSection";
import { PricingSection } from "@/components/PricingSection";
import { Ticker } from "@/components/Ticker";

export default function Page() {
  return (
    <main className="site-shell">
      <LandingNavbar />
      <Hero />
      <Ticker />
      <ConceptSection />
      <PortfolioSection />
      <BenefitsSection />
      <CalendarSection />
      <PricingSection />
      <FAQSection />
      <FooterCTA />
      <LandingFooter />
    </main>
  );
}
