import Image from 'next/image';
import { BrainCircuit, Target, TrendingUp, Users } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-us-image');

  const values = [
    {
      icon: BrainCircuit,
      title: 'AI-First Approach',
      description: 'We integrate AI into every solution to deliver intelligent, automated, and predictive results.',
    },
    {
      icon: Target,
      title: 'Data-Driven Strategies',
      description: 'Our decisions are backed by data, ensuring precision, impact, and measurable outcomes.',
    },
    {
      icon: TrendingUp,
      title: 'Performance & ROI Focused',
      description: 'We are committed to delivering tangible returns and sustainable growth for all our clients.',
    },
    {
      icon: Users,
      title: 'Political & Business Intelligence',
      description: 'We provide a unique blend of tech expertise and strategic insights for complex challenges.',
    },
  ];

  return (
    <div className="bg-gray-950 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black py-20 md:py-32">
        <div className="absolute inset-0 z-0 opacity-10">
          {/* Subtle animated background */}
        </div>
        <div className="container relative z-10 text-center">
          <p className="font-headline text-sm uppercase tracking-widest text-primary">
            About Aveda Technologies
          </p>
          <h1 className="mt-4 font-headline text-4xl font-bold tracking-tight md:text-6xl">
            Building Intelligent Digital & Political Systems with AI
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
            Aveda Technologies helps businesses, leaders, and organizations grow through AI-driven technology, marketing, and political intelligence.
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <div className="space-y-6">
              <h2 className="font-headline text-3xl font-bold">Who We Are</h2>
              <p className="text-lg text-gray-300">
                Aveda Technologies is an AI-first digital company delivering advanced web, mobile, marketing, automation, and political campaigning solutions. We combine technology, data, and strategy to create measurable digital impact.
              </p>
            </div>
            <div className="group relative h-96 w-full overflow-hidden rounded-lg md:h-[450px]">
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
              <div className="absolute inset-0 rounded-lg bg-black/20 ring-2 ring-transparent transition-all duration-500 group-hover:bg-black/10 group-hover:ring-primary/50 group-hover:shadow-[0_0_30px_5px] group-hover:shadow-primary/20"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* What Makes Us Different Section */}
      <section className="bg-black py-20 md:py-28">
        <div className="container text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">What Makes Us Different</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            Our core principles ensure we deliver unparalleled value and innovation.
          </p>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="group rounded-lg p-6 transition-all duration-300 hover:bg-gray-900/50">
                <div className="flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-900 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                    <value.icon className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="mt-6 font-headline text-xl font-semibold">{value.title}</h3>
                <p className="mt-2 text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
