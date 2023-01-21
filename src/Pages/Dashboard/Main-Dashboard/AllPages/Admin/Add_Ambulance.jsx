import React, { useState } from "react";
import one from "../../../../../img/ambuone.png";
import two from "../../../../../img/ambutwo.png";
import three from "../../../../../img/ambuthree.png";
import "./CSS/Add_Ambu.css";

const Add_Ambulance = () => {
  let [ambuType, setambuType] = useState("");

  const [AmbuData, setAmbuDate] = useState({
    AmbulanceType: ambuType,
    charges: "",
    code: "",
    driver: "",
    driverNumber: "",
  });

  const HandleAmbuChange = (e) => {
    setAmbuDate({
      ...AmbuData,
      [e.target.name]: e.target.value,
      AmbulanceType: ambuType,
    });
  };

  const HandleAmbuSubmit = (e) => {
    e.preventDefault();
    console.log(AmbuData);
  };

  return (
    <>
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
              <input type="text" placeholder="Select img" value={ambuType} />
            </div>
          </div>
          <div>
            <label>Price per Hours</label>
            <div className="inputdiv">
              <input
                type="text"
                placeholder="eg.200/-"
                name="charges"
                value={AmbuData.charges}
                onChange={HandleAmbuChange}
              />
            </div>
          </div>
          <div>
            <label>Ambulance Code</label>
            <div className="inputdiv">
              <input
                type="text"
                placeholder="eg.EVB36A"
                name="code"
                value={AmbuData.code}
                onChange={HandleAmbuChange}
              />
            </div>
          </div>
          <div>
            <label>Driver Name</label>
            <div className="inputdiv">
              <input
                type="text"
                placeholder="Name"
                name="driver"
                value={AmbuData.driver}
                onChange={HandleAmbuChange}
              />
            </div>
          </div>
          <div>
            <label>Driver Contact No</label>
            <div className="inputdiv">
              <input
                type="number"
                placeholder="Contact No"
                name="driverNumber"
                value={AmbuData.driverNumber}
                onChange={HandleAmbuChange}
              />
            </div>
          </div>
          <button type="submit" className="formsubmitbutton">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Add_Ambulance;
