import type { Metadata } from 'next';
import { Outfit, Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';
import { WhatsAppButton } from '@/components/common/whatsapp-button';
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-headline',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.avedatechnologies.com'),
  title: {
    default: 'Aveda Technologies - AI-Powered IT Services & Digital Solutions',
    template: '%s | Aveda Technologies',
  },
  description:
    'Aveda Technologies transforms businesses with intelligent AI solutions, scalable web systems, and smart digital strategies designed for sustainable growth.',
  keywords: [
    'AI solutions',
    'web development',
    'digital marketing',
    'political campaigning',
    'Aveda Technologies',
    'IT services Lucknow',
  ],
  openGraph: {
    title: 'Aveda Technologies - AI-Powered IT Services & Digital Solutions',
    description: 'Transforming Ideas Into Powerful Digital Experiences.',
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
    title: 'Aveda Technologies - AI-Powered IT Services & Digital Solutions',
    description: 'Transforming Ideas Into Powerful Digital Experiences.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased',
          inter.variable,
          outfit.variable
        )}
      >
        <div className="relative flex min-h-dvh flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
        <WhatsAppButton />
        <Script src="//code.tidio.co/srzndt8h650rvaawicxeiy80rsj2myh9.js" async />
      </body>
    </html>
  );
}
