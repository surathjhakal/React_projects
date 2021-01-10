import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import numeral from "numeral";

const options = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (tooltipItem, data) {
        return numeral(tooltipItem.value).format("0+,0");
      },
    },
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          format: "MM/DD/YY",
          tooltipFormat: "ll",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          callback: function (value, index, values) {
            return numeral(value).format("0a");
          },
        },
      },
    ],
  },
};

const buildChartData = (data, caseType) => {
  const chartData = [];
  let lastDataPoint;
  for (let date in data[caseType]) {
    if (lastDataPoint) {
      const newDataPoint = {
        x: date,
        y: data[caseType][date] - lastDataPoint,
      };
      chartData.push(newDataPoint);
    }
    lastDataPoint = data[caseType][date];
  }
  return chartData;
};

const LineGraph = ({ caseType, className, country }) => {
  const [data, setData] = useState({});
  const selectColor = {
    cases: {
      bg: "rgba(204,16,52,0.5)",
      color: "#CC1034",
    },
    recovered: {
      bg: "rgba(125, 215, 29,0.5)",
      color: "#7dd71d",
    },
    deaths: {
      bg: "rgba(255, 108, 71,0.5)",
      color: "#ff6c47",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      const url =
        country === "worldwide"
          ? `https://disease.sh/v3/covid-19/historical/all?lastdays=30`
          : `https://disease.sh/v3/covid-19/historical/${country}?lastdays=30`;
      await fetch(url)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data.timeline);
          let chartData = buildChartData(
            country === "worldwide" ? data : data.timeline,
            caseType
          );
          setData(chartData);
        });
    };
    fetchData();
  }, [caseType, country]);

  return (
    <div className={className}>
      {data?.length > 0 && (
        <Line
          data={{
            datasets: [
              {
                data: data,
                backgroundColor: selectColor[caseType].bg,
                borderColor: selectColor[caseType].color,
              },
            ],
          }}
          options={options}
        />
      )}
    </div>
  );
};

export default LineGraph;
