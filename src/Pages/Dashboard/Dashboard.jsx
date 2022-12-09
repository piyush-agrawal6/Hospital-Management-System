import React from "react";
import GoodMorning from "./SmallComponent/GoodMorning";
import RightSide from "./SmallComponent/RightSide";
import SingleElement from "./SmallComponent/SingleElement";
import "./All-Dashboard-css/Dashboard.css";
// images of the website
import imgone from "./img/two.png";
import imgtwo from "./img/one.png";
import imgthree from "./img/three.png";
import imgfourth from "./img/fourth.png";
import imgfifth from "./img/fifth.png";
import imgsixth from "./img/sixth.png";
import ProgressChart from "./SmallComponent/Progress_chart";
import { Areachart, Areacharttwo } from "./SmallComponent/Allchart";

const Dashboard = () => {
  return (
    <>
      <div id="Maindiv">
        {/* first part of the website */}
        <div className="firstpartdiv">
          <div>
            <GoodMorning />
            <div className="makesidebyside">
              <div className="sixeightypx">
                <RightSide />
              </div>
              <div className="singleelementdiv">
                <SingleElement images={imgone} name={"Doctor"} number={5} />
                <SingleElement images={imgsixth} name={"Nurse"} number={3} />
                <SingleElement images={imgsixth} name={"Patient"} number={2} />
                <SingleElement images={imgfourth} name={"waster"} number={1} />
                <SingleElement images={imgsixth} name={"Watch"} number={5} />
                <SingleElement images={imgsixth} name={"Driver"} number={7} />
              </div>
              <div className="hidethis">
                <RightSide />
              </div>
            </div>
            <div className="progresschart">
              <ProgressChart />
            </div>
          </div>
          <div className="nonhidethis">
            <RightSide />
          </div>
        </div>
        {/* chart part of the website  */}
        <div className="ChartDiv">
          <div className="linechart">
            <Areachart />
          </div>
          <div className="linecharttwo">
            <Areacharttwo className="Areacharttwoclass" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
