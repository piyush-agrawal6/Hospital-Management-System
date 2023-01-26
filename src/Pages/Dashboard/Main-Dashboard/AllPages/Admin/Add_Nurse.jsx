import React, { useState } from "react";
import "./CSS/Add_Doctor.css";
import nurse from "../../../../../img/nurseavatar.png";
import { message, Upload } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { NurseRegister } from "../../../../../Redux/auth/action";
import Sidebar from "../../GlobalFiles/Sidebar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const notify = (text) => toast(text);

const Add_Nurse = () => {
  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const dispatch = useDispatch();

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const InitData = {
    nurseName: "",
    age: "",
    mobile: "",
    email: "",
    gender: "",
    DOB: "",
    address: "",
    education: "",
    department: "",
    nurseID: Date.now(),
    password: "",
    image: "imageUrl",
    details: "",
    bloodGroup: "",
  };
  const [NurseValue, setNurseValue] = useState(InitData);

  const HandleDoctorChange = (e) => {
    setNurseValue({ ...NurseValue, [e.target.name]: e.target.value });
  };

  const HandleDoctorSubmit = (e) => {
    e.preventDefault();
    console.log(NurseValue);
    dispatch(NurseRegister(NurseValue));
    setNurseValue(InitData);
    notify("Nurse Added");
  };

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <>
      <ToastContainer />
      <div className="container">
        <Sidebar />
        <div className="AfterSideBar">
          <div className="Main_Add_Doctor_div">
            <h1>Add Nurse</h1>
            <img src={nurse} alt="doctor" className="avatarimg" />
            <form onSubmit={HandleDoctorSubmit}>
              <div>
                <label> Name</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="nurseName"
                    value={NurseValue.nurseName}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Age</label>
                <div className="inputdiv">
                  <input
                    type="number"
                    placeholder="Age"
                    name="age"
                    value={NurseValue.age}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Contact Number</label>
                <div className="inputdiv">
                  <input
                    type="number"
                    placeholder="Emergency Number"
                    name="mobile"
                    value={NurseValue.mobile}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Email</label>
                <div className="inputdiv">
                  <input
                    type="email"
                    placeholder="abc@abc.com"
                    name="email"
                    value={NurseValue.email}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Gender</label>
                <div className="inputdiv">
                  <select
                    name="gender"
                    value={NurseValue.gender}
                    onChange={HandleDoctorChange}
                    required
                  >
                    <option value="Choose Gender">Choose Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
              </div>
              <div>
                <label>Birthdate</label>
                <div className="inputdiv">
                  <input
                    type="date"
                    placeholder="dd-mm-yy"
                    name="DOB"
                    value={NurseValue.DOB}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Address</label>
                <div className="inputdiv adressdiv">
                  <input
                    type="text"
                    placeholder="Address line 1"
                    name="address"
                    value={NurseValue.address}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Education</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="eg.MBBS"
                    name="education"
                    value={NurseValue.education}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>

              <div>
                <label>Blood Group</label>
                <div className="inputdiv">
                  <select
                    name="bloodGroup"
                    value={NurseValue.bloodGroup}
                    onChange={HandleDoctorChange}
                    required
                  >
                    <option value="Choose Blood Group">Select</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>
              </div>

              <div>
                <label>Password</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="Password"
                    name="password"
                    value={NurseValue.password}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Other Info</label>
                <div className="inputdiv">
                  <textarea
                    type="text"
                    placeholder="Extra Info"
                    rows="4"
                    cols="50"
                    name="details"
                    value={NurseValue.details}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              {/* <div>
          <label>Image</label>
          <div className="inputdiv">
          <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              beforeUpload={beforeUpload}
              onChange={handleChange}
              style={{ display: "block" }}
              >
              {imageUrl ? (
                <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
                ) : (
                  uploadButton
              )}
              </Upload>
              </div>
            </div> */}

              <button type="submit" className="formsubmitbutton">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Add_Nurse;
