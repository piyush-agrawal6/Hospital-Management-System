import React, { useState } from "react";
import { RiAdminLine } from "react-icons/ri";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaAmbulance } from "react-icons/fa";
import { GiNurseFemale } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { SlUserFollow } from "react-icons/sl";
import { BsBookmarkPlus, BsFillBookmarkCheckFill } from "react-icons/bs";
import { BiDetail } from "react-icons/bi";
import { CgDetailsMore, CgProfile } from "react-icons/cg";
import { FaHospitalUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const MenuItem = [
    {
      path: "/adminprofile",
      name: "Admin Profile",
      icons: <RiAdminLine className="mainIcon" />,
    },
    {
      path: "/addoctor",
      name: "Add Doctor",
      icons: <AiOutlineUserAdd className="mainIcon" />,
    },
    {
      path: "/addambulance",
      name: "Add AMB",
      icons: <FaAmbulance className="mainIcon" />,
    },
    {
      path: "/addnurse",
      name: "Add Nurse",
      icons: <GiNurseFemale className="mainIcon" />,
    },
    {
      path: "/checkpayment",
      name: "Payment",
      icons: <RiSecurePaymentLine className="mainIcon" />,
    },
    // *************************
    {
      path: "/doctorprofile",
      name: "Doctor Profile",
      icons: <SlUserFollow className="mainIcon" />,
    },
    {
      path: "/checkappointment",
      name: "Check Appt",
      icons: <BsBookmarkPlus className="mainIcon" />,
    },
    {
      path: "/createslip",
      name: "Create Slip",
      icons: <BiDetail className="mainIcon" />,
    },
    {
      path: "/patientdetails",
      name: "Create Slip",
      icons: <CgDetailsMore className="mainIcon" />,
    },
    // ****************************
    {
      path: "/nurseprofile",
      name: "Nurse Profile",
      icons: <CgProfile className="mainIcon" />,
    },
    {
      path: "/addpatient",
      name: "Add Patient",
      icons: <FaHospitalUser className="mainIcon" />,
    },
    {
      path: "/bookappointment",
      name: "Book Appt",
      icons: <BsFillBookmarkCheckFill className="mainIcon" />,
    },
  ];
  return (
    <>
      <div className="container">
        <div style={{ width: isOpen ? "200px" : "80px" }} className="sidebar">
          <div className="top_section">
            <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
              Logo
            </h1>
            <div
              style={{ marginLeft: isOpen ? "50px" : "0px" }}
              className="bars"
            >
              <GiHamburgerMenu onClick={toggle} />
            </div>
          </div>
          {MenuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="link"
              activeclassname="active"
            >
              <div className="icon">{item.icons}</div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                {item.name}
              </div>
            </NavLink>
          ))}
        </div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Sidebar;
