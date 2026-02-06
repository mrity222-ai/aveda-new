'use client';

import { BarChart, Rocket, Sparkles, Users } from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const featuresData = [
  {
    title: 'AI-Powered Code Generation',
    description:
      'Accelerate development with intelligent code suggestions and completions.',
    icon: Sparkles,
  },
  {
    title: 'Automated Deployments',
    description:
      'Push code to production in seconds with our seamless CI/CD pipeline.',
    icon: Rocket,
  },
  {
    title: 'Real-time Analytics',
    description:
      'Monitor performance and user behavior with our integrated analytics dashboard.',
    icon: BarChart,
  },
  {
    title: 'Collaborative Environments',
    description:
      'Work together in shared development environments that just work.',
    icon: Users,
  },
];

export default function ServicesPreview() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container">
        <div className="mb-16 text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
            <span className="bg-gradient-to-br from-red-600 to-blue-600 bg-clip-text text-transparent">
              A Better Workflow.
            </span>{' '}
            A Better Bottom Line.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Our platform provides all the tools you need to build, test, and
            deploy applications with unprecedented speed and efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featuresData.map((feature, index) => (
            <Card
              key={feature.title}
              className="group flex h-full flex-col justify-start overflow-hidden rounded-lg border-border bg-card text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/10 animate-in fade-in slide-in-from-bottom-12 duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="items-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-gradient-to-br from-red-600 to-blue-600 group-hover:text-primary-foreground">
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle className="font-headline text-xl">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
