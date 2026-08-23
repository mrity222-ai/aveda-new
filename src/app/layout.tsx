import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';
import { WhatsAppButton } from '@/components/common/whatsapp-button';
import Script from 'next/script';
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.avedatechnologies.com'),
  title: {
    default: 'Aveda Technologies - Leading AI Automation & Software Development Company',
    template: '%s | Aveda Technologies',
  },
  description:
    'Aveda Technologies is a top-rated AI Automation Company and Software Development Company. We specialize in Custom Software Development, CRM ERP Solutions, SaaS Development, and Digital Transformation Services for global businesses.',
  keywords: [
    'AI Automation Company',
    'AI Automation Services',
    'Software Development Company',
    'Custom Software Development',
    'CRM Development Company',
    'ERP Development Company',
    'SaaS Development Company',
    'Business Automation Company',
    'Enterprise Software Development',
    'Digital Transformation Services',
    'Website Development Company',
    'Mobile App Development Company',
    'Web Application Development',
    'Software Development Company in Lucknow',
    'Software Development Company in Noida',
    'Software Development Company in Delhi',
    'AI Automation Company Canada',
    'AI Automation Company Australia',
  ],
  openGraph: {
    title: 'Aveda Technologies - AI Powered Software Solutions & Digital Transformation',
    description: 'Transforming businesses with intelligent AI agents, custom software engineering, and scalable digital systems designed for global impact.',
    url: 'https://www.avedatechnologies.com',
    siteName: 'Aveda Technologies',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aveda Technologies - Leading AI Automation & Software Engineering Partner',
    description: 'Building the future of business with AI Automation, Custom CRM/ERP, and Scalable Software Solutions.',
    images: ['/og-image.png'],
  },
  other: {
    'p:domain_verify': '5343518b3ab132692d1d264829d0beb7',
    'google-adsense-account': 'ca-pub-5020716602157264',
  },
};

import { GlobalScrollObserver } from '@/components/common/scroll-reveal';

import { ServicesChatbot } from '@/components/common/ai-chatbot';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable
        )}
      >
        <GlobalScrollObserver />
        <div className="relative flex min-h-dvh flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
        <ServicesChatbot />
        <WhatsAppButton />
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=G-DCG5F1GKQH" 
          strategy="afterInteractive" 
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-DCG5F1GKQH');
          `}
        </Script>
        <SpeedInsights />
      </body>
    </html>
  );
}
