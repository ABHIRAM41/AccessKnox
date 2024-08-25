const data = {
  categories: [
    {
      id: "category1",
      name: "CSPM Executive Dashboard",
      data: {
        labels: ["Connected (7)", "Not Connected (2)"],
        datasets: [
          {
            data: [7, 2],
            backgroundColor: ["#3B82F6", "#7DD3FC"], // light blue and sky blue
            borderColor: ["#3B82F6", "#7DD3FC"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
        responsive: true,
        maintainAspectRatio: false,
        cutout: "80%", // This creates the donut hole
      },
      widgets: [
        {
          id: "widget1",
          name: "Cloud Account",
          data: {
            labels: ["Connected (7)", "Not Connected (2)"],
            datasets: [
              {
                data: [7, 2],
                backgroundColor: ["#3B82F6", "#7DD3FC"], // light blue and sky blue
                borderColor: ["#3B82F6", "#7DD3FC"],
                borderWidth: 1,
              },
            ],
          },
          options: {
            plugins: {
              legend: {
                display: false,
              },
            },
            responsive: true,
            maintainAspectRatio: false,
            cutout: "80%", // This creates the donut hole
          },
        },
        {
          id: "widget2",
          name: "Cloud Account Risk Assessment",
          data: {
            labels: [
              "Failed (1689)",
              "Warning (681)",
              "Not Available (36)",
              "Passed (7563)",
            ],
            datasets: [
              {
                data: [1689, 681, 76, 7563],
                backgroundColor: ["#f03121", "#ffee61", "#d0d0d0", "#49e14b"], // light blue and sky blue
                borderColor: ["#f03121", "#ffee61", "#d0d0d0", "#49e14b"],
                borderWidth: 1,
              },
            ],
          },
          options: {
            plugins: {
              legend: {
                display: false,
              },
            },
            responsive: true,
            maintainAspectRatio: false,
            cutout: "80%", // This creates the donut hole
          },
        },
      ],
    },
    {
      id: "category2",
      name: "Category 2",
      widgets: [
        {
          id: "widget3",
          name: "Widget 3",
          content: "Random text for Widget 3",
        },
        {
          id: "widget4",
          name: "Widget 4",
          content: "Random text for Widget 4",
        },
      ],
    },
    {
      id: "category1",
      name: "CSPM Executive Dashboard",
      widgets: [
        {
          id: "widget1",
          name: "Widget 1",
          content: "Random text for Widget 1",
        },
        {
          id: "widget2",
          name: "Widget 2",
          content: "Random text for Widget 2",
        },
      ],
    },
  ],
};

export default data;
