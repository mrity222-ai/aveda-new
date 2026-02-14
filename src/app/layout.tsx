import type { Metadata } from 'next';
import { Outfit, Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';
import { WhatsAppButton } from '@/components/common/whatsapp-button';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-headline',
});

export const metadata: Metadata = {
  title: 'Aveda Technologies - IT Services & Digital Solutions',
  description: 'Transforming Ideas Into Powerful Digital Experiences',
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
      </body>
    </html>
  );
}
