import React from "react";
import sidebar from "./sidebar.module.css";
import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import home from "../../../assets/icons/home.svg";
import product from "../../../assets/icons/product.svg";
import about from "../../../assets/icons/about.svg";
import contact from "../../../assets/icons/contact.svg";
import close from "../../../assets/icons/close.svg";
import headerstyle from "./headerStyle.module.css";
// Sidebar.js

const Sidebar = ({ onclick }) => {
    
  return (
    <div
      className={`${sidebar.sidebar} ${headerstyle.showSidebar} ${sidebar.open}`}
    >
      <div
        style={{ display: "flex", backgroundColor: "rgb(50, 99, 96)" }}
      >
        <img src={logo} alt="logo" className={sidebar.logo}></img>
        <img
          src={close}
          alt="close"
          width={"32px"}
          height={"32px"}
          
          onClick={onclick}
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
