import PortfolioGallery from '@/components/works/portfolio-gallery';

export default function WorksPage() {
  return (
    <div className="bg-black text-foreground">
      <div className="container py-20 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight md:text-6xl">
            Our Work Speaks for Itself
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            We are proud of the solutions we've delivered. Explore our portfolio to see the impact we've made for our clients.
          </p>
        </div>
        <PortfolioGallery />
      </div>
    </div>
  );
}
