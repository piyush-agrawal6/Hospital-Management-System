import React from "react";
import "./CSS/Add_Doctor.css";
import doctor from "../../../../../img/doctoravatar.png";

const AddDoctor = () => {
  return (
    <div className="Main_Add_Doctor_div">
      <h1>Add Doctors</h1>
      <img src={doctor} alt="doctor" className="avatarimg" />
      <form>
        <div>
          <label>Doctor Name</label>
          <div className="inputdiv">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
        </div>
        <div>
          <label>Birthdate</label>
          <div className="inputdiv">
            <input type="date" placeholder="dd-mm-yy" />
          </div>
        </div>
        <div>
          <label>Aadhar Card No.</label>
          <div className="inputdiv">
            <input type="number" placeholder="Aadhar Card No" />
          </div>
        </div>
        <div>
          <label>Emergency Contact Number</label>
          <div className="inputdiv">
            <input type="number" placeholder="Emergency Number" />
          </div>
        </div>
        <div>
          <label>Email</label>
          <div className="inputdiv">
            <input type="number" placeholder="abc@abc.com" />
          </div>
        </div>
        <div>
          <label>Blood Group</label>
          <div className="inputdiv">
            <select>
              <option value="Choose Blood Group">Select</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>
        </div>
        <div>
          <label>Address</label>
          <div className="inputdiv">
            <input type="text" placeholder="Address line 1" />
            <input type="text" placeholder="Address line 2" />
          </div>
        </div>
        <div>
          <label>Education</label>
          <div className="inputdiv">
            <input type="text" placeholder="eg.MBBS" />
          </div>
        </div>
        <div>
          <label>Specility</label>
          <div className="inputdiv">
            <input type="text" placeholder="Specility" />
          </div>
        </div>
        <div>
          <label>Hospital Name</label>
          <div className="inputdiv">
            <input type="text" placeholder="e.g : City Hospital" />
          </div>
        </div>
        <div>
          <label>Hospital Address</label>
          <div className="inputdiv">
            <input type="text" placeholder="building/area" />
            <input type="text" placeholder="city" />
            <input type="text" placeholder="state" />
          </div>
        </div>
        <div>
          <label>Doctor ID</label>
          <div className="inputdiv">
            <input type="text" placeholder="ID" />
          </div>
        </div>
        <div>
          <label>Password</label>
          <div className="inputdiv">
            <input type="text" placeholder="Password" />
          </div>
        </div>
        <button type="submit" className="formsubmitbutton">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddDoctor;
