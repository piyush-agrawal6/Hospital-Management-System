import { Table } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Sidebar from "../../GlobalFiles/Sidebar";
import "./CSS/Payment.css";

const Check_Payment = () => {
  const { data } = useSelector((store) => store.auth);

  const columns = [
    { title: "Id", dataIndex: "Id", key: "Id" },
    { title: "Patient Name", dataIndex: "Patient_Name", key: "Patient Name" },
    { title: "Date", dataIndex: "Date", key: "Date" },
    { title: "Checked By", dataIndex: "Checked_By", key: "Checked By" },
    { title: "Report Ref", dataIndex: "Report_Ref", key: "Report Ref" },
    { title: "Total Cost", dataIndex: "Total_Cost", key: "Total Cost" },
  ];

  if (data?.isAuthticated === false) {
    return <Navigate to={"/"} />;
  }

  if (data?.user.userType !== "admin") {
    return <Navigate to={"/dashboard"} />;
  }
  return (
    <>
      <div className="container">
        <Sidebar />
        <div className="AfterSideBar">
          <div className="Payment_Page">
            <h1 style={{ marginBottom: "2rem" }}>All Payments</h1>
            <div className="patientBox">
              {/* <Table
                columns={columns}
                dataSource={data}
                className="PaymentTable"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Check_Payment;
