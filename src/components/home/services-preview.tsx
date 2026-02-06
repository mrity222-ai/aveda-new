'use client';

import Link from 'next/link';
import { services } from '@/lib/data';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '../ui/button';
import { MoveRight } from 'lucide-react';

export default function ServicesPreview() {
  const featuredServices = services.slice(0, 4);

  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="container">
        <div className="mb-16 text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
            Our Core Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            A complete suite of digital solutions to transform your business and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featuredServices.map((service, index) => (
             <Link href={`/services#${service.slug}`} key={service.slug} className="group block h-full">
              <Card
                className="flex h-full flex-col justify-start overflow-hidden rounded-lg border-border bg-card text-left shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/20 animate-in fade-in slide-in-from-bottom-12 duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="font-headline text-xl">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description.substring(0,100) + '...'}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
            <Button asChild size="lg" variant="default">
                <Link href="/services">Explore All Services <MoveRight className="ml-2" /></Link>
            </Button>
        </div>

      </div>
    </section>
  );
}
