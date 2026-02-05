import { stats, trustLogos } from '@/lib/data';

export default function StatsSection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center">
          <h3 className="font-headline text-lg font-semibold tracking-wider text-muted-foreground uppercase">
            Trusted by startups, enterprises, and growing brands across India & globally
          </h3>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-headline text-4xl font-bold text-primary md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-muted-foreground md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
