import styled from "styled-components";
import LandingCloudsSection from "../Components/LandingCloudsSction";
import Navbar from "../Components/Navbar";
import TrensingNowTextBox from "../Components/TrensingNowTextBox";
import LandingPageSectionForTrending from "../Components/LandingPageSectionForTrending";
import SideBar from "../Components/SideBar";
import BestSellingSection from "../Components/BestSellingSection";
import Feedbacks from "../Components/FeedBack";

import TabsExclusive from "../Components/TabsExclusive/TabsExclusive";
import Airoplane from "./Aeroplane";
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import { useRef } from "react";
// import { TabsExclusive } from '../Components/TabsExclusive/TabsExclusive';

export default function LandingPage() {
  const bestSellingRef = useRef(null);
  const scrollToBestSelling = () => {
    console.log("called")
    console.log(bestSellingRef.current)
    if (bestSellingRef.current) {
      bestSellingRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <WrapperCard>
      {/* <Airoplane /> */}
      {/* <SideBar/> */}
      {/* <LandingCloudsSection /> */}
      <HeroSection scrollF={scrollToBestSelling}/>
      <BestSellingSection bestSellingRef={bestSellingRef} />
      {/* <TrensingNowTextBox/> */}
      <TabsExclusive />
      <TrensingNowTextBox />
      <LandingPageSectionForTrending />
      <TrensingNowTextBox />
      <Feedbacks />
      <TrensingNowTextBox />
      <Footer />
    </WrapperCard>
  );
}
const WrapperCard = styled.div`
  background-color: #fff;
  height: 100vh;
`;
