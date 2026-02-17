import PortfolioGallery from '@/components/works/portfolio-gallery';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function WorksPage() {
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
        <div className="container relative z-10 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-white md:text-6xl animate-blur-in">
            Our Work
          </h1>
          <p className="mt-6 text-lg text-white/90">
            We are proud of the solutions we've delivered. Explore our portfolio
            to see the impact we've made for our clients across various
            industries.
          </p>
        </div>
      </section>
      <div className="container py-20 md:py-28">
        <PortfolioGallery />
      </div>
    </div>
  );
}
