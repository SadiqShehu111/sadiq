import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen, Star } from "lucide-react";

const PublicationsSection = () => {
  const publications = [
    {
      title: "Privacy-Preserving Photo Sharing: An SSI Use Case",
      authors: "Fraser, A., Shehu, AS., Frymann, N., Haynes, P., Schneider, S.",
      venue: "Information Systems Security. ICISS 2024",
      year: "2025",
      type: "Conference",
      featured: true,
      abstract: "This paper presents a privacy-preserving photo sharing system using Self-Sovereign Identity principles..."
    },
    {
      title: "On the Compliance of Self-Sovereign Identity with GDPR Principles: A Critical Review",
      authors: "Shehu, AS.",
      venue: "arXiv preprint",
      year: "2024",
      type: "Preprint",
      featured: true,
      abstract: "A comprehensive analysis of how Self-Sovereign Identity systems comply with GDPR requirements..."
    },
    {
      title: "A Decentralised Real Estate Transfer Verification Based on Self-Sovereign Identity and Smart Contract",
      authors: "Abubakar-Sadiq Shehu, Antonio Pinto, Manuel Eduardo Correia",
      venue: "19th International Conference on Security and Cryptography",
      year: "2022",
      type: "Conference",
      featured: true,
      abstract: "This work proposes a decentralized framework for real estate transfer verification using blockchain and SSI..."
    },
    {
      title: "Privacy Preservation And Mandate Representation In Identity Management Systems",
      authors: "Abubakar-Sadiq Shehu, António Pinto, and Manuel E Correia",
      venue: "14th IBERIAN CONFERENCE ON INFORMATION SYSTEMS AND TECHNOLOGIES (CISTI 2019)",
      year: "2019",
      type: "Conference",
      featured: false,
      abstract: "Investigation of privacy preservation techniques in identity management systems with mandate representation..."
    }
  ];

  return (
    <section id="publications" className="py-24 bg-subtle-gradient border-t border-border">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-12 max-w-3xl">
          <p className="font-mono text-xs text-primary uppercase mb-4">02 / Publications</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-text-primary mb-4">
            Publications
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl">
            Research contributions in identity management systems and information systems security, 
            published in leading conferences and journals with focus on Self-Sovereign Identity and privacy-preserving technologies.
          </p>
        </div>

        <div className="grid gap-6">
          {publications.map((pub, index) => (
            <Card key={index} className={`shadow-card-elegant hover:border-primary/50 transition-smooth rounded-md ${pub.featured ? 'border-primary/20' : 'border-border'}`}>
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
                  <BookOpen className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-text-secondary mb-4 leading-relaxed">
                  {pub.abstract}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" onClick={() => window.open('https://scholar.google.pt/citations?hl=en&user=KvC0u1oAAAAJ&view_op=list_works&sortby=pubdate', '_blank')}>
            <ExternalLink className="mr-2 h-4 w-4" />
            View All Publications on Google Scholar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;