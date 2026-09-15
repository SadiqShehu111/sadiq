import React, { useRef } from 'react';
import { Download, Mail, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import html2pdf from 'html2pdf.js';

export const DownloadableCVPrivacyDirector = () => {
  const cvRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    if (!cvRef.current) return;
    html2pdf()
      .set({
        margin: 10,
        filename: 'Muhammad_Shehu_Abubakar-Sadiq_CV_Data_Privacy_Protection_Director.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['css', 'legacy'] },
      } as any)
      .from(cvRef.current)
      .save();
  };

  return (
    <>
      <div ref={cvRef} className="max-w-4xl mx-auto bg-white text-black p-8 print:p-6 font-serif">
        {/* Header */}
        <div className="border-b-2 border-blue-900 pb-5 mb-6">
          <h1 className="text-3xl font-bold text-blue-900 mb-1">Muhammad Shehu Abubakar-Sadiq</h1>
          <p className="text-lg text-gray-800 mb-3">PhD in Computer Science — Information Systems Security</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-900" />
              <span>msabubakar-sadiq.it@buk.edu.ng</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-blue-900" />
              <span>Nigerian</span>
            </div>
          </div>
        </div>

        {/* Summary */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-blue-900 border-b border-gray-300 pb-1 mb-3">PROFESSIONAL SUMMARY</h2>
          <p className="text-sm leading-relaxed text-gray-800">
            Data protection and privacy leader with over 12 years across financial services, global technology,
            EU-funded research and academia. Deep operational command of the Nigeria Data Protection Act (NDPA) 2023,
            NDPC/GAID requirements, GDPR and CBN IT & cybersecurity standards. Proven in building privacy governance
            frameworks, authoring policies and standards, leading Data Protection Impact Assessments (DPIAs),
            designing 72-hour breach notification playbooks, running privacy audits and managing third-party
            processor due diligence. Former Fraud Prevention Consultant at Apple and Risk Officer at Unity Bank PLC,
            combining regulated-sector control experience with doctoral research on privacy-preserving identity
            architectures. Skilled at engaging regulators, executives, product teams and vendors, and at leading
            organisation-wide privacy training and compliance cultures.
          </p>
        </section>

        {/* Competencies */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-blue-900 border-b border-gray-300 pb-1 mb-3">CORE COMPETENCIES</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1 text-sm">
            <div>• NDPA 2023, NDPC & GAID Compliance</div>
            <div>• Privacy Governance & BCRs</div>
            <div>• Policy, Standards & Procedure Design</div>
            <div>• DPIAs & Privacy Risk Assessment</div>
            <div>• Breach Response & Regulatory Notification</div>
            <div>• Privacy Audits & DPCO Engagement</div>
            <div>• GDPR & Cross-Border Data Transfers</div>
            <div>• RoPA, Retention & Data Lifecycle</div>
            <div>• Vendor / TPP Due Diligence & DPAs</div>
            <div>• DSARs & Data Subject Rights</div>
            <div>• CBN IT & Cybersecurity Standards</div>
            <div>• ISO/IEC 27001 & NIST CSF</div>
            <div>• Privacy by Design & Default</div>
            <div>• Fraud Risk, AML & KYC</div>
            <div>• Training, Leadership & Stakeholder Influence</div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-blue-900 border-b border-gray-300 pb-1 mb-3">PROFESSIONAL EXPERIENCE</h2>

          <div className="mb-5">
            <div className="flex justify-between items-start mb-1">
              <div>
                <h3 className="font-bold text-sm">Teaching Fellow — Cyber Security & Data Protection</h3>
                <p className="text-blue-900 text-sm">University of Leicester, School of Computing and Mathematical Sciences</p>
              </div>
              <span className="text-xs text-gray-600">Jan 2026 – Present</span>
            </div>
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li>Teach data protection law and practice (NDPA 2023, GDPR, UK DPA), privacy engineering and information assurance to postgraduate cohorts.</li>
              <li>Advise on DPIA methodology, lawful basis analysis and privacy-by-design for applied industry projects.</li>
              <li>Track regulatory developments and translate them into practical compliance guidance.</li>
            </ul>
          </div>

          <div className="mb-5">
            <div className="flex justify-between items-start mb-1">
              <div>
                <h3 className="font-bold text-sm">Cyber Security Post-Doctoral Research Fellow — Privacy & Digital Trust</h3>
                <p className="text-blue-900 text-sm">University of Surrey — DECaDE Centre (£6M EPSRC national programme)</p>
              </div>
              <span className="text-xs text-gray-600">May 2024 – Dec 2025</span>
            </div>
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li>Designed privacy-preserving data architectures enforcing lawfulness, minimisation, purpose limitation, storage limitation and confidentiality.</li>
              <li>Led DPIA-style assessments of identity, reputation and data-sharing systems prior to deployment, documenting risks to data subjects and mitigations.</li>
              <li>Published peer-reviewed analysis of GDPR compliance in decentralised identity (IEEE EuroS&PW; Springer LNCS).</li>
              <li>Presented findings on secure, privacy-respecting digital economy to the House of Lords and industry partners.</li>
            </ul>
          </div>

          <div className="mb-5">
            <div className="flex justify-between items-start mb-1">
              <div>
                <h3 className="font-bold text-sm">Fraud Prevention Consultant — Payments & Customer Data</h3>
                <p className="text-blue-900 text-sm">Apple Inc. (via Majorel), Portugal</p>
              </div>
              <span className="text-xs text-gray-600">Jun 2020 – Mar 2022</span>
            </div>
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li>Safeguarded customer payment and personal data in a high-volume, highly regulated payments environment.</li>
              <li>Investigated fraud and data-integrity incidents (VISA CAMS, FICO), applying strict confidentiality, least-privilege access and full audit logging.</li>
              <li>Contributed to control rules, incident documentation and post-incident reviews equivalent to breach registers and closure reports.</li>
              <li>Worked within tokenisation and encryption controls for sensitive financial data — directly transferable to merchant acquiring and agency banking.</li>
            </ul>
          </div>

          <div className="mb-5">
            <div className="flex justify-between items-start mb-1">
              <div>
                <h3 className="font-bold text-sm">Researcher — Identity, Privacy & Data Governance</h3>
                <p className="text-blue-900 text-sm">INESC TEC Porto (CRACS), Portugal</p>
              </div>
              <span className="text-xs text-gray-600">Sep 2017 – 2023</span>
            </div>
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li>Built GDPR-compliant identity, consent and mandate-delegation flows (OAuth 2.0, SAML, Shibboleth) for enterprise and public-sector systems.</li>
              <li>Defined data lifecycle, retention, access-control and processing-record policies aligned to GDPR, ISO/IEC 27001 and NIST.</li>
              <li>Contributed to Nanostima (€2.5M EU Horizon 2020) secure health-data infrastructure adopted for Portugal's national COVID-19 vaccination tracking — sensitive special-category data at national scale.</li>
              <li>Designed SPIDVerify, a privacy-preserving decentralised identity verification framework.</li>
            </ul>
          </div>

          <div className="mb-5">
            <div className="flex justify-between items-start mb-1">
              <div>
                <h3 className="font-bold text-sm">Lecturer — Information Security, Cyber Law & Data Protection</h3>
                <p className="text-blue-900 text-sm">Bayero University Kano, Nigeria</p>
              </div>
              <span className="text-xs text-gray-600">May 2015 – 2023</span>
            </div>
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li>Designed and delivered modules on the Nigerian data protection landscape (NITDA, NDPR, NDPA 2023), cyber law and information assurance.</li>
              <li>Led institutional privacy and security awareness programmes for staff and students — comparable to enterprise-wide privacy training.</li>
              <li>Advised on records handling, retention and access governance for institutional systems.</li>
            </ul>
          </div>

          <div className="mb-2">
            <div className="flex justify-between items-start mb-1">
              <div>
                <h3 className="font-bold text-sm">Relationship & Risk Officer — Financial Services</h3>
                <p className="text-blue-900 text-sm">Unity Bank PLC, Nigeria</p>
              </div>
              <span className="text-xs text-gray-600">Jul 2013 – Feb 2015</span>
            </div>
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li>Performed KYC and customer due diligence in line with CBN AML/CFT requirements, handling customer data under strict confidentiality.</li>
              <li>Assessed IT and operational risk across banking systems; recommended controls meeting regulatory expectations.</li>
              <li>Prepared risk and compliance reports for senior management and delivered staff training on secure data handling.</li>
            </ul>
          </div>
        </section>

        {/* Engagements */}
        <section className="mb-6" style={{ pageBreakInside: 'avoid' }}>
          <h2 className="text-lg font-bold text-blue-900 border-b border-gray-300 pb-1 mb-3">SELECTED DATA PRIVACY ENGAGEMENTS</h2>
          <ul className="list-disc ml-5 text-sm space-y-1">
            <li><strong>Governance framework:</strong> Designed privacy governance structures covering accountability, processing registers, cross-border transfer rules and binding internal data-use standards.</li>
            <li><strong>DPIA programme:</strong> Authored DPIA templates and gating processes covering lawful basis, necessity and proportionality, risk to data subjects, and technical/organisational mitigations before product deployment.</li>
            <li><strong>Breach response:</strong> Built incident registers and 72-hour regulator notification playbooks with defined roles, escalation triggers and documented closure evidence.</li>
            <li><strong>Third-party assurance:</strong> Created processor due-diligence checklists and DPA clause libraries for vendors, cloud providers and research partners.</li>
            <li><strong>Data subject rights:</strong> Modelled end-to-end DSAR handling (access, rectification, erasure, restriction, objection, portability) within statutory timelines.</li>
            <li><strong>Privacy audits:</strong> Conducted control reviews of processing records, retention schedules and access governance, with remediation tracking.</li>
          </ul>
        </section>

        {/* Education */}
        <section className="mb-6" style={{ pageBreakInside: 'avoid' }}>
          <h2 className="text-lg font-bold text-blue-900 border-b border-gray-300 pb-1 mb-3">EDUCATION</h2>
          <div className="mb-2 flex justify-between">
            <div>
              <h3 className="font-bold text-sm">PhD, Computer Science — Information Systems Security</h3>
              <p className="text-blue-900 text-sm">University of Porto, Portugal</p>
              <p className="text-xs italic">Thesis: Establishing Secure and Privacy-Preserving Digital Identity with Self-Sovereign Identity</p>
            </div>
            <span className="text-xs text-gray-600">2017 – 2023</span>
          </div>
          <div className="mb-2 flex justify-between">
            <div>
              <h3 className="font-bold text-sm">MSc, Business Information Systems</h3>
              <p className="text-blue-900 text-sm">University of East London, United Kingdom</p>
            </div>
            <span className="text-xs text-gray-600">2011 – 2012</span>
          </div>
          <div className="flex justify-between">
            <div>
              <h3 className="font-bold text-sm">BSc, Computer Science — Digital Systems Security</h3>
              <p className="text-blue-900 text-sm">University of Wollongong, Australia</p>
            </div>
            <span className="text-xs text-gray-600">2007 – 2011</span>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-6" style={{ pageBreakInside: 'avoid' }}>
          <h2 className="text-lg font-bold text-blue-900 border-b border-gray-300 pb-1 mb-3">CERTIFICATIONS & TRAINING</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 text-sm">
            <div>• GDPR Compliance — Information Security & Data Privacy</div>
            <div>• ISO/IEC 27001 — Information Security Management</div>
            <div>• CIPM / CIPP — in progress</div>
            <div>• Certified Ethical Hacker (CEH) Training</div>
            <div>• CompTIA Security+ Training</div>
            <div>• NIST Cybersecurity Framework Practice</div>
          </div>
        </section>

        {/* Publications */}
        <section style={{ pageBreakInside: 'avoid' }}>
          <h2 className="text-lg font-bold text-blue-900 border-b border-gray-300 pb-1 mb-3">SELECTED PUBLICATIONS — PRIVACY & IDENTITY</h2>
          <div className="text-sm space-y-2">
            <p><strong>Shehu, A.S.</strong> (2024). On the Compliance of Self-Sovereign Identity with GDPR Principles: A Critical Review. <em>arXiv:2409.03624</em>.</p>
            <p><strong>Shehu, A.S.</strong> &amp; Schneider, S. (2025). Decentralised supply chain reputation: A privacy and self-sovereign identity perspective. <em>IEEE EuroS&amp;PW</em>, 474–484.</p>
            <p>Fraser, A., <strong>Shehu, A.S.</strong>, Frymann, N., Haynes, P., &amp; Schneider, S. (2025). Privacy-Preserving Photo Sharing: An SSI Use Case. <em>ICISS 2024, Springer LNCS</em> 15416.</p>
            <p><strong>Shehu, A.S.</strong>, Pinto, A., &amp; Correia, M.E. (2023). SPIDVerify: A secure and privacy-preserving decentralised identity verification framework. <em>IEEE SmartNets 2023</em>.</p>
          </div>
        </section>
      </div>

      <div className="print:hidden flex justify-center gap-3 my-8">
        <Button onClick={handleDownload} className="flex items-center gap-2">
          <Download className="w-4 h-4" />
          Download CV (PDF)
        </Button>
      </div>
    </>
  );
};

export default DownloadableCVPrivacyDirector;
