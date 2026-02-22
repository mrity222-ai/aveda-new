import HeroSection from '@/components/home/hero-section';
import ServicesPreview from '@/components/home/services-preview';
import AboutUs from '@/components/home/portfolio-preview';
import PortfolioPreview from '@/components/home/why-choose-us';
import CtaSection from '@/components/home/cta-section';
import InsightsSection from '@/components/home/insights-section';
import VideoSection from '@/components/home/video-section';
import AiAutomationPreview from '@/components/home/ai-automation-preview';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <AiAutomationPreview />
      <AboutUs />
      <VideoSection />
      <PortfolioPreview />
      <InsightsSection />
      <CtaSection />
    </>
  );
}
