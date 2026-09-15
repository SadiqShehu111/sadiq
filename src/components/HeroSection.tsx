import { Button } from "@/components/ui/button";
import { Download, Mail, Linkedin, BookOpen, ArrowDownRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import professionalHeadshot from "@/assets/muhammad-shehu-abubakar-sadiq-portrait.jpg.asset.json";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section id="about" className="min-h-[92vh] flex items-center bg-subtle-gradient pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Text Content */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
            <div className="relative border border-border bg-card p-6 shadow-professional">
              <div className="w-44 aspect-square overflow-hidden border border-border mb-6">
                <img src={professionalHeadshot.url} alt="Muhammad Shehu Abubakar-Sadiq" className="w-full h-full object-cover object-top" />
              </div>
              <h1 className="text-3xl md:text-4xl font-semibold text-text-primary leading-tight">
                Muhammad Shehu<br />Abubakar-Sadiq
              </h1>
              <p className="font-mono text-sm text-primary uppercase mt-3">// Cybersecurity academic</p>
              <div className="mt-6 pt-6 border-t border-border space-y-3 text-sm text-text-secondary">
                <p><span className="font-mono text-muted-foreground mr-3">01.</span>Teaching Fellow, University of Leicester</p>
                <p><span className="font-mono text-muted-foreground mr-3">02.</span>PhD in Computer Science — Information Systems Security</p>
                <p><span className="font-mono text-muted-foreground mr-3">03.</span>Identity, privacy and digital trust researcher</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => navigate('/cv')}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Download className="mr-2 h-4 w-4" />
                View CV
              </Button>
              <Button variant="outline" className="border-border text-foreground hover:border-primary hover:text-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </div>

            <div className="flex gap-2">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-text-secondary hover:text-primary" aria-label="LinkedIn profile"
                onClick={() => window.open('https://www.linkedin.com/in/abubakar-sadiq-shehu-0b5687111/', '_blank')}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-text-secondary hover:text-primary"
                onClick={() => window.open('https://scholar.google.pt/citations?hl=en&user=KvC0u1oAAAAJ&view_op=list_works&sortby=pubdate', '_blank')}
                aria-label="Google Scholar profile"
              >
                <BookOpen className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-8 space-y-10">
            <div>
              <p className="font-mono text-xs text-primary uppercase mb-5 flex items-center gap-3"><span className="h-px w-8 bg-primary/40" />Academic background</p>
              <p className="text-xl md:text-2xl text-text-primary leading-relaxed font-light">
                Cybersecurity researcher and educator working across decentralised identity, privacy-preserving systems, data protection and secure digital provenance.
              </p>
              <p className="text-text-secondary leading-relaxed mt-5">
                I am a Teaching Fellow in Cyber Security at the University of Leicester. Previously, I was a Cyber Security Post-Doctoral Research Fellow at the University of Surrey within the £6M DECaDE centre. My experience also includes Google Search, Apple fraud prevention, INESC TEC Porto and Bayero University Kano.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 border-y border-border divide-y sm:divide-y-0 sm:divide-x divide-border">
              {[['12+', 'years across research & industry'], ['£6M', 'DECaDE research centre'], ['€2.5M', 'NanoSTIMA programme']].map(([value, label]) => (
                <div key={value} className="py-5 sm:px-5 first:pl-0"><p className="text-2xl font-semibold text-primary">{value}</p><p className="text-xs text-muted-foreground mt-1">{label}</p></div>
              ))}
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="border border-border bg-card p-5"><p className="font-mono text-xs text-primary uppercase mb-3">Current role</p><p className="font-medium">Teaching Fellow — Cyber Security</p><p className="text-sm text-muted-foreground mt-1">University of Leicester · 2026–present</p></div>
              <div className="border border-border bg-card p-5"><p className="font-mono text-xs text-primary uppercase mb-3">Research focus</p><p className="font-medium">Identity, privacy & digital trust</p><p className="text-sm text-muted-foreground mt-1">Research translated into practical systems</p></div>
            </div>
            <button onClick={() => document.getElementById('cv')?.scrollIntoView({ behavior: 'smooth' })} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"><ArrowDownRight className="h-4 w-4" /> Explore experience and research</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;