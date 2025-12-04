import { Download, Mail, MapPin, Globe, ExternalLink } from "lucide-react";
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
        <h1 className="text-3xl font-bold text-gray-900 mb-1">Muhammad Sabubakar Sadiq</h1>
        <p className="text-lg text-primary font-semibold mb-3">Information Security & Risk Management Professional</p>
        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <Mail className="h-4 w-4" />
            msabubakar-sadiq.it@buk.edu.ng
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            Porto, Portugal
          </span>
          <span className="flex items-center gap-1">
            <Globe className="h-4 w-4" />
            Nigerian | EU Work Authorization
          </span>
        </div>
      </header>

      {/* Professional Summary */}
      <section className="mb-6">
        <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3">PROFESSIONAL SUMMARY</h2>
        <p className="text-sm text-gray-700 leading-relaxed">
          Information Security and Risk Management specialist with 8+ years of experience in cybersecurity research, 
          fraud prevention, and compliance frameworks. Proven expertise in implementing security quality systems, 
          conducting risk assessments, and ensuring compliance with international standards (ISO 27001, GDPR). 
          Strong background in Agile methodologies (Scrum, Kanban) with excellent documentation and audit skills. 
          Published researcher in identity management and security systems with a track record of delivering 
          quality-focused security solutions in enterprise environments.
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
              <li>Risk Assessment & Mitigation</li>
              <li>GDPR Compliance</li>
              <li>Security Auditing</li>
              <li>Fraud Detection Systems</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Agile & Process Management</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-0.5">
              <li>Scrum Framework</li>
              <li>Kanban Methodology</li>
              <li>Sprint Planning & Retrospectives</li>
              <li>Process Documentation</li>
              <li>Continuous Improvement</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Technical Skills</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-0.5">
              <li>Deep Learning & Machine Learning</li>
              <li>Identity Management Systems</li>
              <li>Python, SQL</li>
              <li>Security Architecture</li>
              <li>Data Analysis & Reporting</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Quality & Documentation</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-0.5">
              <li>Technical Documentation</li>
              <li>Quality Management Systems</li>
              <li>Template & Process Creation</li>
              <li>Peer Review & Validation</li>
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
            <span className="text-sm text-gray-600">Oct 2024 – Present</span>
          </div>
          <p className="text-sm text-primary mb-1">Centre for Cyber Security, University of Surrey, UK</p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-0.5">
            <li>Conduct security research ensuring compliance with academic and industry quality standards</li>
            <li>Develop comprehensive documentation and methodological frameworks for research outputs</li>
            <li>Perform systematic reviews and quality audits on research deliverables</li>
            <li>Collaborate with cross-functional teams using Agile methodologies</li>
            <li>Published peer-reviewed research in identity management and information security</li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-semibold text-gray-800">Fraud Prevention Specialist</h3>
            <span className="text-sm text-gray-600">Jan 2024 – Oct 2024</span>
          </div>
          <p className="text-sm text-primary mb-1">Apple (via Majorel), Lisbon, Portugal</p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-0.5">
            <li>Established quality control processes for fraud detection systems aligned with ISO 27001</li>
            <li>Conducted security audits and compliance assessments</li>
            <li>Developed and maintained security process documentation and templates</li>
            <li>Worked within Scrum teams, participating in sprint planning and retrospectives</li>
            <li>Implemented continuous improvement initiatives reducing false positive rates by 30%</li>
            <li>Created risk assessment frameworks and mitigation procedures</li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-semibold text-gray-800">Relationship and Risk Officer</h3>
            <span className="text-sm text-gray-600">Oct 2015 – Sep 2016</span>
          </div>
          <p className="text-sm text-primary mb-1">Unity Bank PLC, Nigeria</p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-0.5">
            <li>Performed risk assessments and compliance audits aligned with banking regulations</li>
            <li>Developed and documented risk mitigation procedures and quality controls</li>
            <li>Ensured adherence to regulatory requirements and industry standards</li>
            <li>Conducted internal audits and quality reviews of operational processes</li>
          </ul>
        </div>
      </section>

      {/* Research & Publications */}
      <section className="mb-6">
        <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3">RESEARCH & PUBLICATIONS</h2>
        <p className="text-sm text-gray-700 mb-2">
          Published researcher with peer-reviewed publications in identity management, information security, 
          and deep learning applications. Research demonstrates strong documentation skills, systematic methodology, 
          and quality-focused approach to technical deliverables.
        </p>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-0.5">
          <li>Research focus: Identity verification systems, security frameworks, machine learning in security</li>
          <li>Contributions to EU Horizon 2020 projects (NANSTIMA, DECADE Centre)</li>
          <li>SPIDVerify: Identity management system research</li>
        </ul>
      </section>

      {/* Education */}
      <section className="mb-6">
        <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3">EDUCATION</h2>
        
        <div className="mb-2">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-gray-800">PhD in Computer Science (Information Security)</h3>
            <span className="text-sm text-gray-600">2021 – 2024</span>
          </div>
          <p className="text-sm text-gray-700">University of Surrey, UK</p>
        </div>

        <div className="mb-2">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-gray-800">Master of Science in Computer Science</h3>
            <span className="text-sm text-gray-600">2017 – 2019</span>
          </div>
          <p className="text-sm text-gray-700">Bayero University Kano, Nigeria</p>
        </div>

        <div className="mb-2">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-gray-800">Bachelor of Computer Science (Digital Systems Security)</h3>
            <span className="text-sm text-gray-600">2009 – 2014</span>
          </div>
          <p className="text-sm text-gray-700">Bayero University Kano, Nigeria</p>
        </div>
      </section>

      {/* Languages */}
      <section className="mb-6">
        <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3">LANGUAGES</h2>
        <p className="text-sm text-gray-700">English (Fluent) | Hausa (Native) | Portuguese (Basic - Learning)</p>
      </section>

      {/* Additional Information */}
      <section className="mb-6">
        <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3">AVAILABILITY</h2>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-0.5">
          <li>Available for remote and hybrid work arrangements</li>
          <li>Available for travel within Portugal and abroad</li>
          <li>Immediate availability to start</li>
        </ul>
      </section>
    </div>
  );
};
