import React, { useState, useEffect } from "react";
import numeral from "numeral";
import { Line } from 'react-chartjs-2';

const options = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 1,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (tooltipItem, data) {
        return numeral(tooltipItem.value).format("+0,0");
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
          display: true,
        },
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return numeral(value).format("0a");
          },
        },
      },
    ],
  },
};

const buildChartData = (data, vaccineType) => {
  let chartData = [];
  let lastDataPoint;
  for (let date in data.timeline) {
    if (lastDataPoint) {
      let newDataPoint = {
        x: date,
        y: data[vaccineType][date] - lastDataPoint,
      };
      chartData.push(newDataPoint);
    }
    lastDataPoint = data[vaccineType][date];
  }
  return chartData;
};

function VaccineLineGraph({ vaccineType }) {
  const [data, setVaccineType] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://disease.sh/v3/covid-19/vaccine/coverage/countries/Ireland?lastdays=120")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          let chartData = buildChartData(data, vaccineType);
          setVaccineType(chartData);
          console.log("TESTTT" + vaccineType);
        });
    };

    fetchData();
  }, [vaccineType]);

  return (
    <div>
      {data?.length > 0 && (
        <Line
        data={{
            datasets: [
              {
                backgroundColor: "yellow",
                data: data,
              },
            ],
          }}
          options={options}
        />
      )}
    </div>
  );
}

export default VaccineLineGraph;
