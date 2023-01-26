import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Sidebar from "../../GlobalFiles/Sidebar";
import { AddBed } from "../../../../../Redux/Datas/action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const notify = (text) => toast(text);

const AddBeds = () => {
  const InitData = {
    roomNumber: "none",
    bedNumber: "",
    occupied: "available",
  };
  const [BedData, setBedData] = useState(InitData);

  const dispatch = useDispatch();

  const HandleAmbuChange = (e) => {
    setBedData({
      ...BedData,
      [e.target.name]: e.target.value,
    });
  };

  const HandleAmbuSubmit = (e) => {
    e.preventDefault();
    console.log(BedData);
    dispatch(AddBed(BedData));
    setBedData(InitData);
    notify("Bed Added");
  };

  return (
    <>
      <ToastContainer />
      <div className="container">
        <Sidebar />
        <div className="AfterSideBar">
          <div className="mainAmbupance">
            <h1>Add Beds</h1>

            {/* ******************************************************** */}
            <form onSubmit={HandleAmbuSubmit}>
              <div>
                <label>Bed Number</label>
                <div className="inputdiv">
                  <input
                    type="number"
                    placeholder="bed No"
                    name="bedNumber"
                    value={BedData.bedNumber}
                    onChange={HandleAmbuChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Room Number</label>
                <div className="inputdiv">
                  <input
                    type="number"
                    placeholder="room no"
                    name="roomNumber"
                    value={BedData.roomNumber}
                    onChange={HandleAmbuChange}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="formsubmitbutton">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBeds;
