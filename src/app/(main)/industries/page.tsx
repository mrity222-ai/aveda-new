
import {
  Vote,
  Rocket,
  ShoppingCart,
  Building,
  HeartPulse,
  School,
  Landmark,
  Factory,
  MoveRight,
  Heart,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const industries = [
  {
    icon: Vote,
    title: 'Political Campaigns & Public Affairs',
    description:
      'AI voter analytics, sentiment tracking, and narrative optimization.',
  },
  {
    icon: Rocket,
    title: 'Startups & SaaS',
    description: 'Growth marketing, AI automation, and scalable tech solutions.',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce & Retail',
    description:
      'Conversion optimization, AI recommendations, and performance ads.',
  },
  {
    icon: Building,
    title: 'Real Estate & Infrastructure',
    description:
      'Lead intelligence, geo-targeted campaigns, and CRM automation.',
  },
  {
    icon: HeartPulse,
    title: 'Healthcare & Wellness',
    description: 'Secure platforms, SEO growth, and patient engagement tools.',
  },
  {
    icon: School,
    title: 'Education & EdTech',
    description:
      'AI-powered platforms, enrollment growth, and digital branding.',
  },
  {
    icon: Landmark,
    title: 'Finance & FinTech',
    description:
      'Secure dashboards, AI fraud insights, and lead performance tracking.',
  },
  {
    icon: Factory,
    title: 'Manufacturing & MSMEs',
    description: 'Automation, analytics dashboards, and demand forecasting.',
  },
  {
    icon: Heart,
    title: 'Non-Profit & NGOs',
    description: 'Digital fundraising, donor engagement, and impact analytics.',
  },
];

export default function IndustriesPage() {
  const heroBgImage = PlaceHolderImages.find((img) => img.id === 'hero-background');
  return (
    <div className="bg-background text-foreground">
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
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container relative z-10">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-white md:text-5xl animate-blur-in">
              Industries We Empower With AI
            </h1>
            <p className="mt-4 text-lg text-white/90 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-100">
              Tailored AI-driven solutions for diverse sectors.
            </p>
            <div className="relative mx-auto mt-6 h-1 w-24 overflow-hidden rounded-full animate-in fade-in slide-in-from-bottom-12 duration-700 delay-200">
              <div className="absolute inset-0 bg-primary"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((item, index) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-lg border bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary soft-shadow animate-in fade-in slide-in-from-bottom-16 duration-500"
                style={{ animationDelay: `${index * 100 + 400}ms` }}
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/5 opacity-0 transition-all duration-500 group-hover:scale-[8] group-hover:opacity-100"></div>
                <div className="relative z-10">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary ring-8 ring-primary/5 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-headline text-xl font-semibold text-accent">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t bg-secondary py-20 animate-in fade-in duration-700">
        <div className="absolute inset-0 z-0 opacity-10">
            {heroBgImage && (
                <Image
                src={heroBgImage.imageUrl}
                alt="Your Industry. Our AI Expertise. background"
                fill
                className="object-cover"
                data-ai-hint={heroBgImage.imageHint}
                />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/10 to-transparent" />
        </div>
        <div className="container relative z-10 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-accent md:text-4xl">
            Your Industry. Our AI Expertise.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Let's discuss how we can tailor our solutions for your specific
            needs.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/contact">
              Talk to an Expert <MoveRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
