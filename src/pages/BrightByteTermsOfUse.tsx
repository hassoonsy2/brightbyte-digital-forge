import React from 'react';
import LegalDocumentLayout, { type LegalSection } from '../components/LegalDocumentLayout';

const sections: LegalSection[] = [
  {
    title: 'Acceptance of Terms',
    content: (
      <p>
        By accessing and using Bright-Byte&apos;s website and services, you accept and agree to be bound by
        these terms. If you do not agree with these terms, please do not use this website or related services.
      </p>
    ),
  },
  {
    title: 'Use License',
    content: (
      <>
        <p>
          Permission is granted to temporarily access the materials on Bright-Byte&apos;s website for personal,
          non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
        </p>
        <p>Under this license, you may not:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Modify or copy the materials</li>
          <li>Use the materials for commercial purposes or public display</li>
          <li>Attempt to reverse engineer software on this website</li>
          <li>Remove copyright or proprietary notations from materials</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Disclaimer',
    content: (
      <p>
        The materials on Bright-Byte&apos;s website are provided on an &quot;as is&quot; basis. Bright-Byte makes no
        warranties, expressed or implied, and disclaims all warranties including implied warranties of
        merchantability, fitness for a particular purpose, or non-infringement.
      </p>
    ),
  },
  {
    title: 'Limitations of Liability',
    content: (
      <p>
        In no event shall Bright-Byte or its suppliers be liable for damages, including but not limited to
        loss of data, loss of profit, or business interruption, arising from the use or inability to use the
        website materials, even if Bright-Byte has been notified of such possibilities.
      </p>
    ),
  },
  {
    title: 'Revisions and Accuracy',
    content: (
      <p>
        Materials on this website may include technical, typographical, or visual errors. Bright-Byte does
        not warrant that any materials are accurate, complete, or current and may change materials at any time
        without notice.
      </p>
    ),
  },
  {
    title: 'External Links',
    content: (
      <p>
        Bright-Byte has not reviewed all linked websites and is not responsible for the contents of any linked
        site. The inclusion of any link does not imply endorsement. Use of linked websites is at your own risk.
      </p>
    ),
  },
  {
    title: 'Changes to These Terms',
    content: (
      <p>
        Bright-Byte may revise these terms at any time without notice. By using this website, you agree to be
        bound by the then-current version of the Terms of Use.
      </p>
    ),
  },
  {
    title: 'Contact Information',
    content: (
      <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-4">
        <p><strong className="text-white">Email:</strong> info@bright-byte.co</p>
        <p><strong className="text-white">Phone:</strong> +31657694468</p>
        <p><strong className="text-white">Address:</strong> Utrecht, The Netherlands</p>
      </div>
    ),
  },
];

const BrightByteTermsOfUse = () => {
  return (
    <LegalDocumentLayout
      badge="Legal"
      title="Bright-Byte Terms of Use"
      subtitle="These terms govern your access to and use of Bright-Byte websites, content, and related services."
      lastUpdated="February 2026"
      sections={sections}
    />
  );
};

export default BrightByteTermsOfUse;
