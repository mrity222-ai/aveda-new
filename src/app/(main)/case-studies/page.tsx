import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';

const caseStudies = [
    { title: "How We Helped a Small Business in India Increase Leads by 300% Using AI Marketing", keyword: "AI Marketing for Small Businesses in India" },
    { title: "Website Development Case Study: Local Shop to Online Growth Success", keyword: "Website Development Company in India" },
    { title: "AI Automation for Indian Service Businesses – Complete Growth System", keyword: "AI Automation Services India" },
    { title: "How We Generated 500+ Monthly Leads for a Real Estate Business in India", keyword: "Lead Generation Company India" },
    { title: "Digital Marketing Strategy That Helped a Startup Scale Revenue", keyword: "Digital Marketing Agency India" },
    { title: "From Zero Online Presence to 5X Growth – AI Powered Strategy", keyword: "AI Marketing Solutions India" },
    { title: "How CRM Automation Improved Lead Conversion by 40%", keyword: "CRM Setup for Small Businesses India" },
    { title: "Meta & Google Ads Optimization Case Study for Indian Business", keyword: "Performance Marketing Agency India" },
    { title: "AI Chatbot Implementation That Increased Customer Response Speed", keyword: "AI Chatbot for Business India" },
    { title: "Complete Funnel Design Case Study – From Click to Conversion", keyword: "Sales Funnel Agency India" },
    { title: "Local Business SEO Success Story – Ranking on Google in 60 Days", keyword: "Local SEO Services India" },
    { title: "E-commerce Growth Using AI Marketing Strategy", keyword: "E-commerce Marketing Agency India" },
    { title: "WhatsApp Automation Case Study for Service Providers", keyword: "WhatsApp Automation for Business India" },
    { title: "How We Reduced Cost Per Lead by 50% Using AI Ads Optimization", keyword: "Lead Generation Agency India" },
    { title: "Complete Branding & Website Revamp for Indian Startup", keyword: "Branding Agency India" },
    { title: "AI-Powered Landing Page That Increased Conversions by 60%", keyword: "Landing Page Design Company India" },
    { title: "Google Ads Case Study for Local Business Growth", keyword: "Google Ads Agency India" },
    { title: "How Automation Increased Business Efficiency by 3X", keyword: "Business Automation Services India" },
    { title: "Digital Growth Strategy for Small & Medium Businesses in India", keyword: "Digital Growth Agency India" },
    { title: "Complete AI Growth System Implementation Case Study", keyword: "AI Marketing Company in India" },
    { title: "How We Helped a Coaching Institute Increase Student Enquiries", keyword: "Marketing for Coaching Institutes India" },
];

export default function CaseStudiesPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="relative flex h-screen items-center justify-center overflow-hidden">
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
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container relative z-10 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-white md:text-6xl animate-blur-in">
            Case Studies
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/90">
            Real-world examples of how we've helped businesses like yours succeed.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <Card key={index} className="group flex flex-col justify-between overflow-hidden rounded-lg border bg-card shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 soft-shadow">
                <CardContent className="p-6">
                  <h3 className="font-headline text-xl font-semibold text-accent transition-colors group-hover:text-primary">{study.title}</h3>
                  <Badge variant="outline" className="mt-4">{study.keyword}</Badge>
                </CardContent>
                <div className="p-6 pt-0">
                    <Button asChild variant="link" className="p-0 text-primary">
                        <Link href="#">
                            Read Case Study <MoveRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
