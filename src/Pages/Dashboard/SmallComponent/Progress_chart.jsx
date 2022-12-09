import React from "react";
import { Progress } from "antd";
import exercise from "../img/exercise.png";
import water from "../img/water.png";
import "../All-Dashboard-css/Progress_chart.css";

const ProgressChart = () => {
  return (
    <div id="MainProgress">
      <div className="waterdiv">
        <div>
          <Progress
            type="circle"
            percent={70}
            strokeColor={{ "0%": "#108ee9", "100%": "#87d068" }}
            format={() => (
              <img src={water} alt="water" className="Inside_progress_img" />
            )}
          />
        </div>
        <div>
          <h3>Water Balance</h3>
          <h1>70%</h1>
          <p>10% less than last week</p>
        </div>
      </div>
      <div className="waterdiv">
        <div>
          <Progress
            type="circle"
            percent={85}
            strokeColor={{ "0%": "#108ee9", "100%": "#87d068" }}
            format={() => (
              <img src={exercise} alt="water" className="Inside_progress_img" />
            )}
          />
        </div>
        <div>
          <h3>Water Balance</h3>
          <h1>70%</h1>
          <p>10% less than last week</p>
        </div>
      </div>
    </div>
  );
};

export default ProgressChart;
