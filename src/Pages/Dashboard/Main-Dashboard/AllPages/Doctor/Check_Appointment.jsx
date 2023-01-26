import { Table } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Sidebar from "../../GlobalFiles/Sidebar";

const Check_Appointment = () => {
  const { data } = useSelector((store) => store.auth);

  const columns = [
    { title: "Patient Name", dataIndex: "patientName", key: "patientName" },
    { title: "Mobile", dataIndex: "mobile", key: "mobile" },
    { title: "Disease", dataIndex: "problem", key: "problem" },
    { title: "Department", dataIndex: "department", key: "department" },
    { title: "Date", dataIndex: "date", key: "date" },
  ];

  const Datas = [
    {
      key: 1,
      patientName: "ERFCE34",
      mobile: "The Rock",
      problem: 30,
      department: "Cobra Bite",
      date: "12-09-2022",
    },
  ];

  if (data?.isAuthticated === false) {
    return <Navigate to={"/"} />;
  }

  if (data?.user.userType !== "doctor") {
    return <Navigate to={"/dashboard"} />;
  }

  return (
    <>
      <div className="container">
        <Sidebar />
        <div className="AfterSideBar">
          <div className="Payment_Page">
            <h1 style={{ marginBottom: "2rem" }}>Appointment Details</h1>
            {/* <h1 style={{ marginBottom: "2rem" }}>Patient Details</h1> */}
            <div className="patientBox">
              <Table columns={columns} dataSource={Datas} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Check_Appointment;
