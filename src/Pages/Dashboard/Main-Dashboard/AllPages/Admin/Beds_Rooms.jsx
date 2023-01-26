import React, { useState } from "react";
import { Table } from "antd";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GetBeds } from "../../../../../Redux/Datas/action";
import Sidebar from "../../GlobalFiles/Sidebar";

const Beds_Rooms = () => {
  const columns = [
    { title: "Bed Id", dataIndex: "bedNumber", key: "bedNumber" },
    { title: "Occupied", dataIndex: "occupied", key: "occupied" },
    // { title: "Date", dataIndex: "Date", key: "Date" },
    // { title: "Checked By", dataIndex: "Checked_By", key: "Checked By" },
    // { title: "Report Ref", dataIndex: "Report_Ref", key: "Report Ref" },
  ];

  const dispatch = useDispatch();

  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      dispatch(GetBeds()).then((res) => {
        console.log(res);
        setData(res);
      });
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

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
