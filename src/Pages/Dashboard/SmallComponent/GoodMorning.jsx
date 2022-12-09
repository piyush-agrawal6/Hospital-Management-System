import React from "react";
import doctorimg from "../img/firstimg.png";
import "../All-Dashboard-css/GoodMorning.css";
const GoodMorning = () => {
  return (
    <>
      <div className="good_morning">
        <div className="firstdiv">
          <h2>Hello, Rajendra Patel</h2>
          <p>Have a nice Day, and don't forget to take care of your health.</p>
        </div>
        <img src={doctorimg} alt="images" className="goodimg" />
      </div>
    </>
  );
};

export default GoodMorning;
