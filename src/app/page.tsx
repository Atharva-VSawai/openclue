import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import PricingSection from '@/components/home/PricingSection';
import DemoVideoSection from '@/components/home/DemoVideoSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import FAQSection from '@/components/home/FAQSection';

export default function HomePage() {
  return (
    <main className="bg-navy-900">
      <Navbar />
      <HeroSection />
      <div className="section-divider" />
      <FeaturesSection />
      <div className="section-divider" />
      <PricingSection />
      <div className="section-divider" />
      <DemoVideoSection />
      <div className="section-divider" />
      <TestimonialsSection />
      <div className="section-divider" />
      <FAQSection />
      <Footer />
    </main>
  );
}
