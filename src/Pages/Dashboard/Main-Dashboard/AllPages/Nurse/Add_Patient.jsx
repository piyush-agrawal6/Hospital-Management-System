import React, { useState } from "react";
import { message, Upload } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import doctor from "../../../../../img/doctoravatar.png";

const Add_Patient = () => {
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

  const [BookAppoint, setBookAppoint] = useState({
    name: "",
    id: "",
    age: "",
    email: "",
    gender: "",
    number: "",
    disease: "",
    address: "",
    department: "",
    date: "",
    password: "",
  });

  const HandleAppointment = (e) => {
    setBookAppoint({ ...BookAppoint, [e.target.name]: e.target.value });
  };

  const HandleOnsubmitAppointment = (e) => {
    e.preventDefault();
    console.log(BookAppoint);
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
      <div className="Main_Add_Doctor_div">
        <h1>Add Patient</h1>
        <img src={doctor} alt="doctor" className="avatarimg" />

        <form onSubmit={HandleOnsubmitAppointment}>
          {/* Id PlaceHolder */}
          <div>
            <label>Patient Id</label>
            <div className="inputdiv">
              <input
                type="text"
                placeholder="Id"
                name="id"
                value={BookAppoint.id}
                onChange={HandleAppointment}
              />
            </div>
          </div>

          {/* Name PlaceHolder */}
          <div>
            <label>Patient Name</label>
            <div className="inputdiv">
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                value={BookAppoint.name}
                onChange={HandleAppointment}
              />
            </div>
          </div>
          {/* AGE PLACEHOLDER  */}
          <div>
            <label>Age</label>
            <div className="inputdiv">
              <input
                type="number"
                placeholder="Age"
                name="age"
                value={BookAppoint.age}
                onChange={HandleAppointment}
              />
            </div>
          </div>
          {/* EMAIL PLACEHOLDER  */}
          <div>
            <label>Email</label>
            <div className="inputdiv">
              <input
                type="email"
                placeholder="abc@abc.com"
                name="email"
                value={BookAppoint.email}
                onChange={HandleAppointment}
              />
            </div>
          </div>
          {/* GENDER PLACEHOLDER  */}
          <div>
            <label>Gender</label>
            <div className="inputdiv">
              <select
                name="gender"
                value={BookAppoint.gender}
                onChange={HandleAppointment}
              >
                <option value="Choose Blood Group">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          {/* DATE OF BIRTH  */}
          <div className="dateofAppointment">
            <p>Birth Date</p>
            <div className="inputdiv">
              <input
                type={"date"}
                placeholder="Choose Date"
                name="date"
                value={BookAppoint.date}
                onChange={HandleAppointment}
              />
            </div>
          </div>
          {/* MOBILE PLACEHOLDER */}
          <div>
            <label>Contact Number</label>
            <div className="inputdiv">
              <input
                type="number"
                placeholder="Number"
                name="number"
                value={BookAppoint.number}
                onChange={HandleAppointment}
              />
            </div>
          </div>

          {/* ADDRESS SECTION  */}
          <div>
            <label>Address</label>
            <div className="inputdiv">
              <input
                type="text"
                placeholder="Address line 1"
                name="address"
                value={BookAppoint.address}
                onChange={HandleAppointment}
              />
            </div>
          </div>

          {/* PASSWORD*/}
          <div className="dateofAppointment">
            <p>Password</p>
            <div className="inputdiv">
              <input
                type={"text"}
                placeholder="Password"
                name="password"
                value={BookAppoint.password}
                onChange={HandleAppointment}
              />
            </div>
          </div>
          {/* ADD IMAGES  */}
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
          {/* SUBMIT BUTTON  */}

          <button
            type="submit"
            className="formsubmitbutton"
            style={{ width: "20%" }}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Add_Patient;
