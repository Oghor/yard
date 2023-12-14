import React from 'react'
import { TContainer, Tshirts, Footer } from './tSirtStyles'
import Tshirt1 from "/assets/Other images/Branded T-shirts.png";
import Tshirt2 from "/assets/Other images/tshirt.png";
import  Button from '../../utils/button';
import facebook from "/assets/Social media logos/facebook2.svg";
import instagram from "/assets/Social media logos/insta.svg";
import twitter from "/assets/Social media logos/twitter.svg";

const Tshirt = () => {
  return (
    <TContainer>
      <div className="footer flexColCenter">
        <span>
          Our <span className="orangeText">Branded </span>Tshirt
        </span>
        <Tshirts>
          <img src={Tshirt1} alt="branded t-shirt" />
          <img src={Tshirt2} alt="branded t-shirt" />
          <img src={Tshirt1} alt="branded t-shirt" />
        </Tshirts>
        {/* <Button text="ORDER NOW" classNme="button-full" /> */}
        <Footer>
          <div className="flexCenter socials">
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
          </div>
          <p>© 2023 TheYardGlobal. All rights reserved</p>
        </Footer>
      </div>
    </TContainer>
  );
}

export default Tshirt
