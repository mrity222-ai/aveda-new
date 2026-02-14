
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
  Rocket,
  Code2,
  Cpu,
  Server,
  Flame,
  Cloud,
  GitBranch,
  Database,
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { portfolioProjects } from '@/lib/data';

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
    const heroImage = PlaceHolderImages.find((img) => img.id === 'service-app-dev-hero');
    const appProjects = portfolioProjects.filter(p => ['yalla-drive', 'rozana', 'yoga-app'].includes(p.slug)).slice(0, 3);

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
        { icon: Smartphone, name: 'Flutter' },
        { icon: Code2, name: 'React Native' },
        { icon: Cpu, name: 'Kotlin' },
        { icon: Code, name: 'Swift' },
        { icon: Server, name: 'Node.js' },
        { icon: Flame, name: 'Firebase' },
        { icon: Cloud, name: 'AWS' },
        { icon: GitBranch, name: 'GraphQL'},
        { icon: Database, name: 'PostgreSQL'}
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
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                </div>
                <div className="container relative z-10 text-center">
                    <h1 className="font-headline text-4xl font-bold tracking-tight md:text-6xl text-foreground animate-blur-in">
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
            <section className="bg-secondary py-20 md:py-28">
                <div className="container text-center">
                    <h2 className="font-headline text-3xl font-bold md:text-4xl mb-12 text-foreground">What We Build</h2>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {whatWeBuild.map((item) => (
                        <div key={item.title} className="group rounded-xl border bg-card p-8 text-center transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:-translate-y-2">
                            <div className="flex justify-center">
                                <div className="relative flex h-20 w-20 items-center justify-center rounded-full">
                                    <div className="absolute inset-0 rounded-full bg-primary/10 blur-lg transition-all duration-300 group-hover:blur-xl"></div>
                                    <item.icon className="relative h-10 w-10 text-primary drop-shadow-[0_0_8px_hsl(var(--primary)/0.8)]" />
                                </div>
                            </div>
                            <h3 className="mt-6 font-headline text-xl font-semibold text-foreground">{item.title}</h3>
                            <p className="mt-2 text-muted-foreground">{item.description}</p>
                        </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section className="bg-background py-20 md:py-28">
                <div className="container">
                     <div className="text-center mb-12">
                        <h2 className="font-headline text-3xl font-bold md:text-4xl">Our App Showcase</h2>
                        <p className="mt-4 text-lg text-muted-foreground">Explore some of the mobile experiences we've crafted.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {appProjects.map((project) => (
                            <Link key={project.slug} href={`/works#${project.slug}`} className="group block">
                                <div className="relative h-[450px] overflow-hidden rounded-xl border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-xl">
                                    <Image
                                        src={project.image.imageUrl}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-all duration-500 group-hover:scale-105"
                                        data-ai-hint={project.image.imageHint}
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent" />
                                    <div className="absolute inset-0 flex flex-col justify-end p-6 text-foreground">
                                        <h3 className="font-headline text-2xl font-bold drop-shadow-sm">{project.title}</h3>
                                        <div className="mt-2 flex flex-wrap gap-2">
                                            {project.tags.map(tag => (
                                                <Badge key={tag} variant="outline" className="w-fit border-white/20 bg-black/10 text-white backdrop-blur-md">{tag}</Badge>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Process Section */}
            <section className="bg-secondary py-20 md:py-28 relative">
                <div className="container relative z-10">
                    <h2 className="text-center font-headline text-3xl font-bold md:text-4xl mb-24 text-foreground">Our Development Process</h2>
                    <div className="relative">
                        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2"></div>
                        {processSteps.map((step, index) => (
                            <div key={step.title} className={cn("relative mb-12 flex items-center w-full", index % 2 === 0 ? "justify-start" : "justify-end")}>
                                <div className={cn("w-1/2", index % 2 === 0 ? "pr-8" : "pl-8")}>
                                <div className={cn(
                                    "group relative overflow-hidden p-6 rounded-lg border bg-card shadow-sm transition-all duration-300 hover:shadow-lg", 
                                    index % 2 === 0 ? "text-left" : "text-right"
                                )}>
                                    <div className={cn("absolute top-0 font-headline text-8xl font-bold text-primary/10 -translate-y-4 transition-transform duration-300 group-hover:scale-110", index % 2 === 0 ? "right-0 translate-x-4" : "left-0 -translate-x-4")}>
                                        0{index + 1}
                                    </div>
                                    <div className="relative">
                                        <h3 className="font-headline text-xl font-semibold text-foreground">{step.title}</h3>
                                        <p className="mt-2 text-muted-foreground">{step.description}</p>
                                    </div>
                                    </div>
                                </div>
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary p-2 rounded-lg border-2 border-primary/50">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                                        <step.icon className="h-7 w-7" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            <section className="bg-background py-20 md:py-28 relative">
                <div className="container text-center relative z-10">
                    <h2 className="font-headline text-3xl font-bold md:text-4xl mb-16 text-foreground">Technologies We Use</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                        {technologies.map((tech) => (
                        <div key={tech.name} className="group relative rounded-2xl border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:-translate-y-1">
                            <div className="relative flex flex-col items-center justify-center gap-4">
                                <tech.icon className="h-10 w-10 text-foreground/80 transition-all duration-300 group-hover:text-primary" />
                                <p className="font-semibold text-sm text-center uppercase tracking-wider text-foreground">{tech.name}</p>
                            </div>
                        </div>
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
            <section className="relative overflow-hidden border-t border-border bg-card py-20">
                <div className="absolute inset-0 z-0 opacity-10">
                    {heroImage && (
                        <Image
                            src={heroImage.imageUrl}
                            alt="Turn Your App Idea into Reality background"
                            fill
                            className="object-cover"
                            data-ai-hint={heroImage.imageHint}
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent"></div>
                </div>
                <div className="container relative z-10 text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tight text-accent md:text-4xl">
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
