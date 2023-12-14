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
        <a
          href="https://www.facebook.com/profile.php?id=61553977748034&mibextid=LQQJ4d"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebook} alt="facebook" />
        </a>
        <a
          href="https://www.instagram.com/theyardglobal?igshid=OGQ5ZDc2ODk2ZA=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagram} alt="instagram" />
        </a>
        <a
          href="https://x.com/theyardglobal?s=21&t=-yLU_O4X6kjD_QfpBc4aHA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitter} alt="twitter" />
        </a>
        <a
          href="https://bit.ly/3QUbVyI"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="register-button">Register</button>
        </a>
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
