import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Briefcase, Award, Users } from "lucide-react";
import html2pdf from "html2pdf.js";
import { DownloadableCV } from "@/components/DownloadableCV";

const CVSection = () => {
  const hiddenCvRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    if (!hiddenCvRef.current) return;
    html2pdf()
      .set({
        margin: 8,
        filename: "Muhammad_Shehu_Abubakar-Sadiq_CV.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        pagebreak: { mode: ["css", "legacy"] },
      } as any)
      .from(hiddenCvRef.current.querySelector("[data-cv-body]") as HTMLElement)
      .save();
  };

  const highlights = [
    {
      icon: <Briefcase className="h-5 w-5" />,
      title: "Professional Experience",
      items: [
        "Teaching Fellow at University of Leicester (2026–Present)",
        "Cyber Security Post-Doctoral Research Fellow at University of Surrey (2024–2025)",
        "Google Search Language Consultant - Hausa & Yoruba (2022-2024)",
        "External Researcher at INESCTEC Porto (2017-2023)"
      ]
    },
    {
      icon: <Award className="h-5 w-5" />,
      title: "Key Achievements",
      items: [
        "Published across IEEE, Springer LNCS and international security venues",
        "PhD in Information Systems Security",
        "Expert in Self-Sovereign Identity systems"
      ]
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Leadership & Impact",
      items: [
        "Lecturer at Bayero University Kano",
        "Fraud Prevention Consultant at Apple",
        "Cross-sector collaboration spanning academia, technology and financial services"
      ]
    }
  ];

  return (
    <section id="cv" className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-12 max-w-3xl">
          <p className="font-mono text-xs text-primary uppercase mb-4">01 / Experience</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-text-primary mb-4">
            Curriculum Vitae
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl">
            A comprehensive overview of my professional journey, achievements, and contributions 
            to the research community.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {highlights.map((section, index) => (
            <Card key={index} className="shadow-card-elegant border-border hover:border-primary/40 transition-smooth rounded-md">
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

        <div>
          <Card className="shadow-card-elegant border-border rounded-md">
            <CardContent className="p-8 md:flex items-center justify-between gap-8">
              <div>
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                Complete CV Document
              </h3>
              <p className="text-text-secondary mb-6">
                Download my full curriculum vitae with detailed information about 
                my education, research, publications, and professional experience.
              </p>
              </div>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 mt-5 md:mt-0" onClick={handleDownload}>
                <Download className="mr-2 h-4 w-4" />
                Download Full CV (PDF)
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Off-screen full CV used as the PDF source */}
        <div ref={hiddenCvRef} aria-hidden className="fixed -left-[10000px] top-0 w-[900px] pointer-events-none select-none opacity-0">
          <div data-cv-body>
            <DownloadableCV hideActions />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CVSection;