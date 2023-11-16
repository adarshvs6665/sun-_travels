import styled from "styled-components";
import moveingClouds from "./assets/videoClouds.mp4";

function LandingCloudsSection() {
  return (
    <FullHeightSection>
      <FullScreenVideo
        src={moveingClouds}
        muted
        autoPlay
        loop
        type="video/mp4"
      ></FullScreenVideo>
      
      
    </FullHeightSection>
  );
}

export default LandingCloudsSection;

const FullHeightSection = styled.div`
  height: 100vh;
  background: #fff;
  /* Set the height of the section to 100% of the viewport height */
`;

const FullScreenVideo = styled.video`
  width: 100%; /* Set the width of the video to 100% */
  height: 70%; /* Set the height of the video to 100% */
  object-fit: cover; /* Maintain the video aspect ratio while covering the entire container */
`;
