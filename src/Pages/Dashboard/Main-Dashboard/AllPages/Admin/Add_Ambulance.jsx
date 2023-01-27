import React, { useState } from "react";
import one from "../../../../../img/ambuone.png";
import two from "../../../../../img/ambutwo.png";
import three from "../../../../../img/ambuthree.png";
import "./CSS/Add_Ambu.css";
import { useDispatch, useSelector } from "react-redux";
import { AmbulanceRegister } from "../../../../../Redux/auth/action";
import Sidebar from "../../GlobalFiles/Sidebar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate } from "react-router-dom";
const notify = (text) => toast(text);

const Add_Ambulance = () => {
  const { data } = useSelector((store) => store.auth);

  let [ambuType, setambuType] = useState("none");

  const [AmbuData, setAmbuDate] = useState({
    type: "none",
    charges: "",
    ambulanceID: "",
    ambulanceDriver: "",
    number: "",
  });

  const [loading, setloading] = useState(false);

  const dispatch = useDispatch();

  const HandleAmbuChange = (e) => {
    setAmbuDate({
      ...AmbuData,
      [e.target.name]: e.target.value,
    });
  };

  const HandleAmbuSubmit = (e) => {
    e.preventDefault();
    setloading(true);
    let data = {
      ...AmbuData,
      type: ambuType,
    };
    dispatch(AmbulanceRegister(data));
    setloading(false);
    notify("Ambulance Added");
  };

  if (data?.isAuthticated === false) {
    return <Navigate to={"/"} />;
  }

  if (data?.user.userType !== "admin") {
    return <Navigate to={"/dashboard"} />;
  }

  return (
    <>
      <ToastContainer />
      <div className="container">
        <Sidebar />
        <div className="AfterSideBar">
          <div className="mainAmbupance">
            <h1>Add Ambulance</h1>
            <div className="imagesection">
              <img
                src={one}
                alt="first_img"
                onClick={() => setambuType("Mobile ICU Ambulance")}
              />
              <img
                src={two}
                alt="first_img"
                onClick={() => setambuType("Basic Life Support Ambulance")}
              />
              <img
                src={three}
                alt="first_img"
                onClick={() => setambuType("Collective Ambulance")}
              />
            </div>
            {/* ******************************************************** */}
            <form onSubmit={HandleAmbuSubmit}>
              <div>
                <label>Ambulance Type</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="Select img"
                    name="type"
                    value={ambuType}
                    onChange={HandleAmbuChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Price per Hours</label>
                <div className="inputdiv">
                  <input
                    type="number"
                    placeholder="eg.200/-"
                    name="charges"
                    value={AmbuData.charges}
                    onChange={HandleAmbuChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Ambulance Code</label>
                <div className="inputdiv">
                  <input
                    type="number"
                    placeholder="eg.1223"
                    name="ambulanceID"
                    value={AmbuData.ambulanceID}
                    onChange={HandleAmbuChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Driver Name</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="Name"
                    name="ambulanceDriver"
                    value={AmbuData.ambulanceDriver}
                    onChange={HandleAmbuChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Driver Contact No</label>
                <div className="inputdiv">
                  <input
                    type="number"
                    placeholder="Contact No"
                    name="number"
                    value={AmbuData.number}
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

export default Add_Ambulance;
