import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GetBeds } from "../../../../../Redux/Datas/action";
import Sidebar from "../../GlobalFiles/Sidebar";

const Beds_Rooms = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState([]);

  console.log(data);

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
              <table>
                <thead>
                  <tr>
                    <th>Room</th>
                    <th>Bed</th>
                    <th>Status</th>
                    <th>Patient</th>
                    <th>Disease</th>
                    <th>Doctor</th>
                    <th>Discharge</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((ele) => {
                    return (
                      <tr>
                        <td>{ele.roomNumber}</td>
                        <td style={{ marginLeft: "1rem" }}>{ele.bedNumber}</td>
                        <td
                          style={{
                            color:
                              ele.occupied === "available" ? "green" : "yellow",
                          }}
                        >
                          {ele.occupied}
                        </td>
                        <td>
                          {ele.patientID
                            ? ele.patientID.patientName
                            : "No Data"}
                        </td>
                        <td>
                          {ele.patientID?.disease
                            ? ele.patientID.disease
                            : "No Data"}
                        </td>
                        <td>
                          {ele.patientID?.docID
                            ? ele.patientID.docID.docName
                            : "No Data"}
                        </td>
                        <td>
                          <button
                            disabled={ele.occupied === "available"}
                            style={{
                              border: "none",
                              outline: "none",
                              background: "transparent",
                              color:
                                ele.occupied === "available" ? "gray" : "red",
                              cursor:
                                ele.occupied === "available" ? "" : "pointer",
                            }}
                          >
                            Discharge
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Beds_Rooms;
