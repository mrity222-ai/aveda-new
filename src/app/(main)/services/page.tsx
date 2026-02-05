import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Check, MoveRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ServicesPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container py-20 md:py-28">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            Our Services
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            From concept to launch, we provide end-to-end digital solutions
            tailored to your business needs. Discover how we can help you grow.
          </p>
        </div>

        <div className="space-y-20 md:space-y-28">
          {services.map((service, index) => {
            const image = PlaceHolderImages.find(
              (img) => img.id === service.imageId
            );
            const isReversed = index % 2 !== 0;

            return (
              <section key={service.slug} id={service.slug} className="items-center gap-8 md:grid md:grid-cols-2 md:gap-16">
                <div className={cn('relative h-80 w-full md:h-[450px]', isReversed && 'md:order-last')}>
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="rounded-lg object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      data-ai-hint={image.imageHint}
                    />
                  )}
                  <div className="absolute inset-0 rounded-lg bg-black/30 transition-all duration-300 hover:bg-black/10"></div>
                </div>

                <div className={cn('mt-8 md:mt-0', isReversed && 'md:order-first')}>
                  <h2 className="group font-headline text-3xl font-bold text-foreground transition-colors duration-300 hover:text-primary">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-muted-foreground">{service.description}</p>
                  <ul className="mt-6 space-y-3">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-3">
                        <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Link
                      href={service.slug === 'digital-marketing' ? '/services/digital-marketing' : '#'}
                      className="group inline-flex items-center font-semibold text-primary transition-all duration-300 hover:text-foreground"
                    >
                      Explore More
                      <MoveRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
