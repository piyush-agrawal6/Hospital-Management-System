import React from "react";
import { Routes, Route } from "react-router-dom";
import Add_Ambulance from "./AllPages/Admin/Add_Ambulance";
import AddDoctor from "./AllPages/Admin/Add_Doctor";
import Add_Nurse from "./AllPages/Admin/Add_Nurse";
import Check_Payment from "./AllPages/Admin/Check_Payment";
import Check_Appointment from "./AllPages/Doctor/Check_Appointment";
import Discharge_and_Create_Slip from "./AllPages/Doctor/Discharge_and_Create_Slip";
import Doctor_Profile from "./AllPages/Doctor/Doctor_Profile";
import Patient_Details from "./AllPages/Doctor/Patient_Details";
import Add_Patient from "./AllPages/Nurse/Add_Patient";
import Book_Appointment from "./AllPages/Nurse/Book_Appointment";
import Nurse_Profile from "./AllPages/Nurse/Nurse_Profile";
import FrontPage from "./GlobalFiles/FrontPage";
import Sidebar from "./GlobalFiles/Sidebar";

const Dashboard_Routers = () => {
  return (
    <div>
      <Sidebar>
        <Routes>
          ******************** Admin Part *************************
          <Route path="/" element={<FrontPage />} />
          <Route path="/addoctor" element={<AddDoctor />} />
          <Route path="/addambulance" element={<Add_Ambulance />} />
          <Route path="/addnurse" element={<Add_Nurse />} />
          <Route path="/checkpayment" element={<Check_Payment />} />
          ******************** Doctor Part *************************
          <Route path="/checkappointment" element={<Check_Appointment />} />
          <Route path="/createslip" element={<Discharge_and_Create_Slip />} />
          <Route path="/patientdetails" element={<Patient_Details />} />
          <Route path="/doctorprofile" element={<Doctor_Profile />} />
          ******************** Nurse Part *************************
          <Route path="/addpatient" element={<Add_Patient />} />
          <Route path="/bookappointment" element={<Book_Appointment />} />
          <Route path="/nurseprofile" element={<Nurse_Profile />} />
        </Routes>
      </Sidebar>
    </div>
  );
};

export default Dashboard_Routers;
