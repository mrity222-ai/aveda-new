import { stats, trustLogos } from '@/lib/data';

export default function StatsSection() {
  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl  animate-in fade-in slide-in-from-bottom-8 duration-700">
            Trusted by Growing Brands & Leaders
          </h2>
          <p className="mt-4 text-lg text-muted-foreground  animate-in fade-in slide-in-from-bottom-10 duration-700 delay-100">
            Businesses and organizations that trust us for digital growth and
            AI-driven solutions.
          </p>
          <div className="relative mx-auto mt-6 h-1 w-24 overflow-hidden rounded-full  animate-in fade-in slide-in-from-bottom-12 duration-700 delay-200">
            <div className="absolute inset-0 bg-primary"></div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center animate-in fade-in zoom-in-95 duration-500"
              style={{ animationDelay: `${index * 150 + 400}ms` }}
            >
              <p className="font-headline text-4xl font-bold text-primary md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-muted-foreground md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 animate-in fade-in duration-500 delay-1000">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-75">
            {trustLogos.map((logo) => (
              <span
                key={logo.name}
                className="text-xl font-semibold text-muted-foreground transition-opacity hover:opacity-100"
              >
                {logo.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
