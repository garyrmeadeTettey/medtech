import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [file1, setFile1] = useState("");
  // const [pic, setPic] = useState("");

// function that handles the file upload from device and displays the file
const handleChange = (e) => {
  setFile1(e.target.files[0]);
};

const handleUpload = () => {
  if(!file) {
    alert("failed")
  }
  if(!file1) {
    alert("failed")
  }
}


  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
              <label htmlFor="file">
                  Upload a chosen Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
                
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <button>Send</button>
              <button onClick={handleUpload}>Upload files</button>
              <button>
              <label htmlFor="file1">
                  Upload: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file1"
                  id="file1"
                  onChange={(e) => setFile1(e.target.files[0])}
                  style={{ display: "none" }}
                />Choose files</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
