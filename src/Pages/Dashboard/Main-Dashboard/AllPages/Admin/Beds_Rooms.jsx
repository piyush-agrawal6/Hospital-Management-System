import React from "react";
import { Table } from "antd";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GetBeds } from "../../../../../Redux/Datas/action";
import Sidebar from "../../GlobalFiles/Sidebar";

const Beds_Rooms = () => {
  const columns = [
    { title: "Id", dataIndex: "Id", key: "Id" },
    { title: "Patient Name", dataIndex: "Patient_Name", key: "Patient Name" },
    { title: "Date", dataIndex: "Date", key: "Date" },
    { title: "Checked By", dataIndex: "Checked_By", key: "Checked By" },
    { title: "Report Ref", dataIndex: "Report_Ref", key: "Report Ref" },
    { title: "Total Cost", dataIndex: "Total_Cost", key: "Total Cost" },
  ];

  const dispatch = useDispatch();

  const data = [
    {
      key: 1,
      Id: "ERFCE34",
      Patient_Name: "The Rock",
      Date: "12-09-2022",
      Checked_By: "Dr.Rajendra Patel",
      Report_Ref: "ERODEII334l",
      Total_Cost: "₹ 3000",
    },
    {
      key: 2,
      Id: "ERFCE34",
      Patient_Name: "The Rock",
      Date: "12-09-2022",
      Checked_By: "Dr.Rajendra Patel",
      Report_Ref: "ERODEII334l",
      Total_Cost: "₹ 3000",
    },
    {
      key: 3,
      Id: "ERFCE34",
      Patient_Name: "The Rock",
      Date: "12-09-2022",
      Checked_By: "Dr.Rajendra Patel",
      Report_Ref: "ERODEII334l",
      Total_Cost: "₹ 3000",
    },
    {
      key: 4,
      Id: "ERFCE34",
      Patient_Name: "The Rock",
      Date: "12-09-2022",
      Checked_By: "Dr.Rajendra Patel",
      Report_Ref: "ERODEII334l",
      Total_Cost: "₹ 3000",
    },
    {
      key: 5,
      Id: "ERFCE34",
      Patient_Name: "The Rock",
      Date: "12-09-2022",
      Checked_By: "Dr.Rajendra Patel",
      Report_Ref: "ERODEII334l",
      Total_Cost: "₹ 3000",
    },
    {
      key: 6,
      Id: "ERFCE34",
      Patient_Name: "The Rock",
      Date: "12-09-2022",
      Checked_By: "Dr.Rajendra Patel",
      Report_Ref: "ERODEII334l",
      Total_Cost: "₹ 3000",
    },
    {
      key: 7,
      Id: "ERFCE34",
      Patient_Name: "The Rock",
      Date: "12-09-2022",
      Checked_By: "Dr.Rajendra Patel",
      Report_Ref: "ERODEII334l",
      Total_Cost: "₹ 3000",
    },
  ];

  useEffect(() => {
    dispatch(GetBeds());
  });

  return (
    <>
      <div className="container">
        <Sidebar />
        <div className="AfterSideBar">
          <div className="Payment_Page">
            <h1 style={{ marginBottom: "2rem" }}>All Beds</h1>
            <div className="patientBox">
              <Table
                columns={columns}
                dataSource={data}
                className="PaymentTable"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Beds_Rooms;
