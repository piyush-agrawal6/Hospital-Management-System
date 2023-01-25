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
import { FiLogOut } from "react-icons/fi";
import { GrUserAdmin } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
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
    {
      path: "/admin",
      name: "Add Admin",
      icons: <GrUserAdmin className="mainIcon" />,
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
      path: "/rooms",
      name: "Beds and Rooms",
      icons: <MdBedroomChild className="mainIcon" />,
    },
    {
      path: "/bookappointment",
      name: "Book Appt",
      icons: <BsBookmarkPlus className="mainIcon" />,
    },
  ];
  const {
    data: { user },
  } = useSelector((state) => state.auth);

  let setUser;

  if (user?.userType === "admin") {
    setUser = AdminRoutes;
  }
  if (user?.userType === "nurse") {
    setUser = NurseRoutes;
  }
  if (user?.userType === "doctor") {
    setUser = DoctorRoutes;
  }
  const [StaffStatus, setStaffStatus] = useState(setUser);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="container">
        <div style={{ width: isOpen ? "300px" : "70px" }} className={`sidebar`}>
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
            {StaffStatus?.map((item, index) => (
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
            <NavLink
              className="LogOutPath link"
              onClick={() => {
                dispatch({ type: "AUTH_LOGOUT" });
              }}
            >
              <div className="icon">
                <FiLogOut />
              </div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                Logout
              </div>
            </NavLink>
          </div>
        </div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Sidebar;
