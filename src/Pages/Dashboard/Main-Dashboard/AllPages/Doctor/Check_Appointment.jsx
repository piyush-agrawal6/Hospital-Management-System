import { Table } from "antd";
import React from "react";

const Check_Appointment = () => {
  const columns = [
    { title: "Id", dataIndex: "Id", key: "Id" },
    { title: "Patient Name", dataIndex: "Patient_Name", key: "Patient Name" },
    { title: "Age", dataIndex: "Age", key: "Age" },
    { title: "Disease", dataIndex: "Disease", key: "Disease" },
    { title: "Date", dataIndex: "Date", key: "Date" },
  ];

  const data = [
    {
      key: 1,
      Id: "ERFCE34",
      Patient_Name: "The Rock",
      Age: 30,
      Disease: "Cobra Bite",
      Date: "12-09-2022",
    },
    {
      key: 2,
      Id: "ERFCE34",
      Patient_Name: "The Rock",
      Age: 30,
      Disease: "Cobra Bite",
      Date: "12-09-2022",
    },
    {
      key: 3,
      Id: "ERFCE34",
      Patient_Name: "The Rock",
      Age: 30,
      Disease: "Cobra Bite",
      Date: "12-09-2022",
    },
    {
      key: 4,
      Id: "ERFCE34",
      Patient_Name: "The Rock",
      Age: 30,
      Disease: "Cobra Bite",
      Date: "12-09-2022",
    },
    {
      key: 5,
      Id: "ERFCE34",
      Patient_Name: "The Rock",
      Age: 30,
      Disease: "Cobra Bite",
      Date: "12-09-2022",
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
