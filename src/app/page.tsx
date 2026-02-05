import HeroSection from '@/components/home/hero-section';
import StatsSection from '@/components/home/stats-section';
import ServicesPreview from '@/components/home/services-preview';
import WhyChooseUs from '@/components/home/why-choose-us';
import PortfolioPreview from '@/components/home/portfolio-preview';
import FinalCta from '@/components/home/final-cta';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesPreview />
      <WhyChooseUs />
      <PortfolioPreview />
      <FinalCta />
    </>
  );
}
