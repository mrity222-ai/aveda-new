import type { Metadata } from 'next';
import LegalPageLayout, { LegalSection } from '@/components/common/legal-page-layout';

export const metadata: Metadata = {
  title: 'Booking & Service Policy | Aveda Technologies',
  description: 'Booking & Service Policy for consultation calls, technical audits, strategy workshops, and product demos.',
};

export default function BookingPolicyPage() {
  const sections: LegalSection[] = [
    {
      title: 'Appointment Booking',
      content: [
        'Consultation calls, product demos, AI strategy audits, and technical discovery meetings can be booked through our website calendar, WhatsApp, or official scheduling systems.',
      ],
    },
    {
      title: 'Information Required',
      content: [
        'To schedule and prepare for your booking, we collect your name, business email, phone number, company name, and brief project requirements.',
      ],
    },
    {
      title: 'Nature of Consultation',
      content: [
        'A discovery call or consultation is exploratory and does not create a binding development or service contract. A project officially begins only after a formal Statement of Work (SOW) or commercial proposal is accepted.',
      ],
    },
    {
      title: 'Rescheduling & Cancellation',
      content: [
        'Clients may request to reschedule an appointment by giving at least 12 to 24 hours advance notice through the booking confirmation email or WhatsApp support.',
      ],
    },
    {
      title: 'No-Show Policy',
      content: [
        'Repeated no-shows without prior notice may result in restrictions on scheduling future free strategy calls or consultations.',
      ],
    },
    {
      title: 'Aveda Rescheduling',
      content: [
        'Aveda Technologies reserves the right to reschedule calls due to technical disruptions, emergency client deployments, or consultant availability. Advance notice will be provided.',
      ],
    },
  ];

  return (
    <LegalPageLayout
      category="Consultation & Engagement"
      title="Booking & Service Policy"
      description="Guidelines governing strategy consultations, product demos, technical audits, and appointment scheduling."
      sections={sections}
      contactEmail="support@avedatechnologies.com"
    />
  );
}
