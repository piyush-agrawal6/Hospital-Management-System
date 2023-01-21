import React, { useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaAmbulance } from "react-icons/fa";
import { GiNurseFemale } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { SlUserFollow } from "react-icons/sl";
import { BsBookmarkPlus, BsFillBookmarkCheckFill } from "react-icons/bs";
import { BiDetail } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaHospitalUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbListDetails } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import Topbar from "./Topbar";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidesidebar, sethidesidebar] = useState("showsidebar");
  function toggle() {
    setIsOpen(!isOpen);
    sethidesidebar(
      hidesidebar === "showsidebar" ? "hidesidebar" : "showsidebar"
    );
  }
  // const toggle = () =>
  const MenuItem = [
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
      icons: <BsFillBookmarkCheckFill className="mainIcon" />,
    },
    {
      path: "/createslip",
      name: "Create Report",
      icons: <BiDetail className="mainIcon" />,
    },
    {
      path: "/patientdetails",
      name: "Patient Det",
      icons: <TbListDetails className="mainIcon" />,
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
      icons: <BsBookmarkPlus className="mainIcon" />,
    },
  ];
  return (
    <>
      <Topbar onclick={toggle} />
      <div className="container">
        <div
          style={{ width: isOpen ? "300px" : "80px" }}
          className={`sidebar ${hidesidebar}`}
        >
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
