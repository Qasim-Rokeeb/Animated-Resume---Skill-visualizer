import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import toast from "react-hot-toast";
import { useState } from "react";

export default function DownloadButton() {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    const toastId = toast.loading("Generating PDF…");

    const resumeEl = document.getElementById("resume");

    const canvas = await html2canvas(resumeEl, {
      width: 794,        // A4 width @ 96 dpi
      height: 1123,      // A4 height @ 96 dpi
      scale: 1,
      useCORS: true,
      backgroundColor: "#ffffff",
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "px", [794, 1123]);
    pdf.addImage(imgData, "PNG", 0, 0, 794, 1123);
    pdf.save("Qasim-Rokeeb-Resume.pdf");

    toast.dismiss(toastId);
    toast.success("PDF downloaded!");
    setLoading(false);
  };

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      className={`inline-flex items-center gap-2 px-6 py-3 font-semibold text-white rounded-lg shadow-md transition
        ${loading
          ? "bg-purple-400 cursor-not-allowed"
          : "bg-purple-600 hover:bg-purple-700 active:scale-95"}`}
    >
      {loading ? "Generating…" : "Download PDF ⬇"}
    </button>
  );
}