import { cn } from '@/lib/utils';

const clients = [
  { name: 'Microsoft' },
  { name: 'Airbnb' },
  { name: 'Stripe' },
  { name: 'InnovateX' },
  { name: 'QuantumLeap' },
  { name: 'Stellar' },
  { name: 'Apex' },
];

const Hexagon = ({ name, delay }: { name: string; delay: string }) => (
  <div
    className="group relative flex h-[115.47px] w-[100px] animate-in items-center justify-center zoom-in-90 fade-in transition-all duration-300 hover:z-10 hover:scale-110"
    style={{ animationDelay: delay }}
  >
    <div
      className="absolute inset-0 border border-accent/20 bg-white/5 shadow-[0_0_20px_hsl(var(--accent)/0.1)] backdrop-blur-md transition-all duration-300 group-hover:border-accent/50 group-hover:shadow-[0_0_30px_hsl(var(--accent)/0.3)]"
      style={{
        clipPath:
          'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
      }}
    />
    <span className="relative text-center text-xs font-semibold text-white">
      {name}
    </span>
  </div>
);

export default function StatsSection() {
  // I am replacing the StatsSection with a new ClientsSection as per the prompt.
  // The filename remains the same to replace the old section.
  return (
    <section className="relative overflow-hidden bg-black py-20 md:py-28">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-50 bg-[radial-gradient(ellipse_at_center,_hsl(var(--background))_0%,_transparent_70%)]" />
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
                <Hexagon name={clients[0].name} delay="300ms" />
                <Hexagon name={clients[1].name} delay="400ms" />
              </div>
              {/* Row 2 */}
              <div className="flex gap-x-1">
                <Hexagon name={clients[2].name} delay="500ms" />
                <Hexagon name={clients[3].name} delay="600ms" />
                <Hexagon name={clients[4].name} delay="700ms" />
              </div>
              {/* Row 3 */}
              <div className="flex gap-x-1">
                <Hexagon name={clients[5].name} delay="800ms" />
                <Hexagon name={clients[6].name} delay="900ms" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
