

import Image from 'next/image';
import Link from 'next/link';
import {
  Code2,
  Smartphone,
  PenTool,
  LineChart,
  Search,
  Cpu,
  Vote,
  CheckCircle,
  MoveRight,
  Server,
  Database,
  Cloud,
  Rocket,
  Building2,
  Store,
  Users,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { services } from '@/lib/data';
import { cn } from '@/lib/utils';

const WhatsAppIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
  );

const technologies = [
    { name: 'React & Next.js' },
    { name: 'Node.js & Laravel' },
    { name: 'WordPress & Headless CMS' },
    { name: 'AWS & Google Cloud' },
    { name: 'Firebase' },
    { name: 'AI & Genkit' },
    { name: 'PostgreSQL & MongoDB' },
    { name: 'Tailwind CSS' },
];

const industries = [
    { icon: Building2, title: 'Businesses & Enterprises' },
    { icon: Rocket, title: 'Startups & SaaS' },
    { icon: Store, title: 'E-commerce' },
    { icon: Vote, title: 'Political Parties & Leaders' },
    { icon: Users, title: 'NGOs & Institutions' },
  ];

export default function ServicesPage() {
    const heroBgImage = PlaceHolderImages.find((img) => img.id === 'hero-background');
    const webDevImage = PlaceHolderImages.find((img) => img.id === 'service-web-dev-detail');
    const appDevImage = PlaceHolderImages.find((img) => img.id === 'service-app-dev');
    const uiUxImage = PlaceHolderImages.find((img) => img.id === 'service-ui-ux');
    const marketingImage = PlaceHolderImages.find((img) => img.id === 'service-digital-marketing-detail');
    const seoImage = PlaceHolderImages.find((img) => img.id === 'service-seo');
    const aiImage = PlaceHolderImages.find((img) => img.id === 'service-ai');
    const politicalImage = PlaceHolderImages.find((img) => img.id === 'service-political');

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background py-20 md:py-32">
        <div className="absolute inset-0 z-0 opacity-10">
            {heroBgImage && (
                <Image
                src={heroBgImage.imageUrl}
                alt="Services background"
                fill
                className="object-cover"
                priority
                data-ai-hint={heroBgImage.imageHint}
                />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-primary/20"></div>
        </div>
        <div className="container relative z-10 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight md:text-6xl">
            End-to-End Digital, AI & Political Growth Solutions
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
            From websites to AI marketing and political campaigning — everything your brand needs to dominate digitally.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">Get Free Strategy Call</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="https://wa.me/919012887697" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7">
            {services.map((service) => (
              <Link href={`/services#${service.slug}`} key={service.slug} className="group block rounded-lg border border-border bg-card p-4 text-center transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10">
                <div className="flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110">
                    <service.icon className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="mt-4 font-semibold text-sm">{service.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <div className="container space-y-20 md:space-y-28">
        {/* Web Development Section */}
        <section id="web-development" className="scroll-mt-20">
            <div className="grid items-center gap-12 md:grid-cols-2">
                <div>
                    <h2 className="font-headline text-3xl font-bold">Web Development</h2>
                    <p className="mt-4 text-muted-foreground">Scalable & secure websites. We build high-performance, secure, and scalable websites that drive business growth. Our solutions are tailored to your specific needs, from corporate sites to complex SaaS platforms.</p>
                    <ul className="mt-6 space-y-3">
                        {['Corporate Websites & Portals', 'E-commerce Platforms', 'SaaS Products & Dashboards', 'CMS & API Development'].map(detail => (
                            <li key={detail} className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary" /><span>{detail}</span></li>
                        ))}
                    </ul>
                    <Button asChild className="mt-8" variant="outline"><Link href="/services/web-development">Explore Web Development <MoveRight className="ml-2 h-4 w-4" /></Link></Button>
                </div>
                <div className="relative h-96 w-full">
                    {webDevImage && <Image src={webDevImage.imageUrl} alt={webDevImage.description} fill className="rounded-lg object-cover" sizes="(max-width: 768px) 100vw, 50vw" data-ai-hint={webDevImage.imageHint} />}
                </div>
            </div>
        </section>

        {/* App Development Section */}
        <section id="app-development" className="scroll-mt-20">
            <div className="grid items-center gap-12 md:grid-cols-2">
                 <div className="relative h-96 w-full md:order-last">
                    {appDevImage && <Image src={appDevImage.imageUrl} alt={appDevImage.description} fill className="rounded-lg object-cover" sizes="(max-width: 768px) 100vw, 50vw" data-ai-hint={appDevImage.imageHint} />}
                </div>
                <div className="md:order-first">
                    <h2 className="font-headline text-3xl font-bold">App Development</h2>
                    <p className="mt-4 text-muted-foreground">High-performance mobile apps. From concept to launch, we create engaging and intuitive mobile applications for iOS and Android.</p>
                    <ul className="mt-6 space-y-3">
                        {['Android & iOS Apps', 'Business Apps', 'Admin Panels & Dashboards', 'API Integrations'].map(detail => (
                            <li key={detail} className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary" /><span>{detail}</span></li>
                        ))}
                    </ul>
                    <Button asChild className="mt-8"><Link href="/services/app-development">Build Your App <MoveRight className="ml-2 h-4 w-4" /></Link></Button>
                </div>
            </div>
        </section>
        
        {/* UI/UX Design Section */}
        <section id="ui-ux-design" className="scroll-mt-20 text-center">
            <h2 className="font-headline text-3xl font-bold">UI/UX Design</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Experiences users love. We focus on usability, conversions & trust.</p>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {['Website UI Design', 'Mobile App UX', 'Dashboard & SaaS UI', 'Branding & Design Systems'].map(title => (
                <Card key={title} className="group border-border bg-card p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10">
                  <h3 className="font-semibold">{title}</h3>
                </Card>
              ))}
            </div>
        </section>

        {/* Digital & Performance Marketing Section */}
        <section id="digital-marketing" className="scroll-mt-20">
             <div className="grid items-center gap-12 md:grid-cols-2">
                <div>
                    <Badge variant="default" className="mb-4 bg-primary/10 text-primary">Starting at ₹5,000 / month</Badge>
                    <h2 className="font-headline text-3xl font-bold">Digital & Performance Marketing</h2>
                    <p className="mt-4 text-muted-foreground">Leads & sales with AI. We run data-driven marketing campaigns that deliver measurable results.</p>
                    <ul className="mt-6 space-y-3">
                        {[
                          'Social Media Marketing (Meta, Instagram)',
                          'Performance Ads (Meta & Google)',
                          'AI Audience Targeting',
                          'Lead Generation',
                          'Retargeting & Funnel Optimization',
                          'Political Digital Campaigns'
                        ].map(detail => (
                            <li key={detail} className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary" /><span>{detail}</span></li>
                        ))}
                    </ul>
                    <Button asChild className="mt-8"><Link href="/services/digital-marketing/pricing">Launch Campaign @ ₹5,000 <MoveRight className="ml-2 h-4 w-4" /></Link></Button>
                </div>
                <div className="relative h-96 w-full">
                    {marketingImage && <Image src={marketingImage.imageUrl} alt={marketingImage.description} fill className="rounded-lg object-cover" sizes="(max-width: 768px) 100vw, 50vw" data-ai-hint={marketingImage.imageHint} />}
                </div>
            </div>
        </section>

        {/* SEO & Optimization Section */}
        <section id="seo-optimization" className="scroll-mt-20">
             <div className="grid items-center gap-12 md:grid-cols-2">
                <div className="relative h-96 w-full md:order-last">
                    {seoImage && <Image src={seoImage.imageUrl} alt={seoImage.description} fill className="rounded-lg object-cover" sizes="(max-width: 768px) 100vw, 50vw" data-ai-hint={seoImage.imageHint} />}
                </div>
                <div className="md:order-first">
                    <h2 className="font-headline text-3xl font-bold">SEO & Optimization</h2>
                    <p className="mt-4 text-muted-foreground">Rank higher, convert better. Climb search rankings and connect with your audience.</p>
                    <ul className="mt-6 space-y-3">
                        {['On-Page & Technical SEO', 'Keyword Research & Strategy', 'Link Building & Performance Audits', 'Local SEO / GEO Tagging'].map(detail => (
                            <li key={detail} className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary" /><span>{detail}</span></li>
                        ))}
                    </ul>
                    <Button asChild className="mt-8" variant="outline"><Link href="/services/seo-optimization">Boost Rankings <MoveRight className="ml-2 h-4 w-4" /></Link></Button>
                </div>
            </div>
        </section>

        {/* AI & Automation Section */}
        <section id="ai-automation" className="scroll-mt-20 text-center">
            <h2 className="font-headline text-3xl font-bold">AI & Automation</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Smart tools for modern business. Leverage AI to automate processes, gain insights, and create smarter products.</p>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {['AI Chatbots', 'Marketing Automation', 'CRM & Workflow Automation', 'Data Analytics & AI Insights'].map(title => (
                <Card key={title} className="group border-border bg-card p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10">
                  <h3 className="font-semibold">{title}</h3>
                </Card>
              ))}
            </div>
        </section>

        {/* Political Campaigning with AI Section */}
        <section id="political-campaigning" className="scroll-mt-20 bg-secondary -mx-4 sm:-mx-8 md:-mx-16 px-4 sm:px-8 md:px-16 py-20 md:py-28">
            <div className="container grid items-center gap-12 md:grid-cols-2">
                <div>
                    <h2 className="font-headline text-3xl font-bold">Political Campaigning with AI</h2>
                    <p className="mt-4 text-muted-foreground">Influence & voter targeting. Winning elections in the digital age requires data-driven precision.</p>
                    <ul className="mt-6 space-y-3">
                        {['AI Voter Targeting', 'Constituency Analysis', 'Social Media Political Ads', 'Narrative & Sentiment Analysis', 'Booth-level digital strategy'].map(detail => (
                            <li key={detail} className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary" /><span>{detail}</span></li>
                        ))}
                    </ul>
                    <Button asChild className="mt-8"><Link href="/services/political-campaigning">Start Political Campaign <MoveRight className="ml-2 h-4 w-4" /></Link></Button>
                </div>
                <div className="relative h-96 w-full">
                    {politicalImage && <Image src={politicalImage.imageUrl} alt={politicalImage.description} fill className="rounded-lg object-cover" sizes="(max-width: 768px) 100vw, 50vw" data-ai-hint={politicalImage.imageHint} />}
                </div>
            </div>
        </section>

        {/* Industries We Serve Section */}
        <section className="scroll-mt-20 text-center">
            <h2 className="font-headline text-3xl font-bold">Industries We Serve</h2>
            <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
            {industries.map((item) => (
                <div key={item.title} className="group flex flex-col items-center justify-center gap-4 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-card text-primary ring-8 ring-card transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground group-hover:ring-primary/20">
                    <item.icon className="h-10 w-10" />
                </div>
                <h3 className="mt-2 font-semibold">{item.title}</h3>
                </div>
            ))}
            </div>
        </section>

        {/* Technologies We Use Section */}
        <section className="scroll-mt-20 text-center">
            <h2 className="font-headline text-3xl font-bold">Technologies We Use</h2>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 opacity-75">
                {technologies.map(tech => (
                    <span key={tech.name} className="text-xl font-semibold text-muted-foreground">{tech.name}</span>
                ))}
            </div>
        </section>
      </div>

       {/* Final CTA */}
      <section className="mt-20 md:mt-28 border-t border-border bg-card py-20">
        <div className="container text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
            Ready to Grow with AI-Powered Digital Solutions?
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
                <Link href="/contact">Get Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
                <a href="https://wa.me/919012887697" target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon />
                    WhatsApp Us
                </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

    

    
