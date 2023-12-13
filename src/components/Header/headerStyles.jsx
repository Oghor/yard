import styled from "styled-components";

export const Headerwrapper = styled.header`

  display: flex;
  justify-content: space-between;
  padding: 3.7% 5% 23px;
  /* position: relative; */
  .logo-wrapper {
    column-gap: 12px;
  }
  .socials {
    column-gap: 24px;
    /* background-color: #fff; */
  }
  .nav-btn {
    border: none;
    display: none;
    cursor: pointer;
    background: transparent;
    outline: none;
  }
  .register-button {
    border-radius: 46px;
    background: #f63;
    display: inline-flex;
    padding: 12px 24px;
    color: #f8f8f8;
    /* font-family: Articulat CF; */
    font-size: 18px;
    font-weight: 500;
    font-family: "Josefin Sans", sans-serif;
    border: none;
  }

  @media screen and (max-width: 550px) {
    padding: 29px 24px 20px;
    .logo-text {
      display: none;
    }
    .nav-btn {
      display: block;
    }

    .socials {
      z-index: 1000;
      position: fixed;
      top: 0;      
      right: -100vw;
      background-color: white;
      padding: 0;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      row-gap: 24px;
      transition: 1s;
    }

    .responsive_nav {
      transform: translateX(-100vw);
    }

    .nav-close-btn {
      position: absolute;
      top: 2rem;
      right: 2rem;
    }
  }
`;
