import React, { useState } from "react";
import { message, Upload } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import doctor from "../../../../../img/doctoravatar.png";
import { useDispatch } from "react-redux";
import { AddPatients, CreateBeds } from "../../../../../Redux/Datas/action";
import Sidebar from "../../GlobalFiles/Sidebar";

const Add_Patient = () => {
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

  const [AddPatient, setAddPatient] = useState({
    patientName: "",
    patientID: Date.now(),
    age: "",
    email: "",
    gender: "",
    mobile: "",
    disease: "",
    address: "",
    department: "",
    date: "",
    bloodGroup: "",
    DOB: "",
    password: "",
    nurseID: "63d0b33da06d18362e78513d",
    docID: "63ce6b5b399dc267cb06b99a",
    details: "",
    image: "image",
  });

  const HandleAppointment = (e) => {
    setAddPatient({ ...AddPatient, [e.target.name]: e.target.value });
  };

  const HandleOnsubmitAppointment = (e) => {
    e.preventDefault();
    try {
      dispatch(AddPatients(AddPatient)).then((res) => {
        let data = {
          bedNumber: Date.now(),
          roomNumber: Date.now(),
          patientID: res._id,
        };
        dispatch(CreateBeds(data)).then((res) => {
          console.log(res);
        });
      });
    } catch (error) {
      console.log(error);
    }
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
      <Sidebar />
      <div className="Main_Add_Doctor_div">
        <h1>Add Patient</h1>
        <img src={doctor} alt="doctor" className="avatarimg" />

        <form onSubmit={HandleOnsubmitAppointment}>
          {/* Name PlaceHolder */}
          <div>
            <label>Patient Name</label>
            <div className="inputdiv">
              <input
                type="text"
                placeholder="Full Name"
                name="patientName"
                value={AddPatient.patientName}
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
                value={AddPatient.age}
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
                value={AddPatient.email}
                onChange={HandleAppointment}
              />
            </div>
          </div>
          <div>
            <label>Date</label>
            <div className="inputdiv">
              <input
                type="date"
                placeholder="abc@abc.com"
                name="date"
                value={AddPatient.date}
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
                value={AddPatient.gender}
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
                name="DOB"
                value={AddPatient.DOB}
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
                name="mobile"
                value={AddPatient.mobile}
                onChange={HandleAppointment}
              />
            </div>
          </div>

          <div>
            <label>Details</label>
            <div className="inputdiv">
              <input
                type="text"
                placeholder="Details"
                name="details"
                value={AddPatient.details}
                onChange={HandleAppointment}
              />
            </div>
          </div>

          <div>
            <label>Disease</label>
            <div className="inputdiv">
              <input
                type="text"
                placeholder="Disease"
                name="disease"
                value={AddPatient.disease}
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
                value={AddPatient.address}
                onChange={HandleAppointment}
              />
            </div>
          </div>

          <div>
            <label>Department</label>
            <div className="inputdiv">
              <input
                type="text"
                placeholder="Department"
                name="department"
                value={AddPatient.department}
                onChange={HandleAppointment}
              />
            </div>
          </div>

          <div>
            <label>Patient Blood Group</label>
            <div className="inputdiv">
              <select name="bloodGroup" onChange={HandleAppointment}>
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
          {/* PASSWORD*/}
          <div className="dateofAppointment">
            <p>Password</p>
            <div className="inputdiv">
              <input
                type={"text"}
                placeholder="Password"
                name="password"
                value={AddPatient.password}
                onChange={HandleAppointment}
              />
            </div>
          </div>
          {/* ADD IMAGES  */}
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
