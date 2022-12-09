import {
  Button,
  Col,
  DatePicker,
  Drawer,
  Form,
  Input,
  Row,
  Select,
  Space,
} from "antd";
import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";

const AddDoctor = () => {
  const { Option } = Select;
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = (e) => {
    setOpen(false);
    onFinish(e);
  };
  const onFinish = (e) => {
    console.log(e);
  };
  return (
    <div>
      <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
        Add Doctor
      </Button>
      <Drawer
        title="Create a new account"
        width={"100%"}
        onClose={onClose}
        open={open}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            {/* <Button onClick={onClose} type="primary">
              {" "}
              Submit
            </Button> */}
          </Space>
        }
      >
        <Form layout="vertical" onFinish={onFinish}>
          <Row gutter={16}>
            <Col xs={{ span: 24 }} sm={{ span: 12 }}>
              <Form.Item
                name="name"
                label="Name"
                rules={[
                  {
                    required: true,
                    message: "Please enter user name",
                  },
                ]}
              >
                <Input placeholder="Please enter user name" />
              </Form.Item>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }}>
              <Form.Item
                name="Imageurl"
                label="Imageurl"
                rules={[
                  {
                    required: true,
                    message: "Please enter url",
                  },
                ]}
              >
                <Input
                  style={{
                    width: "100%",
                  }}
                  // addonBefore="http://"
                  // addonAfter=".com"
                  placeholder="Please enter url"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xs={{ span: 24 }} sm={{ span: 12 }}>
              <Form.Item
                name="Education"
                label="Education"
                rules={[
                  {
                    required: true,
                    message: "Please Enter Education",
                  },
                ]}
              >
                <Input
                  style={{
                    width: "100%",
                  }}
                  // addonBefore="http://"
                  // addonAfter=".com"
                  placeholder="Please enter Education"
                />
              </Form.Item>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }}>
              <Form.Item
                name="Email"
                label="Gender"
                rules={[
                  {
                    required: true,
                    message: "Please choose the type",
                  },
                ]}
              >
                <Select placeholder="Please choose the type">
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                  <Option value="others">Others</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          {/* s */}
          <Row gutter={16}>
            <Col xs={{ span: 24 }} sm={{ span: 12 }}>
              <Form.Item
                name="DOB"
                label="DOB"
                rules={[
                  {
                    required: true,
                    message: "Please choose the Age",
                  },
                ]}
              >
                <DatePicker
                  style={{
                    width: "100%",
                  }}
                />
              </Form.Item>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }}>
              <Form.Item
                name="MaritalStatus"
                label="MaritalStatus"
                rules={[
                  {
                    required: true,
                    message: "Please choose the MaritalStatus",
                  },
                ]}
              >
                <Select placeholder="Please choose the type">
                  <Option value="Single">Single</Option>
                  <Option value="Married">Married</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xs={{ span: 24 }} sm={{ span: 12 }}>
              <Form.Item
                name="Email"
                label="Email"
                rules={[
                  {
                    required: true,
                    message: "Please choose the EMAIL",
                  },
                ]}
              >
                <Input
                  style={{
                    width: "100%",
                  }}
                  placeholder="Please enter Email"
                />
              </Form.Item>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }}>
              <Form.Item
                name="Contact"
                label="Contact.No"
                rules={[
                  {
                    required: true,
                    message: "Please choose the Ph.No",
                  },
                ]}
              >
                <Input
                  style={{
                    width: "100%",
                  }}
                  placeholder="Please enter Ph.No"
                />
              </Form.Item>
            </Col>
          </Row>
          {/* //date of join */}
          <Row gutter={16}>
            <Col xs={{ span: 24 }} sm={{ span: 12 }}>
              <Form.Item
                name="DateofJoin"
                label="DateofJoin"
                rules={[
                  {
                    required: true,
                    message: "Please Select the date",
                  },
                ]}
              >
                <DatePicker
                  style={{
                    width: "100%",
                  }}
                  placeholder="Please Select The Date"
                />
              </Form.Item>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }}>
              <Form.Item
                name="Experience"
                label="Experience"
                rules={[
                  {
                    required: true,
                    message: "Please choose the Experience",
                  },
                ]}
              >
                <Input
                  type="number"
                  style={{
                    width: "100%",
                  }}
                  placeholder="Please enter Experiance in YY-MM"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="Location"
                label="Location"
                rules={[
                  {
                    required: true,
                    message: "Please Select the date",
                  },
                ]}
              >
                <Input
                  style={{
                    width: "100%",
                  }}
                  placeholder="Please enter Location"
                />
              </Form.Item>
            </Col>
          </Row>

          <Button type="primary" htmlType="submit">
            SUBMIT
          </Button>
        </Form>
      </Drawer>
    </div>
  );
};
export default AddDoctor;
