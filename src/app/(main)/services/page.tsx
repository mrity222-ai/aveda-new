import { services } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight md:text-6xl">
            Our Services
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            From concept to launch, we provide end-to-end digital solutions tailored to your business needs. Discover how we can help you grow.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.slug} className="flex flex-col">
              <CardHeader className="items-center text-center">
                 <div className="rounded-full bg-primary/10 p-4 text-primary">
                    <service.icon className="h-8 w-8" />
                  </div>
                <CardTitle className="pt-4 font-headline text-2xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
