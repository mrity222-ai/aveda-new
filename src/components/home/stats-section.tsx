import { cn } from '@/lib/utils';
import Image from 'next/image';

const clients = [
  { name: 'Microsoft', imageUrl: 'https://picsum.photos/seed/microsoft/120/40' },
  { name: 'Airbnb', imageUrl: 'https://picsum.photos/seed/airbnb/120/40' },
  { name: 'Stripe', imageUrl: 'https://picsum.photos/seed/stripe/120/40' },
  { name: 'InnovateX', imageUrl: 'https://picsum.photos/seed/innovatex/120/40' },
  { name: 'QuantumLeap', imageUrl: 'https://picsum.photos/seed/quantumleap/120/40' },
  { name: 'Stellar', imageUrl: 'https://picsum.photos/seed/stellar/120/40' },
  { name: 'Apex', imageUrl: 'https://picsum.photos/seed/apex/120/40' },
];

const Hexagon = ({
  name,
  imageUrl,
  delay,
}: {
  name: string;
  imageUrl: string;
  delay: string;
}) => (
  <div
    className="group relative flex h-[115.47px] w-[100px] animate-in items-center justify-center zoom-in-90 fade-in transition-all duration-300 hover:z-10 hover:scale-110"
    style={{ animationDelay: delay }}
  >
    <div
      className="absolute inset-0 border border-primary/20 bg-card/50 shadow-[0_0_20px_hsl(var(--primary)/0.1)] backdrop-blur-md transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)]"
      style={{
        clipPath:
          'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
      }}
    />
    <div className="relative h-8 w-16">
      <Image
        src={imageUrl}
        alt={`${name} logo`}
        fill
        className="object-contain brightness-0 invert filter"
      />
    </div>
  </div>
);

export default function StatsSection() {
  // I am replacing the StatsSection with a new ClientsSection as per the prompt.
  // The filename remains the same to replace the old section.
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-28">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-50 bg-[radial-gradient(ellipse_at_center,_hsl(var(--secondary))_0%,_transparent_70%)]" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background to-transparent" />

      <div className="container relative z-10">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div className="animate-in slide-in-from-left-12 fade-in duration-500">
            <p className="text-muted-foreground">
              Crafting digital success for top-notch companies
            </p>
            <h2 className="mt-2 font-headline text-5xl font-extrabold tracking-tighter md:text-6xl">
              OUR CLIENTS
            </h2>
          </div>

          <div className="flex h-full min-h-[300px] items-center justify-center sm:min-h-[350px]">
            <div className="flex origin-center flex-col items-center gap-y-[calc(-115.47px/4)] scale-75 sm:scale-90 md:scale-100">
              {/* Row 1 */}
              <div className="flex gap-x-1">
                <Hexagon
                  name={clients[0].name}
                  imageUrl={clients[0].imageUrl}
                  delay="300ms"
                />
                <Hexagon
                  name={clients[1].name}
                  imageUrl={clients[1].imageUrl}
                  delay="400ms"
                />
              </div>
              {/* Row 2 */}
              <div className="flex gap-x-1">
                <Hexagon
                  name={clients[2].name}
                  imageUrl={clients[2].imageUrl}
                  delay="500ms"
                />
                <Hexagon
                  name={clients[3].name}
                  imageUrl={clients[3].imageUrl}
                  delay="600ms"
                />
                <Hexagon
                  name={clients[4].name}
                  imageUrl={clients[4].imageUrl}
                  delay="700ms"
                />
              </div>
              {/* Row 3 */}
              <div className="flex gap-x-1">
                <Hexagon
                  name={clients[5].name}
                  imageUrl={clients[5].imageUrl}
                  delay="800ms"
                />
                <Hexagon
                  name={clients[6].name}
                  imageUrl={clients[6].imageUrl}
                  delay="900ms"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
