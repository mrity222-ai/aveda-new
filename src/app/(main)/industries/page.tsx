import type { Metadata } from 'next';
import IndustriesClient from './client';

export const metadata: Metadata = {
  title: 'Industries We Serve | Aveda Technologies',
  description:
    'Aveda Technologies provides smart, scalable, and AI-driven digital solutions for various industries including business, healthcare, retail, real estate, education, and political organizations.',
  openGraph: {
    title: 'Industries We Serve | Aveda Technologies',
    description:
      'Aveda Technologies provides smart, scalable, and AI-driven digital solutions for various industries including business, healthcare, retail, real estate, education, and political organizations.',
  },
  twitter: {
    title: 'Industries We Serve | Aveda Technologies',
    description:
      'Aveda Technologies provides smart, scalable, and AI-driven digital solutions for various industries including business, healthcare, retail, real estate, education, and political organizations.',
  },
};

export default function IndustriesPage() {
  return <IndustriesClient />;
}
