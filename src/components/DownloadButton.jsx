import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function DownloadButton() {
  const handleDownload = async () => {
    const capture = document.querySelector("#resume");
    const canvas = await html2canvas(capture);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const width = 210;
    const height = (canvas.height * width) / canvas.width;
    pdf.addImage(imgData, "PNG", 0, 0, width, height);
    pdf.save("resume.pdf");
  };

  return (
    <button
      onClick={handleDownload}
      className="mt-6 px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-800 transition"
    >
      Download as PDF
    </button>
  );
}
