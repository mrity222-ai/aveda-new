import HeroSection from '@/components/home/hero-section';
import StatsSection from '@/components/home/stats-section';
import ServicesPreview from '@/components/home/services-preview';
import AboutUs from '@/components/home/portfolio-preview';
import PortfolioPreview from '@/components/home/why-choose-us';
import CtaSection from '@/components/home/cta-section';
import InsightsSection from '@/components/home/insights-section';
import TestimonialsSection from '@/components/home/testimonials-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <AboutUs />
      <PortfolioPreview />
      <StatsSection />
      <InsightsSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
