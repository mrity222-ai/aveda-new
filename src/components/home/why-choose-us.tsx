import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

export default function WhyChooseUs() {
  const aboutImage = PlaceHolderImages.find(
    (img) => img.id === 'about-us-image'
  );

  return (
    <section className="bg-secondary py-20 md:py-28 text-foreground">
      <div className="container">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="space-y-6 animate-in fade-in slide-in-from-left duration-700">
            <h2 className="font-headline text-sm font-bold uppercase tracking-wider text-primary">
              About Aveda Technologies
            </h2>
            <h2 className="font-headline text-4xl font-bold md:text-5xl">
              Pioneering AI-powered digital growth and political intelligence.
            </h2>
            <p className="text-lg text-muted-foreground">
              We specialize in solving complex growth and influence challenges through a powerful fusion of AI, data-driven digital transformation, performance marketing, and strategic political campaigning.
            </p>
            <Link href="/about" className="group inline-flex items-center font-semibold text-primary transition-all duration-300 hover:text-foreground">
              Explore More <ArrowDown className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
            </Link>
          </div>
          <div className="group relative h-96 w-full overflow-hidden rounded-lg md:h-[450px] animate-in fade-in slide-in-from-right duration-700">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
             <div className="absolute inset-0 rounded-lg ring-2 ring-transparent transition-all duration-500 group-hover:ring-primary/50 group-hover:shadow-[0_0_30px_5px] group-hover:shadow-primary/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
