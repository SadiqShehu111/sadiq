import { Download, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CoverLetterMoniepoint = () => {
  const handleDownload = () => window.print();

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
          Download Cover Letter
        </Button>
      </div>

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
            Kano, Nigeria
          </span>
        </div>
      </header>

      <p className="text-sm text-gray-700 mb-6">{currentDate}</p>

      <div className="mb-6 text-sm text-gray-700">
        <p>Hiring Manager</p>
        <p>Compliance Team, Moniepoint Inc.</p>
        <p>Lagos, Nigeria</p>
      </div>

      <p className="font-semibold text-gray-900 mb-6">
        Re: Application for the Data Privacy & Protection Officer Position
      </p>

      <p className="text-sm text-gray-700 mb-4">Dear Hiring Manager,</p>

      <div className="text-sm text-gray-700 space-y-4 leading-relaxed">
        <p>
          I am writing to express my strong interest in the Data Privacy & Protection
          Officer role at Moniepoint Inc. With a PhD in Information Systems Security,
          12+ years of cross-sector experience spanning academia, big tech, banking,
          and international research, and a research focus on decentralised identity,
          GDPR-compliant trust systems, and secure data processing, I am confident I
          can help TeamApt strengthen its Data Protection framework under the NDPA
          2023, NDPC directives, and CBN IT standards.
        </p>

        <p>
          My doctoral and post-doctoral work at the University of Surrey's DECaDE
          Centre and INESC TEC Porto has centred on the lawful, fair, and minimised
          processing of personal data — including purpose limitation, storage
          limitation, integrity, and confidentiality. I have designed privacy-preserving
          identity frameworks and conducted Data Protection Impact Assessments (DPIAs)
          for digital systems handling sensitive personal data, with control mappings
          aligned to GDPR, ISO/IEC 27001, and the FAIR risk framework. Translating
          these principles into the NDPA 2023, GAID, and NDPC compliance audit
          requirements is a natural extension of my work.
        </p>

        <p>
          During my time as a Fraud Prevention Specialist supporting Apple (via
          Majorel) and earlier in Nigerian banking at Unity Bank, I worked daily with
          financial customer data, KYC records, and transaction monitoring. I gained
          first-hand experience of data subject rights handling, breach triage,
          incident documentation, tokenisation of sensitive payment data, access
          controls, and audit logging — the same operational controls Moniepoint
          relies on to protect its merchants and end customers. I have also supported
          third-party due diligence and the review of Data Processing Agreements
          (DPAs), maintaining vendor registers and embedding privacy clauses into
          contracts.
        </p>

        <p>
          As a Teaching Fellow in Cyber Security at the University of Leicester and a
          Lecturer at Bayero University Kano — where I was a pioneer staff member in
          cybersecurity within the Faculty of Computer Science — I routinely deliver
          privacy and security awareness training, build learning materials, and
          translate complex regulatory requirements into practical guidance for
          non-technical audiences. I would bring the same approach to Moniepoint's
          internal awareness campaigns, DSAR coordination, and cross-functional
          engagement with IT, Risk, Legal, and Product teams.
        </p>

        <p>
          I am tech-savvy, comfortable with data governance tooling, and have a
          strong track record of clear report writing for regulators and executive
          stakeholders — including frameworks presented at IEEE EURO S&P 2025 and
          forthcoming international venues. I am actively progressing professional
          privacy certification (CIPP/E / CIPM track) to formally complement my
          academic and applied expertise, and I keep close watch on Nigerian and
          international Data Protection developments, including NDPC directives,
          NITDA guidance, and global GDPR enforcement trends.
        </p>

        <p>
          What draws me to Moniepoint is the scale and social impact of the
          mission — processing $182 billion in 2023 means privacy is not abstract;
          it is the foundation of trust for millions of businesses and customers.
          I would welcome the opportunity to bring my research depth, regulatory
          awareness, and hands-on financial-services experience to your Compliance
          Team and help embed privacy by design across TeamApt's products and
          operations.
        </p>

        <p>
          Thank you for considering my application. I would be glad to discuss how
          my background aligns with Moniepoint's data protection priorities.
        </p>
      </div>

      <div className="mt-8 text-sm text-gray-700">
        <p>Yours sincerely,</p>
        <p className="mt-6 font-semibold">Muhammad Shehu Abubakar-(Sadiq) PhD</p>
      </div>
    </div>
  );
};
