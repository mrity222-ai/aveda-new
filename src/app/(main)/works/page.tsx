import PortfolioGallery from '@/components/works/portfolio-gallery';

export default function WorksPage() {
  return (
    <div className="relative overflow-hidden bg-black text-foreground">
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute -top-1/4 left-0 -translate-x-1/4 w-1/2 h-full bg-destructive/10 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-pulse" />
        <div className="absolute -bottom-1/4 right-0 translate-x-1/4 w-1/2 h-full bg-destructive/5 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      <div className="container relative z-10 py-20 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight md:text-6xl">
            Our Work
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            We are proud of the solutions we've delivered. Explore our portfolio to see the impact we've made for our clients across various industries.
          </p>
        </div>
        <PortfolioGallery />
      </div>
    </div>
  );
}
