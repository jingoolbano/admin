import "./new.scss";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";

const New = () => {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New User</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Imag: <DriveFolderUploadIcon className="icon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <div className="formInput">
                <label>Username</label>
                <input type="text" placeholder="username" />
              </div>
              <div className="formInput">
                <label>Name and surname</label>
                <input type="text" placeholder="john Doe" />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input type="email" placeholder="johnDoe@gmail.com" />
              </div>
              <div className="formInput">
                <label>Phone Number</label>
                <input type="email" placeholder="+1 2345 56 78" />
              </div>
              <div className="formInput">
                <label>Pass word</label>
                <input type="password" />
              </div>
              <div className="formInput">
                <label>Address</label>
                <input type="text" placeholder="Elton st. 216 NewYork" />
              </div>
              <div className="formInput">
                <label>Country</label>
                <input type="text" placeholder="USA" />
              </div>

              <button>SEND</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
