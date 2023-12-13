import styled from "styled-components";

export const Bannerwrapper = styled.section`
  background-image: url("/assets/HeroBg/bg(1).png"),
    url("/assets/HeroBg/bg(2).png"), url("/assets/HeroBg/bg(3).png"),
    url("/assets/HeroBg/bg(4).png"), url("/assets/HeroBg/bg(5).png");
  background-size: 20%;
  background-position: top left 25%, top left 50%, top left, top right 25%,
    top right;
  background-repeat: repeat-y;
  background-color: #181717;
  background-blend-mode: overlay;
  padding: 192px 48px 70px;

  @media screen and (max-width: 1100px) {
    padding: 58px 48px 70px;
  }
  @media screen and (max-width: 500px) {
    padding: 58px 10px 20px;
  }
`;

export const BannerSection = styled.div`
  display: flex;
  justify-content: center;
  
  @media screen and (max-width: 1100px) {
   flex-direction: column;
   align-items: center;
  }
`;

export const BannerText = styled.div`
  width: 50%;
  margin: 0;
  border-radius: 10px;
  background: radial-gradient(50% 50% at 50% 50%, #333 0%, #171717 100%);
  box-shadow: 4px 4px 15px 0px rgba(0, 0, 0, 0.25);
  color: #fff;
  text-align: center;
  padding: 86px 61px 64px;
  header p {
    font-size: 9px;
    font-weight: 500;
    letter-spacing: 4.68px;
    margin-bottom: -15px;
  }
  header span {
    font-size: 60px;
    font-weight: 700;
  }

  .text {
    font-size: 20px;
    font-weight: 500;
    padding: 50px 0;
  }

  @media screen and (max-width: 1100px) {
    width: 100%;
  }
  @media screen and (max-width: 500px) {
    padding: 30px 30px 10px;
    span{font-size: 56px}
    .text{font-size: 14px; padding: 32px 0;}
  }
`;

export const Img = styled.div`
  width: 50%;
  height: 100%;
  z-index: 5;
  position: relative;
  img {
    width: 100%;
    /* height: 100%; */
  }
  @media screen and (min-width: 1299px) and (max-width: 1300px) {
    img {
      width: 100%;
      height: 426px;
      /* height: 100%; */
    }
  }
  @media screen and (max-width: 1100px) {
    width: 100%;
    height: 100%;
  }
`;
