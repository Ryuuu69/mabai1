// app/page.tsx
import HeroSection from "@/components/home/hero-section";
import { ServicesSection } from "@/components/home/services-section";
import { DemosSection } from "@/components/home/demos-section";
import { FAQSection } from "@/components/home/faq-section";
import { PacksSection } from "@/components/home/packs-section";
import { ResultsSection } from "@/components/home/results-section";
import { AboutSection } from "@/components/home/about-section";

export const metadata = {
  title: "MABAI - Solutions digitales qui convertissent",
  description:
    "Sites & boutiques qui convertissent, campagnes qui ramènent, automatisations et agents IA qui qualifient et bookent. MVP en 14 jours, ROI mesuré.",
  openGraph: {
    title: "MABAI - Solutions digitales qui convertissent",
    description:
      "Sites & boutiques qui convertissent, campagnes qui ramènent, automatisations et agents IA qui qualifient et bookent.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <DemosSection />
      <PacksSection />
      <ResultsSection />
      <AboutSection />
      <FAQSection />
    </main>
  );
}
