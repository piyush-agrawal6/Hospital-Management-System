import React from "react";
import { UserOutlined, MobileOutlined } from "@ant-design/icons";
import { Input } from "antd";
import "./Appointment.css";

const Appointment = () => {
  return (
    <div className="MainAppointment">
      <form>
        <h1>BOOK AN APPOINTMENT</h1>
        <Input
          size="large"
          placeholder="Enter your name"
          prefix={<UserOutlined className="site-form-item-icon" />}
        />
        <Input
          size="large"
          placeholder="Enter your age"
          prefix={<UserOutlined className="site-form-item-icon" />}
          type="number"
        />
        <p>Please Choose Gender:</p>
        <input type="radio" id="male" name="gender" value="Male" />
        <label for="male">Male</label>
        <input type="radio" id="female" name="gender" value="Female" />
        <label for="female">Female</label>
        <input type="radio" id="others" name="gender" value="Others" />
        <label for="others">Others</label>
        <Input
          size="large"
          placeholder="Enter your number"
          prefix={<MobileOutlined className="site-form-item-icon" />}
          type="number"
        />
      </form>
    </div>
  );
};

export default Appointment;
