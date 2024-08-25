import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

const Dashboard = () => {
  const data = {
    labels: ["Connected (7)", "Not Connected (2)"],
    datasets: [
      {
        data: [7, 2],
        backgroundColor: ["#3B82F6", "#7DD3FC"], // light blue and sky blue
        borderColor: ["#3B82F6", "#7DD3FC"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    cutout: "80%", // This creates the donut hole
  };

  return (
    <div className="font-sans p-6">
      <h2 className="text-2xl font-bold mb-6">CDSM Executive Dashboard</h2>
      <div className="flex items-center">
        <div className="w-48 h-48">
          <Doughnut data={data} options={options} />
        </div>
        <div className="ml-8">
          <h3 className="text-xl font-semibold mb-4">Cloud Accounts</h3>
          {data.labels.map((label, index) => (
            <div key={index} className="flex items-center mb-3">
              <div
                className={`w-5 h-5 mr-3`}
                style={{
                  backgroundColor: data.datasets[0].backgroundColor[index],
                }}
              ></div>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
