import React from 'react'
import styled from 'styled-components'

export const Container = styled.main`
  background-image: url("/assets/Other images/Rectangle 57.svg");
  background-size: cover;
  background-repeat: no-repeat;
  .mission-vision-section {
    /* background: #171717; */
    display: flex;
    color: #fff;
    width: 100%;
    justify-content: space-between;
    padding: 386px 20% 05px;
    z-index: 3;
    margin-top: -350px;
    position: relative;
    div {
      width: 50%;
      padding: 0 10px;
    }
    h2 {
      font-size: 36px;
      font-weight: 600;
      margin-bottom: 39px;
    }
    p {
      font-size: 20px;
      font-weight: 500;
    }

    div:nth-child(2) {
      text-align: right;
    }

    @media screen and (max-width: 1100px) {
      background-size: 100% 190%;
      margin-top: -160px;
      padding: 288px 10% 50px;

      .bg {
        background: #171717;
      }
    }
    @media screen and (max-width: 800px) {
      background: none;
      flex-direction: column;
      justify-content: center;
      margin-top: -150px;
      padding: 272px 4% 32px;
      div {
        text-align: center;
        width: 100%;
        margin: 20px 0;
        color: #171717;
      }
      div:nth-child(2) {
        text-align: center;
      }
      h2 {
        margin-bottom: 20px;
      }
    }
  }
  @media screen and (max-width: 800px) {
    background: none;
  }
`;
const MissionVision = () => {
  return (
    <Container>
      <section className="mission-vision-section">
        <div>
          <h2>
            Our <span className="orangeText">Vision</span>
          </h2>
          <p>
            Providing empowerment, equipping and exposure to young adults, to
            nurture their dream into profitable experiences.
          </p>
        </div>
        <div>
          <h2>
            Our <span className="orangeText">Mission</span>
          </h2>
          <p>Making your dream doable!</p>
        </div>
        {/* <span className='bg'>Amen </span> */}
      </section>
    </Container>
  );
}

export default MissionVision
