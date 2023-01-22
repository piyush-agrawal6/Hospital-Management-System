import React from "react";
import { BsFillGearFill } from "react-icons/bs";
import { FaUserMd } from "react-icons/fa";
import { MdNotificationsActive } from "react-icons/md";
import { ImMenu } from "react-icons/im";
import "./CommonCSS.css";

const Topbar = ({ onclick }) => {
  return (
    <>
      <div className="MainDiv">
        <div className="Hideshow">
          <h2>HMS</h2>
        </div>
        <div className="SearchDiv">
          <input type="text" placeholder="Search Patient By Health Id...." />
        </div>
        <div className="IconsDiv">
          <FaUserMd className="Icons user" />
        </div>
      </div>
    </>
  );
};

export default Topbar;
