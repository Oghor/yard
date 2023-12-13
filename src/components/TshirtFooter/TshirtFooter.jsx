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
    <TContainer >
      <div className='footer flexColCenter'>
      <span>
        Our <span className="orangeText">Branded </span>Tshirt
      </span>
      <Tshirts>
        <img src={Tshirt1} alt="branded t-shirt" />
        <img src={Tshirt2} alt="branded t-shirt" />
        <img src={Tshirt1} alt="branded t-shirt" />
      </Tshirts>
      <Button text="ORDER NOW" classNme="button-full" />
      <Footer>
        <div className="flexCenter socials">
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram" />
          <img src={twitter} alt="twitter" />
        </div>
        <p>© 2023 TheYardGlobal. All rights reserved</p>
      </Footer>
      </div>
    </TContainer>
  );
}

export default Tshirt
