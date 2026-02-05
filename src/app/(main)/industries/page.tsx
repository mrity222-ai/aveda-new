import { industries } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function IndustriesPage() {
  return (
    <div className="py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight md:text-6xl">
            Industries We Empower
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            We provide custom, industry-specific solutions to help businesses thrive in the digital landscape. No matter your field, we have the expertise to elevate your presence.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {industries.map((industry) => (
            <Card key={industry.name} className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <industry.icon className="h-8 w-8" />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="font-headline text-xl">{industry.name}</CardTitle>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 rounded-lg bg-secondary p-8 text-center">
          <h2 className="font-headline text-2xl font-bold">Custom Solutions for Every Industry</h2>
          <p className="mt-4 text-muted-foreground">
            Don't see your industry? Contact us to discuss how we can tailor our services to meet your unique needs.
          </p>
        </div>
      </div>
    </div>
  );
}
