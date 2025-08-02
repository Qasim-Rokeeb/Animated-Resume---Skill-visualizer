import { Bar } from "react-chartjs-2";
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip } from "chart.js";
Chart.register(BarElement, CategoryScale, LinearScale, Tooltip);

export default function SkillChart({ data }) {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: "Proficiency",
        data: data.values,
        backgroundColor: "rgba(124, 58, 237, 0.8)",
        borderRadius: 6,
      },
    ],
  };

  const options = {
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: true, max: 100 },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <section className="space-y-3">
      <h2 className="text-2xl font-bold text-purple-600 border-b-2 border-purple-200 pb-1">
        Skills
      </h2>
      <div className="h-64">
        <Bar data={chartData} options={options} />
      </div>
    </section>
  );
}