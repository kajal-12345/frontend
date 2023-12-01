import React from "react";
import playstore from "../../../assets/images/playstore.png";
import appstore from "../../../assets/images/Appstore.png";
import footerstyle from "./footer.module.css";
import facebook from "../../../assets/icons/facebook.svg";
import instagram from "../../../assets/icons/instagram.svg";
import twitter from "../../../assets/icons/twitter.svg";
const Footer = () => {
  return (
    <footer>
      <div className={footerstyle.leftfooter}>
        <h4>Download our App</h4>
        <p>Download App for Android and ios mobile phone</p>
        <img src={playstore} alt="playstore" />
        <img src={appstore} alt="appstore" />
      </div>
      <div className={footerstyle.midfooter}>
        <h1>Ecommerce</h1>
        <p>High quality is our first priority</p>
        <p>copyrights 2023 &copy; ecommerce</p>
      </div>
      <div className={footerstyle.rightfooter}>
        <h4>Follow us</h4>

        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <img src={instagram} alt="instagram icon" className={footerstyle.img} />
          Instagram
        </a>
        
        <a href="https://twitter.com" target="_blank" rel="noreferrer" >
        <img src={twitter} alt="twitter icon" className={footerstyle.img} /> Twitter
        </a>
        
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
        <img src={facebook} alt="facebook icon" className={footerstyle.img}/>
          Facebook
        </a>
      </div>
    </footer>
  );
};

export default Footer;
