import styled from "styled-components";

export const SpeakerWrapper = styled.header`
  background: #171717;
  padding: 104px 20% 25px;
  .button {
    color: green;
    /* min-width: ; */
  }

  h2 {
    color: #f8f8f8;
    font-size: 32px;
    font-weight: 500;
  }
  @media screen and (max-width: 900px) {
    background: #f8f8f8;
    padding: 59px 37px 25px;
    h2 {color: #171717;}
  }
`;

export const SpeakerContainer = styled.section`
  margin-top: 47px;
  display: flex;
  align-items: center;
  padding: 32px;
  gap: 44px;
  border-radius: 12px;
  background: #f8f8f8;
 
  @media screen and (max-width: 1100px) {
    padding: 28px 19px;
    gap: 16.5px;
  }
  @media screen and (max-width: 900px) {
    flex-direction: column;
    padding: 0;
    gap: 68px;
  }
`;

export const Speaker = styled.div`
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    margin-bottom: 20px;
    background-color: #201d24;
  }
  h4 {
    font-size: 24px;
    font-weight: 700;
    letter-spacing: -0.54px;
  }
  h5 {
    color: #707070;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: -0.42px;
  }
  p {
    color: #171717;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: -0.42px;
    margin: 33px 0 28px;
  }

  @media screen and (max-width: 1100px) {
    h4 {
      font-size: 18px;
    }
    h5 {
      font-size: 14px;
    }
    p {
      font-size: 14px;
    }
  }
`;
