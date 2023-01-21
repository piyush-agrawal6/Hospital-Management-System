import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Badge, Dropdown, Space, Table } from "antd";

const items = [
  { key: "1", label: "Action 1" },
  { key: "2", label: "Action 2" },
];

const Beds_Rooms = () => {
  const expandedRowRender = () => {
    const columns = [
      { title: "", dataIndex: "bed_number", key: "bed_number" },
      { title: "", dataIndex: "status", key: "status" },

      { title: "", dataIndex: "patient_name", key: "patient_name" },
      { title: "", dataIndex: "diagnosis", key: "diagnosis" },
      {
        title: "",
        dataIndex: "doctor_Assigned",
        key: "doctor_Assigned",
      },
      { title: "", dataIndex: "Addmission", key: "Addmission" },
    ];

    const data = [];
    for (let i = 0; i < 4; ++i) {
      data.push({
        key: i.toString(),
        bed_number: "Bed" + " " + (i + 1).toString(),
        status: "finished",
        patient_name: "Rajendra Patel",
        diagnosis: "Unknown Disease",
        doctor_Assigned: "No Doctor",
        Addmission: "12-02-2024",
      });
    }
    return <Table columns={columns} dataSource={data} pagination={false} />;
  };

  const data = [];
  for (let i = 0; i < 3; ++i) {
    data.push({
      key: i.toString(),
      bed_number: "Room" + " " + (i + 1).toString(),
    });
  }

  const columns = [
    { title: "Bed Number", dataIndex: "bed_number", key: "bed_number" },
    { title: "Status", dataIndex: "Status", key: "Status" },
    { title: "Patient Name", dataIndex: "patient_name", key: "patient_name" },
    { title: "Diagnosis", dataIndex: "diagnosis", key: "diagnosis" },
    {
      title: "Doctor Assigned",
      dataIndex: "doctor_Assigned",
      key: "doctor_Assigned",
    },
    { title: "Addmission", dataIndex: "Addmission", key: "Addmission" },
  ];

  return (
    <>
      <h1 style={{ marginBottom: "2rem" }}>Total Rooms </h1>
      <div className="patientBox">
        <Table
          columns={columns}
          expandable={{ expandedRowRender, defaultExpandedRowKeys: ["0"] }}
          dataSource={data}
        />
      </div>
    </>
  );
};

export default Beds_Rooms;
