// import React, { useState } from "react";
import sidebar from "./sidebar.module.css";
import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import home from "../../../assets/icons/home.svg";
import product from "../../../assets/icons/product.svg";
import about from "../../../assets/icons/about.svg";
import contact from "../../../assets/icons/contact.svg";
import close from "../../../assets/icons/close.svg";
import headerstyle from "./headerStyle.module.css";
import { useRecoilState } from "recoil";
import sidebarState from "../../../utils/showSidebarAtom";
// Sidebar.js

const Sidebar = ({className}) => {
  const [showSideBar, setshowSideBar] = useRecoilState(sidebarState);
  // console.log("isopen", showSideBar);
  return (
    <div
      className={`${sidebar.sidebar} ${headerstyle.showSidebar} ${className}`}
    >
      <div style={{ display: "flex", backgroundColor: "rgba(247, 100, 8,0.5)" }}>
        <img src={logo} alt="logo" className={sidebar.logo}></img>
        <img
          src={close}
          alt="close"
          width={"32px"}
          height={"32px"}
          onClick={() => {
            setshowSideBar(!showSideBar);
            // console.log("close", showSideBar);
          }}
        />
      </div>

      <ul>
        <li>
          <img src={home} alt="home" />
          <Link to="/" className={sidebar.link}>
            Home
          </Link>
        </li>
        <li>
          <img src={about} alt="about"></img>
          <Link to="/about" className={sidebar.link}>
            About
          </Link>
        </li>
        <li>
          <img src={product} alt="product"></img>
          <Link to="/product" className={sidebar.link}>
            Products
          </Link>
        </li>
        <li>
          <img src={contact} alt="contact"></img>
          <Link to="/contact" className={sidebar.link}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
