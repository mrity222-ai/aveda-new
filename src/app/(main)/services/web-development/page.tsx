
import type { Metadata } from 'next';
import WebDevelopmentClient from './client';

export const metadata: Metadata = {
  title: 'Website as a Service (WaaS) | Managed Website Subscriptions starting ₹1,499/mo',
  description: 'Launch a professional business website in days—not months. Complete website, hosting, maintenance, SSL security, unlimited updates, and dedicated technical support starting from ₹1,499/Month.',
  openGraph: {
    title: 'Website as a Service (WaaS) | Managed Website Subscriptions starting ₹1,499/mo',
    description: 'Launch a professional business website in days—not months. Complete website, hosting, maintenance, SSL security, unlimited updates, and dedicated technical support starting from ₹1,499/Month.',
  },
  twitter: {
    title: 'Website as a Service (WaaS) | Managed Website Subscriptions starting ₹1,499/mo',
    description: 'Launch a professional business website in days—not months. Complete website, hosting, maintenance, SSL security, unlimited updates, and dedicated technical support starting from ₹1,499/Month.',
  }
};

export default function WebDevelopmentPage() {
    return <WebDevelopmentClient />;
}

