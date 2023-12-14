import styled from 'styled-components'

export const TContainer = styled.main`
  background-image: url("/assets/Other images/Rectangle 57.svg");
  background-size: 100%;
  background-repeat: no-repeat;
  padding-top: 50px;
  color: #f8f8f8;
  font-size: 28px;

  .footer {
    background-color: #171717;
    padding: 34px 34px 35px;
  }
  @media screen and (min-width: 800px) {
    background-color: #171717;
  }
`;


export const Tshirts = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 20px;
  /* height:  */
  margin: 38px 0 100px;

  img {
    width: 25%;

    /* height: 276px; */
    border-radius: 18px;
    min-height: 100%;
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;
    row-gap: 20px;
    align-items: center;
    img {
      width: 70%;
    }
  }
  @media screen and (max-width: 600px) {
    margin-bottom: 20px;
    img {
      width: 100%;
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 150px 5% 0;
  width: 100%;
  .socials {
    column-gap: 30px;
  }
  p {
    color: #6c6c6c;
    font-size: 15px;
    font-weight: 500;
    line-height: 160%; /* 24px */
  }
  @media screen and (max-width: 600px) {
    margin-top: 100px;
    flex-direction: column;
    p{
      margin-top: 20px;
    }
  }
`;
