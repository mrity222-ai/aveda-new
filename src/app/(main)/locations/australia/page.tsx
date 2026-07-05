
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  BrainCircuit, 
  Target, 
  TrendingUp, 
  CheckCircle, 
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
  Laptop
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ContactForm } from '@/components/contact/contact-form';
import { portfolioProjects } from '@/lib/data';

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
      {/* Hero Section */}
      <section className="relative flex h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            poster="/vio/bg.jpg"
            className="h-full w-full object-cover"
            src="/vio/bg.mp4"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container relative z-10 text-center">
          <Badge variant="outline" className="mb-4 border-primary/50 bg-primary/10 text-primary uppercase tracking-widest px-4 py-1">
            Best in Australia
          </Badge>
          <h1 className="font-headline text-4xl font-bold tracking-tight text-white md:text-7xl animate-blur-in leading-[1.1]">
            Transform Your Business with <span className="bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent drop-shadow-primary-glow">AI Automation</span>, CRM & Custom Software
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/90 animate-in fade-in slide-in-from-bottom-12 duration-1000">
            Aveda Technologies helps businesses across Sydney, Melbourne, Brisbane, Perth and Adelaide automate operations, improve productivity and accelerate growth through AI-powered software solutions.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4 animate-in fade-in slide-in-from-bottom-16 duration-1000">
            <Button asChild size="lg">
              <Link href="#contact">Book Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 text-white hover:bg-white/20">
              <Link href="#contact">Get Project Estimate</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="bg-secondary/30 py-16 border-b">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-muted-foreground w-full text-center md:w-auto">Cities We Serve in Australia:</p>
            {locations.map((city) => (
              <div key={city} className="flex items-center gap-2 group">
                <MapPin className="h-5 w-5 text-primary group-hover:animate-bounce" />
                <span className="font-bold text-xl tracking-tight">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-background py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-20">
            <Badge variant="outline" className="mb-4">End-to-End Solutions</Badge>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              End-to-End Software & AI Automation Services
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              We build high-performance, secure, and scalable digital systems designed for sustainable growth in the Australian market.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <Card key={service.title} className="group relative overflow-hidden rounded-3xl border bg-card p-2 transition-all duration-500 hover:-translate-y-2 hover:border-primary soft-shadow">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:rotate-[10deg] mb-4">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-bold tracking-tight">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed mt-2">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-secondary py-24">
        <div className="container text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Industries We Serve</p>
          <h2 className="mt-6 text-3xl font-bold md:text-5xl">Tailored Solutions for <span className="text-primary">Australian Industries</span></h2>
          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
            {industries.map((item, index) => (
              <div key={item.title} className="group flex flex-col items-center gap-4 animate-in fade-in slide-in-from-bottom-12 duration-700" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-card text-accent ring-8 ring-card transition-all duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-foreground group-hover:ring-accent/20">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-sm uppercase tracking-wider">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-background py-24">
        <div className="container">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div className="relative h-[500px] rounded-3xl overflow-hidden soft-shadow">
              {heroImg && (
                <Image 
                  src={heroImg.imageUrl} 
                  alt="Aveda Technologies Team Australia" 
                  fill 
                  className="object-cover"
                  data-ai-hint="australian tech team"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-10 left-10 text-white">
                <p className="text-4xl font-bold">100%</p>
                <p className="text-sm uppercase tracking-widest opacity-80">Success Rate for Australia</p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <p className="mb-2 font-bold text-primary uppercase tracking-widest text-xs">Why Choose Us</p>
                <h2 className="text-4xl font-bold tracking-tight md:text-5xl leading-tight">
                  Trusted Technology Partner for <span className="text-primary">Australian Businesses</span>
                </h2>
              </div>
              <p className="text-muted-foreground">From startups to large enterprises, Aveda Technologies delivers innovative software development, AI automation, CRM systems, ERP solutions and custom business applications designed to streamline operations and drive measurable business growth.</p>
              <div className="grid grid-cols-1 gap-6">
                {whyChooseUs.map((item) => (
                  <div key={item.title} className="flex gap-6 items-start">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{item.title}</h3>
                      <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="bg-secondary/50 py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Recent Success Stories
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">See how we've helped clients achieve their technology goals.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {caseStudies.map((project, index) => (
              <Link key={project.slug} href={`/works#${project.slug}`} className="group block">
                <div className="relative h-[400px] overflow-hidden rounded-3xl border bg-card transition-all duration-300 soft-shadow hover:border-primary hover:-translate-y-2 hover:shadow-xl">
                  <Image
                    src={project.image.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={project.image.imageHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <h3 className="font-headline text-2xl font-bold drop-shadow-sm">{project.title}</h3>
                    <Badge variant="outline" className="w-fit border-white/20 bg-black/20 text-white backdrop-blur-md mt-2">{project.category}</Badge>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-background py-24">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold md:text-5xl">Frequently Asked Questions</h2>
            <p className="mt-4 text-muted-foreground">Everything you need to know about working with Aveda in Australia.</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="border-b py-2">
                <AccordionTrigger className="text-left font-bold text-lg hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative overflow-hidden bg-secondary py-24">
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

      {/* SEO Footer Section */}
      <section className="bg-background py-12 border-t">
        <div className="container text-center max-w-5xl">
            <p className="text-xs text-muted-foreground leading-relaxed">
                Aveda Technologies is a leading AI automation and software development company serving businesses across Australia. We specialize in CRM development, ERP systems, SaaS platforms, workflow automation, custom software development and digital transformation solutions that help organizations improve efficiency, reduce costs and accelerate growth.
            </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden border-t bg-card py-24">
        <div className="container relative z-10 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight md:text-5xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Ready to Scale Your Business with AI?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Book a Free Consultation with our software experts and discover how AI automation can transform your business operations.
          </p>
          <Button asChild size="lg" className="mt-10 rounded-full px-10 h-14 text-lg">
            <Link href="#contact">
              Schedule Free Strategy Call <MoveRight className="ml-2 h-6 w-6" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
