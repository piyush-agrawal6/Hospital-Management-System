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
import { TbListDetails } from "react-icons/tb";
import { MdBedroomChild } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { ImMenu } from "react-icons/im";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const AdminRoutes = [
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
    {
      path: "/rooms",
      name: "Beds and Rooms",
      icons: <MdBedroomChild className="mainIcon" />,
    },
  ];
  const DoctorRoutes = [
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
  ];
  const NurseRoutes = [
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

  const [StaffStatus, setStaffStatus] = useState(NurseRoutes);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="container">
        <div style={{ width: isOpen ? "200px" : "70px" }} className={`sidebar`}>
          <div className="top_section">
            <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
              HMS
            </h1>
            <div
              style={{ marginLeft: isOpen ? "50px" : "0px" }}
              className="bars"
            >
              <ImMenu onClick={toggle} style={{ cursor: "pointer" }} />
            </div>
          </div>
          <div className="bottomSection">
            {StaffStatus.map((item, index) => (
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
        </div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Sidebar;
