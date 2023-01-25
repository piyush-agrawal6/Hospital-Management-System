import React from "react";
import { Route, Routes } from "react-router-dom";
import DLogin from "../Pages/Dashboard/Dashboard-Login/DLogin";
import Dashboard_Routers from "../Pages/Dashboard/Main-Dashboard/Dashboard_Routers";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DLogin />} />
      <Route path="/dashboard" element={<Dashboard_Routers />} />
      {/* <Route path="" element={} /> */}
    </Routes>
  );
};

export default AllRoutes;
