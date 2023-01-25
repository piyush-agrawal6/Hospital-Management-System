import React, { useState } from "react";
import { Radio } from "antd";
import banner from "../../../img/banner.png";
import profile from "../../../img/profile.png";
import "./DLogin.css";
import { useDispatch } from "react-redux";
import {
  AdminLogin,
  DoctorLogin,
  NurseLogin,
} from "../../../Redux/auth/action";

const DLogin = () => {
  const [placement, SetPlacement] = useState("Nurse");
  const [formvalue, setFormvalue] = useState({
    ID: "",
    password: "",
  });
  const dispatch = useDispatch();

  const Handlechange = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (formvalue.ID !== "" && formvalue.password !== "") {
      if (placement === "Nurse") {
        let data = {
          ...formvalue,
          nurseID: formvalue.ID,
        };
        dispatch(NurseLogin(data));
      } else if (placement === "Doctor") {
        let data = {
          ...formvalue,
          docID: formvalue.ID,
        };

        console.log(data);
        dispatch(DoctorLogin(data));
      } else if (placement === "Admin") {
        let data = {
          ...formvalue,
          adminID: formvalue.ID,
        };
        console.log(data);
        dispatch(AdminLogin(data));
      }
    }
  };

  const placementChange = (e) => {
    SetPlacement(e.target.value);
  };

  return (
    <>
      <div className="mainLoginPage">
        <div className="leftside">
          <img src={banner} alt="banner" />
        </div>
        <div className="rightside">
          <h1>Login</h1>
          <div>
            <Radio.Group
              value={placement}
              onChange={placementChange}
              className={"radiogroup"}
            >
              <Radio.Button value="Nurse" className={"radiobutton"}>
                Nurse
              </Radio.Button>
              <Radio.Button value="Doctor" className={"radiobutton"}>
                Doctor
              </Radio.Button>
              <Radio.Button value="Admin" className={"radiobutton"}>
                Admin
              </Radio.Button>
            </Radio.Group>
          </div>
          <div className="Profileimg">
            <img src={profile} alt="profile" />
          </div>
          <div>
            <form onSubmit={HandleSubmit}>
              <h3>{placement} ID</h3>
              <input
                type="number"
                name="ID"
                value={formvalue.ID}
                onChange={Handlechange}
                required
              />
              <h3>Password</h3>
              <input
                type="password"
                name="password"
                value={formvalue.password}
                onChange={Handlechange}
                required
              />
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default DLogin;
