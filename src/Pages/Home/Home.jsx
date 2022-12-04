import React from "react";
import { Tabs } from "antd";
const Home = () => {
  return (
    <div>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="All Patients" key="1">
          <h1>Form inputs </h1>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Admit Patient" key="2">
          Content of Tab Pane 2
        </Tabs.TabPane>
        <Tabs.TabPane tab="Search Patient" key="3">
          Content of Tab Pane 3
        </Tabs.TabPane>
        <Tabs.TabPane tab="Create Report" key="4">
          Content of Tab Pane 4
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default Home;
