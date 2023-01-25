import React from "react";
import { Route, Routes } from "react-router-dom";
import DLogin from "../Pages/Dashboard/Dashboard-Login/DLogin";
import Dashboard_Routers from "../Pages/Dashboard/Main-Dashboard/Dashboard_Routers";
import Sidebar from "../Pages/Dashboard/Main-Dashboard/GlobalFiles/Sidebar";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DLogin />} />
      <Route path="/dashboard" element={<Sidebar />} />
      {/* <Route path="" element={} /> */}
    </Routes>
  );
};

export default AllRoutes;
