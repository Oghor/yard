import React from 'react'
import { Img, BannerSection, BannerText, Bannerwrapper } from './bannerStyles'
import Button from '../../utils/button';
import Poster from "/assets/Other images/Poster.png"


const Banner = () => {
  return (
    <Bannerwrapper>
      <BannerSection>
        <BannerText>
          <header>
            <p>THEME</p>
            <span>Effec</span>
            <span className="orangeText">tive</span>
          </header>
          <p className="text">
            Get ready for an inspiring day filled with quality speakers,
            engaging panel sessions, uplifting music, and captivating spoken
            word poetry.
          </p>
          <a
            href="https://bit.ly/3QUbVyI"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button text="REGISTER NOW" />
          </a>
        </BannerText>
        <Img>
          <img src={Poster} alt="Event Poster" />
        </Img>
      </BannerSection>
    </Bannerwrapper>
  );
}

export default Banner
