import AboutSection from "@/components/home/About";
import ClientsSection from "@/components/home/Clients";
import CTASection from "@/components/home/Cta";
import HeroSection from "@/components/home/Hero";
import ServicesSection from "@/components/home/Services";
import WhyUsSection from "@/components/home/WhyUs";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <WhyUsSection />
      <ServicesSection />
      <ClientsSection />
      <CTASection />
    </main>
  );
}