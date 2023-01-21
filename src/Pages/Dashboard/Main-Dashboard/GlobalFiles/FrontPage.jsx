import { Table } from "antd";
import React from "react";
import { MdPersonAdd } from "react-icons/md";
import { FaUserNurse } from "react-icons/fa";
import { RiEmpathizeLine } from "react-icons/ri";
import { FaBed } from "react-icons/fa";
import { MdOutlineBedroomParent } from "react-icons/md";
import { FaAmbulance } from "react-icons/fa";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { MdPayment } from "react-icons/md";

const FrontPage = () => {
  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Age", dataIndex: "age", key: "age" },
    { title: "Specialist", dataIndex: "specialist", key: "specialist" },
    { title: "Blood Group", dataIndex: "Blood_Group", key: "Blood_Group" },
    { title: "Contact", dataIndex: "contact", key: "Contact" },
  ];

  const data = [
    {
      key: 1,
      name: "John Brown",
      age: 32,
      Blood_Group: "AB+",
      specialist: "Cancer",
      contact: 7989053752,
    },
    {
      key: 2,
      name: "Jim Green",
      age: 42,
      Blood_Group: "O-",
      specialist: "Heart Problem",
      contact: 7989053752,
    },
    {
      key: 3,
      name: "Not Expandable",
      age: 29,
      Blood_Group: "B+",
      specialist: "Diabetes",
      contact: 7989053752,
    },
    {
      key: 4,
      name: "Joe Black",
      age: 32,
      Blood_Group: "A+",
      specialist: "bird flu",
      contact: 7989053752,
    },
  ];

  return (
    <>
      <h1 style={{ color: "rgb(184 191 234)" }}>Overview</h1>
      <div className="maindiv">
        <div className="one commondiv">
          <div>
            <h1>10</h1>
            <p>Doctor</p>
          </div>
          <MdPersonAdd className="overviewIcon" />
        </div>
        <div className="two commondiv">
          {" "}
          <div>
            <h1>10</h1>
            <p>Nurse</p>
          </div>
          <FaUserNurse className="overviewIcon" />
        </div>
        <div className="three commondiv">
          <div>
            <h1>10</h1>
            <p>Patient</p>
          </div>
          <RiEmpathizeLine className="overviewIcon" />
        </div>
        <div className="four commondiv">
          {" "}
          <div>
            <h1>10</h1>
            <p>Beds</p>
          </div>
          <FaBed className="overviewIcon" />
        </div>
        <div className="six commondiv">
          {" "}
          <div>
            <h1>10</h1>
            <p>Rooms</p>
          </div>
          <MdOutlineBedroomParent className="overviewIcon" />
        </div>
        <div className="five commondiv">
          {" "}
          <div>
            <h1>10</h1>
            <p>Ambulance</p>
          </div>
          <FaAmbulance className="overviewIcon" />
        </div>
        <div className="six commondiv">
          {" "}
          <div>
            <h1>10</h1>
            <p>Appointment</p>
          </div>
          <BsFillBookmarkCheckFill className="overviewIcon" />
        </div>
        <div className="six commondiv">
          {" "}
          <div>
            <h1>10</h1>
            <p>Payments</p>
          </div>
          <MdPayment className="overviewIcon" />
        </div>
      </div>
      {/* ************************************* */}
      <div className="patientDetails">
        <h1>Doctors Detail</h1>
        <div className="patientBox">
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
    </>
  );
};

export default FrontPage;
