import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Briefcase, Award, Users } from "lucide-react";

const CVSection = () => {
  const highlights = [
    {
      icon: <Briefcase className="h-5 w-5" />,
      title: "Professional Experience",
      items: [
        "Post Doctoral Research Fellow at University of Surrey (2024-Present)",
        "Google Search Language Consultant - Hausa & Yoruba (2022-2024)",
        "External Researcher at INESCTEC Porto (2017-2023)"
      ]
    },
    {
      icon: <Award className="h-5 w-5" />,
      title: "Key Achievements",
      items: [
        "Published 10+ papers in security conferences",
        "PhD in Information Systems Security",
        "Expert in Self-Sovereign Identity systems"
      ]
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Leadership & Impact",
      items: [
        "Lecturer at Bayero University Kano",
        "Fraud Prevention Specialist at Apple",
        "Multilingual expertise: English, Hausa, Yoruba, Portuguese"
      ]
    }
  ];

  return (
    <section id="cv" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Curriculum Vitae
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            A comprehensive overview of my professional journey, achievements, and contributions 
            to the research community.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {highlights.map((section, index) => (
            <Card key={index} className="shadow-card-elegant border-border hover:shadow-professional transition-smooth">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                  {section.icon}
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-text-secondary leading-relaxed">
                      • {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="inline-block shadow-card-elegant">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                Complete CV Document
              </h3>
              <p className="text-text-secondary mb-6">
                Download my full curriculum vitae with detailed information about 
                my education, research, publications, and professional experience.
              </p>
              <Button className="bg-hero-gradient hover:opacity-90 transition-smooth shadow-professional">
                <Download className="mr-2 h-4 w-4" />
                Download Full CV (PDF)
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CVSection;