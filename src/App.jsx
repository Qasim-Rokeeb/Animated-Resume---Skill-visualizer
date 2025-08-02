import Header from "./components/Header";
import Section from "./components/Section";
import SkillChart from "./components/SkillChart";
import DownloadButton from "./components/DownloadButton";
import { resumeData } from "./data/resumeData";
import { Toaster } from "react-hot-toast";

export default function App() {
  const { name, title, summary, education, experience, skills } = resumeData;

  return (
    <>
      <div className="min-h-screen p-4 sm:p-8">
        <div className="resume-a4 flex flex-col p-10 space-y-6" id="resume">
          <Header name={name} title={title} />
          <p className="text-slate-700 text-center max-w-prose mx-auto">{summary}</p>

          <Section title="Education" items={education} />
          <Section title="Experience" items={experience} />
          <SkillChart data={skills} />
        </div>

        <div className="flex justify-center mt-8">
          <DownloadButton />
        </div>
      </div>

      <Toaster position="bottom-center" />
    </>
  );
}