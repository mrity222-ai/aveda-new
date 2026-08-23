
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
  Layers,
  Cpu,
  Star,
  Globe2,
  FileCode,
  Laptop,
  Briefcase,
  Store,
  Factory,
  HeartPulse
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ContactForm } from '@/components/contact/contact-form';
import { portfolioProjects } from '@/lib/data';
import ServicesPreview from '@/components/home/services-preview';
import IndustriesMarquee from '@/components/home/industries-marquee';
import LocationHero from '@/components/locations/location-hero';
import { LocationIndustriesSection } from '@/components/locations/location-industries';
import AiAutomationPreview from '@/components/home/ai-automation-preview';
import InsightsSection from '@/components/home/insights-section';
import PortfolioPreview from '@/components/home/why-choose-us';

export const metadata: Metadata = {
  title: 'AI Automation & Software Development Company in Netherlands | Aveda Technologies',
  description: 'Aveda Technologies provides AI Automation, CRM Development, ERP Solutions, SaaS Development and Custom Software Services across Netherlands including Amsterdam, Rotterdam, Utrecht and Eindhoven.',
  openGraph: {
    title: 'AI Automation & Software Development Company in Netherlands',
    description: 'Aveda Technologies provides AI Automation, CRM Development, ERP Solutions, SaaS Development and Custom Software Services across Netherlands.',
  }
};

export default function NetherlandsLocationPage() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'australia-hero'); // Reusing high-quality tech team image
  
  const cities = ['Amsterdam', 'Rotterdam', 'Utrecht', 'Eindhoven', 'The Hague', 'Haarlem'];
  
  const services = [
    { icon: BrainCircuit, title: 'AI Automation Solutions', description: 'Intelligent AI workflows to automate repetitive business tasks and increase efficiency.' },
    { icon: Database, title: 'CRM Software Development', description: 'Custom CRM solutions to manage your Dutch customer base efficiently.' },
    { icon: Building2, title: 'ERP Systems Development', description: 'Enterprise Resource Planning systems for seamless operational integration.' },
    { icon: Cloud, title: 'SaaS Platform Development', description: 'Scalable cloud-based software solutions designed for the global market.' },
    { icon: Code, title: 'Custom Software Engineering', description: 'Tailor-made software built to solve your unique business challenges.' },
    { icon: Zap, title: 'Business Process Automation', description: 'End-to-end automation of your core business processes and digital workflows.' },
    { icon: Rocket, title: 'Mobile App Development', description: 'Engaging iOS and Android apps for the modern mobile-first consumer.' },
    { icon: LayoutGrid, title: 'Enterprise Web Applications', description: 'High-performance, secure, and scalable web-based business systems.' },
  ];

  const industries = [
    { icon: Rocket, title: 'Technology Startups' },
    { icon: Factory, title: 'Manufacturing' },
    { icon: Layers, title: 'Logistics' },
    { icon: HeartPulse, title: 'Healthcare' },
    { icon: TrendingUp, title: 'Finance' },
    { icon: Building2, title: 'Real Estate' },
    { icon: Briefcase, title: 'Professional Services' },
    { icon: Store, title: 'E-Commerce' },
  ];

  const whyChooseUs = [
    { icon: BrainCircuit, title: 'AI-Driven Innovation', description: 'We integrate advanced AI into every software solution we build.' },
    { icon: Rocket, title: 'Agile Software Development', description: 'Fast, iterative development cycles for quick time-to-market.' },
    { icon: ShieldCheck, title: 'Enterprise-Grade Security', description: 'Rigorous security protocols to protect your sensitive business data.' },
    { icon: TrendingUp, title: 'Scalable Cloud Architecture', description: 'Software that grows with your business as you expand across Europe.' },
    { icon: Users, title: 'Dedicated Development Teams', description: 'Expert developers assigned exclusively to your Netherlands-based projects.' },
    { icon: Star, title: 'Proven Industry Experience', description: 'Years of expertise delivering high-impact digital solutions globally.' },
  ];

  const faqs = [
    { q: "What are the benefits of AI automation for Dutch businesses?", a: "AI automation reduces operational costs, eliminates manual errors, and allows your team to focus on high-value strategic work, which is crucial in the competitive Dutch market." },
    { q: "How long does a CRM implementation take?", a: "A custom CRM implementation usually takes between 4-12 weeks depending on complexity. We follow an agile process to deliver an MVP as quickly as possible." },
    { q: "What are the advantages of custom ERP software?", a: "Custom ERPs integrate all your business functions—from inventory to finance—into one seamless system, providing real-time data and improving overall efficiency." },
    { q: "Do you specialize in SaaS product development?", a: "Yes, we help Dutch startups and enterprises build scalable, cloud-native SaaS platforms designed for global reach and high performance." },
    { q: "What is your digital transformation strategy?", a: "We audit your current systems, identify automation gaps, and create a roadmap to modernize your technology stack using AI and cloud solutions." },
    { q: "How much does custom software development cost in the Netherlands?", a: "Costs vary based on scope and tech stack. We provide transparent, value-based pricing and detailed project estimates after a free consultation." },
    { q: "Can you handle enterprise software development?", a: "Absolutely. We build robust, secure, and high-availability systems for large-scale organizations with complex requirements." },
    { q: "What are the benefits of workflow automation?", a: "Workflow automation streamlines repetitive tasks, ensures consistent data handling, and significantly speeds up business processes like lead nurturing and invoicing." },
    { q: "Do you offer cloud application development?", a: "Yes, we build and migrate applications to AWS, Google Cloud, and Azure, ensuring they are scalable, secure, and cost-effective." },
    { q: "What kind of ongoing support services do you provide?", a: "We offer 24/7 technical support, regular maintenance, and continuous optimization to ensure your systems perform at their best." }
  ];

  const caseStudies = portfolioProjects.slice(0, 4);

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section (Matching Reference Home Page UI) */}
      <LocationHero
        country="Netherlands"
        cities={cities}
        description="Aveda Technologies builds proprietary SaaS products and delivers AI automation, custom software development, web and mobile applications, cloud solutions, UI/UX design, digital marketing, and enterprise technology solutions for businesses in Amsterdam, Rotterdam, Utrecht, and Eindhoven to accelerate growth."
      />

      {/* City Hubs Banner */}
      <section className="py-3 bg-[#faf8f3] border-b border-[#e2dcd0]">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Major Dutch Tech Hubs:</p>
            {cities.map((city) => (
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

      {/* Process Automation Section */}
      <AiAutomationPreview />

      {/* Services Grid (Home Page Capabilities Style) */}
      <section className="py-6 md:py-8 border-b border-[#e2dcd0]">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-5">
            <h2 className="font-soehne text-xs sm:text-sm lg:text-xl font-bold tracking-tight text-slate-950">
              Netherlands-Focused AI & Software Solutions
            </h2>
            <p className="font-inter text-slate-950 text-xs sm:text-sm mt-1">
              European-compliant digital engineering designed for sustainable enterprise scale.
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



      {/* What's New Section */}
      <InsightsSection />

      {/* Why Choose Us */}
      <section className="py-6 md:py-8 border-b border-[#e2dcd0]">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-5">
            <h2 className="font-soehne text-xs sm:text-sm lg:text-xl font-bold tracking-tight text-slate-950">
              Why Choose Aveda Technologies in the Netherlands?
            </h2>
            <p className="font-inter text-slate-950 text-xs sm:text-sm mt-1">
              GDPR-compliant software design with Amsterdam-aligned engineering agility.
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
              Everything you need to know about partnering with Aveda Technologies in the Netherlands.
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
            Ready to Automate Your Business in the Netherlands?
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
