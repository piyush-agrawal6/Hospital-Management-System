import { Table } from "antd";
import React from "react";

const Check_Appointment = () => {
  const columns = [
    { title: "Patient Name", dataIndex: "patientName", key: "patientName" },
    { title: "Mobile", dataIndex: "mobile", key: "mobile" },
    { title: "Disease", dataIndex: "problem", key: "problem" },
    { title: "Department", dataIndex: "department", key: "department" },
    { title: "Date", dataIndex: "date", key: "date" },
  ];

  const data = [
    {
      key: 1,
      patientName: "ERFCE34",
      mobile: "The Rock",
      problem: 30,
      department: "Cobra Bite",
      date: "12-09-2022",
    },
  ];

  return (
    <>
      <div className="Payment_Page">
        <h1 style={{ marginBottom: "2rem" }}>Appointment Details</h1>
        {/* <h1 style={{ marginBottom: "2rem" }}>Patient Details</h1> */}
        <div className="patientBox">
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
    </>
  );
};

export default Check_Appointment;
