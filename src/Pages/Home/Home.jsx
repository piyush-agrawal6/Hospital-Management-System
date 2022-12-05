import React from "react";
import { Tabs } from "antd";
const Home = () => {
  return (
    <div>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="All Doctors" key="1"></Tabs.TabPane>
        <Tabs.TabPane tab="Add Doctor" key="2">
          Content of Tab Pane 2
        </Tabs.TabPane>
        <Tabs.TabPane tab="Search dOCTOR" key="3">
          Content of Tab Pane 3
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default Home;
