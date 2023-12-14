import React, { useRef } from "react";
import { SpeakerContainer, SpeakerWrapper, Speaker } from "./speakerStyles";
import chinenye from "/assets/Speakers/Rectangle 59.png";
import ayobami from "/assets/Speakers/Rectangle 60.png";
import pstOse from "/assets/Speakers/Rectangle 61.png";
import Button from "../../utils/button";
import Modal from "react-modal";
import data from "../../utils/speakerData.json"; 



const Speakers = () => {
// const [modalIsOpen, setModalIsOpen] = useState(false);
// const [selectedItem, setSelectedItem] = useState(null);

// const openModal = (index) => {
//   // const item = data[index]; 
//   setModalIsOpen(true);
//   setSelectedItem(index);
 
// };

// const closeModal = () => {
//   setSelectedItem(null);
//   setModalIsOpen(false);
// };

   const modal = useRef();

   const modalBar = () => {
     navRef.current.classList.toggle("responsive_nav");
   };


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
          <Button
            id="pstOse"
            text="Read more"
            classNme="button-full"
            // onClick={() => {
            //   openModal();
            // }}
            onClick={modalBar}
          />
        </Speaker>
        <Speaker>
          <img src={ayobami} alt="ayobami" />
          <h4 className="orangeText">Ayobami Akindipe</h4>
          <h5>CEO, ACE Real Estate Nig.</h5>
          <p>
            Ayobami Akindipe is a Nigerian real estate developer. He serves as
            the chief executive...
          </p>
          <Button
            id="Ayobami"
            text="Read more"
            classNme="button-full"
            onClick={() => openModal(1)}
          />
        </Speaker>
        <Speaker>
          <img src={chinenye} alt="chinenye" />
          <h4 className="orangeText">Veralyn Chinenye</h4>
          <h5>Business Growth Specialist</h5>
          <p>
            Veralyn Chineneye is an entrepreneur who has failed many times, like
            most of us....
          </p>
          <Button
            id="Veralyn"
            text="Read more"
            classNme="button-full"
            // onClick={() => openModal(item)}
            onClick={() => openModal(2)}
          />
        </Speaker>
      </SpeakerContainer>

      <Speaker ref={modal}>
        <img src={data.imgSrc} alt={data.id} />
        <h4 className="orangeText">{data.name}</h4>
        {/* <h5>Business Growth Specialist</h5> */}
        <p>{data.text}</p>
        {/* <Button text="Close" onClick={closeModal} /> */}
      </Speaker>
    </SpeakerWrapper>
  );
};

export default Speakers;
