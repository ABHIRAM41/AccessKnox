import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);


const Widget = ({ widget, categoryId, onRemove }) => {
  const data=widget.data;
  const options=widget.options
  console.log(data)
  return (
    <div className="bg-gray-100 rounded-md p-4">
      <h3 className="text-lg font-bold mb-2">{widget.name}</h3>
      <div className="flex items-center">
        <div className="w-48 h-48">
          {data&&<Doughnut data={data} options={options} />}
        </div>
        <div className="ml-8">
          <h3 className="text-xl font-semibold mb-4">{Widget.Name}</h3>
          {data?.labels.map((label, index) => (
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
      {/* <p>{widget.content}</p> */}
      <button
        onClick={() => onRemove(categoryId, widget.id)}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md mt-4"
      >
        Remove
      </button>
    </div>
  );
};

export default Widget;
