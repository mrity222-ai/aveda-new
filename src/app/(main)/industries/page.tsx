
import {
  Factory,
  HeartPulse,
  ShoppingCart,
  Landmark,
  School,
  MoveRight,
  Rocket,
  Users,
  BarChart,
  ShieldCheck,
  Lightbulb,
  Map,
  Code,
  Laptop,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export default function IndustriesPage() {
  const whyChooseUs = [
    {
      icon: Rocket,
      title: 'Innovation at the Core',
      description: 'From legacy systems to modern digital infrastructures — we enable accelerated transformation using AI, automation, cloud, and data intelligence.',
    },
    {
      icon: Users,
      title: 'Customized Industry Solutions',
      description: 'Every industry is unique — aur hum tailor-made solutions deliver karte hain jo aapke business objectives ko boost karein.',
    },
    {
      icon: BarChart,
      title: 'Data-Driven Performance',
      description: 'Real-time insights, predictive analytics, and AI-powered decision-making — all under one roof.',
    },
    {
      icon: ShieldCheck,
      title: 'Secure & Scalable',
      description: 'Enterprise-level security, robust architectures, and scalable frameworks jo aapke business ke growth ke saath evolve hotey hain.',
    },
  ];

  const industries = [
    {
      icon: Factory,
      title: 'Manufacturing',
      features: [
        'Smart Factory Automation',
        'IoT & Predictive Maintenance',
        'Inventory & Supply Chain Optimization',
      ],
      impact: 'Reduced Downtime | Increased Output | Lower Operational Cost',
      color: 'blue'
    },
    {
      icon: HeartPulse,
      title: 'Healthcare & Wellness',
      features: [
        'Patient Management Systems',
        'Tele-health & Remote Monitoring',
        'Secure EHR & Compliance Solutions',
      ],
      impact: 'Faster Patient Care | Better Data Security | Enhanced Experience',
      color: 'green'
    },
    {
      icon: ShoppingCart,
      title: 'Retail & e-Commerce',
      features: [
        'Personalized Shopping Experiences',
        'Inventory Intelligence',
        'Omnichannel Commerce Platforms',
      ],
      impact: 'Higher Conversions | Increased Repeat Sales | Efficient Fulfillment',
      color: 'orange'
    },
    {
      icon: Landmark,
      title: 'Finance & Banking',
      features: [
        'AI-Powered Risk Assessment',
        'Secure Digital Banking Platforms',
        'Regulatory Compliance Automation',
      ],
      impact: 'Faster Approvals | Reduced Fraud | Better Customer Trust',
      color: 'purple'
    },
    {
      icon: School,
      title: 'Education & EdTech',
      features: [
        'LMS & Adaptive Learning Platforms',
        'Student Analytics',
        'Gamified Digital Solutions',
      ],
      impact: 'Better Retention | Engaging Learning | Outcome-Driven Results',
      color: 'teal'
    },
  ];

  const processSteps = [
      {
          icon: Lightbulb,
          title: 'Understand Your Goals',
          description: "Hum pehle aapke business ko deeply samajhte hain — challenges aur opportunities dono."
      },
      {
          icon: Map,
          title: 'Strategy & Roadmap',
          description: "Clear tech roadmap with measurable KPIs aur realistic timelines."
      },
      {
          icon: Code,
          title: 'Build & Implement',
          description: "Agile development, continuous testing, quick iterations — maximum quality."
      },
      {
          icon: Laptop,
          title: 'Support & Growth',
          description: "Post-deployment support aur optimization for long-term success."
      }
  ]

  const heroBgImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

  const industryColors: { [key: string]: string } = {
    blue: 'border-blue-500/50 hover:border-blue-500 hover:shadow-blue-500/10',
    green: 'border-green-500/50 hover:border-green-500 hover:shadow-green-500/10',
    orange: 'border-orange-500/50 hover:border-orange-500 hover:shadow-orange-500/10',
    purple: 'border-purple-500/50 hover:border-purple-500 hover:shadow-purple-500/10',
    teal: 'border-teal-500/50 hover:border-teal-500 hover:shadow-teal-500/10',
  };
  const industryIconColors: { [key: string]: string } = {
    blue: 'text-blue-500',
    green: 'text-green-500',
    orange: 'text-orange-500',
    purple: 'text-purple-500',
    teal: 'text-teal-500',
  };


  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative flex h-[90vh] min-h-[700px] items-center justify-center overflow-hidden">
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
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container relative z-10 text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl animate-blur-in">
              Transforming Industries with Smart, Scalable & AI-Driven Solutions
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-white/80 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-100">
              Empowering Businesses Across Sectors to Innovate, Automate & Grow
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-200">
                <Button asChild size="lg">
                    <Link href="/contact">Get a Free Consultation</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                    <Link href="/services">Explore Our Solutions</Link>
                </Button>
            </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-secondary py-20 md:py-28">
          <div className="container">
              <div className="mx-auto max-w-xl text-center mb-16">
                  <h2 className="font-headline text-3xl font-bold md:text-4xl text-accent">Why Industries Choose Aveda?</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {whyChooseUs.map((item, index) => (
                      <div key={item.title} 
                           className="group rounded-2xl border bg-card p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 soft-shadow animate-in fade-in slide-in-from-bottom-12"
                           style={{ animationDelay: `${index * 150}ms` }}
                      >
                          <div className="flex justify-center">
                              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary ring-8 ring-primary/5 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                                  <item.icon className="h-8 w-8" />
                              </div>
                          </div>
                          <h3 className="mt-6 font-headline text-xl font-semibold text-accent">{item.title}</h3>
                          <p className="mt-2 text-muted-foreground text-sm">{item.description}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>
      
      {/* Industries We Serve Section */}
      <section className="bg-background py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="font-headline text-3xl font-bold md:text-4xl text-accent">Industries We Serve</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                  <Card key={industry.title} className={cn(
                      'group flex flex-col rounded-2xl border-2 bg-card/50 transition-all duration-300 soft-shadow animate-in fade-in slide-in-from-bottom-12',
                      industryColors[industry.color]
                  )}
                  style={{ animationDelay: `${index * 150}ms` }}
                  >
                      <CardHeader className="flex-row items-center gap-4 space-y-0 pb-4">
                          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-muted">
                            <industry.icon className={cn("h-8 w-8 transition-transform duration-300 group-hover:scale-110", industryIconColors[industry.color])} />
                          </div>
                          <CardTitle className="font-headline text-2xl text-accent">{industry.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow space-y-4">
                          <ul className="space-y-2">
                              {industry.features.map(feature => (
                                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                                      <div className="h-2 w-2 rounded-full bg-primary/50"/>
                                      <span>{feature}</span>
                                  </li>
                              ))}
                          </ul>
                          <div>
                            <Badge variant="outline" className={cn("border-2", industryColors[industry.color], industryIconColors[industry.color])}>
                              Business Impact: {industry.impact}
                            </Badge>
                          </div>
                      </CardContent>
                  </Card>
              ))}
              <div className="lg:col-span-3 flex items-center justify-center p-8 rounded-2xl border-2 border-dashed bg-secondary">
                  <p className="text-center font-semibold text-muted-foreground">And many more industries...</p>
              </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="bg-secondary py-20 md:py-28">
          <div className="container">
              <div className="mx-auto max-w-2xl text-center mb-16">
                  <h2 className="font-headline text-3xl font-bold md:text-4xl text-accent">How We Work</h2>
              </div>
              <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 hidden lg:block"></div>
                {processSteps.map((step, index) => (
                    <div key={step.title} className="relative flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-16 duration-500" style={{ animationDelay: `${index * 150}ms`}}>
                        <div className="z-10 flex h-20 w-20 items-center justify-center rounded-full border-4 border-secondary bg-primary text-primary-foreground shadow-lg">
                            <step.icon className="h-10 w-10" />
                        </div>
                         <div className="mt-[-2.5rem] pt-12 pb-6 px-6 rounded-2xl border bg-card w-full soft-shadow">
                             <p className="font-headline text-lg font-bold text-primary">Step {index+1}</p>
                            <h3 className="mt-2 font-headline text-xl font-semibold text-accent">{step.title}</h3>
                            <p className="mt-2 text-muted-foreground text-sm">{step.description}</p>
                        </div>
                    </div>
                ))}
              </div>
          </div>
      </section>

    </div>
  );
}
