import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CoverLetterQualityGuardian as CoverLetterComponent } from "@/components/CoverLetterQualityGuardian";

const CoverLetterQualityGuardian = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="container mx-auto px-4 py-4 print:hidden">
        <Button 
          variant="outline" 
          onClick={() => navigate('/cv-quality-guardian')}
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to CV
        </Button>
      </div>

      {/* Cover Letter */}
      <CoverLetterComponent />
    </div>
  );
};

export default CoverLetterQualityGuardian;
