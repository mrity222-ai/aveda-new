import PortfolioGallery from '@/components/works/portfolio-gallery';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function WorksPage() {
  const heroBgImage = PlaceHolderImages.find(
    (img) => img.id === 'hero-background'
  );
  return (
    <div className="relative overflow-hidden bg-secondary text-foreground">
      <div className="absolute inset-0 z-0 opacity-10">
        {heroBgImage && (
          <Image
            src={heroBgImage.imageUrl}
            alt="Our Works background"
            fill
            className="object-cover"
            priority
            data-ai-hint={heroBgImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/80 to-transparent"></div>
      </div>
      <div className="container relative z-10 py-20 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight md:text-6xl animate-blur-in">
            Our Work
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            We are proud of the solutions we've delivered. Explore our portfolio
            to see the impact we've made for our clients across various
            industries.
          </p>
        </div>
        <PortfolioGallery />
      </div>
    </div>
  );
}
