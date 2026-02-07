
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
        { icon: Lightbulb, title: "Idea & Strategy", description: "We'll workshop your idea, define the scope, and create a roadmap for a successful app launch." },
        { icon: PenTool, title: "UI / UX Design", description: "Our designers create intuitive, beautiful interfaces that provide an exceptional user experience." },
        { icon: Code, title: "App Development", description: "Our developers build your app using clean, scalable code for both iOS and Android platforms." },
        { icon: ShieldCheck, title: "Testing & Security", description: "We conduct rigorous testing to ensure your app is bug-free, secure, and performs flawlessly." },
        { icon: Rocket, title: "Launch & Support", description: "We handle the app store submission and provide ongoing support to ensure continued success." },
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
            <section className="bg-black py-20 md:py-28 relative">
                <div className="absolute inset-x-0 top-1/4 h-1/2 bg-gradient-to-t from-destructive/10 to-transparent opacity-30 blur-3xl" />
                <div className="container relative z-10">
                    <h2 className="text-center font-headline text-3xl font-bold md:text-4xl mb-24 text-white">Our Development Process</h2>
                    <div className="relative">
                        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-destructive/20 shadow-[0_0_10px_hsl(var(--destructive)/0.5)] -translate-x-1/2"></div>
                        {processSteps.map((step, index) => (
                            <div key={step.title} className={cn("relative mb-12 flex items-center w-full", index % 2 === 0 ? "justify-start" : "justify-end")}>
                                <div className={cn("w-1/2", index % 2 === 0 ? "pr-8" : "pl-8")}>
                                <div className={cn(
                                    "group relative overflow-hidden p-6 rounded-lg border border-destructive/30 bg-black/50 backdrop-blur-lg shadow-sm transition-all duration-300 hover:shadow-2xl hover:shadow-destructive/20", 
                                    index % 2 === 0 ? "text-left" : "text-right"
                                )}>
                                    <div className={cn("absolute top-0 font-headline text-8xl font-bold text-destructive/10 -translate-y-4 transition-transform duration-300 group-hover:scale-110", index % 2 === 0 ? "right-0 translate-x-4" : "left-0 -translate-x-4")}>
                                        0{index + 1}
                                    </div>
                                    <div className="relative">
                                        <h3 className="font-headline text-xl font-semibold text-white">{step.title}</h3>
                                        <p className="mt-2 text-muted-foreground">{step.description}</p>
                                    </div>
                                    </div>
                                </div>
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black p-2 rounded-lg border-2 border-destructive/50">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-destructive/10 text-destructive">
                                        <step.icon className="h-7 w-7" />
                                    </div>
                                </div>
                            </div>
                        ))}
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
