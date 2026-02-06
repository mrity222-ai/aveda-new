
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
    
    const serviceImages: { [key: string]: (typeof PlaceHolderImages)[0] | undefined } = {
        'web-development': PlaceHolderImages.find((img) => img.id === 'service-web-dev-detail'),
        'app-development': PlaceHolderImages.find((img) => img.id === 'service-app-dev'),
        'ui-ux-design': PlaceHolderImages.find((img) => img.id === 'service-ui-ux'),
        'digital-marketing': PlaceHolderImages.find((img) => img.id === 'service-digital-marketing-detail'),
        'seo-optimization': PlaceHolderImages.find((img) => img.id === 'service-seo'),
        'ai-automation': PlaceHolderImages.find((img) => img.id === 'service-ai'),
        'political-campaigning': PlaceHolderImages.find((img) => img.id === 'service-political'),
    };
    
    const buttonLinks: {[key: string]: string} = {
        'web-development': '/services/web-development',
        'app-development': '/services/app-development',
        'digital-marketing': '/services/digital-marketing',
        'seo-optimization': '/services/seo-optimization',
        'political-campaigning': '/services/political-campaigning',
        'ui-ux-design': '/contact?service=UI%2FUX+Design',
        'ai-automation': '/contact?service=AI+%26+Automation',
    };

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
      
      <div className="relative bg-black py-20 md:py-28">
        <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute top-0 left-0 h-1/2 w-1/2 animate-pulse rounded-full bg-destructive/10 opacity-50 mix-blend-screen filter blur-3xl" />
            <div className="absolute bottom-0 right-0 h-1/2 w-1/2 animate-pulse rounded-full bg-destructive/5 opacity-50 mix-blend-screen filter blur-3xl" style={{ animationDelay: '2s' }} />
        </div>
        <div className="container relative z-10 space-y-20 md:space-y-28">
            {services.map((service, index) => {
                const image = serviceImages[service.slug];
                const isReversed = index % 2 !== 0;

                return (
                    <section key={service.slug} id={service.slug} className="scroll-mt-20">
                        <div className="grid items-center gap-16 md:grid-cols-2">
                            <div className={cn("relative h-96 w-full md:h-[500px]", isReversed && 'md:order-last')}>
                                <div className="group relative h-full w-full">
                                    <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-destructive via-transparent to-destructive/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                    <div className="relative h-full overflow-hidden rounded-[15px] border border-destructive/30 bg-black/50 p-2 backdrop-blur-sm transition-all duration-300 group-hover:shadow-[0_0_30px_hsl(var(--destructive)/0.3)]">
                                        {image && <Image src={image.imageUrl} alt={image.description || service.title} fill className="rounded-md object-cover" sizes="(max-width: 768px) 100vw, 50vw" data-ai-hint={image.imageHint} />}
                                    </div>
                                </div>
                            </div>
                            <div className={cn(isReversed && 'md:order-first')}>
                                {service.slug === 'digital-marketing' && <Badge variant="destructive" className="mb-4">Starting at ₹5,000 / month</Badge>}
                                <h2 className="font-headline text-3xl font-bold">{service.title}</h2>
                                <p className="mt-4 text-muted-foreground">{service.description}</p>
                                <ul className="mt-6 space-y-3">
                                    {service.details.map(detail => (
                                        <li key={detail} className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-destructive" /><span>{detail}</span></li>
                                    ))}
                                </ul>
                                <Button asChild className="mt-8">
                                    <Link href={buttonLinks[service.slug] || '/contact'}>
                                        Learn More <MoveRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </section>
                )
            })}
        </div>
      </div>

        {/* Industries We Serve Section */}
        <section className="scroll-mt-20 py-20 md:py-28 text-center bg-black">
            <div className="container">
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
            </div>
        </section>

        {/* Technologies We Use Section */}
        <section className="scroll-mt-20 text-center bg-black pb-20 md:pb-28">
            <div className="container">
                <h2 className="font-headline text-3xl font-bold">Technologies We Use</h2>
                <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 opacity-75">
                    {technologies.map(tech => (
                        <span key={tech.name} className="text-xl font-semibold text-muted-foreground">{tech.name}</span>
                    ))}
                </div>
            </div>
        </section>

       {/* Final CTA */}
      <section className="border-t border-border bg-card py-20">
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
