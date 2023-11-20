
import styled from 'styled-components';
import LandingCloudsSection from '../Components/LandingCloudsSction';
import Navbar from '../Components/Navbar';
import TrensingNowTextBox from '../Components/TrensingNowTextBox';
import LandingPageSectionForTrending from '../Components/LandingPageSectionForTrending';
import SideBar from '../Components/SideBar';
import BestSellingSection from '../Components/BestSellingSection';
import Feedbacks from '../Components/FeedBack';
import Airoplane from './Airoplane';

export default function LandingPage() {
  return (
    <WrapperCard>
      {/* <Airoplane/> */}
      {/* <SideBar/> */}
     <LandingCloudsSection/> 
    <BestSellingSection/>
    <TrensingNowTextBox/>
    <LandingPageSectionForTrending/>
    <TrensingNowTextBox/>
    <Feedbacks />

    <TrensingNowTextBox/> 
    
  </WrapperCard>

  
  )
}
const WrapperCard = styled.div`
  background-color: #fff;
  height: 100vh;
 
`;