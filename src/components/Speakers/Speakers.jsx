import React from "react";
import { SpeakerContainer, SpeakerWrapper, Speaker } from "./speakerStyles";
import chinenye from "/assets/Speakers/Rectangle 59.png";
import ayobami from "/assets/Speakers/Rectangle 60.png";
import pstOse from "/assets/Speakers/Rectangle 61.png";
import Button from "../../utils/button";

const Speakers = () => {
  return (
    <SpeakerWrapper className="flexColCenter">
      <h2>
        Meet Our <span className="orangeText">Speakers</span>
      </h2>
      <SpeakerContainer>
        <Speaker>
          <img src={pstOse} alt="pstOse" />
          <h4 className="orangeText">Pst. Ose Imiemohon</h4>
          <h5>Lead pastor, The Brook Church global</h5>
          <p>
            Pastor Ose Imiemohon is the founder and Lead Pastor of The Brook
            Church. He is a dynamic...
          </p>
          <Button text="Read more" classNme="button-full" />
        </Speaker>
        <Speaker>
          <img src={ayobami} alt="ayobami" />
          <h4 className="orangeText">Ayobami Akindipe</h4>
          <h5>CEO, ACE Real Estate Nig.</h5>
          <p>
            Pastor Ose Imiemohon is the founder and Lead Pastor of The Brook
            Church. He is a dynamic...
          </p>
          <Button text="Read more" classNme="button-full" />
        </Speaker>
        <Speaker>
          <img src={chinenye} alt="chinenye" />
          <h4 className="orangeText">Veralyn Chinenye</h4>
          <h5>Business Growth Specialist</h5>
          <p>
            Pastor Ose Imiemohon is the founder and Lead Pastor of The Brook
            Church. He is a dynamic...
          </p>
          <Button text="Read more" classNme="button-full" />
        </Speaker>
      </SpeakerContainer>
    </SpeakerWrapper>
  );
};

export default Speakers;
