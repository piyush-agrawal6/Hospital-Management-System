import React from "react";
import "./CSS/Add_Doctor.css";

const AddDoctor = () => {
  return (
    <div className="Main_Add_Doctor_div">
      <h1>Add Doctors</h1>
      <form>
        <div>
          <p>Doctor Name</p>
          <div>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
        </div>
        <div>
          <p>Birthdate</p>
          <input type="date" placeholder="dd-mm-yy" />
        </div>
        <div>
          <p>Aadhar Card No.</p>
          <input type="number" placeholder="Aadhar Card No" />
        </div>
        <div>
          <p>Emergency Contact Number</p>
          <input type="number" placeholder="Emergency Number" />
        </div>
        <div>
          <p>Email</p>
          <input type="number" placeholder="abc@abc.com" />
        </div>
        <div>
          <p>Blood Group</p>
          <select>
            <option value="Choose Blood Group">Choose Blood Group</option>
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
        <div>
          <p>Address</p>
          <div>
            <input type="text" placeholder="Address line 1" />
            <input type="text" placeholder="Address line 2" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddDoctor;
