
import type { Metadata } from 'next';
import WebDevelopmentClient from './client';

export const metadata: Metadata = {
  title: 'High-Performance Web Development Services',
  description: 'We build secure, scalable, and conversion-ready websites—from corporate portals to complex SaaS platforms that scale with your business.',
  openGraph: {
    title: 'High-Performance Web Development Services',
    description: 'We build secure, scalable, and conversion-ready websites—from corporate portals to complex SaaS platforms that scale with your business.',
  },
  twitter: {
    title: 'High-Performance Web Development Services',
    description: 'We build secure, scalable, and conversion-ready websites—from corporate portals to complex SaaS platforms that scale with your business.',
  }
};


export default function WebDevelopmentPage() {
    return <WebDevelopmentClient />;
}
