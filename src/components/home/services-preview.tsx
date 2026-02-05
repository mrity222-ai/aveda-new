'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const coreServices = services.filter(s => 
    ['web-development', 'app-development', 'digital-marketing', 'seo-optimization'].includes(s.slug)
);

export default function ServicesPreview() {
    const [activeService, setActiveService] = useState(coreServices[0]);

    return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="container">
        <div className="mb-12 text-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
          <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
            What We Do Best
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            AI-powered digital services crafted for growth and performance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Column: Interactive Service List */}
            <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-left duration-700 delay-700">
                {coreServices.map((service, index) => {
                    const isActive = activeService.slug === service.slug;
                    return (
                        <div
                            key={service.slug}
                            onMouseEnter={() => setActiveService(service)}
                            className={cn(
                                "p-6 rounded-xl cursor-pointer transition-all duration-300 border-2",
                                isActive ? "bg-card border-primary/50 shadow-lg shadow-primary/10" : "bg-card/50 border-transparent hover:bg-card hover:border-primary/20"
                            )}
                        >
                            <div className="flex items-start gap-4">
                                <div className={cn("p-3 mt-1 rounded-full bg-primary/10 text-primary transition-colors", isActive && "bg-primary text-primary-foreground")}>
                                    <service.icon className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className={cn("font-headline text-xl font-semibold transition-colors", isActive && "text-primary")}>{service.title}</h3>
                                    <p className="text-muted-foreground text-sm mt-1">{service.description.split('.')[0]}.</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Right Column: Image Preview */}
            <div className="relative h-96 w-full lg:h-[500px] animate-in fade-in slide-in-from-right duration-700 delay-700">
                <div className="w-full h-full rounded-xl overflow-hidden shadow-2xl">
                    {coreServices.map(service => {
                        const image = PlaceHolderImages.find(img => img.id === service.imageId);
                        const isActive = activeService.slug === service.slug;
                        if (!image) return null;
                        
                        return (
                             <Image
                                key={service.slug}
                                src={image.imageUrl}
                                alt={service.title}
                                fill
                                className={cn(
                                    "object-cover transition-all duration-500 ease-in-out",
                                    isActive ? "opacity-100 scale-100" : "opacity-0 scale-105"
                                )}
                                sizes="(max-width: 768px) 100vw, 50vw"
                                data-ai-hint={image.imageHint}
                            />
                        );
                    })}
                </div>
            </div>
        </div>

        <div className="mt-16 text-center animate-in fade-in slide-in-from-bottom-16 duration-700 delay-900">
          <Button asChild size="lg" variant="outline">
            <Link href="/services">
              View All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}