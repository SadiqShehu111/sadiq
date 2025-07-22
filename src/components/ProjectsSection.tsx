import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Lightbulb, Users, Award } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "AI-Powered Medical Diagnosis Platform",
      description: "Developed a comprehensive ML platform that assists medical professionals in diagnosing rare diseases using deep learning and computer vision techniques.",
      technologies: ["Python", "TensorFlow", "React", "Docker", "AWS"],
      type: "Industry Collaboration",
      status: "Deployed",
      impact: "Reduced diagnosis time by 40% across 5 hospitals",
      icon: <Lightbulb className="h-5 w-5" />,
      links: {
        demo: "#",
        code: "#",
        paper: "#"
      }
    },
    {
      title: "Federated Learning Framework",
      description: "Open-source framework for privacy-preserving machine learning across distributed networks, enabling secure collaborative training without data sharing.",
      technologies: ["Python", "PyTorch", "Kubernetes", "Go", "Redis"],
      type: "Open Source",
      status: "Active Development",
      impact: "1000+ GitHub stars, used by 20+ organizations",
      icon: <Users className="h-5 w-5" />,
      links: {
        demo: "#",
        code: "#",
        docs: "#"
      }
    },
    {
      title: "Climate Change Prediction Models",
      description: "Advanced ML models for predicting climate patterns and extreme weather events, providing actionable insights for environmental policy makers.",
      technologies: ["R", "Python", "Scikit-learn", "Matplotlib", "Jupyter"],
      type: "Research Project",
      status: "Published",
      impact: "Cited by 50+ climate research papers",
      icon: <Award className="h-5 w-5" />,
      links: {
        paper: "#",
        data: "#"
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
                  {project.links.demo && (
                    <Button variant="outline" size="sm" className="text-xs border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <ExternalLink className="mr-1 h-3 w-3" />
                      Demo
                    </Button>
                  )}
                  {project.links.code && (
                    <Button variant="outline" size="sm" className="text-xs">
                      <Github className="mr-1 h-3 w-3" />
                      Code
                    </Button>
                  )}
                  {project.links.paper && (
                    <Button variant="outline" size="sm" className="text-xs">
                      <ExternalLink className="mr-1 h-3 w-3" />
                      Paper
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