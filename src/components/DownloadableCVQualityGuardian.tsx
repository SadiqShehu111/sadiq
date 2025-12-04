import { Download, Mail, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const DownloadableCVQualityGuardian = () => {
  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white text-gray-900 print:p-4 print:max-w-none">
      {/* Download Button - Hidden in Print */}
      <div className="print:hidden mb-6 flex gap-4">
        <Button onClick={handleDownload} className="bg-primary hover:bg-primary/90">
          <Download className="mr-2 h-4 w-4" />
          Download CV
        </Button>
        <Button 
          variant="outline" 
          onClick={() => window.open('https://scholar.google.com/citations?user=msabubakar-sadiq', '_blank')}
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
        >
          <ExternalLink className="mr-2 h-4 w-4" />
          View Google Scholar
        </Button>
      </div>

      {/* Header */}
      <header className="border-b-2 border-gray-800 pb-4 mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-1">Muhammad Shehu Abubakar-(Sadiq) PhD</h1>
        <p className="text-lg text-primary font-semibold mb-3">Information Security & Risk Management Professional</p>
        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <Mail className="h-4 w-4" />
            tancy62@yahoo.com
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            Porto, Portugal
          </span>
        </div>
      </header>

      {/* Professional Summary */}
      <section className="mb-6">
        <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3">PROFESSIONAL SUMMARY</h2>
        <p className="text-sm text-gray-700 leading-relaxed">
          Accomplished security risk management specialist with PhD in Computer Science and extensive experience spanning academia, research, and industry. 
          Expert in threat modeling, risk assessment frameworks (Privacy principles, ISO 27001), and Security by Design methodologies. Over 8 years of combined experience 
          in academic research, teaching, and industry roles including fraud prevention, forensic investigations, and risk management. Proven track record 
          in leading quantified risk assessments, developing security standards and playbooks, and implementing risk management practices. 
          Strong background in Agile methodologies with excellent documentation and audit skills.
        </p>
      </section>

      {/* Key Competencies */}
      <section className="mb-6">
        <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3">KEY COMPETENCIES</h2>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Security & Compliance</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-0.5">
              <li>ISO 27001 Information Security</li>
              <li>Risk Assessment & Mitigation (FAIR)</li>
              <li>GDPR Compliance</li>
              <li>Security Auditing</li>
              <li>Fraud Detection & Prevention</li>
              <li>Forensic Investigation</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Agile & Process Management</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-0.5">
              <li>Scrum Framework</li>
              <li>Process Documentation</li>
              <li>Continuous Improvement</li>
              <li>Quality Assurance Frameworks</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Technical Skills</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-0.5">
              <li>Identity Management (OAuth, SAML)</li>
              <li>Security by Design Methodology</li>
              <li>Python, Java, SQL</li>
              <li>Data Analytics & Visualization</li>
              <li>Linux/Ubuntu/Windows Systems</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Quality & Documentation</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-0.5">
              <li>Technical Documentation</li>
              <li>Quality Management Systems</li>
              <li>Template & Process Creation</li>
              <li>Security Standards & Playbooks</li>
              <li>Stakeholder Communication</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="mb-6">
        <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3">PROFESSIONAL EXPERIENCE</h2>
        
        <div className="mb-4">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-semibold text-gray-800">Cyber Security Post Doctoral Research Fellow</h3>
            <span className="text-sm text-gray-600">May 2024 – Present</span>
          </div>
          <p className="text-sm text-primary mb-1">University of Surrey - DECADE: Centre for Cyber Security</p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-0.5">
            <li>Deliver undergraduate and postgraduate teaching in cybersecurity and information security</li>
            <li>Design course materials, assignments, and assessments for complex security concepts</li>
            <li>Supervise and mentor MSc and PhD students in security research projects</li>
            <li>Lead research in decentralized identity systems and privacy-preserving technologies</li>
            <li>Publish in top-tier security journals (IEEE) and present at international conferences</li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-semibold text-gray-800">External Researcher - Information Security & Identity Management</h3>
            <span className="text-sm text-gray-600">March 2022 – March 2024</span>
          </div>
          <p className="text-sm text-primary mb-1">INESC TEC Porto (CRACS)</p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-0.5">
            <li>Conducted research on identity management, data privacy, and data governance</li>
            <li>Implemented security protocols and standards (OAuth, SAML) for compliance</li>
            <li>Ensured compliance with GDPR, NIST, and ISO security standards</li>
            <li>Developed secure identity management solutions for enterprise environments</li>
            <li>Managed incident response and risk assessment procedures</li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-semibold text-gray-800">Fraud Prevention Specialist</h3>
            <span className="text-sm text-gray-600">June 2020 – March 2022</span>
          </div>
          <p className="text-sm text-primary mb-1">Apple Inc. (Via Majorel Portugal)</p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-0.5">
            <li>Led fraud prevention and detection across all payment channels protecting millions in assets</li>
            <li>Identified fraud patterns through analysis of high-risk countries and merchant activities</li>
            <li>Created fraud rules by providing analytical data to support decision-making processes</li>
            <li>Reviewed alerts from external sources (VISA CAMS, FICO) and executed fraud mitigation</li>
            <li>Prepared comprehensive reports for Risk Management teams and stakeholders</li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-semibold text-gray-800">Relationship and Risk Officer</h3>
            <span className="text-sm text-gray-600">July 2013 – February 2015</span>
          </div>
          <p className="text-sm text-primary mb-1">Unity Bank PLC</p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-0.5">
            <li>Conducted customer due diligence and know-your-customer (KYC) checks</li>
            <li>Identified potential IT risks and vulnerabilities within bank's technology systems</li>
            <li>Developed and implemented cybersecurity strategies to safeguard IT assets</li>
            <li>Ensured IT practices aligned with industry regulations and cybersecurity standards</li>
            <li>Developed risk mitigation strategies including control mechanisms and procedures</li>
          </ul>
        </div>
      </section>

      {/* Selected Publications */}
      <section className="mb-6">
        <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3">SELECTED PUBLICATIONS</h2>
        <div className="text-xs space-y-2">
          <p><strong>Shehu, A.S.</strong>, & Schneider, S. (2025). Decentralised supply chain reputation: A privacy and self-sovereign identity perspective. <em>IEEE European Symposium on Security and Privacy Workshops (EuroS&PW)</em>, 474-484.</p>
          <p>Fraser, A., <strong>Shehu, A.S.</strong>, et al. (2025). Privacy-Preserving Photo Sharing: An SSI Use Case. <em>ICISS 2024. Lecture Notes in Computer Science</em>, vol 15416, Springer.</p>
          <p><strong>Shehu, A.S.</strong> (2024). On the Compliance of Self-Sovereign Identity with GDPR Principles: A Critical Review. <em>arXiv preprint</em>.</p>
          <p><strong>Shehu, A.S.</strong>, Pinto, A., & Correia, M.E. (2023). SPIDVerify: A secure and privacy-preserving decentralised identity verification framework. <em>IEEE SmartNets</em>.</p>
        </div>
      </section>

      {/* Education */}
      <section className="mb-6">
        <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3">EDUCATION</h2>
        
        <div className="mb-2">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-gray-800">PhD in Computer Science - Information Systems Security</h3>
            <span className="text-sm text-gray-600">2017 – 2023</span>
          </div>
          <p className="text-sm text-gray-700">University of Porto, Portugal</p>
          <p className="text-xs text-gray-600 italic">Thesis: "Establishing Secure and Privacy-Preserving Digital Identity with Self Sovereign Identity"</p>
        </div>

        <div className="mb-2">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-gray-800">Master of Science - Business Information Systems</h3>
            <span className="text-sm text-gray-600">2011 – 2012</span>
          </div>
          <p className="text-sm text-gray-700">University of East London, United Kingdom</p>
        </div>

        <div className="mb-2">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-gray-800">Bachelor of Computer Science - Digital Systems Security</h3>
            <span className="text-sm text-gray-600">2007 – 2011</span>
          </div>
          <p className="text-sm text-gray-700">University of Wollongong, Australia</p>
        </div>
      </section>

      {/* Certifications */}
      <section className="mb-6">
        <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3">CERTIFICATIONS & TRAINING</h2>
        <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
          <div>• Information Security and Data Privacy</div>
          <div>• CCNA Training</div>
          <div>• Security+ Training</div>
          <div>• CEH (Certified Ethical Hacker) Training</div>
          <div>• GDPR Compliance</div>
          <div>• ISO Security Standards</div>
        </div>
      </section>

      {/* Availability */}
      <section className="mb-6">
        <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3">AVAILABILITY</h2>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-0.5">
          <li>Available for remote and hybrid work arrangements</li>
          <li>Available for travel within Portugal and abroad</li>
        </ul>
      </section>
    </div>
  );
};
