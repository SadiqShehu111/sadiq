import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { DownloadableCVQualityGuardian } from "@/components/DownloadableCVQualityGuardian";

const CVQualityGuardian = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="container mx-auto px-4 py-4 flex gap-4">
        <Button 
          variant="outline" 
          onClick={() => navigate('/')}
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Portfolio
        </Button>
        <Button 
          onClick={() => navigate('/cover-letter-quality-guardian')}
          className="bg-primary hover:bg-primary/90"
        >
          View Cover Letter
        </Button>
      </div>

      {/* Quality Guardian CV */}
      <DownloadableCVQualityGuardian />
    </div>
  );
};

export default CVQualityGuardian;
