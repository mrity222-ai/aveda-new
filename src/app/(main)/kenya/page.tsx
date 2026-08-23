import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  BrainCircuit, 
  Target, 
  TrendingUp, 
  Phone, 
  ShieldCheck, 
  Zap, 
  Users,
  MapPin,
  Code,
  Building2,
  Rocket,
  Search,
  LayoutGrid,
  Database,
  Cloud,
  Layers,
  ArrowRight,
  CheckCircle2,
  ShoppingBag,
  Stethoscope,
  GraduationCap,
  Truck
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { portfolioProjects } from '@/lib/data';
import ServicesPreview from '@/components/home/services-preview';
import IndustriesMarquee from '@/components/home/industries-marquee';
import LocationHero from '@/components/locations/location-hero';
import AiAutomationPreview from '@/components/home/ai-automation-preview';
import InsightsSection from '@/components/home/insights-section';
import PortfolioPreview from '@/components/home/why-choose-us';
import { LocationIndustriesSection } from '@/components/locations/location-industries';

export const metadata: Metadata = {
  title: 'Top AI Automation & Software Development Company in Kenya | Aveda Technologies',
  description: 'Aveda Technologies is a premier AI Automation & Custom Software Development Company in Kenya. We build enterprise SaaS platforms, AI calling agents, and custom software across Nairobi, Mombasa, and Kisumu.',
};

