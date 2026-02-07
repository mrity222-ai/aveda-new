
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Shield,
  Target,
  Users,
  Bot,
  BarChartHorizontal,
  PieChart,
  Lightbulb,
  FileText,
  CheckSquare,
  Rocket,
  CheckCircle,
  MoveRight,
  Info
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


export default function PoliticalCampaigningPage() {
    const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');
    const dashboardImage = PlaceHolderImages.find((img) => img.id === 'service-political-dashboard');
    const politicalProjects = portfolioProjects.filter(p => 
        ['political-dashboard', 'b2b-seo-strategy', 'ai-sales-crm'].includes(p.slug)
    ).slice(0, 3);

    const howAiWins = [
        {
            icon: Target,
            title: 'AI Voter Targeting',
            description: 'Identify and reach key voter segments with unparalleled precision using predictive analytics.',
        },
        {
            icon: PieChart,
            title: 'Constituency Analysis',
            description: 'Gain deep insights into demographics, past results, and local issues to tailor your strategy.',
        },
        {
            icon: Bot,
            title: 'Narrative & Sentiment Analysis',
            description: 'Track public opinion and media narratives in real-time to control the conversation.',
        },
        {
            icon: Users,
            title: 'Booth-Level Digital Strategy',
            description: 'Deploy hyper-local digital campaigns that influence voters at the most granular level.',
        },
    ];

    const processSteps = [
        { icon: Lightbulb, title: "Discovery & Strategy", description: "We analyze your constituency, goals, and political landscape to build a data-driven campaign blueprint."},
        { icon: PieChart, title: "Data & Audience Modeling", description: "Our AI models segment voters and identify key influence groups for hyper-targeted messaging."},
        { icon: BarChartHorizontal, title: "Campaign Execution", description: "We launch multi-channel digital campaigns, including social media ads, content, and outreach."},
        { icon: CheckSquare, title: "Real-Time Optimization", description: "We continuously monitor sentiment and performance, adjusting tactics for maximum impact."},
        { icon: Rocket, title: "Reporting & Insights", description: "You get transparent reports on reach, engagement, and sentiment, providing clear strategic intelligence."},
    ];

    const ourServices = [
      'AI Voter Targeting & Segmentation',
      'Constituency & Demographic Analysis',
      'Social Media Political Ad Campaigns',
      'Narrative & Online Sentiment Analysis',
      'Digital War Room & Response Team',
      'Booth-Level Digital Strategy',
      'Influencer & Community Outreach',
      'Whatsapp & IVR Campaigns'
    ]

    const whyChooseUs = [
      'Specialized Political & Tech Expertise',
      'Data-Driven, AI-First Approach',
      'Ethical & Compliant Methodologies',
      'Real-time, Actionable Intelligence',
      'Proven Track Record of Success',
    ];

    return (
        <div className="bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-background py-20 md:py-32">
                 <div className="absolute inset-0 z-0 opacity-10">
                    {heroImage && (
                        <Image
                            src={heroImage.imageUrl}
                            alt="Political Campaigning background"
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
                        Political Campaigning with AI
                    </h1>
                    <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
                       Influence & voter targeting. Winning elections in the digital age requires data-driven precision.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Button asChild size="lg">
                            <Link href="/contact?service=Political+Campaigning">Launch Campaign</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline">
                            <Link href="/contact?service=Political+Campaigning+Strategy+Brief">Request Strategy Brief</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* How AI Wins Elections Section */}
            <section className="py-20 md:py-28">
                <div className="container text-center">
                    <h2 className="font-headline text-3xl font-bold md:text-4xl mb-12">How AI Wins Elections</h2>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {howAiWins.map((item) => (
                        <div key={item.title} className="group rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
                            <div className="flex justify-center">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary ring-8 ring-primary/5 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                                    <item.icon className="h-8 w-8" />
                                </div>
                            </div>
                            <h3 className="mt-6 font-headline text-xl font-semibold">{item.title}</h3>
                            <p className="mt-2 text-muted-foreground">{item.description}</p>
                        </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Campaign Success Stories Section */}
            <section className="bg-black py-20 md:py-28">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="font-headline text-3xl font-bold md:text-4xl">Campaign Success Stories</h2>
                        <p className="mt-4 text-lg text-muted-foreground">Explore how our AI-driven strategies have delivered electoral advantages.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {politicalProjects.map((project) => (
                            <Link key={project.slug} href={`/works#${project.slug}`} className="group block">
                                <div className="relative h-[450px] overflow-hidden rounded-xl border border-white/10 bg-black/30 backdrop-blur-lg transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20">
                                    <Image
                                        src={project.image.imageUrl}
                                        alt={project.title}
                                        fill
                                        className="object-cover opacity-70 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                                        data-ai-hint={project.image.imageHint}
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                                        <h3 className="font-headline text-2xl font-bold">{project.title}</h3>
                                        <div className="mt-2 flex flex-wrap gap-2">
                                            {project.tags.map(tag => (
                                                <Badge key={tag} variant="outline" className="w-fit border-white/20 bg-white/10 backdrop-blur-md">{tag}</Badge>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Our Services Section */}
             <section className="bg-secondary py-20 md:py-28">
              <div className="container items-center gap-16 md:grid md:grid-cols-2">
                  <div className="relative h-96 w-full md:h-[500px]">
                      {dashboardImage && (
                          <Image
                          src={dashboardImage.imageUrl}
                          alt={dashboardImage.description}
                          fill
                          className="rounded-lg object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          data-ai-hint={dashboardImage.imageHint}
                          />
                      )}
                  </div>
                  <div className="mt-8 md:mt-0">
                      <h2 className="font-headline text-3xl font-bold md:text-4xl">Our AI-Powered Political Services</h2>
                      <p className="mt-4 text-lg text-muted-foreground">We provide a full suite of digital and AI services designed for the unique challenges of political campaigning.</p>
                      
                      <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {ourServices.map((detail) => (
                              <li key={detail} className="flex items-center gap-3">
                                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                                  <span className="text-muted-foreground">{detail}</span>
                              </li>
                          ))}
                      </ul>
                  </div>
              </div>
            </section>
            
             {/* Process Section */}
            <section className="py-20 md:py-28">
                <div className="container">
                    <h2 className="text-center font-headline text-3xl font-bold md:text-4xl mb-16">Our Campaign Process</h2>
                    <div className="relative">
                        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2"></div>
                        {processSteps.map((step, index) => (
                            <div key={step.title} className={cn("relative mb-12 flex items-center w-full", index % 2 === 0 ? "justify-start" : "justify-end")}>
                                <div className={cn("w-1/2", index % 2 === 0 ? "pr-8" : "pl-8")}>
                                <div className={cn("p-6 rounded-lg border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/10", index % 2 === 0 ? "text-left" : "text-right")}>
                                        <Badge variant='outline' className={cn("mb-2", index % 2 !== 0 && 'ml-auto block w-fit' )}>Step {index + 1}</Badge>
                                        <h3 className="font-headline text-xl font-semibold">{step.title}</h3>
                                        <p className="mt-2 text-muted-foreground">{step.description}</p>
                                    </div>
                                </div>
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background p-2 rounded-full border-2 border-border">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                        <step.icon className="h-6 w-6" />
                                    </div>
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
                        <h2 className="font-headline text-3xl font-bold md:text-4xl">Why Aveda For Your Campaign?</h2>
                        <p className="mt-4 text-lg text-muted-foreground">We combine deep political acumen with cutting-edge AI technology to deliver a decisive advantage. Our team understands the nuances of both technology and electoral politics.</p>
                         <ul className="mt-8 space-y-4">
                            {whyChooseUs.map((feature) => (
                                <li key={feature} className="flex items-center gap-3 text-lg">
                                    <Shield className="h-6 w-6 flex-shrink-0 text-primary" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='space-y-4'>
                        <div className="rounded-lg border border-border bg-card p-6 flex items-center gap-4">
                          <Info className="h-8 w-8 text-primary flex-shrink-0" />
                          <div>
                            <h3 className="font-semibold">Disclaimer</h3>
                            <p className="text-sm text-muted-foreground">All campaign strategies and digital activities comply with platform policies and local election regulations.</p>
                          </div>
                        </div>
                    </div>
                </div>
            </section>

             {/* Final CTA */}
            <section className="border-t border-border bg-card py-20">
                <div className="container text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
                        Ready to Launch a Winning Campaign?
                    </h2>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Button asChild size="lg">
                            <Link href="/contact?service=Political+Campaigning">
                            Start Your Campaign <MoveRight className="ml-2 h-5 w-5" />
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
