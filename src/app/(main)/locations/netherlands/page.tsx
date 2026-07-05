
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
            Netherlands Division
          </Badge>
          <h1 className="font-headline text-4xl font-bold tracking-tight text-white md:text-7xl animate-blur-in leading-[1.1]">
            Accelerate Growth with <span className="bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent drop-shadow-primary-glow">AI Automation</span> & Software Development
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/90 animate-in fade-in slide-in-from-bottom-12 duration-1000">
            Aveda Technologies helps businesses across Amsterdam, Rotterdam, Utrecht and Eindhoven streamline operations, automate workflows and scale faster with innovative software solutions.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4 animate-in fade-in slide-in-from-bottom-16 duration-1000">
            <Button asChild size="lg">
              <Link href="#contact">Schedule Free Consultation</Link>
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
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-muted-foreground w-full text-center md:w-auto">Cities We Serve in Netherlands:</p>
            {cities.map((city) => (
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
            <Badge variant="outline" className="mb-4">End-to-End Technology</Badge>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Advanced Technology Solutions for Modern Businesses
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              We build high-performance, secure, and scalable digital systems designed for sustainable growth in the European market.
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
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Targeted Industries</p>
          <h2 className="mt-6 text-3xl font-bold md:text-5xl">Specialized Solutions for <span className="text-primary">Dutch Markets</span></h2>
          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-4">
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
                  alt="Aveda Technologies Team Netherlands" 
                  fill 
                  className="object-cover"
                  data-ai-hint="tech team office"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-10 left-10 text-white">
                <p className="text-4xl font-bold">100%</p>
                <p className="text-sm uppercase tracking-widest opacity-80">Commitment to Netherlands</p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <p className="mb-2 font-bold text-primary uppercase tracking-widest text-xs">Why Choose Us</p>
                <h2 className="text-4xl font-bold tracking-tight md:text-5xl leading-tight">
                  Trusted Software Partner in <span className="text-primary">Netherlands</span>
                </h2>
              </div>
              <p className="text-muted-foreground">We build intelligent software solutions that help businesses improve efficiency, reduce manual work and unlock growth opportunities through automation, digital transformation and advanced technology.</p>
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
            <p className="mt-6 text-lg text-muted-foreground">Real-world results delivered to our global clients.</p>
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
            <p className="mt-4 text-muted-foreground">Everything you need to know about working with us in Netherlands.</p>
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
                <h2 className="font-headline text-3xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Europe Support</h2>
                <p className='text-muted-foreground'>Aveda Technologies is your dedicated partner for European digital transformation and AI integration.</p>
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
                      <h3 className="text-lg font-semibold">Service Area</h3>
                      <p className="text-muted-foreground">Strategic focus on Amsterdam, Rotterdam & Utrecht</p>
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
                Aveda Technologies is a trusted AI automation and software development company in Netherlands providing CRM solutions, ERP systems, SaaS applications, custom software development and digital transformation services. We help organizations improve operational efficiency, automate business processes and achieve sustainable growth through technology across Amsterdam and the wider Netherlands region.
            </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden border-t bg-card py-24">
        <div className="container relative z-10 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight md:text-5xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Build Smarter Business Systems with AI
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Connect with our Dutch project consultants and discover how we can transform your business with custom software.
          </p>
          <Button asChild size="lg" className="mt-10 rounded-full px-10 h-14 text-lg">
            <Link href="#contact">
              Schedule Free Consultation <MoveRight className="ml-2 h-6 w-6" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
