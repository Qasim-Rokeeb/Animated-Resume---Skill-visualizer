import Header from "./components/Header";
import Section from "./components/Section";
import SkillChart from "./components/SkillChart";
import DownloadButton from "./components/DownloadButton";
import { resumeData } from "./data/resumeData";

export default function App() {
  const { name, title, summary, education, experience, skills } = resumeData;

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div
        className="max-w-3xl mx-auto bg-white p-6 rounded shadow-md"
        id="resume"
      >
        <Header name={name} title={title} />
        <p className="text-gray-700 mb-6">{summary}</p>
        <Section title="Education" items={education} />
        <Section title="Experience" items={experience} />
        <SkillChart data={skills} />
      </div>
      <div className="text-center">
        <DownloadButton />
      </div>
    </div>
  );
}
