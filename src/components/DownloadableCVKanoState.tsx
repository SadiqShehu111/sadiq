import React, { useRef } from 'react';
import { Download, Mail, User, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import html2pdf from 'html2pdf.js';

export const DownloadableCVKanoState = () => {
  const cvRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    if (!cvRef.current) return;
    html2pdf()
      .set({
        margin: 10,
        filename: 'Muhammad_Shehu_Abubakar-Sadiq_CV_Kano_State_KDAMS.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      } as any)
      .from(cvRef.current)
      .save();
  };

  return (
    <>
      <div ref={cvRef} className="max-w-4xl mx-auto bg-white text-black p-8 print:p-6 font-serif text-lg">
        {/* Name */}
        <div className="mb-6">
          <h1 className="text-6xl font-bold text-blue-900 mb-2 font-serif">Muhammad Shehu Abubakar-Sadiq</h1>
          <p className="text-2xl text-gray-800 mb-4 font-serif">PhD in Computer Science — Cybersecurity</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-base">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-900" />
              <span>msabubakar-sadiq.it@buk.edu.ng</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-blue-900" />
              <span>Profiles: le.ac.uk/people/muhammad-sadiq</span>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <section className="mb-6">
          <h2 className="text-3xl font-bold text-blue-900 border-b border-gray-300 pb-2 mb-4">PROFESSIONAL SUMMARY</h2>
          <p className="text-gray-700 leading-relaxed">
...
          </div>
        </section>
      </div>


      <div className="flex justify-center gap-4 mt-8 print:hidden">
        <Button onClick={handleDownload} className="flex items-center gap-2">
          <Download className="w-4 h-4" />
          Download CV (PDF)
        </Button>
        <a
          href="/Muhammad_Shehu_Abubakar-Sadiq_CV_Kano_State_KDAMS.docx"
          download
        >
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            Download CV (DOCX)
          </Button>
        </a>
      </div>
    </>
  );
};