export default function KenyaLocationPage() {
  const locations = ['Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Eldoret'];
  
  const services = [
    { icon: BrainCircuit, title: 'AI Automation & Agents', description: 'Intelligent AI workflows engineered for African tech hubs and financial institutions.' },
    { icon: Database, title: 'Custom CRM Solutions', description: 'Tailor-made CRM and lead management systems designed for African enterprise growth.' },
    { icon: Building2, title: 'Enterprise ERP Systems', description: 'Robust ERP platforms connecting operations, agriculture, and supply chain logistics.' },
    { icon: Cloud, title: 'SaaS Platform Engineering', description: 'Scalable cloud-native SaaS applications engineered for rapid market expansion.' },
    { icon: Code, title: 'Custom Software Development', description: 'High-performance software systems built for Kenyan commercial leaders.' },
    { icon: LayoutGrid, title: 'Managed Web Engineering', description: 'High-speed business websites with cloud hosting, SSL security, and maintenance.' },
    { icon: Rocket, title: 'Mobile App Engineering', description: 'Native iOS & Android mobile applications built for modern mobile-first users.' },
    { icon: Zap, title: 'Workflow Automation', description: 'End-to-end process automation eliminating manual administrative tasks.' },
  ];

  const industries = [
    { icon: Stethoscope, title: 'Healthcare' },
    { icon: Building2, title: 'Real Estate' },
    { icon: Target, title: 'Agriculture & Manufacturing' },
    { icon: TrendingUp, title: 'Fintech & Mobile Payments' },
    { icon: ShoppingBag, title: 'E-Commerce' },
    { icon: Truck, title: 'Logistics' },
    { icon: GraduationCap, title: 'EdTech' },
  ];

  const whyChooseUs = [
    'Dedicated Kenya-aligned software engineering teams',
    'AI-first architecture with autonomous agents',
    'Enterprise-grade security and data privacy compliance',
    'Agile development sprints with rapid time-to-market',
    '24/7 technical support aligned with EAT timezone',
    'Scalable cloud infrastructure (AWS / Google Cloud)',
  ];

  const faqs = [
    { q: "What software development services do you offer in Kenya?", a: "We specialize in custom enterprise software, AI calling agents, SaaS platforms, custom CRMs, and mobile applications for businesses in Nairobi, Mombasa, and Kisumu." },
    { q: "Can you build integrations for Kenyan payment gateways (M-Pesa, Flutterwave)?", a: "Yes. Our engineering teams have extensive experience building seamless integrations with M-Pesa, Bank APIs, and international payment gateways." },
    { q: "Do you support local East Africa (EAT) working hours?", a: "Yes. Our African client delivery teams operate on EAT time-zone alignment, providing real-time support, daily standups, and direct communication." },
  ];

  const caseStudies = portfolioProjects.slice(0, 3);

  return (
    <div className="bg-[#f5f2eb] text-slate-950 font-inter antialiased min-h-screen relative overflow-hidden">
      
      {/* Vertical Pinstripes Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30 z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="kenya-pinstripes" width="48" height="100%" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="100%" stroke="#d3ccbe" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#kenya-pinstripes)" />
        </svg>
      </div>

      {/* Hero Section (Matching Reference Home Page UI) */}
      <LocationHero
        country="Kenya"
        cities={locations}
        description="Aveda Technologies builds proprietary SaaS products and delivers AI automation, custom software development, web and mobile applications, cloud solutions, UI/UX design, digital marketing, and enterprise technology solutions for businesses in Nairobi, Mombasa, and Kisumu to accelerate growth."
      />

      {/* City Hubs Banner */}
      <section className="py-3 bg-[#faf8f3] border-b border-[#e2dcd0]">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Major Kenyan Tech Hubs:</p>
            {locations.map((city) => (
              <div key={city} className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-red-600" />
                <span className="font-soehne text-sm font-bold text-slate-900">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <ServicesPreview />

      {/* Domain Expertise Section */}
      <IndustriesMarquee />

      {/* Process Automation Section (5th position) */}
      <AiAutomationPreview />

      {/* Services Grid (Home Page Capabilities Style) */}
      <section className="py-6 md:py-8 border-b border-[#e2dcd0]">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-5">
            <h2 className="font-soehne text-xs sm:text-sm lg:text-xl font-bold tracking-tight text-slate-950">
              Kenya-Focused AI & Software Solutions
            </h2>
            <p className="font-inter text-slate-950 text-xs sm:text-sm mt-1">
              Empowering East Africa's leading businesses with scalable cloud & AI engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div key={service.title} className="group rounded-2xl border border-[#e2dcd0] bg-[#faf8f3] p-8 text-center transition-all duration-300 hover:border-red-500/50 hover:shadow-xl hover:-translate-y-1">
                <div className="flex justify-center mb-6">
                  <div className="w-14 h-14 rounded-xl bg-red-50 border border-red-100 text-red-600 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <service.icon className="h-7 w-7" />
                  </div>
                </div>
                <h3 className="font-soehne text-xs sm:text-sm font-bold text-slate-950 mb-2">{service.title}</h3>
                <p className="font-inter text-[10px] text-slate-950 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* What's New Section (8th Position) */}
      <InsightsSection />

      {/* Why Choose Us */}
      <section className="py-6 md:py-8 border-b border-[#e2dcd0]">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-5">
            <h2 className="font-soehne text-xs sm:text-sm lg:text-xl font-bold tracking-tight text-slate-950">
              Why Choose Aveda Technologies in Kenya?
            </h2>
            <p className="font-inter text-slate-950 text-xs sm:text-sm mt-1">
              Combining Silicon Savannah energy with high-performance global technology architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((feature) => (
              <div key={feature} className="group rounded-2xl border border-[#e2dcd0] bg-[#faf8f3] p-6 flex items-center gap-4 transition-all duration-300 hover:border-red-500/50 hover:shadow-xl hover:-translate-y-1">
                <CheckCircle2 className="h-6 w-6 text-red-600 shrink-0" />
                <span className="font-soehne text-xs sm:text-sm font-bold text-slate-950 leading-snug">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Projects & Proprietary SaaS Solutions Carousel */}
      <PortfolioPreview />

      {/* FAQ Section */}
      <section className="py-6 md:py-8 border-b border-[#e2dcd0] bg-[#faf8f3]">
        <div className="container max-w-4xl mx-auto px-6">
          <div className="text-center mb-5">
            <h2 className="font-soehne text-xs sm:text-sm lg:text-xl font-bold tracking-tight text-slate-950">
              Frequently Asked Questions
            </h2>
            <p className="font-inter text-slate-950 text-xs sm:text-sm mt-1">
              Everything you need to know about partnering with Aveda Technologies in Kenya.
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="border border-[#e2dcd0] bg-white rounded-2xl px-6 py-2">
                <AccordionTrigger className="font-soehne text-xs sm:text-sm font-bold text-slate-950 hover:no-underline text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-inter text-slate-950 text-xs leading-relaxed pt-1">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Footer Card */}
      <section className="py-5 bg-white text-center">
        <div className="container max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="font-soehne text-xs sm:text-sm font-bold text-slate-950">
            Ready to Automate Your Business in Kenya?
          </h2>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Button asChild size="lg" className="h-14 px-8 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest rounded-none shadow-xl shadow-red-600/20">
              <Link href="/contact">
                Schedule Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
