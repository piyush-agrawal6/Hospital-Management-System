import React from "react";
import "../All-Dashboard-css/RightSide.css";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
// images for the website
import bone from "../img/psycian.png";
import heart from "../img/heart.png";
import kidney from "../img/kidne.png";
import tooth from "../img/tooth.png";

const RightSide = () => {
  return (
    <>
      <div className="Rightsidediv">
        <div className="nameimg">
          <Avatar shape="square" size={120} icon={<UserOutlined />} />
          <h3>Rajendra Patel</h3>
          <p>Doctor</p>
        </div>
        <div className="detailsbox">
          <img src={tooth} alt="tooth" />
          <div>
            <h4>Dentist</h4>
            <h5>Dr Rajendra patel</h5>
          </div>
          <p>3:31 PM</p>
        </div>
        {/* **************************** */}
        <div className="detailsbox">
          <img src={bone} alt="tooth" />
          <div>
            <h4>Orthopaedist</h4>
            <h5>Dr Rajendra patel</h5>
          </div>
          <p>3:31 PM</p>
        </div>
        {/* **************************** */}
        <div className="detailsbox">
          <img src={heart} alt="tooth" />
          <div>
            <h4>Physician</h4>
            <h5>Dr Rajendra patel</h5>
          </div>
          <p>3:31 PM</p>
        </div>
        {/* **************************** */}
        <div className="detailsbox">
          <img src={kidney} alt="tooth" />
          <div>
            <h4>Nephrologist</h4>
            <h5>Dr Rajendra patel</h5>
          </div>
          <p>3:31 PM</p>
        </div>
        <div className="detailsbox">
          <img src={kidney} alt="tooth" />
          <div>
            <h4>Nephrologist</h4>
            <h5>Dr Rajendra patel</h5>
          </div>
          <p>3:31 PM</p>
        </div>
      </div>
    </>
  );
};

export default RightSide;
