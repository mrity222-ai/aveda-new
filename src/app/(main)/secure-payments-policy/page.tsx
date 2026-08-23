import type { Metadata } from 'next';
import LegalPageLayout, { LegalSection } from '@/components/common/legal-page-layout';

export const metadata: Metadata = {
  title: 'Secure Payments Policy | Aveda Technologies',
  description: 'Secure Payments Policy explaining online transaction processing, Razorpay payment gateway integration, and financial security practices.',
};

export default function SecurePaymentsPolicyPage() {
  const sections: LegalSection[] = [
    {
      title: 'Payment Gateway Integration',
      content: [
        'Online payments on Aveda Technologies website and SaaS platforms may be processed through authorized third-party payment providers such as Razorpay.',
        'Razorpay PCI-DSS compliant infrastructure ensures high-level security for credit/debit cards, NetBanking, UPI, and e-mandates.',
      ],
    },
    {
      title: 'Payment Security & Non-Storage of Sensitive Credentials',
      content: [
        'Aveda Technologies never requests, collects, or stores sensitive payment credentials like UPI PINs, Banking Passwords, Card PINs, CVVs, or OTPs.',
        'Never share your passwords or OTPs with anyone claiming to represent Aveda Technologies.',
      ],
    },
    {
      title: 'Transaction Verification & Status Sync',
      content: [
        'Payment providers securely return transaction status, Order IDs, and reconciliation details to automatically activate your SaaS subscriptions or update invoice records.',
      ],
    },
    {
      title: 'Fraud Prevention & Suspicious Transactions',
      content: [
        'We monitor for unauthorized transactions and cooperate fully with payment aggregators, banks, and legal authorities to investigate fraudulent activities.',
      ],
    },
  ];

  return (
    <LegalPageLayout
      category="Financial Security"
      title="Secure Payments Policy"
      description="Guidelines on online transaction security, third-party payment aggregators (Razorpay), and anti-fraud protections."
      sections={sections}
      contactEmail="billing@avedatechnologies.com"
    />
  );
}
