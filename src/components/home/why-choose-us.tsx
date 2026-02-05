import { whyChooseUs } from '@/lib/data';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function WhyChooseUs() {
  const aboutImage = PlaceHolderImages.find(
    (img) => img.id === 'about-us-image'
  );

  return (
    <section className="py-20">
      <div className="container">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-8">
            <div className="text-left">
              <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
                Why Choose Aveda
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We are more than just a service provider; we are your technology partner.
              </p>
            </div>
            <ul className="space-y-6">
              {whyChooseUs.map((item) => (
                <li key={item.title} className="flex items-start">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-headline text-lg font-semibold">{item.title}</h4>
                    <p className="mt-1 text-muted-foreground">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-96 w-full overflow-hidden rounded-lg">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
