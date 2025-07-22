import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Book } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "Ph.D. in Computer Science - Information Systems Security",
      institution: "University of Porto",
      location: "Porto, Portugal",
      year: "2023",
      gpa: "N/A",
      thesis: "Establishing Secure and Privacy-Preserving Digital Identity with Self Sovereign Identity",
      advisor: "Prof. Manuel Eduardo Correia",
      achievements: [
        "Specialized in Self-Sovereign Identity",
        "Published multiple papers during PhD",
        "Research at CRACS-INESC TEC"
      ]
    },
    {
      degree: "M.S. in Business Information Systems",
      institution: "University of East London",
      location: "London, United Kingdom",
      year: "2012",
      gpa: "N/A",
      thesis: "Business Information Systems",
      advisor: "N/A",
      achievements: [
        "Focus on Information Systems",
        "Business-IT Integration",
        "Systems Analysis and Design"
      ]
    },
    {
      degree: "B.S. in Computer Science (Digital Systems Security)",
      institution: "University of Wollongong",
      location: "New South Wales, Australia",
      year: "2011",
      gpa: "N/A",
      thesis: "Digital Systems Security",
      advisor: "N/A",
      achievements: [
        "Specialization in Digital Security",
        "Computer Systems Focus",
        "Security Fundamentals"
      ]
    }
  ];

  const certifications = [
    "Information Security and Data Privacy",
    "CCNA Training",
    "Security+ Training",
    "CEH (Certified Ethical Hacker) Training"
  ];

  return (
    <section id="education" className="py-20 bg-subtle-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Education & Qualifications
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Academic journey and professional certifications that form the foundation 
            of my expertise in computer science and artificial intelligence.
          </p>
        </div>

        <div className="space-y-6 mb-12">
          {education.map((edu, index) => (
            <Card key={index} className="shadow-card-elegant hover:shadow-professional transition-smooth">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="text-primary mt-1">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl text-text-primary mb-2">
                      {edu.degree}
                    </CardTitle>
                    <div className="space-y-1">
                      <p className="text-lg font-medium text-primary">{edu.institution}</p>
                      <p className="text-text-secondary">{edu.location} • {edu.year}</p>
                      <p className="text-text-secondary">GPA: {edu.gpa}</p>
                    </div>
                  </div>
                  <Badge className="bg-hero-gradient text-primary-foreground">
                    {edu.year}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-text-primary mb-2 flex items-center gap-2">
                      <Book className="h-4 w-4" />
                      Thesis
                    </h4>
                    <p className="text-text-secondary mb-2">"{edu.thesis}"</p>
                    <p className="text-sm text-professional-gray">Advisor: {edu.advisor}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-text-primary mb-2 flex items-center gap-2">
                      <Award className="h-4 w-4" />
                      Achievements
                    </h4>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-text-secondary text-sm">
                          • {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="shadow-card-elegant">
          <CardHeader>
            <CardTitle className="text-xl text-text-primary flex items-center gap-3">
              <Award className="h-5 w-5 text-primary" />
              Professional Certifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-3">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-academic-blue-light rounded-lg">
                  <Award className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-text-secondary">{cert}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EducationSection;