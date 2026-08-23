import HeroSection from '@/components/home/hero-section';
import ServicesPreview from '@/components/home/services-preview';
import AiCallingAgents from '@/components/home/ai-calling-agents';
import IndustriesMarquee from '@/components/home/industries-marquee';
import AiAutomationPreview from '@/components/home/ai-automation-preview';
import AboutUs from '@/components/home/portfolio-preview';
import VideoSection from '@/components/home/video-section';
import PortfolioPreview from '@/components/home/why-choose-us';
import SuccessStoriesSection from '@/components/home/success-stories';
import InsightsSection from '@/components/home/insights-section';
import CtaSection from '@/components/home/cta-section';
import ScrollReveal from '@/components/common/scroll-reveal';

export default function Home() {
  return (
    <>
      <HeroSection />
      
      <ScrollReveal variant="fade-up" delay={100}>
        <ServicesPreview />
      </ScrollReveal>
      
      <ScrollReveal variant="fade-up" delay={100}>
        <AiCallingAgents />
      </ScrollReveal>
      
      <ScrollReveal variant="fade-up" delay={100}>
        <IndustriesMarquee />
      </ScrollReveal>
      
      <ScrollReveal variant="fade-up" delay={100}>
        <AiAutomationPreview />
      </ScrollReveal>
      
      <ScrollReveal variant="fade-up" delay={100}>
        <AboutUs />
      </ScrollReveal>
      
      <ScrollReveal variant="fade-up" delay={100}>
        <VideoSection />
      </ScrollReveal>
      
      <ScrollReveal variant="fade-up" delay={100}>
        <PortfolioPreview />
      </ScrollReveal>
      
      <ScrollReveal variant="fade-up" delay={100}>
        <SuccessStoriesSection />
      </ScrollReveal>
      
      <ScrollReveal variant="fade-up" delay={100}>
        <InsightsSection />
      </ScrollReveal>
      
      <ScrollReveal variant="fade-up" delay={100}>
        <CtaSection />
      </ScrollReveal>
    </>
  );
}
