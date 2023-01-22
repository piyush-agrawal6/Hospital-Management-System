import React, { useState } from "react";
import "./CSS/Add_Doctor.css";
import nurse from "../../../../../img/nurseavatar.png";
import { message, Upload } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

const Add_Nurse = () => {
  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

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
  const [DoctorValue, setDoctorValue] = useState({
    name: "",
    age: "",
    number: "",
    email: "",
    gender: "",
    dob: "",
    addressone: "",
    addresstwo: "",
    education: "",
    speciality: "",
    Id: "",
    password: "",
    image: imageUrl,
    otherDetails: "",
  });

  const HandleDoctorChange = (e) => {
    setDoctorValue({ ...DoctorValue, [e.target.name]: e.target.value });
  };

  const HandleDoctorSubmit = (e) => {
    e.preventDefault();
    console.log(DoctorValue);
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
              name="name"
              value={DoctorValue.name}
              onChange={HandleDoctorChange}
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
              value={DoctorValue.age}
              onChange={HandleDoctorChange}
            />
          </div>
        </div>
        <div>
          <label>Contact Number</label>
          <div className="inputdiv">
            <input
              type="number"
              placeholder="Emergency Number"
              name="number"
              value={DoctorValue.number}
              onChange={HandleDoctorChange}
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
              value={DoctorValue.email}
              onChange={HandleDoctorChange}
            />
          </div>
        </div>
        <div>
          <label>Gender</label>
          <div className="inputdiv">
            <select
              name="gender"
              value={DoctorValue.gender}
              onChange={HandleDoctorChange}
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
              name="dob"
              value={DoctorValue.dob}
              onChange={HandleDoctorChange}
            />
          </div>
        </div>
        <div>
          <label>Address</label>
          <div className="inputdiv adressdiv">
            <input
              type="text"
              placeholder="Address line 1"
              name="addressone"
              value={DoctorValue.addressone}
              onChange={HandleDoctorChange}
            />
            <input
              type="text"
              placeholder="Address line 2"
              name="addresstwo"
              value={DoctorValue.addresstwo}
              onChange={HandleDoctorChange}
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
              value={DoctorValue.education}
              onChange={HandleDoctorChange}
            />
          </div>
        </div>
        <div>
          <label>Department</label>
          <div className="inputdiv">
            <input
              type="text"
              placeholder="Specility"
              name="speciality"
              value={DoctorValue.speciality}
              onChange={HandleDoctorChange}
            />
          </div>
        </div>
        <div>
          <label>Nurse ID</label>
          <div className="inputdiv">
            <input
              type="text"
              placeholder="ID"
              name="Id"
              value={DoctorValue.Id}
              onChange={HandleDoctorChange}
            />
          </div>
        </div>
        <div>
          <label>Password</label>
          <div className="inputdiv">
            <input
              type="text"
              placeholder="Password"
              name="password"
              value={DoctorValue.password}
              onChange={HandleDoctorChange}
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
              name="otherDetails"
              value={DoctorValue.otherDetails}
              onChange={HandleDoctorChange}
            />
          </div>
        </div>
        <div>
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
        </div>

        <button type="submit" className="formsubmitbutton">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Add_Nurse;
