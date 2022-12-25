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

import "./Appointment.css";

const Appointment = () => {
  const [value, setValue] = useState();
  const [showenterProblem, setEnterProblem] = useState("none");
  const [DepartmentValue, setDepartmentValue] = useState();
  const [DoctorValue, setDoctorValue] = useState();
  const [DoctorData, setDoctorData] = useState();

  const onProblemChange = (newValue) => {
    setValue(newValue);
    if (newValue === "Other Problem") {
      setEnterProblem("flex");
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
    <div className="MainAppointment">
      <form>
        <h1>BOOK AN APPOINTMENT</h1>
        {/* Name PlaceHolder */}
        <Input
          size="large"
          placeholder="Enter your name"
          prefix={<UserOutlined className="site-form-item-icon" />}
        />
        {/* AGE PLACEHOLDER  */}
        <Input
          size="large"
          placeholder="Enter your age"
          prefix={<UserOutlined className="site-form-item-icon" />}
          type="number"
        />
        {/* GENDER PLACEHOLDER  */}
        <div className="GenderClass">
          <p>Choose Gender:</p>
          <div>
            <input type="radio" id="male" name="gender" value="Male" />
            <label for="male">Male</label>
            <input type="radio" id="female" name="gender" value="Female" />
            <label for="female">Female</label>
            <input type="radio" id="others" name="gender" value="Others" />
            <label for="others">Others</label>
          </div>
        </div>
        {/* MOBILE PLACEHOLDER */}
        <Input
          size="large"
          placeholder="Enter your number"
          prefix={<MobileOutlined className="site-form-item-icon" />}
          type="number"
        />
        {/* PROBLEM PLACEHOLDER */}
        <div className="ProblemClass">
          <TreeSelect
            style={{ width: "100%" }}
            value={value}
            dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
            treeData={CommonProblem}
            placeholder="Choose your problem"
            treeDefaultExpandAll
            onChange={onProblemChange}
          />
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
  );
};

export default Appointment;
