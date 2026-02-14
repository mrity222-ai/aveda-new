import { Mail } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function TermsAndConditionsPage() {
  const heroBgImage = PlaceHolderImages.find((img) => img.id === 'hero-background');
  const sections = [
    {
      title: 'Introduction',
      content: [
        'These Terms & Conditions (“Terms”) govern your use of the website operated by Aveda Technologies (“we”, “us”, “our”). By accessing or using our website, you agree to be bound by these Terms. If you do not agree, please do not use our website.',
      ],
    },
    {
      title: '1. Use of Website',
      content: [
        'You agree to use our website only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of the website. Any misuse, unauthorized access, or attempt to disrupt the website is strictly prohibited.',
      ],
    },
    {
      title: '2. Intellectual Property',
      content: [
        'All content on this website, including text, graphics, logos, icons, images, and software, is the property of Aveda Technologies or its licensors and is protected by applicable intellectual property laws. You may not copy, reproduce, or distribute any content without prior written permission.',
      ],
    },
    {
      title: '3. Information Accuracy',
      content: [
        'We strive to ensure that the information on our website is accurate and up to date. However, we do not guarantee the completeness, reliability, or accuracy of any content. Any reliance you place on such information is strictly at your own risk.',
      ],
    },
    {
      title: '4. Services',
      content: [
        'All services provided by Aveda Technologies are subject to availability and may be modified or discontinued at any time without notice. Specific terms related to services may be communicated separately through agreements or proposals.',
      ],
    },
    {
      title: '5. Limitation of Liability',
      content: [
        'To the fullest extent permitted by law, Aveda Technologies shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in connection with your use of the website or services.',
      ],
    },
    {
      title: '6. External Links',
      content: [
        'Our website may contain links to third-party websites. We have no control over the content or practices of these websites and are not responsible for their terms, privacy policies, or actions.',
      ],
    },
    {
      title: '7. User Responsibilities',
      content: [
        'You are responsible for ensuring that any information you provide to us is accurate and complete. You agree not to submit any false, misleading, or harmful content through our website.',
      ],
    },
    {
      title: '8. Termination',
      content: [
        'We reserve the right to suspend or terminate your access to the website at our sole discretion, without notice, if you violate these Terms or engage in any unlawful activity.',
      ],
    },
    {
      title: '9. Changes to These Terms',
      content: [
        'We may update these Terms & Conditions from time to time. Any changes will be posted on this page with the updated revision date. Your continued use of the website constitutes acceptance of the revised Terms.',
      ],
    },
    {
      title: '10. Governing Law',
      content: [
        'These Terms shall be governed by and interpreted in accordance with the laws of India, without regard to its conflict of law principles.',
      ],
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Header Section */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="absolute inset-0 z-0 opacity-10">
            {heroBgImage && (
              <Image
                src={heroBgImage.imageUrl}
                alt="Background"
                fill
                className="object-cover"
                priority
                data-ai-hint={heroBgImage.imageHint}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />
        </div>
        <div className="container relative z-10 text-center">
          <h1 className="font-headline text-4xl font-bold text-gray-900 md:text-5xl animate-blur-in">
            Terms & Conditions
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Last updated: August 01, 2024
          </p>
          <div className="mx-auto mt-8 h-px w-24 bg-gray-200" />
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-20 md:pb-28">
        <div className="container">
          <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)] md:p-12">
            <div className="space-y-12">
              {sections.map((section) => (
                <div key={section.title}>
                  <h2 className="relative pl-4 font-headline text-2xl font-semibold text-gray-800">
                    <span className="absolute left-0 top-0 h-full w-1 rounded-full bg-primary" />
                    {section.title}
                  </h2>
                  <div className="prose prose-lg mt-6 max-w-none space-y-4 text-gray-700">
                    {section.content.map((p, i) => (
                      <p key={i} style={{ lineHeight: '1.7' }}>{p}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Section */}
            <div className="mt-16 rounded-lg bg-gray-50 p-8">
              <h3 className="text-center font-headline text-xl font-semibold text-gray-800">
                Contact Information
              </h3>
              <p className="mt-2 text-center text-gray-600">
                If you have any questions about these Terms & Conditions, please contact us at:
              </p>
              <div className="mt-4 text-center">
                <a
                  href="mailto:info@avedatechnologies.com"
                  className="inline-flex items-center gap-2 font-semibold text-primary transition-colors hover:text-primary/80"
                >
                  <Mail className="h-5 w-5" />
                  info@avedatechnologies.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
