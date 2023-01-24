import React, { useState } from "react";

const Discharge_and_Create_Slip = () => {
  const [DoctorValue, setDoctorValue] = useState({
    name: "",
    age: "",
    number: "",
    email: "",
    blood: "",
    gender: "",
    dob: "",
    addressone: "",
    addresstwo: "",
    education: "",
    speciality: "",
    Id: "",
    password: "",
    otherDetails: "",
  });

  const HandleDoctorChange = (e) => {
    setDoctorValue({ ...DoctorValue, [e.target.name]: e.target.value });
  };

  const HandleDoctorSubmit = (e) => {
    e.preventDefault();
    console.log(DoctorValue);
  };
  return (
    <>
      <div className="Main_Add_Doctor_div">
        <h1>Create Report</h1>
        <form onSubmit={HandleDoctorSubmit}>
          <div>
            <label>Patient Name</label>
            <div className="inputdiv">
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                value={DoctorValue.name}
                onChange={HandleDoctorChange}
              />
            </div>
          </div>
          <div>
            <label>Age</label>
            <div className="inputdiv">
              <input
                type="number"
                placeholder="Age"
                name="age"
                value={DoctorValue.age}
                onChange={HandleDoctorChange}
              />
            </div>
          </div>
          <div>
            <label>Gender</label>
            <div className="inputdiv">
              <select
                name="gender"
                value={DoctorValue.gender}
                onChange={HandleDoctorChange}
              >
                <option value="Choose Gender">Choose Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
            </div>
          </div>
          <div>
            <label>Blood Group</label>
            <div className="inputdiv">
              <select
                name="blood"
                value={DoctorValue.blood}
                onChange={HandleDoctorChange}
              >
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
            <label>Disease</label>
            <div className="inputdiv">
              <input
                type="text"
                placeholder="Disease"
                name="number"
                value={DoctorValue.number}
                onChange={HandleDoctorChange}
              />
            </div>
          </div>
          <div>
            <label>Temperature</label>
            <div className="inputdiv">
              <input
                type="number"
                placeholder="99^C"
                name="email"
                value={DoctorValue.email}
                onChange={HandleDoctorChange}
              />
            </div>
          </div>

          <div>
            <label>Weight</label>
            <div className="inputdiv">
              <input
                type="number"
                placeholder="75 KG"
                name="dob"
                value={DoctorValue.dob}
                onChange={HandleDoctorChange}
              />
            </div>
          </div>
          <div>
            <label>Blood Pressure</label>
            <div className="inputdiv adressdiv">
              <input
                type="text"
                placeholder="140/90 mmHg"
                name="addressone"
                value={DoctorValue.addressone}
                onChange={HandleDoctorChange}
              />
            </div>
          </div>
          <div>
            <label>Blood Glucose level</label>
            <div className="inputdiv">
              <input
                type="text"
                placeholder="99 mg/dL"
                name="education"
                value={DoctorValue.education}
                onChange={HandleDoctorChange}
              />
            </div>
          </div>
          <div>
            <label>Extra Info</label>
            <div className="inputdiv">
              <input
                type="text"
                placeholder="Info"
                name="speciality"
                value={DoctorValue.speciality}
                onChange={HandleDoctorChange}
              />
            </div>
          </div>
          <div>
            <label>Medicines</label>
            <div className="inputdiv">
              <input
                type="text"
                placeholder="PCM"
                name="Id"
                value={DoctorValue.Id}
                onChange={HandleDoctorChange}
              />
            </div>
          </div>
          <div>
            <label>Dosage</label>
            <div className="inputdiv">
              <input
                type="text"
                placeholder="Night-2"
                name="password"
                value={DoctorValue.password}
                onChange={HandleDoctorChange}
              />
            </div>
          </div>
          <div>
            <label>Duration</label>
            <div className="inputdiv">
              <input
                type="text"
                placeholder="10 Days"
                name="password"
                value={DoctorValue.password}
                onChange={HandleDoctorChange}
              />
            </div>
          </div>
          <div>
            <label>Doctor Name</label>
            <div className="inputdiv">
              <input
                type="text"
                placeholder="Pushpa"
                name="password"
                value={DoctorValue.password}
                onChange={HandleDoctorChange}
              />
            </div>
          </div>
          <div>
            <label>Doctor Number</label>
            <div className="inputdiv">
              <input
                type="text"
                placeholder="1234******"
                name="password"
                value={DoctorValue.password}
                onChange={HandleDoctorChange}
              />
            </div>
          </div>

          <button type="submit" className="formsubmitbutton">
            Generate Report
          </button>
        </form>
      </div>
    </>
  );
};

export default Discharge_and_Create_Slip;
