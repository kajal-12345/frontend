import React, { useState } from "react";
import headerstyle from "./headerStyle.module.css";
import logo from "../../../assets/images/logo.png";
import search from "../../../assets/icons/search.svg";
import cart from "../../../assets/icons/cart.svg";
import profile from "../../../assets/icons/profile.svg";
import options from "../../../assets/icons/options.svg";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
const Header = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const handleClick = (e) => {
    e.stopPropagation();

    setShowSideBar((prev) => !prev);
  };
  const style = {};
  const setStyle = () => {
    if (showSideBar) {
      style.display = "none";
    } else {
      style.display = "block";
    }
  };
  return (
    <div className={headerstyle.navContainer}>
      <div className={headerstyle.displayOptions}>
        {setStyle()}
        <img src={options} alt="options"  onClick={handleClick} />
      </div>

      {showSideBar && <SideBar onclick={handleClick} />}

      <div>
        <img
          src={logo}
          alt="logo"
          className={headerstyle.logo}
          style={style}
        ></img>
      </div>

      <div className={headerstyle.nav}>
        <Link to="/" className={headerstyle.link}>
          Home
        </Link>
        <Link to="/product" className={headerstyle.link}>
          Product
        </Link>
        <Link to="/contact" className={headerstyle.link}>
          Contact
        </Link>
        <Link to="/about" className={headerstyle.link}>
          About
        </Link>
      </div>
      <div className={headerstyle.icons}>
        <img src={search} alt="search icon" />
        <img src={cart} alt="cart" />
        <img src={profile} alt="profile" />
      </div>
    </div>
  );
};

export default Header;
