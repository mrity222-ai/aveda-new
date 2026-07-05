
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

export const metadata: Metadata = {
  title: 'AI Automation, CRM & Software Development Company in Canada | Aveda Technologies',
  description: 'Aveda Technologies provides AI Automation, CRM Development, ERP Solutions, SaaS Development and Custom Software Services across Canada including Toronto, Vancouver, Calgary, Ottawa and Montreal.',
  openGraph: {
    title: 'AI Automation & Software Development Company in Canada',
    description: 'Aveda Technologies provides AI Automation, CRM Development, ERP Solutions, SaaS Development and Custom Software Services across Canada.',
  }
};

export default function CanadaLocationPage() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'canada-hero');
  const serviceImg = PlaceHolderImages.find(img => img.id === 'service-web-dev-detail');
  
  const locations = ['Toronto', 'Vancouver', 'Calgary', 'Ottawa', 'Montreal'];
  
  const services = [
    { icon: BrainCircuit, title: 'AI Automation', description: 'Intelligent AI workflows to automate repetitive business tasks.' },
    { icon: Database, title: 'CRM Development', description: 'Custom CRM solutions to manage your Canadian customer base efficiently.' },
    { icon: Building2, title: 'ERP Solutions', description: 'Enterprise Resource Planning systems for seamless operations.' },
    { icon: Cloud, title: 'SaaS Development', description: 'Scalable cloud-based software solutions for global markets.' },
    { icon: Code, title: 'Custom Software Development', description: 'Tailor-made software built to solve your unique business challenges.' },
    { icon: LayoutGrid, title: 'Website Development', description: 'High-performance, responsive websites that represent your brand.' },
    { icon: Rocket, title: 'Mobile App Development', description: 'Engaging iOS and Android apps for the modern Canadian consumer.' },
    { icon: Zap, title: 'Business Process Automation', description: 'End-to-end automation of your core business processes.' },
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
    { icon: Users, title: 'Dedicated Development Team', description: 'Expert developers assigned exclusively to your Canada-based projects.' },
    { icon: BrainCircuit, title: 'AI-First Approach', description: 'We integrate advanced AI into every software solution we build.' },
    { icon: ShieldCheck, title: 'Enterprise Security', description: 'Rigorous security protocols to protect your sensitive business data.' },
    { icon: Rocket, title: 'Agile Development', description: 'Fast, iterative development cycles for quick time-to-market.' },
    { icon: Phone, title: 'Ongoing Support', description: '24/7 technical support and maintenance for Canadian businesses.' },
    { icon: TrendingUp, title: 'Scalable Solutions', description: 'Software that grows with your business as you expand across Canada.' },
  ];

  const faqs = [
    { q: "Do you have physical offices in Canada?", a: "While our primary development hubs are in India, we provide 24/7 dedicated support for our Canadian clients via secure digital collaboration tools and strategic hub points in major cities." },
    { q: "How do you manage the time difference (EST/PST) with Canadian clients?", a: "We operate on an overlap schedule, ensuring our team is available during your peak business hours for seamless communication and agile updates." },
    { q: "Is your software development compliant with PIPEDA?", a: "Yes, all our custom software and AI solutions for Canadian businesses are built with strict adherence to the Personal Information Protection and Electronic Documents Act (PIPEDA)." },
    { q: "What specific AI automation services do you offer in Canada?", a: "We specialize in CRM automation, AI calling agents, and business process automation tailored for the Canadian healthcare, real estate, and construction sectors." },
    { q: "Can you help Canadian startups with MVP development?", a: "Absolutely. We offer rapid SaaS prototyping and MVP development for Canadian founders looking to scale quickly in the North American market." },
    { q: "Do you accept CAD for payments?", a: "Yes, we offer flexible billing options for Canadian businesses and accept payments in CAD for convenience." },
    { q: "How secure is the data handled by your AI systems?", a: "We implement enterprise-grade encryption and secure cloud architectures (AWS/Azure) to ensure your business data remains protected." },
    { q: "Do you have experience with Canadian real estate tech?", a: "Yes, we have developed custom CRMs and automated lead generation systems specifically for real estate agencies across Toronto and Vancouver." },
    { q: "What is your typical turnaround time for a custom website in Canada?", a: "Depending on complexity, a custom, SEO-optimized business website usually takes between 3 to 6 weeks from strategy to launch." },
    { q: "How can I get a project estimate for my Canada-based business?", a: "You can schedule a free strategy call or fill out our contact form to get a detailed project estimate within 24 hours." }
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
            Now Serving Canada
          </Badge>
          <h1 className="font-headline text-4xl font-bold tracking-tight text-white md:text-7xl animate-blur-in leading-[1.1]">
            Leading <span className="bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent drop-shadow-primary-glow">AI Automation</span> & Software Development Company in Canada
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/90 animate-in fade-in slide-in-from-bottom-12 duration-1000">
            Helping Canadian businesses automate operations, increase productivity and scale with AI-powered software solutions.
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
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-muted-foreground w-full text-center md:w-auto">Our Strategic Hubs:</p>
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
            <Badge variant="outline" className="mb-4">Tailored for Canada</Badge>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              End-to-End Software & AI Solutions
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              We build high-performance, secure, and scalable digital systems designed for sustainable growth in the Canadian market.
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
          <h2 className="mt-6 text-3xl font-bold md:text-5xl">Specialized Solutions for <span className="text-primary">Canadian Markets</span></h2>
          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-7">
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
              {serviceImg && (
                <Image 
                  src={serviceImg.imageUrl} 
                  alt="Aveda Technologies Team Canada" 
                  fill 
                  className="object-cover"
                  data-ai-hint="canadian tech team"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-10 left-10 text-white">
                <p className="text-4xl font-bold">24/7</p>
                <p className="text-sm uppercase tracking-widest opacity-80">Support for Canada</p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <p className="mb-2 font-bold text-primary uppercase tracking-widest text-xs">Why Choose Us</p>
                <h2 className="text-4xl font-bold tracking-tight md:text-5xl leading-tight">
                  Your Vision. <span className="text-primary">Our Technology.</span> Built for Canada.
                </h2>
              </div>
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
            <p className="mt-6 text-lg text-muted-foreground">Real-world examples of how we've helped businesses like yours succeed.</p>
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
            <p className="mt-4 text-muted-foreground">Everything you need to know about working with us in Canada.</p>
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
                <h2 className="font-headline text-3xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Canada Support</h2>
                <p className='text-muted-foreground'>Aveda Technologies is your dedicated partner for Canadian digital transformation.</p>
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
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Global Head Office</h3>
                      <p className="text-muted-foreground">Lucknow, Uttar Pradesh, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden border-t bg-card py-24">
        <div className="container relative z-10 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight md:text-5xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Ready to Automate Your Business in Canada?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Take the first step towards intelligent automation and scalable digital growth today.
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
