import HeroSection from '@/components/home/hero-section';
import ServicesPreview from '@/components/home/services-preview';
import AboutUs from '@/components/home/portfolio-preview';
import PortfolioPreview from '@/components/home/why-choose-us';
import CtaSection from '@/components/home/cta-section';
import InsightsSection from '@/components/home/insights-section';
import VideoSection from '@/components/home/video-section';
import AiAutomationPreview from '@/components/home/ai-automation-preview';
import AiCallingAgents from '@/components/home/ai-calling-agents';
import WhatsAppAutomation from '@/components/home/whatsapp-automation';
import CountriesWeServe from '@/components/home/countries-we-serve';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <AiCallingAgents />
      <AiAutomationPreview />
      <WhatsAppAutomation />
      <AboutUs />
      <VideoSection />
      <PortfolioPreview />
      <CountriesWeServe />
      <InsightsSection />
      <CtaSection />
    </>
  );
}
