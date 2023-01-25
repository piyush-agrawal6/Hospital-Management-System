import { Table } from "antd";
import React from "react";
import Sidebar from "../../GlobalFiles/Sidebar";
import "./CSS/Payment.css";

const Check_Payment = () => {
  const columns = [
    { title: "Id", dataIndex: "Id", key: "Id" },
    { title: "Patient Name", dataIndex: "Patient_Name", key: "Patient Name" },
    { title: "Date", dataIndex: "Date", key: "Date" },
    { title: "Checked By", dataIndex: "Checked_By", key: "Checked By" },
    { title: "Report Ref", dataIndex: "Report_Ref", key: "Report Ref" },
    { title: "Total Cost", dataIndex: "Total_Cost", key: "Total Cost" },
  ];

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

  return (
    <>
      <div className="container">
        <Sidebar />
        <div className="AfterSideBar">
          <div className="Payment_Page">
            <h1 style={{ marginBottom: "2rem" }}>All Payments</h1>
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

export default Check_Payment;
