import React from "react";
import { Tabs } from "antd";
import AllDoctor from "../Doctors/AllDoctor";
import AddDoctor from "../Doctors/AddDoctor";
const Home = () => {
  return (
    <div>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="All Doctors" key="1">
          <AllDoctor />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Add Doctor" key="2">
          <AddDoctor />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Search dOCTOR" key="3">
          Content of Tab Pane 3
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default Home;
