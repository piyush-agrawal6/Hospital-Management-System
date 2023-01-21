import React, { useState } from "react";
import { UserOutlined, MobileOutlined } from "@ant-design/icons";
import { Button, DatePicker, Input, TimePicker, TreeSelect } from "antd";
import { CiVirus } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { CommonProblem } from "./MixedObjectData";
import { DepartmentData } from "./MixedObjectData";
import {
  Psychiatrist,
  Pediatrics,
  Dermatology,
  Pediatrician,
  Neurologist,
} from "./MixedObjectData";

// import "./CSS/Appointment.css";

const Add_Patient = () => {
  const [value, setValue] = useState("");
  const [showenterProblem, setEnterProblem] = useState("none");
  const [DepartmentValue, setDepartmentValue] = useState();
  const [DoctorValue, setDoctorValue] = useState();
  const [DoctorData, setDoctorData] = useState();

  const onProblemChange = (newValue) => {
    console.log(newValue);
    setValue(newValue);
    if (newValue === "Other Problem") {
      setEnterProblem("block");
    } else {
      setEnterProblem("none");
    }
  };

  const onDepartmentChange = (newValue) => {
    setDepartmentValue(newValue);
    if (newValue === "Psychiatrist") {
      setDoctorValue(Psychiatrist);
    } else if (newValue === "Pediatrics") {
      setDoctorValue(Pediatrics);
    } else if (newValue === "Dermatology") {
      setDoctorValue(Dermatology);
    } else if (newValue === "Pediatrician") {
      setDoctorValue(Pediatrician);
    } else if (newValue === "Neurologist") {
      setDoctorValue(Neurologist);
    }
  };

  const onDateChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const onDoctorChange = (newValue) => {
    console.log(newValue);
    setDoctorData(newValue);
  };

  const format = "HH:mm";

  return (
    <>
      <div className="Main_Add_Doctor_div">
        <h1>Add A Patient</h1>
        <form>
          {/* Name PlaceHolder */}
          <div>
            <label>Patient Name</label>
            <div className="inputdiv">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
          </div>

          {/* AGE PLACEHOLDER  */}
          <div>
            <label>Age</label>
            <div className="inputdiv">
              <input type="number" placeholder="Age" />
            </div>
          </div>
          {/* GENDER PLACEHOLDER  */}
          <div>
            <label>Gender</label>
            <div className="inputdiv">
              <select>
                <option value="Choose Blood Group">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          {/* MOBILE PLACEHOLDER */}
          <div>
            <label>Contact Number</label>
            <div className="inputdiv">
              <input type="number" placeholder="Number" />
            </div>
          </div>
          {/* PROBLEM PLACEHOLDER */}
          <div>
            <label>Type of Disease</label>
            <div className="inputdiv">
              <select value={value} onChange={onProblemChange}>
                <option value="Choose Blood Group">Select Disease</option>
                {CommonProblem.map((ele, i) => {
                  return (
                    <option key={i} value={ele.title}>
                      {ele.title}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          {/* ENTER SAMPLE DISEASE */}
          <Input
            className="ChangeDisplayProblem"
            size="large"
            placeholder="Enter Your Problem"
            prefix={<CiVirus className="site-form-item-icon" />}
            type="text"
            style={{ display: showenterProblem }}
          />
          {/* DEPARTMENT SECTION */}
          <div className="DepartmentSection">
            <TreeSelect
              style={{ width: "100%" }}
              value={DepartmentValue}
              dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
              treeData={DepartmentData}
              placeholder="Choose your Department"
              treeDefaultExpandAll
              onChange={onDepartmentChange}
            />
          </div>
          {/* DOCTOR SECTION */}
          <div className="DepartmentSection">
            <TreeSelect
              style={{ width: "100%" }}
              value={DoctorData}
              dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
              treeData={DoctorValue}
              placeholder="Choose Doctor"
              treeDefaultExpandAll
              onChange={onDoctorChange}
            />
          </div>
          {/* APPOINTMENT DATE  */}
          <div className="dateofAppointment">
            <p>Date and Time of Appointment:</p>
            <div>
              <DatePicker onChange={onDateChange} />
              <TimePicker format={format} />
            </div>
          </div>
          {/* EMAIL PART  */}
          <Input
            size="large"
            placeholder="Enter your email"
            prefix={<AiOutlineMail className="site-form-item-icon" />}
            type="email"
          />
          <Button type="primary" className="SubmitButton" block>
            Book Appointment
          </Button>
        </form>
      </div>
    </>
  );
};

export default Add_Patient;
