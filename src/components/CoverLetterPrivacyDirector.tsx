import React, { useRef } from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import html2pdf from 'html2pdf.js';

export const CoverLetterPrivacyDirector = () => {
  const letterRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    if (!letterRef.current) return;
    html2pdf()
      .set({
        margin: 12,
        filename: 'Muhammad_Shehu_Abubakar-Sadiq_Cover_Letter_Data_Privacy_Protection_Director.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      } as any)
      .from(letterRef.current)
      .save();
  };

  return (
    <>
      <div ref={letterRef} className="max-w-3xl mx-auto bg-white text-black p-10 print:p-6 font-serif text-sm leading-relaxed">
        <div className="border-b-2 border-blue-900 pb-4 mb-6">
          <h1 className="text-2xl font-bold text-blue-900">Muhammad Shehu Abubakar-Sadiq</h1>
          <p className="text-base text-gray-800">PhD in Computer Science — Information Systems Security</p>
          <p className="text-xs text-gray-700 mt-1">msabubakar-sadiq.it@buk.edu.ng | Nigerian</p>
        </div>

        <p className="mb-4">Dear Hiring Manager,</p>

        <p className="mb-4">
          I am writing to apply for the position of <strong>Data Privacy &amp; Protection Director</strong>. I bring
          over twelve years of work at the intersection of data protection, regulatory compliance and information
          security — spanning Nigerian banking, global payments at Apple, EU-funded health-data infrastructure, and
          doctoral and post-doctoral research on privacy-preserving identity systems. I hold a PhD in Computer Science
          (Information Systems Security) and an MSc in Business Information Systems, and I work daily with the
          NDPA 2023, NDPC guidance, GDPR, ISO/IEC 27001 and CBN IT and cybersecurity standards.
        </p>

        <p className="mb-4">
          <strong>Governance, policy and regulatory standing.</strong> I have designed privacy governance frameworks
          covering accountability structures, records of processing, retention schedules, cross-border transfer rules
          and binding internal data-use standards — the same architecture required for Binding Corporate Rules under
          the NDPA. I translate legislation into operating policy that business and technology teams can actually
          follow, and I am comfortable acting as the organisation's voice with regulators, auditors and customers.
          My objective in this role would be straightforward: clean external audits, zero enforcement findings, and a
          documented evidence trail behind every control.
        </p>

        <p className="mb-4">
          <strong>Impact assessments and risk mitigation.</strong> At the University of Surrey's DECaDE Centre, a £6M
          national programme, I led privacy impact analyses of identity, reputation and data-sharing systems before
          deployment, documenting lawful basis, necessity and proportionality, risks to data subjects and the technical
          and organisational mitigations applied. I have authored DPIA templates and gating processes that sit inside
          product delivery rather than beside it, so that no product, tool variation or integration ships without
          privacy sign-off.
        </p>

        <p className="mb-4">
          <strong>Incident response and security coordination.</strong> As Fraud Prevention Consultant supporting Apple's
          payments operation, I investigated fraud and data-integrity incidents at high volume under strict
          confidentiality, least-privilege access and full audit logging, and contributed to control rules, incident
          documentation and post-incident review. I have since built incident registers and 72-hour regulator
          notification playbooks with defined escalation triggers, owners and closure evidence. Earlier, as a Risk Officer
          at Unity Bank PLC, I conducted KYC and due diligence under CBN AML/CFT requirements and reported risk to
          senior management — so I understand financial-sector supervision from the inside.
        </p>

        <p className="mb-4">
          <strong>Stakeholder awareness and leadership.</strong> Privacy maturity is ultimately a culture problem. Across
          a decade of university teaching and institutional awareness programmes, and now as a Teaching Fellow at the
          University of Leicester, I have built and delivered training that makes technical and non-technical audiences
          change how they handle data. I apply the same approach to third-party processors and vendors, backed by
          due-diligence checklists and data processing agreements that set clear, auditable obligations.
        </p>

        <p className="mb-4">
          <strong>Analytical depth.</strong> My research — including SPIDVerify, a privacy-preserving decentralised
          identity verification framework, and contributions to Nanostima, the €2.5M EU Horizon 2020 platform adopted
          for Portugal's national COVID-19 vaccination tracking — required me to trace sensitive data end to end through
          complex systems and find where it leaks. That is precisely the skill needed to audit processing records and
          uncover vulnerabilities in a data privacy programme before a regulator or an attacker does.
        </p>

        <p className="mb-4">
          I would welcome the opportunity to discuss how I can strengthen your data protection strategy and regulatory
          standing. Thank you for your consideration.
        </p>

        <p className="mt-8">Yours sincerely,</p>
        <p className="font-bold mt-4">Muhammad Shehu Abubakar-Sadiq, PhD</p>
      </div>

      <div className="print:hidden flex justify-center my-8">
        <Button onClick={handleDownload} className="flex items-center gap-2">
          <Download className="w-4 h-4" />
          Download Cover Letter (PDF)
        </Button>
      </div>
    </>
  );
};

export default CoverLetterPrivacyDirector;
