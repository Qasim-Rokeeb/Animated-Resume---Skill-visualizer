import { Bar } from "react-chartjs-2";
import { Chart, BarElement, CategoryScale, LinearScale } from "chart.js";
Chart.register(BarElement, CategoryScale, LinearScale);

export default function SkillChart({ data }) {
  return (
    <div className="bg-white rounded shadow-md p-4">
      <h2 className="text-lg font-semibold mb-2 text-purple-600">Skills</h2>
      <Bar
        data={{
          labels: data.labels,
          datasets: [
            {
              label: "Proficiency (%)",
              data: data.values,
              backgroundColor: "#7e22ce",
            },
          ],
        }}
        options={{
          scales: {
            y: { beginAtZero: true, max: 100 },
          },
          responsive: true,
        }}
      />
    </div>
  );
}
