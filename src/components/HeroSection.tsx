import { Button } from "@/components/ui/button";
import { Download, Mail, Linkedin, Github } from "lucide-react";
import professionalHeadshot from "@/assets/professional-headshot.jpg";

const HeroSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center bg-subtle-gradient pt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary">
                Dr. Your Name
              </h1>
              <h2 className="text-xl md:text-2xl text-primary font-medium">
                Senior Research Scientist & AI Engineer
              </h2>
              <p className="text-lg text-text-secondary">
                PhD in Computer Science • Machine Learning • Data Science
              </p>
            </div>

            <p className="text-lg text-text-secondary leading-relaxed max-w-lg">
              Passionate researcher with 5+ years of experience in machine learning and artificial intelligence. 
              Published 15+ peer-reviewed papers and led innovative projects that bridge the gap between 
              academic research and industry applications.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-hero-gradient hover:opacity-90 transition-smooth shadow-professional">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </div>

            <div className="flex space-x-4 pt-4">
              <Button variant="ghost" size="sm" className="text-text-secondary hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-text-secondary hover:text-primary">
                <Github className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-professional border-4 border-background">
                <img
                  src={professionalHeadshot}
                  alt="Professional headshot"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-hero-gradient opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;