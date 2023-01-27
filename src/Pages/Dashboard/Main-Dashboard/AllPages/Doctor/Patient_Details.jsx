import { Table } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Sidebar from "../../GlobalFiles/Sidebar";
import Topbar from "../../GlobalFiles/Topbar";

const Patient_Details = () => {
  const { data } = useSelector((store) => store.auth);

  const columns = [
    { title: "Id", dataIndex: "Id", key: "Id" },
    { title: "Patient Name", dataIndex: "Patient_Name", key: "Patient Name" },
    { title: "Date", dataIndex: "Date", key: "Date" },
    { title: "Checked By", dataIndex: "Checked_By", key: "Checked By" },
    { title: "Report Ref", dataIndex: "Report_Ref", key: "Report Ref" },
  ];

  const Datas = [
    {
      key: 1,
      Id: "ERFCE34",
      Patient_Name: "The Rock",
      Date: "12-09-2022",
      Checked_By: "Dr.Rajendra Patel",
      Report_Ref: "ERODEII334l",
    },
    {
      key: 2,
      Id: "ERFCE34",
      Patient_Name: "The Rock",
      Date: "12-09-2022",
      Checked_By: "Dr.Rajendra Patel",
      Report_Ref: "ERODEII334l",
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
          <Topbar />
          <div className="Payment_Page">
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

export default Patient_Details;
