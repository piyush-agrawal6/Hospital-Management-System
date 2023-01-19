import { Table } from "antd";
import React from "react";

const FrontPage = () => {
  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Age", dataIndex: "age", key: "age" },
    { title: "Disease", dataIndex: "disease", key: "disease" },
    { title: "Country", dataIndex: "country", key: "country" },
    { title: "Contact", dataIndex: "contact", key: "Contact" },
  ];

  const data = [
    {
      key: 1,
      name: "John Brown",
      age: 32,
      country: "India",
      disease: "Cancer",
      contact: 7989053752,
    },
    {
      key: 2,
      name: "Jim Green",
      age: 42,
      country: "China",
      disease: "Heart Problem",
      contact: 7989053752,
    },
    {
      key: 3,
      name: "Not Expandable",
      age: 29,
      country: "Japan",
      disease: "Diabetes",
      contact: 7989053752,
    },
    {
      key: 4,
      name: "Joe Black",
      age: 32,
      country: "Singapore",
      disease: "bird flu",
      contact: 7989053752,
    },
  ];

  return (
    <>
      <div className="maindiv">
        <div className="one commondiv">Doctor</div>
        <div className="two commondiv">Nurse</div>
        <div className="three commondiv">Patient</div>
        <div className="four commondiv">Beds</div>
        <div className="five commondiv">Ambulance</div>
        <div className="six commondiv">Pharmacist</div>
      </div>
      {/* ************************************* */}
      <div className="patientDetails">
        <h1>Doctors Detail </h1>
        <div className="patientBox">
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
    </>
  );
};

export default FrontPage;
