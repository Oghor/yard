import React, { useRef } from "react";
import { WhyYardWrapper } from './whyYardStyles';
// import video from "/Yard Video Pst. Ose.mov";
const WhyYard = () => {
const videoUrl = "/Yard Video Pst. Ose.mov?url";
const thumbnailUrl = "/assets/Other images/Hover.png"
const videoRef = useRef(null);

const handleVideoClick = () => {
  const video = videoRef.current;

  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

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
        <video
          ref={videoRef}
          src={videoUrl}
          loop
          // autoPlay
          // muted
          type="video/mp4"
          controls
          poster={thumbnailUrl}
          onClick={handleVideoClick}
        />
      </div>
    </WhyYardWrapper>
  );
}

export default WhyYard
