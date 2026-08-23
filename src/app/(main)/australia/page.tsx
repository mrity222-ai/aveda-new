
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
  Briefcase
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
import AiAutomationPreview from '@/components/home/ai-automation-preview';
import InsightsSection from '@/components/home/insights-section';
import PortfolioPreview from '@/components/home/why-choose-us';
import { LocationIndustriesSection } from '@/components/locations/location-industries';

export const metadata: Metadata = {
  title: 'AI Automation, CRM & Software Development Company in Australia | Aveda Technologies',
  description: 'Aveda Technologies provides AI Automation, CRM Development, ERP Solutions, SaaS Development and Custom Software Services across Australia including Sydney, Melbourne, Brisbane, Perth and Adelaide.',
  openGraph: {
    title: 'AI Automation & Software Development Company in Australia',
    description: 'Aveda Technologies provides AI Automation, CRM Development, ERP Solutions, SaaS Development and Custom Software Services across Australia.',
  }
};

export default function AustraliaLocationPage() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'australia-hero');
  const officeImg = PlaceHolderImages.find(img => img.id === 'australia-office');
  
  const locations = ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Canberra', 'Gold Coast'];
  
  const services = [
    { icon: BrainCircuit, title: 'AI Automation Solutions', description: 'Intelligent AI workflows to automate repetitive business tasks and increase efficiency.' },
    { icon: Database, title: 'CRM Development', description: 'Custom CRM solutions to manage your Australian customer base efficiently.' },
    { icon: Building2, title: 'ERP Software Development', description: 'Enterprise Resource Planning systems for seamless operational integration.' },
    { icon: Cloud, title: 'SaaS Product Development', description: 'Scalable cloud-based software solutions designed for the global market.' },
    { icon: Code, title: 'Custom Business Applications', description: 'Tailor-made software built to solve your unique business challenges.' },
    { icon: Laptop, title: 'Website Development', description: 'High-performance, responsive websites that represent your Australian brand.' },
    { icon: Rocket, title: 'Mobile App Development', description: 'Engaging iOS and Android apps for the modern mobile-first consumer.' },
    { icon: Zap, title: 'Workflow Automation', description: 'End-to-end automation of your core business processes and digital workflows.' },
  ];

  const industries = [
    { icon: Building2, title: 'Construction' },
    { icon: Zap, title: 'Solar Energy' },
    { icon: Users, title: 'Healthcare' },
    { icon: Target, title: 'Manufacturing' },
    { icon: Building2, title: 'Real Estate' },
    { icon: Layers, title: 'Logistics' },
    { icon: Rocket, title: 'Education' },
    { icon: Briefcase, title: 'Professional Services' },
    { icon: TrendingUp, title: 'Finance' },
    { icon: Laptop, title: 'Retail' },
  ];

  const whyChooseUs = [
    { icon: Users, title: 'Experienced Software Engineers', description: 'Expert developers assigned exclusively to your Australia-based projects.' },
    { icon: BrainCircuit, title: 'AI-First Development Approach', description: 'We integrate advanced AI into every software solution we build.' },
    { icon: ShieldCheck, title: 'Enterprise-Grade Security', description: 'Rigorous security protocols to protect your sensitive business data.' },
    { icon: Rocket, title: 'Agile Development Methodology', description: 'Fast, iterative development cycles for quick time-to-market.' },
    { icon: Phone, title: 'Long-Term Technical Support', description: '24/7 support and maintenance to ensure your systems run flawlessly.' },
    { icon: TrendingUp, title: 'Scalable Cloud Solutions', description: 'Software that grows with your business as you expand across Australia.' },
  ];

  const faqs = [
    { q: "What is AI automation?", a: "AI automation uses artificial intelligence to perform tasks that typically require human intelligence, such as data analysis, decision-making, and customer interactions, significantly increasing business efficiency." },
    { q: "How much does custom software development cost in Australia?", a: "Costs vary based on complexity and requirements. We provide tailored quotes after a free strategy session to ensure your specific business needs and ROI goals are met." },
    { q: "Why choose a CRM system for business growth?", a: "A CRM centralizes customer data, automates follow-ups, and provides sales insights, allowing Australian businesses to nurture leads effectively and close more deals." },
    { q: "What industries benefit from ERP software?", a: "Manufacturing, logistics, healthcare, and retail sectors across Australia benefit most from ERPs by integrating core processes like inventory, finance, and human resources." },
    { q: "How long does software development take?", a: "Depending on complexity, an MVP can take 4-8 weeks, while full-scale enterprise systems may take several months. We follow an agile process for faster delivery." },
    { q: "Do you provide ongoing support?", a: "Yes, we offer 24/7 technical support and maintenance packages to ensure your software and AI systems continue to perform at their best." },
    { q: "Can AI automation reduce operational costs?", a: "Absolutely. By automating repetitive tasks, businesses can reduce manual errors and free up staff for high-value work, leading to significant cost savings." },
    { q: "Do you build SaaS products?", a: "Yes, we specialize in building scalable, cloud-based SaaS platforms for Australian startups and established companies looking to launch global digital products." },
    { q: "Can you modernize existing software?", a: "We can audit your legacy systems and implement modern architectures, cloud migrations, and AI integrations to bring your technology up to date." },
    { q: "Do you work with Australian businesses remotely?", a: "Yes, we have a seamless remote collaboration model using secure digital tools, ensuring constant communication and project transparency regardless of your location." }
  ];

  const caseStudies = portfolioProjects.slice(0, 4);

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section (Matching Reference Home Page UI) */}
      <LocationHero
        country="Australia"
        cities={locations}
        description="Aveda Technologies builds proprietary SaaS products and delivers AI automation, custom software development, web and mobile applications, cloud solutions, UI/UX design, digital marketing, and enterprise technology solutions for businesses in Sydney, Melbourne, Brisbane, Perth, and Adelaide to accelerate growth."
      />

      {/* City Hubs Banner */}
      <section className="py-3 bg-[#faf8f3] border-b border-[#e2dcd0]">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Major Australian Tech Hubs:</p>
            {locations.map((city) => (
              <div key={city} className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-red-600" />
                <span className="font-soehne text-sm font-bold text-slate-900">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domain Expertise Section */}
      <IndustriesMarquee />

      {/* Process Automation Section (5th position) */}
      <AiAutomationPreview />

      {/* Services Grid (Home Page Capabilities Style) */}
      <section className="py-6 md:py-8 border-b border-[#e2dcd0]">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-5">
            <h2 className="font-soehne text-xs sm:text-sm lg:text-xl font-bold tracking-tight text-slate-950">
              Australia-Focused AI & Software Solutions
            </h2>
            <p className="font-inter text-slate-950 text-xs sm:text-sm mt-1">
              Scalable digital engineering tailored for Australian enterprise growth.
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
              Why Choose Aveda Technologies in Australia?
            </h2>
            <p className="font-inter text-slate-950 text-xs sm:text-sm mt-1">
              Combining APAC timezone alignment with world-class cloud & AI software architecture.
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
              Everything you need to know about partnering with Aveda Technologies in Australia.
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
            Ready to Automate Your Business in Australia?
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

      <section id="contact" className="relative overflow-hidden bg-secondary py-12">
        <div className="container relative z-10">
          <div className="mx-auto max-w-5xl rounded-3xl border bg-card p-8 soft-shadow md:p-12 animate-in fade-in zoom-in-95 duration-700">
            <div className="grid gap-16 lg:grid-cols-5">
              <div className="lg:col-span-3">
                <h2 className="mb-8 text-center font-headline text-3xl font-semibold lg:text-left bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Send Us a Message</h2>
                <ContactForm />
              </div>
              <div className="space-y-8 lg:col-span-2">
                <h2 className="font-headline text-3xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Australia Support</h2>
                <p className='text-muted-foreground'>Aveda Technologies is your dedicated partner for Australian digital transformation and AI integration.</p>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Contact</h3>
                      <p className="text-muted-foreground">+91 9532758070</p>
                      <p className="text-muted-foreground">info@avedatechnologies.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Globe2 className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Global Coverage</h3>
                      <p className="text-muted-foreground">Strategic Hubs in Sydney, Melbourne & Perth</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
