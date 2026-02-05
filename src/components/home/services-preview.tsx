import Link from 'next/link';
import {
  Code2,
  Smartphone,
  LineChart,
  Search,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const previewServices = [
  {
    slug: 'web-development',
    title: 'Web Development',
    description:
      'High-performance and scalable websites built to grow your business.',
    icon: Code2,
  },
  {
    slug: 'app-development',
    title: 'App Development',
    description:
      'Powerful Android & iOS apps designed for performance and usability.',
    icon: Smartphone,
  },
  {
    slug: 'digital-marketing',
    title: 'Digital & Performance Marketing',
    description:
      'AI-driven campaigns that generate leads, sales, and visibility.',
    icon: LineChart,
  },
  {
    slug: 'seo-optimization',
    title: 'SEO & Optimization',
    description: 'Rank higher, load faster, and convert better with smart SEO.',
    icon: Search,
  },
];

export default function ServicesPreview() {
  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="container">
        <div className="mb-12 text-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
          <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
            Our Core Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Smart, scalable, and result-driven digital solutions powered by AI.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2">
          {previewServices.map((service, index) => (
            <Card
              key={service.slug}
              className="flex flex-col rounded-xl border-transparent bg-card transition-all duration-300 hover:-translate-y-2 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/10 animate-in fade-in slide-in-from-bottom-12 duration-700"
              style={{ animationDelay: `${index * 150 + 600}ms` }}
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3 text-primary">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="font-headline text-xl">
                    {service.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="default">
            <Link href="/services">
              View All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
