
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Smartphone,
  Briefcase,
  LayoutGrid,
  GitMerge,
  Zap,
  ShieldCheck,
  Scaling,
  PenTool,
  CheckCircle,
  MoveRight,
  Lightbulb,
  Code,
  Cog,
  Rocket,
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const WhatsAppIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
);

export default function AppDevelopmentPage() {
    const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

    const whatWeBuild = [
        {
            icon: Smartphone,
            title: 'Android & iOS Apps',
            description: 'Native and cross-platform apps with smooth performance, tailored to your brand.',
        },
        {
            icon: Briefcase,
            title: 'Business Applications',
            description: 'Custom apps designed to streamline your operations, improve efficiency, and scale fast.',
        },
        {
            icon: LayoutGrid,
            title: 'Admin Panels & Dashboards',
            description: 'Powerful control panels with real-time data visualization and insightful analytics.',
        },
        {
            icon: GitMerge,
            title: 'API Integrations',
            description: 'Secure integration with third-party tools, payment gateways, CRMs, and more.',
        },
    ];

    const processSteps = [
        { icon: Lightbulb, title: "Idea & Strategy" },
        { icon: PenTool, title: "UI / UX Design" },
        { icon: Code, title: "App Development" },
        { icon: ShieldCheck, title: "Testing & Security" },
        { icon: Rocket, title: "Launch & Support" },
    ];

    const technologies = [
        'Flutter', 'React Native', 'Kotlin', 'Swift', 'Node.js', 'Firebase', 'AWS'
    ];
    
    const whyChooseUs = [
        'High-performance & secure apps',
        'Scalable architecture for growth',
        'Clean, intuitive UI/UX design',
        'Integration of AI-powered features',
        'Ongoing support & maintenance',
    ];

    return (
        <div className="bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-background py-20 md:py-32">
                 <div className="absolute inset-0 z-0 opacity-10">
                    {heroImage && (
                        <Image
                            src={heroImage.imageUrl}
                            alt="High-Performance Mobile App Development background"
                            fill
                            className="object-cover"
                            priority
                            data-ai-hint={heroImage.imageHint}
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
                </div>
                <div className="container relative z-10 text-center">
                    <h1 className="font-headline text-4xl font-bold tracking-tight md:text-6xl">
                        High-Performance Mobile App Development
                    </h1>
                    <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
                        From idea to launch, we build secure, scalable, and engaging mobile apps for iOS and Android that drive real business growth.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Button asChild size="lg">
                            <Link href="/contact?service=App+Development">Start Your App Project</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline">
                            <Link href="/contact">Get Free Consultation</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* What We Build Section */}
            <section className="bg-black py-20 md:py-28">
                <div className="container text-center">
                    <h2 className="font-headline text-3xl font-bold md:text-4xl mb-12">What We Build</h2>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {whatWeBuild.map((item) => (
                        <div key={item.title} className="group rounded-xl border border-[#1a1a1a] bg-[#0a0a0a] p-8 text-center transition-all duration-300 hover:border-destructive hover:shadow-[0_0_20px_rgba(255,0,0,0.2)] hover:-translate-y-2">
                            <div className="flex justify-center">
                                <div className="relative flex h-20 w-20 items-center justify-center rounded-full">
                                    <div className="absolute inset-0 rounded-full bg-destructive/10 blur-lg transition-all duration-300 group-hover:blur-xl"></div>
                                    <item.icon className="relative h-10 w-10 text-destructive drop-shadow-[0_0_8px_hsl(var(--destructive)/0.8)]" />
                                </div>
                            </div>
                            <h3 className="mt-6 font-headline text-xl font-semibold">{item.title}</h3>
                            <p className="mt-2 text-muted-foreground">{item.description}</p>
                        </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="bg-secondary py-20 md:py-28">
                <div className="container">
                    <h2 className="text-center font-headline text-3xl font-bold md:text-4xl mb-16">Our Development Process</h2>
                    <div className="relative">
                        <div className="absolute left-0 right-0 top-8 h-0.5 bg-border"></div>
                        <div className="relative grid grid-cols-2 gap-y-8 md:grid-cols-5">
                            {processSteps.map((step, index) => (
                                <div key={step.title} className="flex flex-col items-center gap-4 text-center">
                                    <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-secondary text-primary">
                                        <step.icon className="h-8 w-8" />
                                    </div>
                                    <p className="font-semibold">{step.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Technologies We Use Section */}
            <section className="py-20 md:py-28">
                <div className="container text-center">
                    <h2 className="font-headline text-3xl font-bold md:text-4xl">Technologies We Use</h2>
                     <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 opacity-75">
                        {technologies.map(tech => (
                            <span key={tech} className="text-xl font-semibold text-muted-foreground">{tech}</span>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Why Choose Us Section */}
            <section className="bg-secondary py-20 md:py-28">
                <div className="container grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="font-headline text-3xl font-bold md:text-4xl">Why Choose Us for Your App Development</h2>
                        <p className="mt-4 text-lg text-muted-foreground">We combine technical expertise with a strategic vision to deliver mobile applications that not only function flawlessly but also achieve your business objectives.</p>
                         <ul className="mt-8 space-y-4">
                            {whyChooseUs.map((feature) => (
                                <li key={feature} className="flex items-center gap-3 text-lg">
                                    <CheckCircle className="h-6 w-6 flex-shrink-0 text-primary" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="rounded-lg bg-card p-6 text-center border border-border">
                                <Zap className="mx-auto h-10 w-10 text-primary" />
                                <h3 className="mt-4 font-semibold">Performance</h3>
                            </div>
                            <div className="rounded-lg bg-card p-6 text-center border border-border">
                                <ShieldCheck className="mx-auto h-10 w-10 text-primary" />
                                <h3 className="mt-4 font-semibold">Security</h3>
                            </div>
                             <div className="rounded-lg bg-card p-6 text-center border border-border">
                                <Scaling className="mx-auto h-10 w-10 text-primary" />
                                <h3 className="mt-4 font-semibold">Scalability</h3>
                            </div>
                             <div className="rounded-lg bg-card p-6 text-center border border-border">
                                <PenTool className="mx-auto h-10 w-10 text-primary" />
                                <h3 className="mt-4 font-semibold">Great UX</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

             {/* Final CTA */}
            <section className="border-t border-border bg-card py-20">
                <div className="container text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
                        Turn Your App Idea into Reality
                    </h2>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Button asChild size="lg">
                            <Link href="/contact?service=App+Development">
                            Build My App <MoveRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button asChild size="lg" variant="outline">
                            <a href="https://wa.me/919012887697" target="_blank" rel="noopener noreferrer">
                                <WhatsAppIcon />
                                WhatsApp Us
                            </a>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
