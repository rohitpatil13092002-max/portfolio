import React from "react";
import Home from "../../pages/Home/home";
import "./layout.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useState } from "react";
import Menus from "../Menus/Menus";
const Layout = () => {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="sidebar-section">
        <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
          <div className="side-toggle-icons">
            <p onClick={handleToggle}>
              {toggle ? <FaArrowLeft size={30} /> : <FaArrowRight size={30} />}
            </p>
          </div>
          <Menus toggle={toggle} />
        </div>
        <div className="container">
          <Home />
        </div>
      </div>
    </>
  );
};

export default Layout;
