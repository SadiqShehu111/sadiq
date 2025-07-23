import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, ArrowLeft, Briefcase, GraduationCap, Award, Languages } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CV = () => {
  const navigate = useNavigate();

  const workExperience = [
    {
      period: "May 2024 - Present",
      title: "Cyber Security Post Doctoral Research Fellow",
      organization: "University of Surrey - DECADE: Centre for Cyber Security",
      responsibilities: [
        "Conducting independent and collaborative research in information security, focusing on decentralized data management systems",
        "Designing and implementing experiments, surveys, and studies to investigate specific research questions",
        "Analyzing research data using appropriate statistical and computational methods",
        "Publishing research findings in peer-reviewed academic journals and presenting at conferences and workshops",
        "Supervising and mentoring graduate students in their information security research projects",
        "Collaborating with interdisciplinary teams of researchers, industry partners, and stakeholders"
      ]
    },
    {
      period: "March 2022 - March 2024",
      title: "Google Search Language Consultant (Hausa & Yoruba)",
      organization: "Google",
      responsibilities: [
        "Developing and enhancing search algorithms for Sub-Saharan African languages",
        "Ensuring accurate and relevant search results for users in the region",
        "Collaborating with linguistic experts to improve language understanding",
        "Testing and optimizing language models for various African languages",
        "Implementing natural language processing techniques to improve search accuracy"
      ]
    },
    {
      period: "September 2017 - 2023",
      title: "External Researcher Information Security Identity Management",
      organization: "INESCTEC Porto (CRACS-Center for Research in Advanced Computing Systems)",
      responsibilities: [
        "Conducted research on identity management, data privacy, and data governance",
        "Implemented security protocols and standards (e.g., OAuth, SAML)",
        "Ensured compliance with GDPR, NIST, and ISO standards",
        "Developed secure identity management solutions",
        "Published research findings and provided expert advice on security best practices"
      ]
    },
    {
      period: "June 2020 - March 2022",
      title: "Fraud Prevention Specialist",
      organization: "Apple (Via Majorel Portugal)",
      responsibilities: [
        "Prevention and detection of potential fraud across all payment channels",
        "Monitoring debit card fraud alerts and taking necessary protective actions",
        "Identifying fraud patterns through monitoring of high-risk countries and merchants",
        "Contributing to fraud rule creation by providing analytical data"
      ]
    },
    {
      period: "May 2015 - Present",
      title: "Lecturer II",
      organization: "Bayero University Kano (Nigeria) - Department of Information Technology",
      responsibilities: [
        "Design and develop teaching materials for undergraduate and postgraduate courses",
        "Manage and maintain university's main computer lab",
        "Coordinate with faculty on research opportunities and funding requests"
      ]
    }
  ];

  const education = [
    {
      period: "April 2017 - 2023",
      degree: "PhD in Computer Science - Information Systems Security",
      institution: "University of Porto, Portugal",
      thesis: "Establishing Secure and Privacy-Preserving Digital Identity with Self Sovereign Identity"
    },
    {
      period: "2011 - 2012",
      degree: "Master of Science - Business Information Systems",
      institution: "University of East London, London United Kingdom"
    },
    {
      period: "2007 - 2011",
      degree: "Bachelor of Computer Science (Digital Systems Security)",
      institution: "University of Wollongong, New South Wales Australia"
    },
    {
      period: "2005",
      degree: "Diploma in Computer Studies",
      institution: "Bayero University Kano, Nigeria"
    }
  ];

  const skills = [
    {
      category: "Technical Skills",
      items: [
        "Identity and access control protocols (OpenID Connect, OAuth, SAML, Shibboleth)",
        "Operating systems (Linux, Ubuntu, CentOS, Windows)",
        "Object-oriented programming (C++, Java)",
        "Information Security and Data Privacy",
        "GDPR, NIST, and ISO standards compliance"
      ]
    },
    {
      category: "Languages",
      items: [
        "English (C2 - Native proficiency)",
        "Hausa (C2 - Native proficiency)", 
        "Yoruba (C2 - Native proficiency)",
        "Portuguese (A2 - Basic user)"
      ]
    },
    {
      category: "Certifications & Training",
      items: [
        "Security+ Training",
        "CEH Training",
        "CCNA Training",
        "Microsoft Office Suite",
        "Database Management"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-subtle-gradient py-8 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>
            <Button className="bg-hero-gradient hover:opacity-90 transition-smooth shadow-professional">
              <Download className="mr-2 h-4 w-4" />
              Download CV (PDF)
            </Button>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-2">
              Dr. Abubakar-Sadiq
            </h1>
            <h2 className="text-xl md:text-2xl text-primary font-medium mb-4">
              PhD in Computer Science • Cyber Security Research Fellow
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Aldershot, United Kingdom • msabubakar-sadiq.it@buk.edu.ng
            </p>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Work Experience */}
          <section>
            <h3 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
              <Briefcase className="h-6 w-6 text-primary" />
              Work Experience
            </h3>
            <div className="space-y-6">
              {workExperience.map((job, index) => (
                <Card key={index} className="shadow-card-elegant border-border">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <CardTitle className="text-primary">{job.title}</CardTitle>
                      <span className="text-sm text-text-secondary font-medium">{job.period}</span>
                    </div>
                    <p className="text-text-secondary font-medium">{job.organization}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {job.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="text-text-secondary leading-relaxed">
                          • {resp}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h3 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
              <GraduationCap className="h-6 w-6 text-primary" />
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="shadow-card-elegant border-border">
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                      <h4 className="font-semibold text-primary">{edu.degree}</h4>
                      <span className="text-sm text-text-secondary font-medium">{edu.period}</span>
                    </div>
                    <p className="text-text-secondary font-medium mb-2">{edu.institution}</p>
                    {edu.thesis && (
                      <p className="text-text-secondary italic">
                        Thesis: {edu.thesis}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section>
            <h3 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
              <Award className="h-6 w-6 text-primary" />
              Skills & Competencies
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skillGroup, index) => (
                <Card key={index} className="shadow-card-elegant border-border">
                  <CardHeader>
                    <CardTitle className="text-primary text-lg">{skillGroup.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <li key={skillIndex} className="text-text-secondary text-sm leading-relaxed">
                          • {skill}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CV;