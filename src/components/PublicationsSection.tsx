import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen, Star } from "lucide-react";

const PublicationsSection = () => {
  const publications = [
    {
      title: "Deep Learning Approaches for Advanced Natural Language Processing",
      authors: "Your Name, Co-Author A., Co-Author B.",
      venue: "Nature Machine Intelligence",
      year: "2023",
      type: "Journal",
      citations: 127,
      featured: true,
      abstract: "This paper presents novel deep learning architectures that significantly improve performance on various NLP tasks..."
    },
    {
      title: "Robust Machine Learning in Adversarial Environments",
      authors: "Your Name, Collaborator C., Collaborator D.",
      venue: "ICML 2022",
      year: "2022",
      type: "Conference",
      citations: 89,
      featured: true,
      abstract: "We introduce new methods for training ML models that maintain high performance even under adversarial conditions..."
    },
    {
      title: "Federated Learning with Privacy Preservation",
      authors: "Co-Author E., Your Name, Co-Author F.",
      venue: "NeurIPS 2021",
      year: "2021",
      type: "Conference",
      citations: 156,
      featured: false,
      abstract: "This work explores privacy-preserving techniques in federated learning environments..."
    },
    {
      title: "Interpretable AI for Healthcare Applications",
      authors: "Your Name, Medical Expert G., AI Researcher H.",
      venue: "Journal of Medical AI",
      year: "2021",
      type: "Journal",
      citations: 203,
      featured: true,
      abstract: "We develop interpretable AI models specifically designed for critical healthcare decision-making..."
    }
  ];

  return (
    <section id="publications" className="py-20 bg-subtle-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Publications
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Research contributions published in leading journals and conferences, 
            with a focus on machine learning, AI, and their practical applications.
          </p>
        </div>

        <div className="grid gap-6">
          {publications.map((pub, index) => (
            <Card key={index} className={`shadow-card-elegant hover:shadow-professional transition-smooth ${pub.featured ? 'border-primary/20' : 'border-border'}`}>
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl text-text-primary mb-2 leading-tight">
                      {pub.featured && <Star className="inline h-4 w-4 text-primary mr-2" />}
                      {pub.title}
                    </CardTitle>
                    <p className="text-text-secondary mb-2">{pub.authors}</p>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <Badge variant={pub.type === 'Journal' ? 'default' : 'secondary'} className="text-xs">
                        {pub.type}
                      </Badge>
                      <span className="text-primary font-semibold">{pub.venue}</span>
                      <span className="text-text-secondary">({pub.year})</span>
                    </div>
                  </div>
                  <div className="text-right text-sm text-text-secondary">
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      {pub.citations} citations
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-text-secondary mb-4 leading-relaxed">
                  {pub.abstract}
                </p>
                <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <ExternalLink className="mr-2 h-3 w-3" />
                  View Paper
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <ExternalLink className="mr-2 h-4 w-4" />
            View All Publications on Google Scholar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;