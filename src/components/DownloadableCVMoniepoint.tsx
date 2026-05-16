import React from 'react';
import { Download, Mail, MapPin, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const DownloadableCVMoniepoint = () => {
  const handleDownload = () => window.print();

  return (
    <div className="max-w-4xl mx-auto bg-white text-black p-8 print:p-6">
      {/* Header */}
      <div className="border-b-2 border-blue-600 pb-6 mb-6">
        <h1 className="text-3xl font-bold text-blue-600 mb-1">Dr. Muhammad Shehu Abubakar-Sadiq</h1>
        <p className="text-lg text-gray-600 mb-4">PhD</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-blue-600" />
            <span>msabubakar-sadiq.it@buk.edu.ng</span>
          </div>
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-blue-600" />
            <span>Nationality: Nigerian</span>
          </div>
        </div>
      </div>

      {/* Summary */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-blue-600 border-b border-gray-300 pb-2 mb-4">PROFESSIONAL SUMMARY</h2>
        <p className="text-gray-700 leading-relaxed">
          Data protection, privacy and fraud-risk professional with 12+ years across financial services,
          global technology and academia. Former Fraud Prevention Consultant at Apple (via Majorel) and
          Risk Officer at Unity Bank PLC, with hands-on experience in fraud consulting, payment-channel
          protection, KYC/AML, and customer-data safeguarding. PhD in Information Systems Security with
          deep expertise in GDPR, NDPA 2023, NDPC and CBN frameworks — including DPIAs, DSARs, RoPA,
          breach response, vendor DPAs, encryption, tokenisation and privacy-by-design for payment
          systems. Published researcher on GDPR-compliant identity and privacy-preserving architectures,
          directly aligned with Moniepoint's data protection mandate.
        </p>
      </section>

      {/* Core Competencies */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-blue-600 border-b border-gray-300 pb-2 mb-4">CORE COMPETENCIES</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
          <div>• NDPA 2023, NDPC & GAID Compliance</div>
          <div>• GDPR & Global Privacy Frameworks</div>
          <div>• CBN IT & Cybersecurity Standards</div>
          <div>• DPIAs, DSARs & RoPA</div>
          <div>• Breach Response & Regulatory Reporting</div>
          <div>• Privacy by Design & Default</div>
          <div>• Vendor DPAs & Third-Party Due Diligence</div>
          <div>• Fraud Risk, AML & KYC</div>
          <div>• Encryption, Tokenisation & Access Control</div>
          <div>• Strong Problem Solving (Doctoral Research)</div>
          <div>• Corporate Responsibility & Ethics</div>
          <div>• Teaching, Training & Knowledge Transfer</div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-blue-600 border-b border-gray-300 pb-2 mb-4">CORE COMPETENCIES — DATA PROTECTION</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
          <div>• NDPA 2023 & NDPC Regulations</div>
          <div>• GDPR & Global Privacy Frameworks</div>
          <div>• CBN IT & Cybersecurity Standards</div>
          <div>• DPIAs & Privacy Risk Assessment</div>
          <div>• DSAR / Data Subject Rights</div>
          <div>• Record of Processing (RoPA)</div>
          <div>• Data Processing Agreements (DPAs)</div>
          <div>• Third-Party / Vendor Due Diligence</div>
          <div>• Breach Response & Regulatory Reporting</div>
          <div>• Privacy by Design & Default</div>
          <div>• Encryption, Tokenisation, Access Control</div>
          <div>• BCP / DR Privacy Oversight</div>
          <div>• Privacy Awareness Training</div>
          <div>• ISO 27001 & NIST Frameworks</div>
          <div>• Fraud Risk & AML</div>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-blue-600 border-b border-gray-300 pb-2 mb-4">PROFESSIONAL EXPERIENCE</h2>

        <div className="mb-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-bold">Teaching Fellow – Cyber Security & Data Protection</h3>
              <p className="text-blue-600">University of Leicester – School of Computing and Mathematical Sciences</p>
            </div>
            <span className="text-sm text-gray-600">January 2026 – Present</span>
          </div>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li>Deliver UG/PG modules covering data protection law (GDPR, UK DPA, NDPA 2023), privacy engineering and information security</li>
            <li>Active research on GDPR-compliant decentralised identity, DPIAs, and trust frameworks</li>
            <li>Supervise applied projects on privacy-preserving systems and regulatory compliance</li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-bold">Cyber Security Post-Doctoral Research Fellow</h3>
              <p className="text-blue-600">University of Surrey – DECaDE Centre (£6M EPSRC programme)</p>
            </div>
            <span className="text-sm text-gray-600">May 2024 – December 2025</span>
          </div>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li>Designed privacy-preserving architectures aligned with GDPR principles (lawfulness, minimisation, purpose limitation, storage limitation, integrity & confidentiality)</li>
            <li>Conducted DPIA-style impact analyses for decentralised reputation and identity verification systems</li>
            <li>Authored peer-reviewed work on GDPR compliance of self-sovereign identity (IEEE EuroS&PW, Springer LNCS)</li>
            <li>Outputs presented to the House of Lords on secure, privacy-respecting digital economy</li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-bold">Fraud Prevention Consultant — Payments & Customer Data</h3>
              <p className="text-blue-600">Apple Inc. (via Majorel Portugal)</p>
            </div>
            <span className="text-sm text-gray-600">June 2020 – March 2022</span>
          </div>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li>Protected customer payment data across all channels in a high-volume, regulated financial environment</li>
            <li>Triaged fraud and data-integrity alerts (VISA CAMS, FICO), maintaining strict confidentiality and audit logging of personal data access</li>
            <li>Contributed to fraud rules and risk reporting equivalent to incident registers and post-incident reviews</li>
            <li>Worked within Apple's tokenisation and encryption controls for sensitive payment data — directly transferable to Moniepoint's merchant acquiring stack</li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-bold">External Researcher — Identity, Privacy & Data Governance</h3>
              <p className="text-blue-600">INESC TEC Porto (CRACS)</p>
            </div>
            <span className="text-sm text-gray-600">September 2017 – 2023</span>
          </div>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li>Designed GDPR-compliant identity and consent management flows using OAuth, SAML and Shibboleth</li>
            <li>Defined data lifecycle, retention and access-control policies for enterprise identity systems</li>
            <li>Contributed to Nanostima (€2.5M EU Horizon 2020) — secure health-data infrastructure used for Portugal's COVID vaccine tracking</li>
            <li>Aligned designs with GDPR, NIST and ISO 27001 control frameworks</li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-bold">Lecturer — IT, Cybersecurity & Data Protection</h3>
              <p className="text-blue-600">Bayero University Kano, Nigeria — Department of Information Technology</p>
            </div>
            <span className="text-sm text-gray-600">May 2015 – 2023</span>
          </div>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li>Designed and delivered modules covering Nigerian data protection landscape, cyber law and information assurance</li>
            <li>Ran privacy and security awareness sessions for staff and students — directly comparable to enterprise privacy training programmes</li>
            <li>Maintained close awareness of NITDA / NDPR / NDPA 2023 developments and CBN cybersecurity guidance</li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-bold">Relationship and Risk Officer — Financial Services</h3>
              <p className="text-blue-600">Unity Bank PLC, Nigeria</p>
            </div>
            <span className="text-sm text-gray-600">July 2013 – February 2015</span>
          </div>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li>Conducted KYC / customer due diligence on individual and corporate customers in line with CBN AML/CFT requirements</li>
            <li>Assessed IT risks across banking systems and infrastructure; recommended controls aligned with regulatory expectations</li>
            <li>Produced risk reports for senior management and delivered staff training on data handling and security</li>
            <li>Monitored regulatory change impact on the bank's risk and compliance posture</li>
          </ul>
        </div>
      </section>

      {/* Selected Data Protection Engagements */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-blue-600 border-b border-gray-300 pb-2 mb-4">SELECTED DATA PROTECTION ENGAGEMENTS</h2>
        <ul className="list-disc ml-6 text-sm space-y-2">
          <li><strong>DPIA methodology:</strong> Built DPIA templates for decentralised identity products covering lawful basis, necessity & proportionality, risks to data subjects, and technical & organisational mitigations.</li>
          <li><strong>DSAR workflow design:</strong> Modelled end-to-end DSAR handling (access, rectification, erasure, restriction, objection, portability) within statutory timelines.</li>
          <li><strong>Vendor / DPA management:</strong> Defined processor due-diligence checklists and DPA clause libraries for research partners and cloud processors.</li>
          <li><strong>Breach response:</strong> Designed incident registers and NDPC/ICO-style 72-hour breach notification playbooks.</li>
          <li><strong>Privacy by design for payments:</strong> Recommended tokenisation, encryption in transit & at rest, role-based access control and audit logging for sensitive financial data.</li>
        </ul>
      </section>

      {/* Education */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-blue-600 border-b border-gray-300 pb-2 mb-4">EDUCATION</h2>
        <div className="mb-3">
          <div className="flex justify-between">
            <div>
              <h3 className="font-bold">PhD, Computer Science — Information Systems Security</h3>
              <p className="text-blue-600">University of Porto, Portugal</p>
              <p className="text-sm italic">Thesis: Establishing Secure and Privacy-Preserving Digital Identity with Self-Sovereign Identity</p>
            </div>
            <span className="text-sm text-gray-600">2017 – 2023</span>
          </div>
        </div>
        <div className="mb-3">
          <div className="flex justify-between">
            <div>
              <h3 className="font-bold">MSc, Business Information Systems</h3>
              <p className="text-blue-600">University of East London, United Kingdom</p>
            </div>
            <span className="text-sm text-gray-600">2011 – 2012</span>
          </div>
        </div>
        <div className="mb-3">
          <div className="flex justify-between">
            <div>
              <h3 className="font-bold">BSc, Computer Science — Digital Systems Security</h3>
              <p className="text-blue-600">University of Wollongong, Australia</p>
            </div>
            <span className="text-sm text-gray-600">2007 – 2011</span>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-blue-600 border-b border-gray-300 pb-2 mb-4">CERTIFICATIONS & TRAINING</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
          <div>• GDPR Compliance — Information Security & Data Privacy</div>
          <div>• ISO 27001 — Information Security Management</div>
          <div>• CIPP/E & CIPM — in progress</div>
          <div>• Certified Ethical Hacker (CEH) Training</div>
          <div>• CompTIA Security+ Training</div>
          <div>• CCNA Training</div>
        </div>
      </section>

      {/* Publications */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-blue-600 border-b border-gray-300 pb-2 mb-4">SELECTED PUBLICATIONS — PRIVACY & IDENTITY</h2>
        <div className="text-sm space-y-3">
          <p><strong>Shehu, A.S.</strong> (2024). On the Compliance of Self-Sovereign Identity with GDPR Principles: A Critical Review. <em>arXiv:2409.03624</em>.</p>
          <p><strong>Shehu, A.S.</strong> & Schneider, S. (2025). Decentralised supply chain reputation: A privacy and self-sovereign identity perspective. <em>IEEE EuroS&PW</em>, 474–484.</p>
          <p>Fraser, A., <strong>Shehu, A.S.</strong>, Frymann, N., Haynes, P., & Schneider, S. (2025). Privacy-Preserving Photo Sharing: An SSI Use Case. <em>ICISS 2024, Springer LNCS</em> 15416.</p>
          <p><strong>Shehu, A.S.</strong>, Pinto, A., & Correia, M.E. (2023). SPIDVerify: A secure and privacy-preserving decentralised identity verification framework. <em>IEEE SmartNets 2023</em>.</p>
          <p><strong>Shehu, A.S.</strong>, Pinto, A., & Correia, M.E. (2019). Privacy Preservation and Mandate Representation in Identity Management Systems. <em>CISTI 2019, IEEE</em>.</p>
        </div>
      </section>

      {/* Languages */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-blue-600 border-b border-gray-300 pb-2 mb-4">LANGUAGES</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div><strong>English:</strong> C2</div>
          <div><strong>Hausa:</strong> Native</div>
          <div><strong>Yoruba:</strong> C2</div>
          <div><strong>Portuguese:</strong> A2</div>
        </div>
      </section>

      <div className="print:hidden flex justify-center mt-8">
        <Button onClick={handleDownload} className="flex items-center gap-2">
          <Download className="w-4 h-4" />
          Download CV
        </Button>
      </div>
    </div>
  );
};
