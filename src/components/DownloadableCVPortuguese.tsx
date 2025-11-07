import React from 'react';
import { Download, Mail, Phone, MapPin, User, Briefcase, GraduationCap, Award, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const DownloadableCVPortuguese = () => {
  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto bg-white text-black p-8 print:p-6">
      {/* Header */}
      <div className="border-b-2 border-blue-600 pb-6 mb-6">
        <h1 className="text-3xl font-bold text-blue-600 mb-2">Dr. Muhammad Shehu Abubakar-Sadiq</h1>
        <p className="text-xl text-gray-600 mb-4">PhD in Computer Science • Cybersecurity & Forensic Investigation Specialist</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-blue-600" />
            <span>s.muhammad@surrey.ac.uk</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-blue-600" />
            <span>Travessa da Via Sacra 84, 2esq, Porto, 4200-522, Portugal</span>
          </div>
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-blue-600" />
            <span>Portuguese National</span>
          </div>
        </div>
      </div>

      {/* Professional Summary */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-blue-600 border-b border-gray-300 pb-2 mb-4">PROFESSIONAL SUMMARY</h2>
        <p className="text-gray-700 leading-relaxed">
          Accomplished security risk management specialist with PhD in Computer Science and extensive experience spanning academia, research, and industry. 
          Expert in threat modeling, risk assessment frameworks (FAIR, ISO 27001), and Security by Design methodologies. Over 8 years of combined experience 
          in academic research, teaching, and industry roles including fraud prevention, forensic investigations, and risk management. Proven track record 
          in leading quantified risk assessments, developing security standards and playbooks, and implementing risk management practices across organizations. 
          Strong analytical mindset with demonstrated success in applying statistical models to risk frameworks, developing key risk indicators, and presenting 
          security risk analyses to senior leadership. Expert in regulatory compliance (GDPR, ISO), identity management systems, and cross-functional 
          collaboration to drive security improvements.
        </p>
      </section>

      {/* Key Competencies */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-blue-600 border-b border-gray-300 pb-2 mb-4">KEY COMPETENCIES</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
          <div>• Forensic Investigation</div>
          <div>• Fraud Risk Management</div>
          <div>• Regulatory Compliance</div>
          <div>• Anti-Money Laundering (AML)</div>
          <div>• Anti-Bribery & Corruption</div>
          <div>• Digital Identity Management</div>
          <div>• Data Privacy & GDPR</div>
          <div>• Team Leadership</div>
          <div>• Project Management</div>
          <div>• Risk Assessment</div>
          <div>• Security Protocols</div>
          <div>• Data Analytics</div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-blue-600 border-b border-gray-300 pb-2 mb-4">PROFESSIONAL EXPERIENCE</h2>
        
        <div className="mb-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-bold">Cyber Security Post Doctoral Research Fellow</h3>
              <p className="text-blue-600">University of Surrey - DECADE: Centre for Cyber Security</p>
            </div>
            <span className="text-sm text-gray-600">May 2024 – Present</span>
          </div>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li>Conduct independent research in information security and decentralized data management systems</li>
            <li>Design and implement security experiments and studies for complex investigation scenarios</li>
            <li>Analyze research data using advanced statistical and computational methods</li>
            <li>Supervise graduate students in information security research projects</li>
            <li>Collaborate with interdisciplinary teams and industry partners on security challenges</li>
            <li>Participate in peer review process for IEEE and other security journals</li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-bold">Fraud Prevention Specialist</h3>
              <p className="text-blue-600">Apple Inc. (Via Majorel Portugal)</p>
            </div>
            <span className="text-sm text-gray-600">June 2020 – March 2022</span>
          </div>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li>Led fraud prevention and detection across all payment channels protecting millions in assets</li>
            <li>Monitored debit card fraud alerts and implemented protective measures for customers and merchants</li>
            <li>Identified fraud patterns through analysis of high-risk countries and merchant activities</li>
            <li>Created fraud rules by providing analytical data to support decision-making processes</li>
            <li>Managed information flow and deliverables to mitigate fraud through coordinated analysis</li>
            <li>Reviewed alerts from external sources (VISA CAMS, FICO) and executed appropriate fraud mitigation</li>
            <li>Prepared comprehensive reports for Risk Management teams and stakeholders</li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-bold">External Researcher - Information Security & Identity Management</h3>
              <p className="text-blue-600">INESC TEC Porto (CRACS)</p>
            </div>
            <span className="text-sm text-gray-600">March 2022 – March 2024</span>
          </div>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li>Conducted research on identity management, data privacy, and data governance</li>
            <li>Implemented security protocols and standards (OAuth, SAML) for compliance</li>
            <li>Ensured compliance with GDPR, NIST, and ISO security standards</li>
            <li>Developed secure identity management solutions for enterprise environments</li>
            <li>Managed incident response and risk assessment procedures</li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-bold">Lecturer II - Information Technology & Cybersecurity</h3>
              <p className="text-blue-600">Bayero University Kano, Nigeria</p>
            </div>
            <span className="text-sm text-gray-600">May 2015 – 2023</span>
          </div>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li>Designed and delivered cybersecurity and information technology courses</li>
            <li>Managed university computer lab operations and security protocols</li>
            <li>Coordinated research initiatives and secured funding from university and private donors</li>
            <li>Led teams of academic staff and supervised student research projects</li>
          </ul>
        </div>
      </section>

      {/* Education */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-blue-600 border-b border-gray-300 pb-2 mb-4">EDUCATION</h2>
        
        <div className="mb-4">
          <div className="flex justify-between items-start mb-1">
            <div>
              <h3 className="font-bold">PhD in Computer Science - Information Systems Security</h3>
              <p className="text-blue-600">University of Porto, Portugal</p>
              <p className="text-sm italic">Thesis: "Establishing Secure and Privacy-Preserving Digital Identity with Self Sovereign Identity"</p>
            </div>
            <span className="text-sm text-gray-600">2017 – 2023</span>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-start mb-1">
            <div>
              <h3 className="font-bold">Master of Science - Business Information Systems</h3>
              <p className="text-blue-600">University of East London, United Kingdom</p>
            </div>
            <span className="text-sm text-gray-600">2011 – 2012</span>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-start mb-1">
            <div>
              <h3 className="font-bold">Bachelor of Computer Science - Digital Systems Security</h3>
              <p className="text-blue-600">University of Wollongong, Australia</p>
            </div>
            <span className="text-sm text-gray-600">2007 – 2011</span>
          </div>
        </div>
      </section>

      {/* Professional Certifications */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-blue-600 border-b border-gray-300 pb-2 mb-4">PROFESSIONAL CERTIFICATIONS & TRAINING</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
          <div>• Information Security and Data Privacy</div>
          <div>• CCNA Training</div>
          <div>• Security+ Training</div>
          <div>• CEH (Certified Ethical Hacker) Training</div>
          <div>• GDPR Compliance</div>
          <div>• ISO Security Standards</div>
        </div>
      </section>

      {/* Key Publications */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-blue-600 border-b border-gray-300 pb-2 mb-4 flex items-center justify-between">
          <span>SELECTED PUBLICATIONS</span>
          <a 
            href="https://scholar.google.com/scholar?q=author:%22Abubakar-Sadiq+Shehu%22+OR+author:%22Muhammad+Shehu+Abubakar-Sadiq%22" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-normal text-blue-600 hover:text-blue-800 print:hidden flex items-center gap-1"
          >
            View Google Scholar →
          </a>
        </h2>
        <div className="text-sm space-y-3">
          <div>
            <p><strong>Shehu, A.S.</strong>, & Schneider, S. (2025). Decentralised supply chain reputation: A privacy and self-sovereign identity perspective. <em>IEEE European Symposium on Security and Privacy Workshops (EuroS&PW)</em>, 474-484.</p>
            <p className="text-gray-600 text-xs ml-4">DOI: 10.1109/EuroSPW59978.2024.00059</p>
          </div>
          
          <div>
            <p>Fraser, A., <strong>Shehu, A.S.</strong>, Frymann, N., Haynes, P., & Schneider, S. (2025). Privacy-Preserving Photo Sharing: An SSI Use Case. In: <em>Information Systems Security, ICISS 2024. Lecture Notes in Computer Science</em>, vol 15416, pp. 320-329. Springer.</p>
            <p className="text-gray-600 text-xs ml-4">DOI: 10.1007/978-3-031-80020-7_18</p>
          </div>
          
          <div>
            <p><strong>Shehu, A.S.</strong> (2024). On the Compliance of Self-Sovereign Identity with GDPR Principles: A Critical Review. <em>arXiv preprint</em> arXiv:2409.03624.</p>
          </div>
          
          <div>
            <p><strong>Shehu, A.S.</strong>, Pinto, A., & Correia, M.E. (2023). SPIDVerify: A secure and privacy-preserving decentralised identity verification framework. <em>2023 International Conference on Smart Applications, Communications and Networking (SmartNets)</em>, pp. 1-8. IEEE.</p>
            <p className="text-gray-600 text-xs ml-4">DOI: 10.1109/SmartNets58706.2023.10215588</p>
          </div>
          
          <div>
            <p><strong>Shehu, A.S.</strong>, Pinto, A., & Correia, M.E. (2022). A Decentralised Real Estate Transfer Verification Based on Self-Sovereign Identity and Smart Contract. In: <em>Proceedings of the 19th International Conference on Security and Cryptography (SECRYPT)</em>, pp. 646-653. SCITEPRESS.</p>
            <p className="text-gray-600 text-xs ml-4">DOI: 10.5220/0011315000003283</p>
          </div>
          
          <div>
            <p><strong>Shehu, A.S.</strong>, Pinto, A., & Correia, M.E. (2019). Privacy Preservation and Mandate Representation in Identity Management Systems. In: <em>2019 14th Iberian Conference on Information Systems and Technologies (CISTI)</em>, pp. 1-6. IEEE.</p>
            <p className="text-gray-600 text-xs ml-4">DOI: 10.23919/CISTI.2019.8760838</p>
          </div>
          
          <div>
            <p><strong>Shehu, A.S.</strong>, Pinto, A., & Correia, M.E. (2018). On the interoperability of european national identity cards. In: <em>International Symposium on Ambient Intelligence</em>, pp. 338-348. Springer, Cham.</p>
            <p className="text-gray-600 text-xs ml-4">DOI: 10.1007/978-3-030-01746-0_39</p>
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-blue-600 border-b border-gray-300 pb-2 mb-4">LANGUAGES</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div><strong>English:</strong> Native/Fluent</div>
          <div><strong>Hausa:</strong> Native</div>
          <div><strong>Yoruba:</strong> Native</div>
          <div><strong>Portuguese:</strong> Intermediate</div>
        </div>
      </section>

      {/* Download Button - Only visible on screen */}
      <div className="print:hidden flex justify-center mt-8">
        <Button onClick={handleDownload} className="flex items-center gap-2">
          <Download className="w-4 h-4" />
          Download CV
        </Button>
      </div>
    </div>
  );
};