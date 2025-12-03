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
        <p className="text-lg text-primary font-semibold mb-3">Quality Guardian | Software Quality Assurance Specialist</p>
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
          Quality-focused IT professional with 8+ years of experience in software development, research, and process improvement. 
          Strong background in implementing quality assurance frameworks, conducting audits, and ensuring compliance with industry standards. 
          Experienced in Agile methodologies (Scrum, Kanban) with proven ability to create and maintain quality management systems. 
          Excellent documentation skills developed through extensive academic research and publication record. 
          Passionate about driving continuous improvement and delivering high-quality software solutions within automotive and enterprise contexts.
        </p>
      </section>

      {/* Key Competencies */}
      <section className="mb-6">
        <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3">KEY COMPETENCIES & SKILLS</h2>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Quality Assurance & Standards</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-0.5">
              <li>Quality Management Systems (QMS)</li>
              <li>ISO 9001 Quality Standards</li>
              <li>ISO 27001 Information Security</li>
              <li>Process Auditing & Compliance</li>
              <li>Documentation & Template Creation</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Agile & Project Management</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-0.5">
              <li>Scrum Framework</li>
              <li>Kanban Methodology</li>
              <li>SAFe (Scaled Agile Framework)</li>
              <li>Sprint Planning & Retrospectives</li>
              <li>Continuous Improvement (Kaizen)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Technical & Analytical</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-0.5">
              <li>Software Development Lifecycle (SDLC)</li>
              <li>Risk Assessment & Mitigation</li>
              <li>Data Analysis & Reporting</li>
              <li>Python, SQL, Machine Learning</li>
              <li>Security Compliance & Auditing</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Leadership & Communication</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-0.5">
              <li>Cross-functional Team Collaboration</li>
              <li>Stakeholder Management</li>
              <li>Technical Documentation</li>
              <li>Training & Mentoring</li>
              <li>Process Design & Optimization</li>
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
          <p className="text-sm text-primary mb-1">Universidade Portucalense, Porto, Portugal</p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-0.5">
            <li>Developed and maintained quality frameworks for research deliverables and publications</li>
            <li>Conducted systematic reviews ensuring compliance with academic and industry standards</li>
            <li>Created comprehensive documentation templates for research methodologies</li>
            <li>Collaborated with cross-functional teams using Agile methodologies for project delivery</li>
            <li>Performed quality audits on research outputs to ensure consistency and accuracy</li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-semibold text-gray-800">Fraud Prevention Specialist</h3>
            <span className="text-sm text-gray-600">Jan 2024 – Oct 2024</span>
          </div>
          <p className="text-sm text-primary mb-1">Talkdesk Inc, Lisbon, Portugal</p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-0.5">
            <li>Established quality control processes for fraud detection systems with documented procedures</li>
            <li>Conducted internal audits to ensure compliance with security standards (ISO 27001 aligned)</li>
            <li>Developed and maintained process documentation and quality templates</li>
            <li>Worked within Scrum teams, participating in sprint planning and retrospectives</li>
            <li>Implemented continuous improvement initiatives reducing false positive rates by 30%</li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-semibold text-gray-800">Pioneer Language Engineer</h3>
            <span className="text-sm text-gray-600">Sep 2023 – Dec 2023</span>
          </div>
          <p className="text-sm text-primary mb-1">Translated, Remote</p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-0.5">
            <li>Created quality assurance guidelines for AI language model outputs</li>
            <li>Developed evaluation frameworks and documentation for linguistic accuracy</li>
            <li>Performed quality reviews ensuring deliverables met predefined standards</li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-semibold text-gray-800">Lecturer / Quality Coordinator</h3>
            <span className="text-sm text-gray-600">Oct 2016 – Sep 2021</span>
          </div>
          <p className="text-sm text-primary mb-1">Bayero University Kano, Nigeria</p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-0.5">
            <li>Served as departmental quality coordinator ensuring curriculum compliance</li>
            <li>Developed and maintained quality documentation for academic programs</li>
            <li>Conducted internal quality audits for accreditation processes</li>
            <li>Created standardized templates for course materials and assessments</li>
            <li>Led continuous improvement initiatives for teaching methodologies</li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-semibold text-gray-800">Relationship and Risk Officer</h3>
            <span className="text-sm text-gray-600">Oct 2015 – Sep 2016</span>
          </div>
          <p className="text-sm text-primary mb-1">Unity Bank PLC, Nigeria</p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-0.5">
            <li>Performed risk assessments and compliance audits aligned with banking standards</li>
            <li>Developed and documented risk mitigation procedures</li>
            <li>Ensured adherence to regulatory quality requirements</li>
          </ul>
        </div>
      </section>

      {/* Education */}
      <section className="mb-6">
        <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3">EDUCATION</h2>
        
        <div className="mb-2">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-gray-800">PhD in Computer Science</h3>
            <span className="text-sm text-gray-600">2021 – 2024</span>
          </div>
          <p className="text-sm text-gray-700">Universidade Portucalense, Porto, Portugal</p>
          <p className="text-sm text-gray-600 italic">Focus: Deep Learning, Security, Quality Assurance in ML Systems</p>
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
            <h3 className="font-semibold text-gray-800">Bachelor of Science in Computer Science</h3>
            <span className="text-sm text-gray-600">2009 – 2014</span>
          </div>
          <p className="text-sm text-gray-700">Bayero University Kano, Nigeria</p>
        </div>
      </section>

      {/* Certifications */}
      <section className="mb-6">
        <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3">CERTIFICATIONS & TRAINING</h2>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-0.5">
          <li>Scrum Fundamentals Certified (SFC)</li>
          <li>ISO 9001:2015 Quality Management Systems Awareness</li>
          <li>Agile Project Management Training</li>
          <li>Data Science & Machine Learning Certifications</li>
        </ul>
      </section>

      {/* Languages */}
      <section className="mb-6">
        <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3">LANGUAGES</h2>
        <p className="text-sm text-gray-700">English (Fluent) | Hausa (Native) | Portuguese (Basic - Learning)</p>
      </section>

      {/* Additional Information */}
      <section className="mb-6">
        <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3">ADDITIONAL INFORMATION</h2>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-0.5">
          <li>Available to work at office 3 times per week in Lisbon</li>
          <li>Available for operations outside working hours with applicable compensation</li>
          <li>Available to travel within Portugal and abroad</li>
          <li>Immediate availability to start</li>
        </ul>
      </section>
    </div>
  );
};
