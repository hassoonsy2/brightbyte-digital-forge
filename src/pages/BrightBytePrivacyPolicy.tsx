import React from 'react';
import LegalDocumentLayout, { type LegalSection } from '../components/LegalDocumentLayout';

const sections: LegalSection[] = [
  {
    title: 'Information We Collect',
    content: (
      <p>
        We collect information you provide directly to us, such as when you contact us or use our services.
        This may include your name, email address, phone number, and other relevant contact details.
      </p>
    ),
  },
  {
    title: 'How We Use Your Information',
    content: (
      <p>
        We use collected information to provide and improve our services, communicate with you, maintain
        platform reliability, and comply with legal obligations.
      </p>
    ),
  },
  {
    title: 'Information Sharing',
    content: (
      <p>
        We do not sell or trade your personal information. We only share data when required for service
        delivery, legal compliance, or with your explicit consent.
      </p>
    ),
  },
  {
    title: 'Data Security',
    content: (
      <p>
        We implement appropriate technical and organizational safeguards to protect personal data from
        unauthorized access, disclosure, alteration, or destruction.
      </p>
    ),
  },
  {
    title: 'Contact Us',
    content: (
      <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-4">
        <p><strong className="text-white">Email:</strong> info@bright-byte.co</p>
        <p><strong className="text-white">Phone:</strong> +31657694468</p>
        <p><strong className="text-white">Address:</strong> Utrecht, The Netherlands</p>
      </div>
    ),
  },
];

const BrightBytePrivacyPolicy = () => {
  return (
    <LegalDocumentLayout
      badge="Privacy"
      title="Bright-Byte Privacy Policy"
      subtitle="This policy explains how Bright-Byte collects, uses, and protects personal information."
      lastUpdated="February 2026"
      sections={sections}
    />
  );
};

export default BrightBytePrivacyPolicy;
