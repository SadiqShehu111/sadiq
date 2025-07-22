import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Lightbulb, Users, Award } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "SPIDVerify",
      description: "A secure and privacy-preserving decentralised identity verification framework for critical infrastructure and industrial applications using Self-Sovereign Identity principles.",
      technologies: ["Blockchain", "SSI", "Smart Contracts", "Cryptography", "Privacy"],
      type: "Research Project",
      status: "Published",
      impact: "Published in SmartNets 2023 conference proceedings",
      icon: <Award className="h-5 w-5" />,
      links: {
        paper: "#"
      }
    },
    {
      title: "NANSTIMA EU Project (Horizon 2020)",
      description: "EU Horizon 2020 project focused on developing advanced cybersecurity solutions and frameworks for critical infrastructure protection and resilience.",
      technologies: ["Cybersecurity", "EU Framework", "Critical Infrastructure", "Risk Assessment"],
      type: "EU Research Project",
      status: "Ongoing",
      impact: "Part of €2.5M EU Horizon 2020 funding programme",
      icon: <Users className="h-5 w-5" />,
      links: {
        project: "#"
      }
    },
    {
      title: "DECADE Centre for Cyber Security",
      description: "Contributing to the DECADE Centre's mission of advancing cybersecurity research, education, and innovation through collaborative partnerships with academia and industry.",
      technologies: ["Cyber Security", "Research", "Education", "Industry Collaboration"],
      type: "Research Centre",
      status: "Active",
      impact: "Leading cybersecurity research initiatives at University of Surrey",
      icon: <Lightbulb className="h-5 w-5" />,
      links: {
        website: "https://decade.ac.uk/about/"
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            A selection of impactful projects that demonstrate the practical application 
            of research in solving real-world problems across various domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="shadow-card-elegant hover:shadow-professional transition-smooth h-full flex flex-col">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="text-primary">
                    {project.icon}
                  </div>
                  <Badge variant={project.status === 'Deployed' ? 'default' : 'secondary'} className="text-xs">
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-text-primary mb-2">
                  {project.title}
                </CardTitle>
                <Badge variant="outline" className="text-xs w-fit mb-2">
                  {project.type}
                </Badge>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-text-secondary mb-4 leading-relaxed flex-1">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <p className="text-sm font-medium text-primary mb-2">Impact:</p>
                  <p className="text-sm text-text-secondary">{project.impact}</p>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-medium text-text-primary mb-2">Technologies:</p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.links.paper && (
                    <Button variant="outline" size="sm" className="text-xs">
                      <ExternalLink className="mr-1 h-3 w-3" />
                      Paper
                    </Button>
                  )}
                  {project.links.project && (
                    <Button variant="outline" size="sm" className="text-xs border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <ExternalLink className="mr-1 h-3 w-3" />
                      Project
                    </Button>
                  )}
                  {project.links.website && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="text-xs border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      onClick={() => window.open(project.links.website, '_blank')}
                    >
                      <ExternalLink className="mr-1 h-3 w-3" />
                      Website
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Github className="mr-2 h-4 w-4" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;