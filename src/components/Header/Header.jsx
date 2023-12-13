import React, { useRef } from "react";
import { Headerwrapper } from './headerStyles'
import logo from "/assets/Logos/Group.svg"
import logoText from "/assets/Logos/Young Adults Realizing their Dreams.svg";
import facebook from "/assets/Social media logos/Facebook.svg";
import instagram from "/assets/Social media logos/Instagram.svg";
import twitter from "/assets/Social media logos/mdi_twitter.svg";
import menubtn from "/assets/mobileMenu.svg"

const Header = () => {
   const navRef = useRef();

   const showNavbar = () => {
     navRef.current.classList.toggle("responsive_nav");
   };

  return (
    <Headerwrapper className="flexCenter">
      <div className="flexCenter logo-wrapper">
        <img src={logo} alt="logo" />
        <img src={logoText} alt="logo text" className="logo-text" />
      </div>
      <div className="flexCenter socials" ref={navRef}>
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />
        <img src={twitter} alt="twitter" />
        <button className="register-button">Register</button>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <img src={menubtn} alt="menu" />
        </button>
      </div>
      <button className="nav-btn" onClick={showNavbar}>
        <img src={menubtn} alt="menu" className="" />
      </button>
    </Headerwrapper>
  );
}

export default Header
