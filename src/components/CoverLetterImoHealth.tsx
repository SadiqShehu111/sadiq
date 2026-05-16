import { Download, Mail } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

export const CoverLetterImoHealth = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!contentRef.current) return;
    const html2pdf = (await import("html2pdf.js")).default;
    html2pdf()
      .set({
        margin: 0.5,
        filename: "Muhammad-Abubakar-Sadiq-Cover-Letter-Imo-Cybersecurity.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      })
      .from(contentRef.current)
      .save();
  };

  const currentDate = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white text-gray-900 print:p-4 print:max-w-none">
      <div className="print:hidden mb-6">
        <Button onClick={handleDownload} className="bg-primary hover:bg-primary/90">
          <Download className="mr-2 h-4 w-4" />
          Download Cover Letter (PDF)
        </Button>
      </div>

      <div ref={contentRef} className="p-2">
        <header className="mb-8">
          <h1 className="text-2xl font-bold mb-1">Dr. Muhammad Shehu Abubakar-Sadiq</h1>
          <p className="text-sm text-gray-700">PhD | Nationality: Nigerian | Open to relocation to Imo State</p>
          <div className="flex items-center gap-2 text-sm mt-2">
            <Mail className="h-4 w-4" />
            <span>msabubakar-sadiq.it@buk.edu.ng</span>
          </div>
        </header>

        <p className="mb-4 text-sm">{currentDate}</p>

        <div className="mb-6 text-sm">
          <p className="font-semibold">The Hiring Manager</p>
          <p>Imo State Healthcare Management Organisation</p>
          <p>Owerri, Imo State, Nigeria</p>
        </div>

        <p className="mb-4">Dear Hiring Manager,</p>

        <h2 className="font-semibold mb-4">
          Re: Application for the position of Lead, Cybersecurity & Data Privacy
        </h2>

        <div className="space-y-4 text-justify leading-relaxed">
          <p>
            I am writing to apply for the role of <strong>Lead, Cybersecurity & Data Privacy</strong>{" "}
            within your reconstituted healthcare management organisation. The mission to modernise
            secondary healthcare delivery in Imo State, and to do so on a foundation of trustworthy
            digital systems, aligns directly with the work I have spent the last decade building — at
            the intersection of healthcare data security, regulatory compliance and operational risk.
          </p>

          <p>
            My most relevant experience comes from the <strong>€2.5M EU Horizon 2020 NanoSTIMA
            programme</strong> at INESC TEC Porto, where I was a co-researcher on the secure health-data
            infrastructure that was later adopted for <strong>Portugal's national COVID-19 vaccine
            tracking and monitoring</strong>. In that role I helped design the secure storage,
            authorisation broker and federated EHR layers that protect patient identifiers and clinical
            records — work that maps closely to the policy, control and incident-response responsibilities
            of this position.
          </p>

          <p>
            I hold a <strong>PhD in Information Systems Security</strong> from the University of Porto
            and have 12+ years of progressive experience spanning cybersecurity, data privacy and IT
            risk management. I have worked as a <strong>Fraud Prevention Consultant for Apple</strong>{" "}
            (via Majorel), as a <strong>Risk Officer at Unity Bank PLC</strong> applying CBN cybersecurity
            standards, and currently as a <strong>Post-Doctoral Research Fellow at the University of
            Surrey's DECaDE Centre</strong> (a £6M UKRI investment), where my work on decentralised
            identity and privacy-preserving trust has been presented to stakeholders at the UK House of
            Lords.
          </p>

          <p>
            Against the specific requirements of the role, I bring:
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>Healthcare-grade data protection:</strong> hands-on delivery of GDPR- and
              HIPAA-aligned controls on EHR systems through NanoSTIMA, including DPIAs, access
              governance and breach-response design.
            </li>
            <li>
              <strong>Cybersecurity frameworks:</strong> practical application of NIST CSF, ISO/IEC
              27001 and FAIR risk methodologies across financial, clinical and public-sector
              environments.
            </li>
            <li>
              <strong>Nigerian regulatory landscape:</strong> working knowledge of NDPA 2023, NDPC
              guidance and CBN IT/cybersecurity standards from earlier roles at Unity Bank and Bayero
              University Kano.
            </li>
            <li>
              <strong>Incident response & policy authorship:</strong> investigation, containment and
              reporting of fraud and security events at Apple and Unity Bank, plus drafting of secure
              operating procedures and staff training material.
            </li>
            <li>
              <strong>Stakeholder leadership & training:</strong> years of teaching, supervision and
              capacity-building experience that translate directly into staff awareness programmes and
              cross-functional collaboration with clinical, IT and administrative teams.
            </li>
          </ul>

          <p>
            I am a Nigerian national and am fully open to relocating to Imo State to take up this role.
            I would welcome the opportunity to bring the rigour of international research and Big-Tech
            operational practice to the protection of patient data and the digital backbone of
            secondary healthcare in the State.
          </p>

          <p>
            Thank you for considering my application. I would be glad to discuss how my background can
            support your organisation's mission.
          </p>
        </div>

        <div className="mt-8">
          <p>Yours sincerely,</p>
          <p className="mt-6 font-semibold">Dr. Muhammad Shehu Abubakar-Sadiq</p>
          <p className="text-sm text-gray-700">PhD, Information Systems Security</p>
        </div>
      </div>
    </div>
  );
};
