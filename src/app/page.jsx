import AboutSection from "@/components/home/About";
import ClientsSection from "@/components/home/Clients";
import CTASection from "@/components/home/Cta";
import HeroSection from "@/components/home/Hero";
import IndustriesCapabilitiesSection from "@/components/home/industries";
import PromiseSection from "@/components/home/Promise";
import ServicesSection from "@/components/home/Services";
import ServicesHighlightStrip from "@/components/home/ServiceStrip";
import StatsSection from "@/components/home/Stats";
import WhyUsSection from "@/components/home/WhyUs";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      {/* <ServicesHighlightStrip /> */}
      <AboutSection />
      <ServicesSection />
      <StatsSection />
      <IndustriesCapabilitiesSection />
      <WhyUsSection />
      <PromiseSection />
      <ClientsSection />
      <CTASection />
    </main>
  );
}