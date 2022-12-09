import React, { useState } from "react";
import Chart from "react-apexcharts";

const Areachart = () => {
  const [charts, setCharts] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
      {
        name: "series-2",
        data: [12, 23, 45, 13, 25, 32, 31, 19],
      },
    ],
  });
  return (
    <>
      <Chart
        options={charts.options}
        series={charts.series}
        type="area"
        width="500"
      />
    </>
  );
};

const Areacharttwo = () => {
  const [charts, setCharts] = useState({
    options: {
      chart: {
        id: "basic-bar-two",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  });
  return (
    <>
      <Chart
        options={charts.options}
        series={charts.series}
        type="histogram"
        width="500"
      />
    </>
  );
};

export { Areachart, Areacharttwo };

// chart categories that we can implement
// 1. bar
// 2. line
// 3. area
// 4. radar
// 5. histrogram
// 6. scatter
// 7.heatmap
