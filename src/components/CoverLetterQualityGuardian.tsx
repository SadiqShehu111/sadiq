import { Download, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CoverLetterQualityGuardian = () => {
  const handleDownload = () => {
    window.print();
  };

  const currentDate = new Date().toLocaleDateString('en-GB', { 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  });

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white text-gray-900 print:p-4 print:max-w-none">
      {/* Download Button - Hidden in Print */}
      <div className="print:hidden mb-6">
        <Button onClick={handleDownload} className="bg-primary hover:bg-primary/90">
          <Download className="mr-2 h-4 w-4" />
          Download Cover Letter
        </Button>
      </div>

      {/* Header */}
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Muhammad Shehu Abubakar-(Sadiq) PhD</h1>
        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <Mail className="h-4 w-4" />
            s.muhammad@surrey.ac.uk
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            Porto, Portugal
          </span>
        </div>
      </header>

      {/* Date */}
      <p className="text-sm text-gray-700 mb-6">{currentDate}</p>

      {/* Recipient */}
      <div className="mb-6 text-sm text-gray-700">
        <p>Hiring Manager</p>
        <p>Critical TechWorks (CTW)</p>
        <p>Porto, Portugal</p>
      </div>

      {/* Subject */}
      <p className="font-semibold text-gray-900 mb-6">
        Re: Application for Quality Guardian Position
      </p>

      {/* Salutation */}
      <p className="text-sm text-gray-700 mb-4">Dear Hiring Manager,</p>

      {/* Body */}
      <div className="text-sm text-gray-700 space-y-4 leading-relaxed">
        <p>
          I am writing to express my strong interest in the Quality Guardian position at Critical TechWorks. 
          With a PhD in Computer Science specializing in Information Systems Security, combined with over 8 years 
          of experience spanning academia, research, and industry roles in security, risk management, and quality 
          assurance, I am confident in my ability to contribute significantly to your team's mission of delivering 
          exceptional quality in automotive software development.
        </p>

        <p>
          My background uniquely positions me to excel in this role. As a Cyber Security Post Doctoral Research Fellow 
          at the University of Surrey's DECADE Centre, I have developed expertise in designing comprehensive documentation, 
          creating assessment frameworks, and mentoring teams on complex technical concepts. My work involves translating 
          intricate security requirements into actionable processes and ensuring alignment with international standards 
          such as ISO 27001 and GDPR—skills directly transferable to quality management in automotive software development.
        </p>

        <p>
          During my tenure as a Fraud Prevention Specialist at Apple (via Majorel), I honed my abilities in process 
          documentation, risk assessment, and cross-functional stakeholder communication. I led initiatives to create 
          fraud detection playbooks, developed analytical frameworks for decision-making, and prepared comprehensive 
          reports for management teams. This experience strengthened my capacity to identify process gaps, implement 
          continuous improvement measures, and maintain rigorous documentation standards—core competencies for the 
          Quality Guardian role.
        </p>

        <p>
          My research experience at INESC TEC Porto further enhanced my understanding of compliance frameworks, 
          security protocols, and systematic quality assurance methodologies. I am adept at working within Agile 
          environments, having applied Scrum frameworks in collaborative research projects, and I possess strong 
          technical documentation skills essential for creating and maintaining quality standards and templates.
        </p>

        <p>
          What particularly attracts me to CTW is the opportunity to apply my expertise in a dynamic automotive 
          technology environment. I am passionate about ensuring that software products meet the highest quality 
          standards, and I am eager to contribute to your culture of continuous improvement and technical excellence. 
          My combination of academic rigor, industry experience, and commitment to quality assurance makes me an 
          ideal candidate for this position.
        </p>

        <p>
          I would welcome the opportunity to discuss how my background, skills, and enthusiasm align with CTW's 
          quality objectives. Thank you for considering my application. I look forward to the possibility of 
          contributing to your team.
        </p>
      </div>

      {/* Closing */}
      <div className="mt-8 text-sm text-gray-700">
        <p>Yours sincerely,</p>
        <p className="mt-6 font-semibold">Muhammad Shehu Abubakar-(Sadiq) PhD</p>
      </div>
    </div>
  );
};
