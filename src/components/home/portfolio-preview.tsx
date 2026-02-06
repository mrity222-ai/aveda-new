import Image from 'next/image';
import { portfolioProjects } from '@/lib/data';

export default function PortfolioPreview() {
  const dashboardImage = portfolioProjects.find(
    (p) => p.slug === 'fintech-dashboard'
  )?.image;

  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="container">
        <div className="text-center animate-in fade-in slide-in-from-bottom-8 duration-500">
          <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
            Visualize Your Workflow
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Our intuitive dashboard gives you a complete overview of your
            development lifecycle, from commit to deployment.
          </p>
        </div>
        <div className="mt-12 relative animate-in fade-in slide-in-from-bottom-12 duration-500 delay-200">
          {dashboardImage && (
            <Image
              src={dashboardImage.imageUrl}
              alt="SaaS Platform Dashboard"
              width={1200}
              height={750}
              className="rounded-lg object-cover shadow-2xl shadow-black/10 ring-1 ring-black/5 mx-auto"
              data-ai-hint={dashboardImage.imageHint}
            />
          )}
        </div>
      </div>
    </section>
  );
}
