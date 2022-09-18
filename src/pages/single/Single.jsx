import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart"
import Table from "../../components/table/Table"

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editBtn">Edit</div>
            <div className="title">Information</div>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              /> 
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                  <span className="detailKey">Email:</span>
                  <span className="detailValue">Janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="detailKey">Phone:</span>
                  <span className="detailValue">+1 2345 67 89 </span>
                </div>
                <div className="detailItem">
                  <span className="detailKey">Address:</span>
                  <span className="detailValue">Elton st. 234 Garden Yt.</span>
                </div>
                <div className="detailItem">
                  <span className="detailKey">Country:</span>
                  <span className="detailValue">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title={`User Spending (last 6 month)`}/>
          </div>
        </div>
        <div className="bottom">
        <div className="title">Last transactions</div>
          <Table/>
        </div>
      </div>
    </div>
  );
};

export default Single;
