import React from "react";
// import pagenotfound from "../../../assets/images/404.jpg";
import errorstyle from "../404/404style.module.css";
const Notfound = () => {
  return (
    <div className={errorstyle.container}>
      {/* <img src={pagenotfound} alt="pagenotfound" className={errorstyle.img} /> */}
      <h1>page not found</h1>
    </div>
  );
};

export default Notfound;
