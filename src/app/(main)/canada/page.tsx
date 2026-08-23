import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  BrainCircuit, 
  Target, 
  TrendingUp, 
  CheckCircle, 
  CheckCircle2,
  ArrowRight,
  MoveRight, 
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
  FileCode,
  Layers,
  Cpu
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ContactForm } from '@/components/contact/contact-form';
import { portfolioProjects } from '@/lib/data';
import ServicesPreview from '@/components/home/services-preview';
import IndustriesMarquee from '@/components/home/industries-marquee';
import LocationHero from '@/components/locations/location-hero';
import AiAutomationPreview from '@/components/home/ai-automation-preview';
import InsightsSection from '@/components/home/insights-section';
import PortfolioPreview from '@/components/home/why-choose-us';
import { LocationIndustriesSection } from '@/components/locations/location-industries';

export const metadata: Metadata = {
  title: 'AI Automation & Software Development Company in Canada | Aveda Technologies',
  description: 'Aveda Technologies is a leading AI Automation Company Canada and a top Software Development Company Canada. We provide Custom Software Development, SaaS solutions, and Business Automation services across Toronto, Vancouver, and Calgary.',
  openGraph: {
    title: 'Top AI Automation & Software Development Company in Canada',
    description: 'Premier Software Engineering and AI Automation Services in Canada. Specialized in CRM ERP solutions and Digital Transformation for Canadian enterprises.',
  }
};

export default function CanadaLocationPage() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'canada-hero');
  const serviceImg = PlaceHolderImages.find(img => img.id === 'service-web-dev-detail');
  
  const locations = ['Toronto', 'Vancouver', 'Calgary', 'Ottawa', 'Montreal'];
  
  const services = [
    { icon: BrainCircuit, title: 'AI Automation Services', description: 'Intelligent AI workflows and automated agents to streamline Canadian business operations.' },
    { icon: Database, title: 'CRM Development Company', description: 'Custom CRM ERP solutions to manage your Canadian customer base efficiently.' },
    { icon: Building2, title: 'ERP Development Company', description: 'Enterprise Resource Planning systems for seamless Canadian business integrations.' },
    { icon: Cloud, title: 'SaaS Development Company', description: 'Scalable cloud-based SaaS solutions designed for the North American market.' },
    { icon: Code, title: 'Custom Software Development', description: 'Tailor-made software engineering services built to solve unique business challenges.' },
    { icon: LayoutGrid, title: 'Website Development Company', description: 'High-performance, SEO-optimized business websites for Canadian brands.' },
    { icon: Rocket, title: 'Mobile App Development Company', description: 'Engaging iOS and Android apps for the modern mobile-first Canadian consumer.' },
    { icon: Zap, title: 'Business Process Automation', description: 'End-to-end workflow automation of your core business processes and digital systems.' },
  ];

  const industries = [
    { icon: Users, title: 'Healthcare' },
    { icon: Building2, title: 'Real Estate' },
    { icon: Search, title: 'Construction' },
    { icon: Target, title: 'Manufacturing' },
    { icon: Layers, title: 'Logistics' },
    { icon: TrendingUp, title: 'Finance' },
    { icon: Rocket, title: 'Education' },
  ];

  const whyChooseUs = [
    { icon: Users, title: 'Dedicated Software Engineering Team', description: 'Expert developers assigned exclusively to your Canada-based digital projects.' },
    { icon: BrainCircuit, title: 'AI-First Development Approach', description: 'We integrate advanced AI agents into every software solution we build.' },
    { icon: ShieldCheck, title: 'Enterprise Software Security', description: 'Rigorous security protocols to protect your sensitive Canadian business data.' },
    { icon: Rocket, title: 'Agile Software Development', description: 'Fast, iterative development cycles for quick time-to-market in Canada.' },
    { icon: Phone, title: 'Ongoing Technology Support', description: '24/7 technical support and maintenance for Canadian businesses and startups.' },
    { icon: TrendingUp, title: 'Scalable Software Solutions', description: 'Future-proof software that grows with your business as you expand across Canada.' },
  ];

  const faqs = [
    { q: "Do you have physical offices in Canada?", a: "While our primary development hubs are in India, we provide 24/7 dedicated support for our Canadian clients via secure digital collaboration tools and strategic hub points in major cities like Toronto and Vancouver." },
    { q: "How do you manage the time difference with Canadian clients?", a: "We operate on an overlap schedule, ensuring our software development team is available during your peak business hours in EST and PST for seamless communication." },
    { q: "Is your software development compliant with PIPEDA?", a: "Yes, all our custom software and AI solutions for Canadian businesses are built with strict adherence to the Personal Information Protection and Electronic Documents Act (PIPEDA)." },
    { q: "What specific AI automation services do you offer in Canada?", a: "We specialize in CRM automation, AI calling agents, and business process automation tailored for the Canadian healthcare, real estate, and construction sectors." },
    { q: "Can you help Canadian startups with SaaS MVP development?", a: "Absolutely. We offer rapid SaaS prototyping and MVP development for Canadian founders looking to scale quickly in the North American market." },
    { q: "Do you accept CAD for payments?", a: "Yes, we offer flexible billing options for Canadian businesses and accept payments in CAD for convenience." },
    { q: "How secure is the data handled by your AI systems?", a: "We implement enterprise-grade encryption and secure cloud architectures (AWS/Azure) to ensure your business data remains protected." },
    { q: "Do you have experience with Canadian real estate technology?", a: "Yes, we have developed custom CRMs and automated lead generation systems specifically for real estate agencies across Toronto and Vancouver." },
    { q: "What is your typical turnaround time for a custom website in Canada?", a: "Depending on complexity, a custom, SEO-optimized business website usually takes between 3 to 6 weeks from strategy to launch." },
    { q: "How can I get a project estimate for my Canada-based business?", a: "You can schedule a free technology consulting call or fill out our contact form to get a detailed project estimate within 24 hours." }
  ];

  const caseStudies = portfolioProjects.slice(0, 4);

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section (Matching Reference Home Page UI) */}
      <LocationHero
        country="Canada"
        cities={locations}
        description="Aveda Technologies builds proprietary SaaS products and delivers AI automation, custom software development, web and mobile applications, cloud solutions, UI/UX design, digital marketing, and enterprise technology solutions for businesses in Toronto, Vancouver, and Calgary to accelerate growth."
      />

      {/* City Hubs Banner */}
      <section className="py-3 bg-[#faf8f3] border-b border-[#e2dcd0]">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Major Canadian Tech Hubs:</p>
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
              Canada-Focused AI & Software Solutions
            </h2>
            <p className="font-inter text-slate-950 text-xs sm:text-sm mt-1">
              Scalable digital engineering tailored for Canadian enterprise growth.
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
              Why Choose Aveda Technologies in Canada?
            </h2>
            <p className="font-inter text-slate-950 text-xs sm:text-sm mt-1">
              High-performance technology solutions backed by global delivery capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((feature, idx) => (
              <div key={idx} className="group rounded-2xl border border-[#e2dcd0] bg-[#faf8f3] p-6 flex items-center gap-4 transition-all duration-300 hover:border-red-500/50 hover:shadow-xl hover:-translate-y-1">
                <CheckCircle2 className="h-6 w-6 text-red-600 shrink-0" />
                <span className="font-soehne text-xs sm:text-sm font-bold text-slate-950 leading-snug">
                  {typeof feature === 'string' ? feature : feature.title}
                </span>
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
              Everything you need to know about partnering with Aveda Technologies in Canada.
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
            Ready to Automate Your Business in Canada?
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
