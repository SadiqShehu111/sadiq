import React, { useRef } from 'react';
import { Download, Mail, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import html2pdf from 'html2pdf.js';

export const DownloadableCVKanoState = () => {
  const cvRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    if (!cvRef.current) return;
    html2pdf()
      .set({
        margin: 10,
        filename: 'Muhammad_Shehu_Abubakar-Sadiq_CV_Kano_State_KDAMS.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      } as any)
      .from(cvRef.current)
      .save();
  };

  return (
    <>
      <div ref={cvRef} className="max-w-4xl mx-auto bg-white text-black p-8 print:p-6 font-serif text-sm">
        {/* Name */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-blue-900 mb-2 font-serif">Muhammad Shehu Abubakar-Sadiq</h1>
          <p className="text-lg text-gray-800 mb-4 font-serif">PhD in Computer Science — Cybersecurity</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-900" />
              <span>msabubakar-sadiq.it@buk.edu.ng</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-900" />
              <span>Profiles: le.ac.uk/people/muhammad-sadiq</span>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-blue-900 border-b border-gray-300 pb-2 mb-4">PROFESSIONAL SUMMARY</h2>
          <p className="text-gray-700 leading-relaxed">
            Cybersecurity and digital identity researcher with a PhD in Computer Science and 12+ years of experience across academia, global technology and financial services. Extensive track record in designing secure digital asset management systems, decentralized identity verification, and privacy-preserving data infrastructures. Key contributions include: <strong>SPIDVerify</strong>, a secure and privacy-preserving decentralised identity verification framework; <strong>decentralised real estate transfer verification</strong> using Self-Sovereign Identity and smart contracts; <strong>Nanostima</strong> (€2.5M EU Horizon 2020), the secure health-data infrastructure adopted for Portugal's COVID-19 vaccine tracking; and <strong>DECaDE</strong> (£6M EPSRC), a UK programme on secure digital economy in supply chain presented to the House of Lords. Hands-on with NIST CSF, ISO/IEC 27001, GDPR, NDPA 2023, risk assessment, DPIAs and secure system architecture.
          </p>
        </section>

        {/* Core Competencies */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-blue-900 border-b border-gray-300 pb-2 mb-4">CORE COMPETENCIES</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
            <div>• Digital Asset Registration & Provenance</div>
            <div>• Decentralised Identity & SSI</div>
            <div>• Asset Ownership Verification (SPIDVerify)</div>
            <div>• Smart Contract & Real Estate Transfer Verification</div>
            <div>• Secure Data Infrastructure & Governance</div>
            <div>• Risk Assessment (FAIR, ISO 27001, NIST CSF)</div>
            <div>• Data Privacy, GDPR & NDPA 2023</div>
            <div>• DPIAs, DSARs & Records of Processing</div>
            <div>• Incident Response & Breach Reporting</div>
            <div>• Privacy by Design & Default</div>
            <div>• Fraud Prevention & AML/KYC Controls</div>
            <div>• Stakeholder & Cross-Functional Leadership</div>
          </div>
        </section>

        {/* Relevant Projects */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-blue-900 border-b border-gray-300 pb-2 mb-4">RELEVANT RESEARCH & PROJECTS</h2>

          <div className="mb-5">
            <div className="flex justify-between items-start mb-1">
              <div>
                <h3 className="font-bold">SPIDVerify — Decentralised Identity Verification Framework</h3>
                <p className="text-blue-900">Research Lead • University of Porto / INESC TEC</p>
              </div>
              <span className="text-sm text-gray-800">2023</span>
            </div>
            <ul className="list-disc ml-6 text-sm space-y-1">
              <li>Designed a secure, privacy-preserving decentralised identity verification framework using Self-Sovereign Identity (SSI).</li>
              <li>Directly applicable to KDAMS asset ownership verification, RBAC authentication and trusted user onboarding across MDAs.</li>
              <li>Published in IEEE SmartNets 2023.</li>
            </ul>
          </div>

          <div className="mb-5">
            <div className="flex justify-between items-start mb-1">
              <div>
                <h3 className="font-bold">Decentralised Real Estate Transfer Verification</h3>
                <p className="text-blue-900">Research Lead • University of Porto / INESC TEC</p>
              </div>
              <span className="text-sm text-gray-800">2022</span>
            </div>
            <ul className="list-disc ml-6 text-sm space-y-1">
              <li>Built a decentralised real estate transfer verification system using Self-Sovereign Identity and smart contracts.</li>
              <li>Provides tamper-proof asset ownership records, automated transfer validation and audit trails — directly relevant to KDAMS land and building asset management.</li>
              <li>Published at 19th International Conference on Security and Cryptography (SECRYPT), SCITEPRESS.</li>
            </ul>
          </div>

          <div className="mb-5">
            <div className="flex justify-between items-start mb-1">
              <div>
                <h3 className="font-bold">Nanostima — Secure Health Data Infrastructure</h3>
                <p className="text-blue-900">Co-Team Researcher • INESC TEC Porto (€2.5M EU Horizon 2020)</p>
              </div>
              <span className="text-sm text-gray-800">2017 – 2023</span>
            </div>
            <ul className="list-disc ml-6 text-sm space-y-1">
              <li>Contributed to design and security of a large-scale health-data infrastructure platform.</li>
              <li>Developed identity, consent, access-control and audit-logging frameworks for sensitive personal data.</li>
              <li>Platform was adopted as the backbone for Portugal's national COVID-19 vaccine tracking and monitoring system.</li>
            </ul>
          </div>

          <div className="mb-5">
            <div className="flex justify-between items-start mb-1">
              <div>
                <h3 className="font-bold">DECaDE — Secure Digital Economy in Supply Chain</h3>
                <p className="text-blue-900">Cyber Security Post-Doctoral Research Fellow • University of Surrey (£6M EPSRC programme)</p>
              </div>
              <span className="text-sm text-gray-800">2024 – 2025</span>
            </div>
            <ul className="list-disc ml-6 text-sm space-y-1">
              <li>Researched decentralised trust, digital provenance and privacy-preserving reputation for supply chains.</li>
              <li>Designed GDPR-compliant architectures and DPIA-style impact assessments for sensitive data ecosystems.</li>
              <li>Outputs presented to the House of Lords for secure digital economy in supply chain.</li>
            </ul>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-blue-900 border-b border-gray-300 pb-2 mb-4">PROFESSIONAL EXPERIENCE</h2>

          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold">Teaching Fellow — Cyber Security</h3>
                <p className="text-blue-900">University of Leicester — School of Computing and Mathematical Sciences</p>
              </div>
              <span className="text-sm text-gray-800">January 2026 – Present</span>
            </div>
            <ul className="list-disc ml-6 text-sm space-y-1">
              <li>Research focus on secure digital content provenance, decentralised identity management and GDPR-compliant trust systems.</li>
              <li>Deliver UG/PG teaching in cybersecurity, information security and risk management.</li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold">Cyber Security Post-Doctoral Research Fellow</h3>
                <p className="text-blue-900">University of Surrey — DECaDE Centre (£6M EPSRC programme)</p>
              </div>
              <span className="text-sm text-gray-800">May 2024 – December 2025</span>
            </div>
            <ul className="list-disc ml-6 text-sm space-y-1">
              <li>Designed privacy-preserving and security architectures aligned with GDPR principles and NIST CSF.</li>
              <li>Conducted DPIA-style impact analyses and authored peer-reviewed publications (IEEE EuroS&PW, Springer LNCS).</li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold">External Researcher — Information Security & Identity Management</h3>
                <p className="text-blue-900">INESC TEC Porto (CRACS)</p>
              </div>
              <span className="text-sm text-gray-800">2017 – 2023</span>
            </div>
            <ul className="list-disc ml-6 text-sm space-y-1">
              <li>Contributed to Nanostima (€2.5M EU Horizon 2020) secure health-data infrastructure adopted for Portugal's COVID-19 vaccine tracking.</li>
              <li>Designed identity, consent and access-control flows for sensitive personal data (OAuth, SAML, Shibboleth).</li>
              <li>Aligned architectures to GDPR, NIST and ISO/IEC 27001 security and privacy controls.</li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold">Fraud Prevention Consultant — Payments & Customer Data</h3>
                <p className="text-blue-900">Apple Inc. (via Majorel Portugal)</p>
              </div>
              <span className="text-sm text-gray-800">2020 – 2022</span>
            </div>
            <ul className="list-disc ml-6 text-sm space-y-1">
              <li>Led fraud prevention and detection across all payment channels, protecting millions in assets.</li>
              <li>Triaged VISA CAMS / FICO alerts and produced post-incident reports for Risk Management.</li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold">Lecturer II — Information Technology & Cybersecurity</h3>
                <p className="text-blue-900">Bayero University Kano, Nigeria — Department of Information Technology</p>
              </div>
              <span className="text-sm text-gray-800">2015 – 2023</span>
            </div>
            <ul className="list-disc ml-6 text-sm space-y-1">
              <li>Designed and delivered modules on cybersecurity, data protection law and IT risk.</li>
              <li>Co-managed faculty computer lab, including access control, asset management and incident handling.</li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold">Relationship and Risk Officer</h3>
                <p className="text-blue-900">Unity Bank PLC, Nigeria</p>
              </div>
              <span className="text-sm text-gray-800">2013 – 2015</span>
            </div>
            <ul className="list-disc ml-6 text-sm space-y-1">
              <li>Conducted KYC, IT risk assessments and cybersecurity control reviews across banking systems.</li>
              <li>Produced risk reports for senior management and delivered internal staff training on data handling and security.</li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-blue-900 border-b border-gray-300 pb-2 mb-4">EDUCATION</h2>
          <div className="mb-3">
            <div className="flex justify-between">
              <div>
                <h3 className="font-bold">PhD in Computer Science — Cybersecurity</h3>
                <p className="text-blue-900">University of Porto, Portugal</p>
                <p className="text-sm italic">Thesis: Establishing Secure and Privacy-Preserving Digital Identity with Self-Sovereign Identity</p>
              </div>
              <span className="text-sm text-gray-800">2017 – 2023</span>
            </div>
          </div>
          <div className="mb-3">
            <div className="flex justify-between">
              <div>
                <h3 className="font-bold">MSc, Business Information Systems</h3>
                <p className="text-blue-900">University of East London, United Kingdom</p>
              </div>
              <span className="text-sm text-gray-800">2011 – 2012</span>
            </div>
          </div>
          <div className="mb-3">
            <div className="flex justify-between">
              <div>
                <h3 className="font-bold">BSc, Computer Science — Digital Systems Security</h3>
                <p className="text-blue-900">University of Wollongong, Australia</p>
              </div>
              <span className="text-sm text-gray-800">2007 – 2011</span>
            </div>
          </div>
        </section>

        {/* Selected Publications */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-blue-900 border-b border-gray-300 pb-2 mb-4">SELECTED PUBLICATIONS</h2>
          <div className="text-sm space-y-2">
            <p><strong>Shehu, A.S.</strong>, Pinto, A., & Correia, M.E. (2023). SPIDVerify: A secure and privacy-preserving decentralised identity verification framework. <em>2023 International Conference on Smart Applications, Communications and Networking (SmartNets)</em>, pp. 1-8. IEEE.</p>
            <p><strong>Shehu, A.S.</strong>, Pinto, A., & Correia, M.E. (2022). A Decentralised Real Estate Transfer Verification Based on Self-Sovereign Identity and Smart Contract. <em>Proceedings of the 19th International Conference on Security and Cryptography (SECRYPT)</em>, pp. 646-653. SCITEPRESS.</p>
            <p><strong>Shehu, A.S.</strong> & Schneider, S. (2025). Decentralised supply chain reputation: A privacy and self-sovereign identity perspective. <em>IEEE European Symposium on Security and Privacy Workshops (EuroS&PW)</em>, 474-484.</p>
            <p>Fraser, A., <strong>Shehu, A.S.</strong>, Frymann, N., Haynes, P., & Schneider, S. (2025). Privacy-Preserving Photo Sharing: An SSI Use Case. <em>ICISS 2024, Springer LNCS</em> 15416.</p>
          </div>
        </section>
      </div>

      <div className="flex justify-center gap-4 mt-8 print:hidden">
        <Button onClick={handleDownload} className="flex items-center gap-2">
          <Download className="w-4 h-4" />
          Download CV (PDF)
        </Button>
        <a
          href="/Muhammad_Shehu_Abubakar-Sadiq_CV_Kano_State_KDAMS.docx"
          download
        >
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            Download CV (DOCX)
          </Button>
        </a>
      </div>
    </>
  );
};
