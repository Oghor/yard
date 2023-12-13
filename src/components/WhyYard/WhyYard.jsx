import React from 'react'
import { WhyYardWrapper } from './whyYardStyles';
// import video from "/Yard Video Pst. Ose.mov";
const WhyYard = () => {
const videoUrl = "/Yard Video Pst. Ose.mov?url";
const thumbnailUrl = "/assets/Other images/Hover.png"


  return (
    <WhyYardWrapper>
      <h2>
        Why <span className="orangeText">Yard?</span>
      </h2>
      <p>
        What YARD aims to accomplish, is a rapid growth of legitimate young
        entrepreneurs as well as a reorientation of young people to commit to
        hard work and consistency. YARD aims to use its maiden conference to
        stir up the consciousness of young people to pursue and realize their
        dreams, as well as building a community of small, medium and large
        business and skilled workers working effectively to change the
        world around them.
      </p>
      <div className="video">
        {/* <h1>video</h1> */}
        <video
          src={videoUrl}
          loop
          // autoPlay
          // muted
          type="video/mp4"
          controls
          poster={thumbnailUrl}
        />
      </div>
    </WhyYardWrapper>
  );
}

export default WhyYard
