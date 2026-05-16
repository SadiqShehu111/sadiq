import { Download, Mail, MapPin } from "lucide-react";
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
        filename: "Muhammad-Abubakar-Sadiq-Cover-Letter-Imo-Healthcare.pdf",
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

      <div ref={contentRef}>
        <header className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Muhammad Shehu Abubakar-(Sadiq) PhD
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <Mail className="h-4 w-4" />
              msabubakar-sadiq.it@buk.edu.ng
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              Nigeria — open to relocation to Imo State
            </span>
          </div>
        </header>

        <p className="text-sm text-gray-700 mb-6">{currentDate}</p>

        <div className="mb-6 text-sm text-gray-700">
          <p>Hiring Manager</p>
          <p>Imo State Healthcare Management Organization</p>
          <p>Owerri, Imo State, Nigeria</p>
        </div>

        <p className="font-semibold text-gray-900 mb-6">
          Re: Application for the Lead, Cybersecurity & Data Privacy
        </p>

        <p className="text-sm text-gray-700 mb-4">Dear Hiring Manager,</p>

        <div className="text-sm text-gray-700 space-y-4 leading-relaxed">
          <p>
            I am writing to apply for the Lead, Cybersecurity & Data Privacy role with your
            newly reconstituted healthcare management organisation in Imo State. With a PhD
            in Information Systems Security and 12+ years across cybersecurity, data privacy
            and IT risk in academia, global technology and financial services — including
            direct contributions to a national health-data platform — I am confident I can
            help safeguard the patient and operational data that underpins secondary
            healthcare delivery across the State.
          </p>

          <p>
            The most directly relevant part of my background is my work as an External
            Researcher with <strong>INESC TEC Porto on the Nanostima programme (€2.5M EU
            Horizon 2020)</strong>, which became the secure data backbone used for
            <strong> Portugal's COVID-19 vaccine tracking</strong>. There I designed
            identity, consent and access-control flows for sensitive health and personal
            data, defined retention and audit-logging policies, and aligned controls with
            GDPR, NIST and ISO/IEC 27001. The same controls — strong authentication,
            least-privilege access, encryption, audit trails, DPIAs and breach playbooks —
            are exactly what is required to protect patient records, clinical systems and
            inter-facility data flows for your organisation.
          </p>

          <p>
            My doctoral and post-doctoral research at the University of Porto and the
            University of Surrey's DECaDE Centre has focused on privacy-by-design,
            DPIA methodologies and GDPR-compliant identity architectures, with peer-reviewed
            outputs at IEEE EuroS&P and Springer LNCS and findings presented to the House of
            Lords. In parallel, my industry experience at Apple (via Majorel) and Unity Bank
            PLC gave me hands-on practice in incident triage, containment, post-incident
            reporting and KYC/IT-risk reviews — translating directly into the incident
            response, vulnerability management and audit responsibilities described in the
            job summary.
          </p>

          <p>
            As a Teaching Fellow at the University of Leicester and previously Lecturer at
            Bayero University Kano, I routinely run security and data-protection awareness
            sessions and turn complex regulatory requirements into practical guidance for
            non-technical audiences — a capability I would apply immediately to staff
            training, clinical-team engagement and a culture of security accountability
            across your facilities. I also actively track Nigerian data protection
            developments (NDPA 2023, NDPC directives, NITDA guidance) alongside HIPAA-style
            healthcare control expectations and global GDPR enforcement.
          </p>

          <p>
            I am tech-savvy, comfortable with security tooling and governance frameworks
            (NIST CSF, ISO 27001, COBIT), and have a strong track record of clear written
            reporting to regulators, executives and academic peers. I am actively pursuing
            CIPP/E, CIPM and CISSP-track certifications to formally complement my academic
            and applied expertise.
          </p>

          <p>
            What draws me to this role is the mission: affordable, high-quality secondary
            healthcare for residents of Imo State depends on systems that patients and
            clinicians can trust. I would welcome the opportunity to bring my research depth,
            health-data experience and hands-on security practice to your team, and I am
            fully open to relocating to Imo State to do so.
          </p>

          <p>
            Thank you for considering my application. I would be glad to discuss how my
            background aligns with your cybersecurity and data privacy priorities.
          </p>
        </div>

        <div className="mt-8 text-sm text-gray-700">
          <p>Yours sincerely,</p>
          <p className="mt-6 font-semibold">Muhammad Shehu Abubakar-(Sadiq) PhD</p>
        </div>
      </div>
    </div>
  );
};
