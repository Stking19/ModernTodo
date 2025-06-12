import "./landingPage.css";
import { FaHeart } from "react-icons/fa";
import { BsFillTabletFill } from "react-icons/bs";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { FaFolderClosed } from "react-icons/fa6";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { useState } from "react";

const LandingPage = () => {
  const [check, setCheck] = useState({});

  const date = new Date().getDate();
  const month = new Date().toLocaleDateString("default", { month: "short" });
  const handleCheck = (id) => {
    setCheck((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  return (
    <div className="landing-page">
      <h1>
        Today<span> {date} {month}</span>
      </h1>
      <div className="HWMO">
        <div className="box" style={{ background: "#7990F81A" }}>
          <span>
            <FaHeart color="rgb(121,144,248)" />
          </span>
          <h3>
            6 <span>Health</span>
          </h3>
        </div>
        <div className="box" style={{ background: "#46CF8B1A" }}>
          <span>
            <BsFillTabletFill color="rgb(70,207,139)" />
          </span>
          <h3>
            5 <span>Work</span>
          </h3>
        </div>
        <div className="box" style={{ background: "#BC5EAD1A" }}>
          <span>
            <FaHandHoldingHeart color="rgb(188,94,173)" />
          </span>
          <h3>
            4 <span>Mental Health</span>
          </h3>
        </div>
        <div className="box" style={{ background: "#9089861A" }}>
          <span>
            <FaFolderClosed color="rgb(144,137,134)" />
          </span>
          <h3>
            13 <span>Others</span>
          </h3>
        </div>
      </div>
      <div className="todos">
        <div className="todo">
          <input type="checkbox" onClick={() => handleCheck(1)} />
          <div className="todo-content">
            <h3 style={{ color: check[1] ? "rgb(136,136,136)" : "", textDecoration: check[1] ? "line-through" : "" }}>Drink 8 glasses of water</h3>
            <span style={{background: check[1] ? "rgb(243,243,243)" : "", color: check[1] ? "rgb(172,172,172)" : ""}}>HEALTH</span>
          </div>
        </div>
        <div className="todo">
          <input type="checkbox" onClick={() => handleCheck(2)} />
          <div className="todo-content">
            <h3 style={{ color: check[2] ? "rgb(136,136,136)" : "", textDecoration: check[2] ? "line-through" : "" }}>Edit the PDF</h3>
            <span
              style={{
                background: check[2] ? "rgb(243,243,243)" : "rgb(236,250,243)",
                color: check[2] ? "rgb(172,172,172)" :"rgb(102,215,159)",
              }}
            >
              WORK
            </span>
          </div>
        </div>
        <div className="todo">
          <input type="checkbox" onClick={() => handleCheck(3)} />
          <div className="todo-content">
            <h3 style={{ color: check[3] ? "rgb(136,136,136)" : "", textDecoration: check[3] ? "line-through" : "" }}>Write in a gratitude journal</h3>
            <span
              style={{
                background: check[3] ? "rgb(243,243,243)" : "rgb(248,239,247)",
                color: check[3] ? "rgb(172,172,172)" : "rgb(188,94,173)",
              }}
            >
              MENTAL HEALTH
            </span>
            <div className="sub-todos">
              <div className="sub-todo" style={{color: check[3] ? "rgb(136,136,136)" : "", textDecoration: check[3] ? "line-through" : ""}}>
                <input type="checkbox" onClick={() => handleCheck(5)}/>
                <p style={{ color: check[5] ? "rgb(136,136,136)" : "", textDecoration: check[5] ? "line-through" : "" }}>Write 3 things you are grateful for</p>
              </div>
              <div className="sub-todo" style={{color: check[3] ? "rgb(136,136,136)" : "", textDecoration: check[3] ? "line-through" : ""}}>
                <input type="checkbox" onClick={() => handleCheck(6)}/>
                <p style={{ color: check[6] ? "rgb(136,136,136)" : "", textDecoration: check[6] ? "line-through" : "" }}>Reflect on your day</p>
              </div>
            </div>
          </div>
        </div>
        <div className="todo">
          <input type="checkbox" onClick={() => handleCheck(4)} />
          <div
            className="todo-content"
            style={{ color: check[4] ? "rgb(136,136,136)" : "black" }}
          >
            <h3 style={{ textDecoration: check[4] ? "line-through" : "" }}>Stretch everyday for 15mins</h3>
            <span style={{background: check[4] ? "rgb(243,243,243)" : "", color: check[4] ? "rgb(172,172,172)" : ""}}>HEALTH</span>
          </div>
        </div>
      </div>
      <div className="add-todo">
        <BsFillPlusSquareFill />
      </div>
    </div>
  );
};

export default LandingPage;
