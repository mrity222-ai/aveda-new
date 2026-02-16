import { Mail } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function PrivacyPolicyPage() {
  const heroBgImage = PlaceHolderImages.find((img) => img.id === 'hero-background');
  const sections = [
    {
      title: 'Introduction',
      content: [
        'Welcome to Aveda Technologies ("we," "our," or "us"). We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website or use our services.',
      ],
    },
    {
      title: 'Information We Collect',
      content: [
        'We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the website, or otherwise when you contact us.',
        'The personal information we collect may include the following:',
      ],
      list: [
        'Name and Contact Data (such as email address, phone number)',
        'Company/Organization Information',
        'Service Interests',
        'Any other information you choose to provide in your messages',
      ],
    },
    {
      title: 'How We Use Your Information',
      content: [
        'We use the information we collect or receive to:',
      ],
      list: [
        'Respond to your inquiries and fulfill your requests.',
        'Send you marketing and promotional communications.',
        'Improve our website and services.',
        'Comply with legal and regulatory obligations.',
      ],
    },
    {
      title: 'Data Security',
      content: [
        'We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.',
      ],
    },
    {
      title: 'Your Rights',
      content: [
        'Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete your data. To exercise these rights, please contact us using the contact information provided below.',
      ],
    },
    {
        title: 'Changes to This Policy',
        content: [
            'We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last updated" date and the updated version will be effective as soon as it is accessible. We encourage you to review this privacy policy frequently to be informed of how we are protecting your information.',
        ]
    }
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Header Section */}
      <section className="relative flex h-screen items-center justify-center overflow-hidden bg-white">
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
            Privacy Policy
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Your privacy is important to us. Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}.
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
                    {section.list && (
                      <ul className="space-y-2">
                        {section.list.map((item, i) => (
                          <li key={i} className="flex items-start">
                             <span className="mr-3 mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Section */}
            <div className="mt-16 rounded-lg bg-gray-50 p-8">
              <h3 className="text-center font-headline text-xl font-semibold text-gray-800">
                Contact Us
              </h3>
              <p className="mt-2 text-center text-gray-600">
                If you have questions or comments about this policy, you may email us at:
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
