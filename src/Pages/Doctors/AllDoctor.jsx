import { Button, Table, Modal, Input, Row, Col } from "antd";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import AddDoctor from "./AddDoctor";
const dummydata = [
  {
    Doctorid: "dCT@123",
    name: "John",
    email: "john@gmail.com",
    Contact: "9844347481",
    SpacialList: "ENT",
    Age: 55,
    MaritalStatus: "married",
    Gender: "Male",
    Education: "MBBS",
    DateofJoin: "12-12-2022",
    Experience: "5",
    Location: "chennai",
  },
  {
    Doctorid: "dCT@124",
    name: "John",
    email: "john@gmail.com",
    Contact: "9844347481",
    SpacialList: "Nero",
    Age: 55,
    MaritalStatus: "married",
    Gender: "Male",
    Education: "MBBS",
    DateofJoin: "12-12-2022",
    Experience: "5",
    Location: "chennai",
  },
];

function Main() {
  const [isEditing, setIsEditing] = useState(false);
  const [editingDoctor, setEditingStudent] = useState(null);
  const [dataSource, setDataSource] = useState(dummydata);
  const [formdata, setFormdata] = useState([]);

  console.log("dataSource:", dataSource);
  let found = [];
  const filter_data = dataSource.filter((el) => {
    if (el.SpacialList) {
      found.push({ text: el.SpacialList, value: el.SpacialList });
    }
  });
  console.log(" filter_data:", found);
  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "Doctorid",
      width: "20%",
    },
    {
      key: "2",
      title: "Name",
      dataIndex: "name",
      width: "20%",
    },
    {
      key: "3",
      title: "Email",
      dataIndex: "email",
      width: "20%",
    },
    {
      key: "4",
      title: "SpacialList",
      dataIndex: "SpacialList",
      width: "20%",
      filters: found,
      onFilter: (value, record) => record.SpacialList.indexOf(value) === 0,
    },
    // {
    //   key: "5",
    //   title: "SpacialList",
    //   dataIndex: "SpacialList",
    //   width: "13%",
    // },
    // {
    //   key: "6",
    //   title: "Age",
    //   dataIndex: "Age",
    //   width: "3%",
    // },
    // {
    //   key: "7",
    //   title: "Gender",
    //   dataIndex: "Gender",
    //   width: "5%",
    // },
    // {
    //   key: "8",
    //   title: "Education",
    //   dataIndex: "Education",
    //   width: "5%",
    //   editable: true,
    // },
    // {
    //   key: "9",
    //   title: "DateofJoin",
    //   dataIndex: "DateofJoin",
    //   width: "8%",
    //   editable: true,
    // },
    // {
    //   key: "10",
    //   title: "DateofJoin",
    //   dataIndex: "DateofJoin",
    //   width: "8%",
    //   editable: true,
    // },
    // {
    //   key: "11",
    //   title: "Experience",
    //   dataIndex: "Experience",
    //   width: "8%",
    //   editable: true,
    // },
    // {
    //   key: "12",
    //   title: "Location",
    //   dataIndex: "Location",
    //   width: "8%",
    //   editable: true,
    // },
    {
      key: "6",
      title: "Option",
      render: (record) => {
        console.log("record:", record.Doctorid);
        return (
          <>
            <EditOutlined
              onClick={() => {
                onEditStudent(record);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                onDeleteStudent(record);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];

  // const onAddStudent = () => {
  //   const randomNumber = parseInt(Math.random() * 1000);
  //   const newStudent = {
  //     id: randomNumber,
  //     name: "Name " + randomNumber,
  //     email: randomNumber + "@gmail.com",
  //     Contact: "Address " + randomNumber,
  //   };
  //   setDataSource((pre) => {
  //     return [...pre, newStudent];
  //   });
  // };

  const onDeleteStudent = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this student record?",
      okText: "Yes",

      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((student) => student.id !== record.id);
        });
      },
    });
  };
  const onEditStudent = (record) => {
    setIsEditing(true);
    setEditingStudent({ ...record });
  };
  const resetEditing = () => {
    setIsEditing(false);
    setEditingStudent(null);
  };
  const handleCatch = (e) => {
    const { name, value } = e.target;
    console.log(editingDoctor.Doctorid);
    setEditingStudent({ ...editingDoctor, [name]: value });
  };
  return (
    <div className="App">
      <AddDoctor />
      <header className="App-header">
        {/* <Button onClick={onAddStudent}>Add a new Student</Button> */}
        <Table columns={columns} dataSource={dataSource}></Table>
        <Modal
          title="Edit Doctor Details"
          open={isEditing}
          okText="Save"
          onCancel={() => {
            resetEditing();
          }}
          onOk={() => {
            setDataSource((pre) => {
              return pre.map((Doctor) => {
                if (Doctor.Doctorid === editingDoctor.Doctorid) {
                  return editingDoctor;
                } else {
                  return Doctor;
                }
              });
            });
            resetEditing();
          }}
        >
          <Row gutter={[8, 8]}>
            <Col span={10}>
              <label>Name</label>
              <Input
                value={editingDoctor?.name}
                name="name"
                onChange={handleCatch}
              />
            </Col>
            <Col span={14}>
              <label>Email</label>
              <Input
                value={editingDoctor?.email}
                name="email"
                onChange={handleCatch}
              />
            </Col>
            <Col span={9}>
              <label>Ph.Number</label>
              <Input
                value={editingDoctor?.Contact}
                name="Contact"
                onChange={handleCatch}
              />
            </Col>
            <Col span={5}>
              <label>Age</label>
              <Input
                value={editingDoctor?.Age}
                name="Age"
                onChange={handleCatch}
              />
            </Col>
            <Col span={10}>
              <label>Gender</label>
              <Input
                value={editingDoctor?.Gender}
                name="Gender"
                onChange={handleCatch}
              />
            </Col>
            <Col span={12}>
              <label>MaritalStatus</label>
              <Input
                value={editingDoctor?.MaritalStatus}
                name="MaritalStatus"
                onChange={handleCatch}
              />
            </Col>
            <Col span={12}>
              <label>SpacialList</label>
              <Input
                value={editingDoctor?.SpacialList}
                name="SpacialList"
                onChange={handleCatch}
              />
            </Col>
            <Col span={12}>
              <label>Education</label>
              <Input
                value={editingDoctor?.Education}
                name="Education"
                onChange={handleCatch}
              />
            </Col>
            <Col span={12}>
              <label>DateofJoin</label>
              <Input
                value={editingDoctor?.DateofJoin}
                name="DateofJoin"
                onChange={handleCatch}
              />
            </Col>
            <Col span={12}>
              <label>Experience</label>
              <Input
                value={editingDoctor?.Experience}
                name="Experience"
                onChange={handleCatch}
              />
            </Col>
            <Col span={12}>
              <label>Location</label>
              <Input
                value={editingDoctor?.Location}
                name="Location"
                onChange={handleCatch}
              />
            </Col>
          </Row>
        </Modal>
      </header>
    </div>
  );
}

export default Main;
