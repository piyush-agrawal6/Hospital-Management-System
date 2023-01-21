import React, { useState } from "react";
import { CommonProblem } from "./MixedObjectData";

const Book_Appointment = () => {
  const [showenterProblem, setEnterProblem] = useState("none");

  const onProblemChange = () => {
    if (BookAppoint.disease !== "Other Problem") {
      setEnterProblem("flex");
    } else {
      setEnterProblem("none");
    }
    console.log(BookAppoint.disease);
  };

  const [BookAppoint, setBookAppoint] = useState({
    name: "",
    id: "",
    age: "",
    gender: "",
    number: "",
    disease: "",
    address: "",
    department: "",
    date: "",
    time: "",
  });

  const HandleAppointment = (e) => {
    setBookAppoint({ ...BookAppoint, [e.target.name]: e.target.value });
  };

  const HandleOnsubmitAppointment = (e) => {
    e.preventDefault();
    console.log(BookAppoint);
  };

  return (
    <>
      <div className="Main_Add_Doctor_div">
        <h1>Book Appointment</h1>
        <form onSubmit={HandleOnsubmitAppointment}>
          {/* Name PlaceHolder */}
          <div>
            <label>Patient Name</label>
            <div className="inputdiv">
              <input
                type="text"
                placeholder="First Name"
                name="name"
                value={BookAppoint.name}
                onChange={HandleAppointment}
              />
            </div>
          </div>
          {/* Name PlaceHolder */}
          <div>
            <label>Patient Id</label>
            <div className="inputdiv">
              <input
                type="text"
                placeholder="Id"
                name="id"
                value={BookAppoint.id}
                onChange={HandleAppointment}
              />
            </div>
          </div>

          {/* AGE PLACEHOLDER  */}
          <div>
            <label>Age</label>
            <div className="inputdiv">
              <input
                type="number"
                placeholder="Age"
                name="age"
                value={BookAppoint.age}
                onChange={HandleAppointment}
              />
            </div>
          </div>
          {/* GENDER PLACEHOLDER  */}
          <div>
            <label>Gender</label>
            <div className="inputdiv">
              <select
                name="gender"
                value={BookAppoint.gender}
                onChange={HandleAppointment}
              >
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
              <input
                type="number"
                placeholder="Number"
                name="number"
                value={BookAppoint.number}
                onChange={HandleAppointment}
              />
            </div>
          </div>
          {/* PROBLEM PLACEHOLDER */}
          <div>
            <label>Type of Disease</label>
            <div className="inputdiv">
              <select
                name="disease"
                value={BookAppoint.disease}
                onChange={(e) => {
                  onProblemChange();
                  HandleAppointment(e);
                }}
              >
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
          <div style={{ display: showenterProblem }}>
            <label></label>
            <div className="inputdiv">
              <input type="text" placeholder="Enter Your Problem" />
            </div>
          </div>
          {/* ADDRESS SECTION  */}
          <div>
            <label>Address</label>
            <div className="inputdiv">
              <input
                type="text"
                placeholder="Address line 1"
                name="address"
                value={BookAppoint.address}
                onChange={HandleAppointment}
              />
            </div>
          </div>
          {/* DEPARTMENT SECTION */}
          <div>
            <label>Department (Optional)</label>
            <div className="inputdiv">
              <input
                type={"text"}
                placeholder="Choose your Department"
                name="department"
                value={BookAppoint.department}
                onChange={HandleAppointment}
              />
            </div>
          </div>
          {/* APPOINTMENT DATE  */}
          <div className="dateofAppointment">
            <p>Date and Time of Appointment:</p>
            <div className="inputdiv">
              <input
                type={"date"}
                placeholder="Choose Date"
                name="date"
                value={BookAppoint.date}
                onChange={HandleAppointment}
              />
              <input
                type={"time"}
                placeholder="Choose Time"
                name="time"
                value={BookAppoint.time}
                onChange={HandleAppointment}
              />
            </div>
          </div>

          <button
            type="submit"
            className="formsubmitbutton"
            style={{ width: "30%" }}
          >
            Book Appointment
          </button>
        </form>
      </div>
    </>
  );
};

export default Book_Appointment;
