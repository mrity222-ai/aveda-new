import Link from 'next/link';
import { services } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export default function ServicesPreview() {
  return (
    <section className="bg-secondary py-20">
      <div className="container">
        <div className="mb-12 text-center animate-in fade-in slide-in-from-bottom-8 duration-500">
          <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
            Our Core Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We offer a comprehensive suite of services to build your digital presence.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={service.slug}
              className="flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/20 animate-in fade-in slide-in-from-bottom-12 duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3 text-primary">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
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
