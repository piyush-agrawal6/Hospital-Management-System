import { Input } from "antd";
import React from "react";
import { BsFillGearFill } from "react-icons/bs";
import { FaUserMd } from "react-icons/fa";
import "./CommonCSS.css";

const Topbar = () => {
  return (
    <>
      <div className="MainDiv">
        <div className="SearchDiv">
          <Input placeholder="Search Here ...." allowClear size="large" />
        </div>
        <div className="IconsDiv">
          <FaUserMd className="Icons user" />
          <BsFillGearFill className="Icons gear" />
        </div>
      </div>
    </>
  );
};

export default Topbar;
