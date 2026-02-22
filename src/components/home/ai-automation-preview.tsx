
import { BrainCircuit, Bot, TrendingUp, Calendar, CheckCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AiAutomationPreview() {
  const features = [
    {
      icon: BrainCircuit,
      title: 'CRM & Lead Automation',
      description: '',
    },
    {
      icon: Bot,
      title: 'WhatsApp & Chatbot Automation',
      description: '',
    },
    {
      icon: TrendingUp,
      title: 'Sales Funnel Automation',
      description: '',
    },
    {
      icon: Calendar,
      title: 'Appointment & Payment Automation',
      description: '',
    },
  ];

  const results = [
    '50% Reduction in Manual Work',
    '2X Faster Lead Response',
    '30–70% Operational Time Saved',
    'Improved Conversion Rates',
  ];

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left-12 duration-700">
            <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Smart AI Automation That Works 24/7
            </h2>
            <p className="text-lg text-muted-foreground">
              We design intelligent automation systems that eliminate manual work, improve efficiency, and increase revenue — without increasing your team size.
            </p>
            <div>
              <h3 className="font-headline text-2xl font-bold tracking-tight md:text-3xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Ready to Put Your Business on Autopilot?
              </h3>
              <div className="mt-6 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <Button asChild size="lg">
                  <Link href="/contact?service=AI+Automation+Audit">Get Free Automation Audit</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact?service=AI+Expert+Talk">
                    <Phone className="mr-2 h-4 w-4" />
                    Talk to an Expert
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Right Grid */}
          <div className="space-y-8 animate-in fade-in slide-in-from-right-12 duration-700">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div key={feature.title} 
                     className="group rounded-2xl border bg-card p-6 soft-shadow transition-all duration-300 hover:border-primary hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-16 duration-700"
                     style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{feature.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
            
            {/* Results Bar */}
            <div className="rounded-2xl border bg-secondary/50 p-6 soft-shadow">
              <ul className="grid grid-cols-1 gap-4 text-sm sm:grid-cols-2">
                {results.map((result) => (
                  <li key={result} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="font-medium text-muted-foreground">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
