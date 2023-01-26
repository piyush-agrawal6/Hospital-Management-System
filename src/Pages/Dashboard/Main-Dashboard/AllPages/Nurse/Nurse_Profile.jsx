import React, { useState } from "react";
import "../Doctor/CSS/Doctor_Profile.css";
import { AiOutlineUser } from "react-icons/ai";
import { GiMeditation } from "react-icons/gi";
import { AiFillCalendar } from "react-icons/ai";
import { MdBloodtype } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { BsHouseFill } from "react-icons/bs";
import { MdOutlineCastForEducation, MdFolderSpecial } from "react-icons/md";
import { FaRegHospital, FaMapMarkedAlt } from "react-icons/fa";
import Sidebar from "../../GlobalFiles/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { Button, message, Modal } from "antd";
import { UpdateNurse } from "../../../../../Redux/Datas/action";
const Nurse_Profile = () => {
  const {
    data: { user },
  } = useSelector((state) => state.auth);
  console.log(user);
  const dispatch = useDispatch();
  let commonStyling = {
    display: "flex",
    justifyContent: "left",
    gap: "10px",
    alignItems: "center",
    padding: "10px",
  };
  const [formData, setFormData] = useState({
    nurseName: user.nurseName,
    age: user.age,
    gender: user.gender,
    bloodGroup: user.bloodGroup,
    education: user.education,
    mobile: user.mobile,
    department: user.department,
    DOB: user.DOB,
    ID: user._id,
  });

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const [messageApi, contextHolder] = message.useMessage();

  const success = (text) => {
    messageApi.success(text);
  };
  const error = (text) => {
    messageApi.error(text);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = () => {
    console.log(formData);
    // dispatch(UpdateNurse(formData, user._id));
    // success("user updated");
    handleOk();
  };

  return (
    <>
      {contextHolder}
      <div className="container">
        <Sidebar />
        <div className="AfterSideBar">
          <div className="maindoctorProfile">
            <div className="firstBox">
              <div
                style={{
                  border: "1px solid",
                  borderRadius: "10rem",
                  width: "45%",
                  margin: "auto",
                  marginTop: "10px",
                  marginBottom: "10px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <AiOutlineUser style={{ fontSize: "10rem", padding: "10px" }} />
              </div>
              <div style={commonStyling}>
                <GiMeditation />
                <p>{user?.nurseName}</p>
              </div>
              <div style={commonStyling}>
                <AiFillCalendar />
                <p>{user?.DOB}</p>
              </div>
              <div style={commonStyling}>
                <MdBloodtype />
                <p>{user?.bloodGroup}</p>
              </div>
              <div style={commonStyling}>
                <BsFillTelephoneFill />
                <p>{user?.mobile}</p>
              </div>
              <div onClick={showModal}>
                <BsFillTelephoneFill />
                Edit profile
              </div>

              <Modal
                title="Edit details"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                footer={[
                  <Button key="back" onClick={handleCancel}>
                    Cancel
                  </Button>,
                  <Button key="submit" onClick={handleFormSubmit}>
                    Edit
                  </Button>,
                ]}
              >
                <form className="inputForm">
                  <input
                    name="nurseName"
                    value={formData.nurseName}
                    onChange={handleFormChange}
                    type="text"
                    placeholder="Full name"
                  />
                  <input
                    name="age"
                    value={formData.age}
                    onChange={handleFormChange}
                    type="number"
                    placeholder="Age"
                  />
                  <select name="gender" onChange={handleFormChange}>
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Others</option>
                  </select>
                  <select name="department" onChange={handleFormChange}>
                    <option value="">Select department</option>
                    <option value="a">a</option>
                    <option value="b">b</option>
                    <option value="c">c</option>
                  </select>
                  <input
                    name="bloodGroup"
                    value={formData.bloodGroup}
                    onChange={handleFormChange}
                    type="text"
                    placeholder="Blood Group"
                  />
                  <input
                    name="education"
                    value={formData.education}
                    onChange={handleFormChange}
                    type="text"
                    placeholder="education"
                  />
                  <input
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleFormChange}
                    type="number"
                    placeholder="mobile"
                  />
                  <input
                    name="DOB"
                    value={formData.DOB}
                    onChange={handleFormChange}
                    type="date"
                    placeholder="Date of birth"
                  />
                </form>
              </Modal>
            </div>
            {/* ***********  Second Div ******************** */}
            <div className="SecondBox">
              <div className="subfirstbox">
                <h2 style={{ textAlign: "center", marginTop: "10px" }}>
                  Other Info
                </h2>
                <div style={commonStyling}>
                  <BsHouseFill />
                  <p>{user?.gender}</p>
                </div>
                <div style={commonStyling}>
                  <BsHouseFill />
                  <p>{user?.age}</p>
                </div>
                <div style={commonStyling}>
                  <BsHouseFill />
                  <p>{user?.department}</p>
                </div>
                <div style={commonStyling}>
                  <MdOutlineCastForEducation />
                  <p>{user?.education}</p>
                </div>
              </div>
              {/* ***********  Third Div ******************** */}
              <div className="subSecondBox">
                <h2 style={{ textAlign: "center", marginTop: "10px" }}>
                  Hospital Details
                </h2>
                <div style={commonStyling}>
                  <FaRegHospital />
                  <p>Apollo hospitals</p>
                </div>
                <div style={commonStyling}>
                  <FaMapMarkedAlt />
                  <p>
                    Sri Aurobindo Marg, Ansari Nagar, Ansari Nagar East, New
                    Delhi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nurse_Profile;
