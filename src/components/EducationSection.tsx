import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Book } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "Ph.D. in Computer Science",
      institution: "Stanford University",
      location: "Stanford, CA",
      year: "2017",
      gpa: "3.95/4.0",
      thesis: "Advanced Machine Learning Techniques for Real-Time Data Processing",
      advisor: "Prof. Jane Smith",
      achievements: [
        "Best Dissertation Award",
        "Stanford Graduate Fellowship",
        "Published 8 papers during PhD"
      ]
    },
    {
      degree: "M.S. in Artificial Intelligence",
      institution: "Massachusetts Institute of Technology",
      location: "Cambridge, MA",
      year: "2013",
      gpa: "3.92/4.0",
      thesis: "Neural Network Optimization for Large-Scale Applications",
      advisor: "Prof. John Doe",
      achievements: [
        "Summa Cum Laude",
        "MIT Presidential Fellowship",
        "Outstanding Graduate Student Award"
      ]
    },
    {
      degree: "B.S. in Computer Engineering",
      institution: "University of California, Berkeley",
      location: "Berkeley, CA",
      year: "2011",
      gpa: "3.89/4.0",
      thesis: "Embedded Systems for IoT Applications",
      advisor: "Prof. Sarah Johnson",
      achievements: [
        "Magna Cum Laude",
        "Phi Beta Kappa",
        "Dean's Honor List (8 semesters)"
      ]
    }
  ];

  const certifications = [
    "AWS Certified Machine Learning - Specialty",
    "Google Cloud Professional ML Engineer",
    "Certified Data Scientist (CDS)",
    "Deep Learning Specialization (Coursera)"
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