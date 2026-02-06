import HeroSection from '@/components/home/hero-section';
import StatsSection from '@/components/home/stats-section';
import ServicesPreview from '@/components/home/services-preview';
import AboutUs from '@/components/home/portfolio-preview';
import PortfolioPreview from '@/components/home/why-choose-us';
import FinalCta from '@/components/home/final-cta';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <AboutUs />
      <PortfolioPreview />
      <StatsSection />
      <FinalCta />
    </>
  );
}
