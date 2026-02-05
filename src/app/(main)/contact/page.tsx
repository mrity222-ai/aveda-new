import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactForm } from '@/components/contact/contact-form';

export default function ContactPage() {
  const contactDetails = [
    {
      icon: Mail,
      title: 'Email',
      value: 'Info.avedatechnoologies@gmail.com',
      href: 'mailto:Info.avedatechnoologies@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9012887697',
      href: 'tel:+919012887697',
    },
    {
      icon: MapPin,
      title: 'Address',
      value: '123 Tech Park, Bangalore, India',
    },
  ];

  return (
    <div className="py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight md:text-6xl">
            Let’s Build Something Amazing
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Have a project in mind or just want to say hello? We'd love to hear from you.
          </p>
        </div>

        <div className="mt-16 grid gap-16 md:grid-cols-2">
          <div className="space-y-8">
            <h2 className="font-headline text-3xl font-semibold">Contact Info</h2>
            {contactDetails.map((detail) => (
              <div key={detail.title} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <detail.icon className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{detail.title}</h3>
                  {detail.href ? (
                    <a href={detail.href} className="text-muted-foreground hover:text-primary">
                      {detail.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{detail.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div>
            <h2 className="font-headline text-3xl font-semibold mb-8">Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
