import React, { useRef } from 'react';
import { Download, Mail, MapPin, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import html2pdf from 'html2pdf.js';

export const DownloadableCVLeicester = () => {
  const cvRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    if (!cvRef.current) return;
    html2pdf()
      .set({
        margin: 10,
        filename: 'Dr_Muhammad_Shehu_Abubakar-Sadiq_CV_Leicester.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
      })
      .from(cvRef.current)
      .save();
  };

  return (
    <div ref={cvRef} className="max-w-4xl mx-auto bg-white text-black p-8 print:p-6">
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
          protection, KYC/AML and customer-data safeguarding. PhD in Information Systems Security with
          deep expertise in GDPR, NDPA 2023, NDPC and CBN frameworks — including DPIAs, DSARs, RoPA,
          breach response, vendor DPAs, encryption, tokenisation and privacy-by-design for payment
          systems. Published researcher on GDPR-compliant identity and privacy-preserving architectures.
        </p>
      </section>

      {/* Competencies */}
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

      {/* Experience */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-blue-600 border-b border-gray-300 pb-2 mb-4">PROFESSIONAL EXPERIENCE</h2>

        <div className="mb-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-bold">Teaching Fellow – Cyber Security</h3>
              <p className="text-blue-600">University of Leicester – School of Computing and Mathematical Sciences</p>
            </div>
            <span className="text-sm text-gray-600">January 2026 – Present</span>
          </div>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li>Deliver undergraduate and postgraduate modules across cyber security, information security and computer science</li>
            <li>Design course materials, practical labs, assignments and assessments for complex security concepts</li>
            <li>Supervise BSc, MSc and PhD students on applied security research projects</li>
            <li>Contribute to curriculum development, module review and student academic support</li>
            <li>Maintain active research in decentralised identity, secure digital provenance and GDPR-compliant trust systems</li>
            <li>Engage with industry and public-sector partners to translate research into practice</li>
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
            <li>Led research in decentralised identity, privacy-preserving reputation systems and supply-chain trust</li>
            <li>Published in IEEE EuroS&PW, Springer LNCS and presented at international conferences</li>
            <li>Co-supervised MSc/PhD students and contributed to teaching across cyber security modules</li>
            <li>Collaborated with industry partners; outputs presented to the House of Lords</li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-bold">Pioneer Language Engineer – Google Search</h3>
              <p className="text-blue-600">Google (Hausa & Yoruba)</p>
            </div>
            <span className="text-sm text-gray-600">March 2022 – March 2024</span>
          </div>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li>Built and evaluated NLP models and recall sets for African-language search internationalisation</li>
            <li>Managed feature internationalisation launches from pilot to production with engineering and PM teams</li>
            <li>Designed QA processes, grammar evaluations and launch workflows</li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-bold">External Researcher – Information Security & Identity Management</h3>
              <p className="text-blue-600">INESC TEC Porto (CRACS)</p>
            </div>
            <span className="text-sm text-gray-600">September 2017 – 2023</span>
          </div>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li>Research on identity management, data privacy and data governance</li>
            <li>Implemented OAuth, SAML and Shibboleth protocols for enterprise identity flows</li>
            <li>Ensured compliance with GDPR, NIST and ISO security standards</li>
            <li>Contributed to Nanostima (€2.5M EU Horizon 2020) infrastructure used for Portugal's COVID vaccine tracking</li>
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
            <li>Monitored debit-card fraud alerts and executed mitigation across all payment channels</li>
            <li>Identified fraud patterns from high-risk countries/merchants and contributed to rule creation</li>
            <li>Reviewed VISA CAMS / FICO alerts and prepared reports for Risk Management teams</li>
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
            <li>Resolved customer technical cases via email and chat with strict confidentiality controls</li>
            <li>Tested system components, drafted operating procedures and reference material</li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-bold">Lecturer II – Information Technology & Cybersecurity</h3>
              <p className="text-blue-600">Bayero University Kano, Nigeria – Department of Information Technology</p>
            </div>
            <span className="text-sm text-gray-600">May 2015 – 2023</span>
          </div>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li>Designed and delivered UG/PG modules in computer science, IT and cyber security</li>
            <li>Co-managed the university's main computer lab and supervised student research</li>
            <li>Coordinated funding bids from university finance and private donors</li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-bold">Relationship and Risk Officer</h3>
              <p className="text-blue-600">Unity Bank PLC</p>
            </div>
            <span className="text-sm text-gray-600">July 2013 – February 2015</span>
          </div>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li>KYC / customer due diligence and IT risk assessment across banking systems</li>
            <li>Implemented cyber security controls and regulatory compliance monitoring</li>
            <li>Produced risk reports for senior management and delivered staff training</li>
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
          <div>• Information Security & Data Privacy</div>
          <div>• CCNA Training</div>
          <div>• CompTIA Security+ Training</div>
          <div>• Certified Ethical Hacker (CEH) Training</div>
          <div>• GDPR Compliance</div>
          <div>• ISO 27001 Security Standards</div>
        </div>
      </section>

      {/* Publications */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-blue-600 border-b border-gray-300 pb-2 mb-4 flex items-center justify-between">
          <span>SELECTED PUBLICATIONS</span>
          <a
            href="https://scholar.google.com/scholar?q=author:%22Abubakar-Sadiq+Shehu%22"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-normal text-blue-600 hover:text-blue-800 print:hidden"
          >
            View Google Scholar →
          </a>
        </h2>
        <div className="text-sm space-y-3">
          <p><strong>Shehu, A.S.</strong> & Schneider, S. (2025). Decentralised supply chain reputation: A privacy and self-sovereign identity perspective. <em>IEEE EuroS&PW</em>, 474–484.</p>
          <p>Fraser, A., <strong>Shehu, A.S.</strong>, Frymann, N., Haynes, P., & Schneider, S. (2025). Privacy-Preserving Photo Sharing: An SSI Use Case. <em>ICISS 2024, Springer LNCS</em> 15416, 320–329.</p>
          <p><strong>Shehu, A.S.</strong> (2024). On the Compliance of Self-Sovereign Identity with GDPR Principles: A Critical Review. <em>arXiv:2409.03624</em>.</p>
          <p><strong>Shehu, A.S.</strong>, Pinto, A., & Correia, M.E. (2023). SPIDVerify: A secure and privacy-preserving decentralised identity verification framework. <em>IEEE SmartNets 2023</em>.</p>
          <p><strong>Shehu, A.S.</strong>, Pinto, A., & Correia, M.E. (2022). A Decentralised Real Estate Transfer Verification Based on SSI and Smart Contracts. <em>SECRYPT 2022</em>, 646–653.</p>
          <p><strong>Shehu, A.S.</strong>, Pinto, A., & Correia, M.E. (2019). Privacy Preservation and Mandate Representation in Identity Management Systems. <em>CISTI 2019</em>, IEEE.</p>
          <p><strong>Shehu, A.S.</strong>, Pinto, A., & Correia, M.E. (2018). On the Interoperability of European National Identity Cards. <em>ISAmI 2018, Springer</em>, 338–348.</p>
          <p>Merlano, F., Parry, G., <strong>Shehu, A.S.</strong> (2025). Privacy-Enhancing Decentralised Reputation Systems. <em>CADE 2025</em>.</p>
        </div>
      </section>

      {/* Languages */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-blue-600 border-b border-gray-300 pb-2 mb-4">LANGUAGES</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div><strong>English:</strong> C2 (Proficient)</div>
          <div><strong>Hausa:</strong> Native/C2</div>
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
