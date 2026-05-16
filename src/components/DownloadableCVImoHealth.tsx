import React, { useRef } from 'react';
import { Download, Mail, MapPin, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import html2pdf from 'html2pdf.js';

export const DownloadableCVImoHealth = () => {
  const cvRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    if (!cvRef.current) return;
    html2pdf()
      .set({
        margin: 10,
        filename: 'Dr_Muhammad_Shehu_Abubakar-Sadiq_CV_Lead_Cybersecurity_Data_Privacy.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      } as any)
      .from(cvRef.current)
      .save();
  };

  return (
    <>
      <div ref={cvRef} className="max-w-4xl mx-auto bg-white text-black p-8 print:p-6">
        {/* Header */}
        <div className="border-b-2 border-blue-600 pb-6 mb-6">
          <h1 className="text-3xl font-bold text-blue-600 mb-1">Dr. Muhammad Shehu Abubakar-Sadiq</h1>
          <p className="text-lg text-gray-600 mb-4">PhD, Information Systems Security — Cybersecurity & Data Privacy Leader</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-600" />
              <span>msabubakar-sadiq.it@buk.edu.ng</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-600" />
              <span>Nigeria — open to relocation to Imo State</span>
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
            Cybersecurity and data privacy leader with 12+ years across academia, global technology and
            financial services. PhD in Information Systems Security with applied expertise in
            healthcare-grade data protection — designed and secured the Nanostima (€2.5M EU Horizon 2020)
            infrastructure used for Portugal's COVID-19 vaccine tracking, and published peer-reviewed
            work on GDPR-compliant identity, DPIAs, and privacy-by-design. Hands-on with NIST CSF,
            ISO/IEC 27001, HIPAA-equivalent controls, NDPA 2023 and GDPR. Proven track record building
            security policies, incident response playbooks, vendor due-diligence frameworks and
            staff awareness programmes. Available to relocate to Imo State to lead the cybersecurity and
            data privacy function for secondary healthcare delivery.
          </p>
        </section>

        {/* Core Competencies */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-blue-600 border-b border-gray-300 pb-2 mb-4">CORE COMPETENCIES</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
            <div>• Healthcare Data Protection (HIPAA-equivalent)</div>
            <div>• NDPA 2023, NDPC & GAID Compliance</div>
            <div>• GDPR & Global Privacy Frameworks</div>
            <div>• NIST CSF & ISO/IEC 27001</div>
            <div>• DPIAs, DSARs & RoPA</div>
            <div>• Risk Assessment & Security Architecture</div>
            <div>• Incident Response & Breach Reporting</div>
            <div>• Privacy by Design & Default</div>
            <div>• Vendor DPAs & Third-Party Due Diligence</div>
            <div>• Encryption, Tokenisation & Access Control</div>
            <div>• Security Awareness & Staff Training</div>
            <div>• Stakeholder & Cross-Functional Leadership</div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-blue-600 border-b border-gray-300 pb-2 mb-4">PROFESSIONAL EXPERIENCE</h2>

          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold">Teaching Fellow — Cyber Security</h3>
                <p className="text-blue-600">University of Leicester — School of Computing and Mathematical Sciences</p>
              </div>
              <span className="text-sm text-gray-600">January 2026 – Present</span>
            </div>
            <ul className="list-disc ml-6 text-sm space-y-1">
              <li>Deliver UG/PG modules covering information security, data protection law (GDPR, UK DPA, NDPA 2023) and risk management</li>
              <li>Design lab exercises on incident response, security architecture and threat modelling</li>
              <li>Supervise applied research projects on privacy-preserving systems and regulatory compliance</li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold">Cyber Security Post-Doctoral Research Fellow</h3>
                <p className="text-blue-600">University of Surrey — DECaDE Centre (£6M EPSRC programme)</p>
              </div>
              <span className="text-sm text-gray-600">May 2024 – December 2025</span>
            </div>
            <ul className="list-disc ml-6 text-sm space-y-1">
              <li>Designed privacy-preserving and security architectures aligned with GDPR principles and NIST CSF</li>
              <li>Conducted DPIA-style impact analyses identifying vulnerabilities and technical/organisational mitigations</li>
              <li>Authored peer-reviewed work on GDPR compliance and decentralised identity (IEEE EuroS&PW, Springer LNCS)</li>
              <li>Engaged industry and policy stakeholders; outputs presented to the House of Lords</li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold">External Researcher — Information Security & Identity Management</h3>
                <p className="text-blue-600">INESC TEC Porto (CRACS)</p>
              </div>
              <span className="text-sm text-gray-600">September 2017 – 2023</span>
            </div>
            <ul className="list-disc ml-6 text-sm space-y-1">
              <li>Contributed to <strong>Nanostima (€2.5M EU Horizon 2020)</strong> — secure health-data platform used as the backbone for Portugal's COVID-19 vaccine tracking</li>
              <li>Designed identity, consent and access-control flows for sensitive health and personal data (OAuth, SAML, Shibboleth)</li>
              <li>Aligned architectures to GDPR, NIST and ISO/IEC 27001 security and privacy controls</li>
              <li>Defined data lifecycle, retention and audit-logging policies for clinical and research datasets</li>
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
              <li>Investigated and contained fraud and data-integrity incidents across all payment channels</li>
              <li>Triaged VISA CAMS / FICO alerts; produced post-incident reports for Risk Management — equivalent workflow to clinical breach triage and reporting</li>
              <li>Worked within strict tokenisation, encryption and audit-logging controls for sensitive customer data</li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold">Technical Support Specialist</h3>
                <p className="text-blue-600">N26 Mobile Bank</p>
              </div>
              <span className="text-sm text-gray-600">June 2019 – March 2020</span>
            </div>
            <ul className="list-disc ml-6 text-sm space-y-1">
              <li>Handled regulated customer cases under strict confidentiality and access-control protocols</li>
              <li>Drafted operating procedures and reference material used by frontline teams</li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold">Lecturer II — Information Technology & Cybersecurity</h3>
                <p className="text-blue-600">Bayero University Kano, Nigeria — Department of Information Technology</p>
              </div>
              <span className="text-sm text-gray-600">May 2015 – 2023</span>
            </div>
            <ul className="list-disc ml-6 text-sm space-y-1">
              <li>Designed and delivered modules on cybersecurity, data protection law and IT risk</li>
              <li>Ran security and privacy awareness sessions for staff and students — directly comparable to enterprise training programmes</li>
              <li>Co-managed the main faculty computer lab, including access control, asset management and incident handling</li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold">Relationship and Risk Officer</h3>
                <p className="text-blue-600">Unity Bank PLC, Nigeria</p>
              </div>
              <span className="text-sm text-gray-600">July 2013 – February 2015</span>
            </div>
            <ul className="list-disc ml-6 text-sm space-y-1">
              <li>Conducted KYC, IT risk assessments and cybersecurity control reviews across banking systems</li>
              <li>Produced risk reports for senior management and delivered internal staff training on data handling and security</li>
            </ul>
          </div>
        </section>

        {/* Selected Engagements */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-blue-600 border-b border-gray-300 pb-2 mb-4">SELECTED CYBERSECURITY & DATA PRIVACY ENGAGEMENTS</h2>
          <ul className="list-disc ml-6 text-sm space-y-2">
            <li><strong>Health-data infrastructure:</strong> Contributed to Nanostima, a secure data backbone deployed nationally for Portugal's COVID-19 vaccine tracking — directly relevant to securing patient data at scale.</li>
            <li><strong>DPIA & risk methodology:</strong> Built reusable DPIA and risk-assessment templates covering lawful basis, necessity, threats, and technical/organisational mitigations.</li>
            <li><strong>Incident response:</strong> Designed incident registers and 72-hour breach notification playbooks aligned to NDPC, GDPR and ISO 27035 expectations.</li>
            <li><strong>Vendor & DPA management:</strong> Defined processor due-diligence checklists and DPA clause libraries for cloud and research partners.</li>
            <li><strong>Awareness & training:</strong> Delivered recurring privacy and security awareness sessions in academic and corporate settings.</li>
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
            <div>• ISO/IEC 27001 — Information Security Management</div>
            <div>• GDPR Compliance — Information Security & Data Privacy</div>
            <div>• Certified Ethical Hacker (CEH) Training</div>
            <div>• CompTIA Security+ Training</div>
            <div>• CCNA Training</div>
            <div>• CIPP/E & CIPM — in progress</div>
            <div>• CISSP / CISM — planned</div>
          </div>
        </section>

        {/* Publications */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-blue-600 border-b border-gray-300 pb-2 mb-4">SELECTED PUBLICATIONS — SECURITY & PRIVACY</h2>
          <div className="text-sm space-y-3">
            <p><strong>Shehu, A.S.</strong> (2024). On the Compliance of Self-Sovereign Identity with GDPR Principles: A Critical Review. <em>arXiv:2409.03624</em>.</p>
            <p><strong>Shehu, A.S.</strong> & Schneider, S. (2025). Decentralised supply chain reputation: A privacy and self-sovereign identity perspective. <em>IEEE EuroS&PW</em>, 474–484.</p>
            <p>Fraser, A., <strong>Shehu, A.S.</strong>, Frymann, N., Haynes, P., & Schneider, S. (2025). Privacy-Preserving Photo Sharing: An SSI Use Case. <em>ICISS 2024, Springer LNCS</em> 15416.</p>
            <p><strong>Shehu, A.S.</strong>, Pinto, A., & Correia, M.E. (2023). SPIDVerify: A secure and privacy-preserving decentralised identity verification framework. <em>IEEE SmartNets 2023</em>.</p>
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
      </div>

      <div className="flex justify-center mt-8">
        <Button onClick={handleDownload} className="flex items-center gap-2">
          <Download className="w-4 h-4" />
          Download CV
        </Button>
      </div>
    </>
  );
};
