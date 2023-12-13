import styled from "styled-components";

export const WhyYardWrapper = styled.section`
  background-image: url("/assets/Other images/Rectangle 57.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  /* background-position: top; */
  overflow: visible;
  margin-top: -200px;
  height: 100% 90%;
  padding: 286px 20% 25px;
  text-align: Center;
  color: #171717;
  /* background-color: #171717; */

  .video {
    width: 100%;
    height: 515px;
    background-color: plum;
    margin-top: 10%;
    z-index: 4;
    position: relative;
    /* margin-bottom: -256px; */
  }
  h2 {
    font-size: 28px;
    font-weight: 600;
  }
  p {
    font-size: 18px;
    font-weight: 500;
    padding-top: 28px;
  }

  section {
    display: flex;
    color: #fff;
    background: #171717;
    width: 100%;
    justify-content: space-between;
  }
  @media screen and (max-width: 1100px) {
    background-size: 100% 100%;
    margin-top: -280px;
    padding: 288px 10% 35px;
    .video {
      height: 421px;
      margin: 15% 0 -96px;
    }
  }
  @media screen and (max-width: 500px) {
    background-size: contain;
    margin-top: -10px;
    padding: 172px 4% 32px;
    .video {
      height: 322px;
    }
  }
`;
