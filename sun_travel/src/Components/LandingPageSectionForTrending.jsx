import React from "react";
import Satellite from "./assets/satellite.jpg";
import { Parallax } from "react-parallax";
import styled from "styled-components";
export default function LandingPageSectionForTrending() {
  return (
    <Wrapper>
 <Parallax
      className="image"
      blur={0}
      bgImage={Satellite}
      strength={200}
      bgImageStyle={{ minHeight: "100vh" }}
    >
      {/* <div className="content">
        <span className="img-txt">a trip to Space</span>
      </div> */}
    </Parallax>
    </Wrapper>
   
  );
}
const Wrapper=styled.div`
.image {
  min-height: 100vh;
  position: relative;
  transition: transform 0.2s ease-in-out;
}

.image .content {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}

.content span.img-txt {
  background-color: #333;
  text-transform: uppercase;
  color: #fff;
  padding: 1rem;
  font-size: 1.5rem;
  letter-spacing: 10px;
}

`;