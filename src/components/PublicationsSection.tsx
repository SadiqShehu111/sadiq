import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen, Star } from "lucide-react";

const PublicationsSection = () => {
  const publications = [
    {
      title: "Privacy-Enhancing Decentralised Reputation Systems: A Future of Work Perspective",
      authors: "Merlano, E. F., Parry, G., Shehu, A-S., Schneider, S.",
      venue: "IET Conference Proceedings",
      year: "2025",
      type: "Conference",
      featured: true,
      abstract: "Explores how privacy-enhancing decentralised reputation systems can protect gig economy workers, combining self-sovereign identity and reputation frameworks for fairer digital labour markets.",
      doi: "https://doi.org/10.1049/icp.2025.2958"
    },
    {
      title: "Decentralised Supply Chain Reputation: A Privacy and Self-Sovereign Identity Perspective",
      authors: "Shehu, A-S., Schneider, S.",
      venue: "IEEE European Symposium on Security and Privacy Workshops (EuroS&PW)",
      year: "2025",
      type: "Conference",
      featured: true,
      abstract: "Proposes a decentralised reputation model for supply chains that preserves participant privacy using self-sovereign identity and verifiable credentials.",
      doi: "https://doi.org/10.1109/eurospw67616.2025.00061"
    },
    {
      title: "Privacy-Preserving Photo Sharing: An SSI Use Case",
      authors: "Fraser, A., Shehu, A-S., Frymann, N., Haynes, P., Schneider, S.",
      venue: "Information Systems Security. ICISS 2024, Springer LNCS",
      year: "2025",
      type: "Conference",
      featured: true,
      abstract: "Presents a privacy-preserving photo sharing system built on Self-Sovereign Identity principles, giving users verifiable control over how their images are shared and attributed.",
      doi: "https://doi.org/10.1007/978-3-031-80020-7_18"
    },
    {
      title: "On the Compliance of Self-Sovereign Identity with GDPR Principles: A Critical Review",
      authors: "Shehu, A-S.",
      venue: "arXiv preprint",
      year: "2024",
      type: "Preprint",
      featured: true,
      abstract: "A comprehensive critical review of how Self-Sovereign Identity systems align with GDPR principles, identifying compliance gaps and design recommendations.",
      doi: "https://doi.org/10.48550/arxiv.2409.03624"
    },
    {
      title: "SPIDVerify: A Secure and Privacy-Preserving Decentralised Identity Verification Framework",
      authors: "Shehu, A-S., Pinto, A., Correia, M. E.",
      venue: "IEEE International Conference on Smart and Sustainable Technologies (SmartNets)",
      year: "2023",
      type: "Conference",
      featured: true,
      abstract: "Introduces SPIDVerify, a decentralised identity verification framework that combines SSI and privacy-preserving proofs for secure, user-controlled identity verification.",
      doi: "https://doi.org/10.1109/smartnets58706.2023.10215588"
    },
    {
      title: "A Decentralised Real Estate Transfer Verification Based on Self-Sovereign Identity and Smart Contracts",
      authors: "Shehu, A-S., Pinto, A., Correia, M. E.",
      venue: "19th International Conference on Security and Cryptography (SECRYPT)",
      year: "2022",
      type: "Conference",
      featured: false,
      abstract: "Proposes a decentralised framework for real estate transfer verification using blockchain smart contracts and self-sovereign identity to remove trusted intermediaries.",
      doi: "https://doi.org/10.5220/0011384700003283"
    },
    {
      title: "Providing Secured Access Delegation in Identity Management Systems",
      authors: "Shehu, A-S., Pinto, A., Correia, M. E.",
      venue: "17th International Conference on Security and Cryptography (SECRYPT)",
      year: "2020",
      type: "Conference",
      featured: false,
      abstract: "Presents a secure access delegation mechanism for identity management systems, enabling controlled and auditable delegation of access rights.",
      doi: "https://doi.org/10.5220/0009892206380644"
    },
    {
      title: "Privacy Preservation and Mandate Representation in Identity Management Systems",
      authors: "Shehu, A-S., Pinto, A., Correia, M. E.",
      venue: "14th Iberian Conference on Information Systems and Technologies (CISTI)",
      year: "2019",
      type: "Conference",
      featured: false,
      abstract: "Investigates privacy preservation techniques and mandate representation models in identity management systems.",
      doi: "https://doi.org/10.23919/cisti.2019.8760690"
    },
    {
      title: "On the Interoperability of European National Identity Cards",
      authors: "Shehu, A-S., Pinto, A., Correia, M. E.",
      venue: "Advances in Intelligent Systems and Computing, Springer",
      year: "2018",
      type: "Book Chapter",
      featured: false,
      abstract: "Analyses interoperability challenges across European national electronic identity card schemes and proposes approaches for cross-border identity recognition.",
      doi: "https://doi.org/10.1007/978-3-030-01746-0_40"
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
                <a
                  href={pub.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-mono text-primary hover:underline"
                >
                  <ExternalLink className="h-3 w-3" />
                  {pub.doi}
                </a>
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