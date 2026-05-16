import React, { useRef } from 'react';
import { Download, Mail, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import html2pdf from 'html2pdf.js';

export const DownloadableCVImoHealth = () => {
  const cvRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    if (!cvRef.current) return;
    html2pdf()
      .set({
        margin: 10,
        filename: 'Dr_Muhammad_Shehu_Abubakar-Sadiq_CV_Cybersecurity_Healthcare.pdf',
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
        <p className="text-lg text-gray-600 mb-4">PhD | Open to relocation to Imo State</p>
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
          Cybersecurity, data privacy and risk leader with 12+ years across healthcare data
          infrastructure, financial services, global technology and academia. Co-researcher on the
          €2.5M EU Horizon 2020 <strong>NanoSTIMA</strong> programme at INESC TEC Porto, where I helped
          deliver the secure health-data infrastructure later used for Portugal's COVID-19 vaccine
          tracking and monitoring. Former Fraud Prevention Consultant at Apple (via Majorel) and Risk
          Officer at Unity Bank PLC. PhD in Information Systems Security with deep, hands-on expertise
          in GDPR, HIPAA-aligned health-data protection, NDPA 2023, NIST CSF, ISO/IEC 27001, FAIR risk
          assessment, DPIAs, incident response and privacy-by-design for clinical and payment systems.
          Invited speaker who has delivered numerous cybersecurity, data protection and digital-trust
          talks globally across Africa, Europe and Asia to policy makers, business leaders and
          academic audiences.
        </p>
      </section>

      {/* Competencies */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-blue-600 border-b border-gray-300 pb-2 mb-4">CORE COMPETENCIES</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
          <div>• Healthcare Data Security (EHR / PHI)</div>
          <div>• HIPAA, GDPR & NDPA 2023 Compliance</div>
          <div>• NIST CSF & ISO/IEC 27001</div>
          <div>• Security Architecture & Privacy by Design</div>
          <div>• Risk Assessment (FAIR, ISO 27005)</div>
          <div>• Incident Response & Breach Reporting</div>
          <div>• DPIAs, DSARs & RoPA</div>
          <div>• Identity & Access Management (OAuth, SAML)</div>
          <div>• Encryption, Tokenisation & Key Management</div>
          <div>• Vendor & Third-Party Due Diligence</div>
          <div>• Security Awareness & Staff Training</div>
          <div>• Stakeholder Leadership & Policy Advisory</div>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-blue-600 border-b border-gray-300 pb-2 mb-4">PROFESSIONAL EXPERIENCE</h2>

        <div className="mb-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-bold">Healthcare Data Security Researcher – NanoSTIMA (€2.5M EU Horizon 2020)</h3>
              <p className="text-blue-600">INESC TEC Porto (CRACS) – Research Line 3: Secure Health Data Infrastructure</p>
            </div>
            <span className="text-sm text-gray-600">2017 – 2023</span>
          </div>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li>Co-designed secure, privacy-preserving infrastructure for Electronic Health Records (EHR) later adopted for Portugal's COVID-19 vaccine tracking and monitoring</li>
            <li>Built decentralised identity and authorisation broker controlling patient/clinician access to PHI in line with GDPR and HIPAA-equivalent safeguards</li>
            <li>Implemented secure storage, multi-party computation patterns, OAuth/SAML/Shibboleth flows and federated EHR repositories</li>
            <li>Conducted risk assessments and DPIAs across the data pipeline; aligned controls to NIST CSF and ISO/IEC 27001</li>
            <li>Trained clinical IT and research staff on data privacy obligations and secure data-sharing practice</li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-bold">Cyber Security Post-Doctoral Research Fellow</h3>
              <p className="text-blue-600">University of Surrey – DECaDE: Centre for the Decentralised Digital Economy (£6M)</p>
            </div>
            <span className="text-sm text-gray-600">May 2024 – December 2025</span>
          </div>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li>Led research on decentralised identity, privacy-preserving reputation and trust frameworks for regulated sectors</li>
            <li>Outputs presented to stakeholders at the UK House of Lords and published in IEEE EuroS&PW and Springer LNCS</li>
            <li>Advised on compliance-by-design approaches bridging GDPR, NDPA and sector-specific data protection regimes</li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-bold">Teaching Fellow – Cyber Security</h3>
              <p className="text-blue-600">University of Leicester – School of Computing and Mathematical Sciences</p>
            </div>
            <span className="text-sm text-gray-600">January 2026 – Present</span>
          </div>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li>Deliver UG/PG modules in cyber security, information security and risk management</li>
            <li>Design practical labs and assessments on incident response, secure architecture and data protection</li>
            <li>Supervise applied security projects with industry and public-sector partners</li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-bold">Fraud Prevention Consultant</h3>
              <p className="text-blue-600">Apple Inc. (via Majorel Portugal)</p>
            </div>
            <span className="text-sm text-gray-600">June 2020 – March 2022</span>
          </div>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li>Monitored fraud alerts and led mitigation across payment channels; contributed to detection-rule development</li>
            <li>Reviewed VISA CAMS / FICO alerts; produced incident reports for Risk Management</li>
            <li>Operated under strict customer-data confidentiality and global privacy controls</li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-bold">Lecturer II – Information Technology & Cybersecurity</h3>
              <p className="text-blue-600">Bayero University Kano, Nigeria</p>
            </div>
            <span className="text-sm text-gray-600">May 2015 – 2023</span>
          </div>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li>Taught UG/PG cyber security, networks and information systems modules</li>
            <li>Supervised student research on healthcare-IT security, identity and privacy</li>
            <li>Delivered staff training and capacity-building workshops on secure IT operations</li>
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
            <li>KYC / customer due diligence and IT risk assessment across banking systems</li>
            <li>Implemented cyber security controls and regulatory compliance monitoring (CBN frameworks)</li>
            <li>Produced risk reports for senior management and delivered staff training on data handling</li>
          </ul>
        </div>
      </section>

      {/* Education */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-blue-600 border-b border-gray-300 pb-2 mb-4">EDUCATION</h2>

        <div className="mb-4">
          <div className="flex justify-between items-start mb-1">
            <div>
              <h3 className="font-bold">PhD in Computer Science – Information Systems Security</h3>
              <p className="text-blue-600">University of Porto, Portugal</p>
              <p className="text-sm italic">Thesis: "Establishing Secure and Privacy-Preserving Digital Identity with Self-Sovereign Identity"</p>
            </div>
            <span className="text-sm text-gray-600">2017 – 2023</span>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-start mb-1">
            <div>
              <h3 className="font-bold">MSc – Business Information Systems</h3>
              <p className="text-blue-600">University of East London, United Kingdom</p>
            </div>
            <span className="text-sm text-gray-600">2011 – 2012</span>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-start mb-1">
            <div>
              <h3 className="font-bold">BSc Computer Science – Digital Systems Security</h3>
              <p className="text-blue-600">University of Wollongong, Australia</p>
            </div>
            <span className="text-sm text-gray-600">2007 – 2011</span>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-blue-600 border-b border-gray-300 pb-2 mb-4">PROFESSIONAL TRAINING</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
          <div>• ISO/IEC 27001 Information Security Management</div>
          <div>• NIST Cybersecurity Framework</div>
          <div>• GDPR & Health Data Protection</div>
          <div>• Certified Ethical Hacker (CEH) Training</div>
          <div>• CompTIA Security+ Training</div>
          <div>• CCNA Training</div>
        </div>
      </section>

      {/* Publications */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-blue-600 border-b border-gray-300 pb-2 mb-4 flex items-center justify-between">
          <span>SELECTED PUBLICATIONS</span>
        </h2>
        <div className="text-sm space-y-3">
          <p><strong>Shehu, A.S.</strong> & Schneider, S. (2025). Decentralised supply chain reputation: A privacy and self-sovereign identity perspective. <em>IEEE EuroS&PW</em>, 474–484.</p>
          <p>Fraser, A., <strong>Shehu, A.S.</strong>, Frymann, N., Haynes, P., & Schneider, S. (2025). Privacy-Preserving Photo Sharing: An SSI Use Case. <em>ICISS 2024, Springer LNCS</em> 15416, 320–329.</p>
          <p><strong>Shehu, A.S.</strong> (2024). On the Compliance of Self-Sovereign Identity with GDPR Principles: A Critical Review. <em>arXiv:2409.03624</em>.</p>
          <p><strong>Shehu, A.S.</strong>, Pinto, A., & Correia, M.E. (2023). SPIDVerify: A secure and privacy-preserving decentralised identity verification framework. <em>IEEE SmartNets 2023</em>.</p>
          <p><strong>Shehu, A.S.</strong>, Pinto, A., & Correia, M.E. (2019). Privacy Preservation and Mandate Representation in Identity Management Systems. <em>CISTI 2019</em>, IEEE.</p>
        </div>
      </section>

      {/* Languages */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-blue-600 border-b border-gray-300 pb-2 mb-4">LANGUAGES</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div><strong>English:</strong> C2</div>
          <div><strong>Hausa:</strong> Native/C2</div>
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
