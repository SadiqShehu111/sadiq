import React from 'react';
import { Download, Mail, Phone, MapPin, User, Briefcase, GraduationCap, Award, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const DownloadableCV = () => {
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
            <span>msabubakar-sadiq.it@buk.edu.ng</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-blue-600" />
            <span>Travessa da via sacra 84, 2esq, 4200-522</span>
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
          Accomplished cybersecurity professional with 8+ years of investigation and fraud prevention experience. PhD in Computer Science with 
          specialization in Information Systems Security. Proven track record in forensic investigations, fraud risk management, and regulatory 
          compliance. Expert in identity management systems, data privacy, and anti-fraud technologies. Strong analytical mindset with experience 
          managing cross-functional teams and complex security projects.
        </p>
      </section>

      {/* Key Competencies */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-blue-600 border-b border-gray-300 pb-2 mb-4">KEY COMPETENCIES & SKILLS</h2>
        
        <div className="mb-4">
          <h3 className="font-semibold text-sm mb-2">Teaching & Research Excellence</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
            <div>• Curriculum Development & Delivery</div>
            <div>• Graduate Student Supervision</div>
            <div>• Academic Publishing & Peer Review</div>
            <div>• Complex Problem Analysis</div>
            <div>• Research Project Management</div>
            <div>• Cross-Functional Collaboration</div>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold text-sm mb-2">Cybersecurity & Risk Management</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
            <div>• Fraud Detection & Prevention</div>
            <div>• Forensic Investigation</div>
            <div>• Risk Assessment & Mitigation</div>
            <div>• Regulatory Compliance (GDPR, ISO)</div>
            <div>• Identity & Access Management</div>
            <div>• Security Protocol Implementation</div>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold text-sm mb-2">Technical & Analytical</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
            <div>• Problem Solving & Critical Thinking</div>
            <div>• Attention to Detail</div>
            <div>• OAuth, SAML, OpenID Connect</div>
            <div>• Linux/Ubuntu/Windows Systems</div>
            <div>• Data Analytics & Visualization</div>
            <div>• Python, Java, C++</div>
            <div>• Quality Assurance Frameworks</div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-sm mb-2">Leadership & Communication</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
            <div>• Team Leadership & Mentorship</div>
            <div>• Goal-Oriented & Results-Driven</div>
            <div>• Stakeholder Management</div>
            <div>• Technical Presentation Skills</div>
            <div>• Project Coordination</div>
            <div>• Cross-Cultural Communication</div>
            <div>• Conflict Resolution</div>
          </div>
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
            <li>Deliver undergraduate and postgraduate teaching in cybersecurity and information security topics</li>
            <li>Design engaging course materials, assignments, and assessments for complex security concepts</li>
            <li>Supervise and mentor MSc and PhD students in cutting-edge security research projects</li>
            <li>Lead research in decentralized identity systems and privacy-preserving technologies</li>
            <li>Publish in top-tier security journals (IEEE) and present at international conferences</li>
            <li>Collaborate with industry partners to bridge academic research with real-world security challenges</li>
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
              <h3 className="font-bold">Pioneer Language Engineer - Google Search</h3>
              <p className="text-blue-600">Google (Hausa & Yoruba Languages)</p>
            </div>
            <span className="text-sm text-gray-600">March 2022 – March 2024</span>
          </div>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li>Led cross-functional collaboration with engineering, product, and infrastructure teams</li>
            <li>Designed and optimized NLP algorithms and language models for African languages</li>
            <li>Built quality assurance processes and evaluation frameworks for algorithm performance</li>
            <li>Managed internationalization projects from pilot to production launch</li>
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
        <h2 className="text-xl font-bold text-blue-600 border-b border-gray-300 pb-2 mb-4">SELECTED PUBLICATIONS</h2>
        <div className="text-sm space-y-2">
          <p>• Shehu, A.S., & Schneider, S. (2025). <strong>Decentralised supply chain reputation: A privacy and self-sovereign identity perspective.</strong> IEEE European Symposium on Security and Privacy Workshops (EuroS&PW), 474-484.</p>
          
          <p>• Fraser, A., Shehu, A.S., Frymann, N., Haynes, P., & Schneider, S. (2025). <strong>Privacy-Preserving Photo Sharing: An SSI Use Case.</strong> Information Systems Security, ICISS 2024. Lecture Notes in Computer Science, vol 15416. Springer.</p>
          
          <p>• Shehu, A.S. (2024). <strong>On the Compliance of Self-Sovereign Identity with GDPR Principles: A Critical Review.</strong> arXiv preprint arXiv:2409.03624.</p>
          
          <p>• Shehu, A.S., Pinto, A., & Correia, M.E. (2023). <strong>SPIDVerify: A secure and privacy-preserving decentralised identity verification framework.</strong> International Conference on Smart Applications, Communications and Networking (SmartNets).</p>
          
          <p>• Shehu, A.S., Pinto, A., & Correia, M.E. (2022). <strong>A Decentralised Real Estate Transfer Verification Based on Self-Sovereign Identity and Smart Contract.</strong> 19th International Conference on Security and Cryptography, Lisbon.</p>
          
          <p>• Shehu, A.S., Pinto, A., & Correia, M.E. (2019). <strong>Privacy Preservation and Mandate Representation in Identity Management Systems.</strong> 14th Iberian Conference on Information Systems and Technologies (CISTI), Coimbra.</p>
          
          <p>• Shehu, A.S., Pinto, A., & Correia, M.E. (2018). <strong>On the interoperability of european national identity cards.</strong> International Symposium on Ambient Intelligence, 338-348. Springer.</p>
        </div>
      </section>


      {/* Languages */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-blue-600 border-b border-gray-300 pb-2 mb-4">LANGUAGES</h2>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div><strong>English:</strong> Native/Fluent</div>
          <div><strong>Portuguese:</strong> Fluent</div>
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