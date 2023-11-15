
import styled from 'styled-components';
import LandingCloudsSection from '../Components/LandingCloudsSction';
import Navbar from '../Components/Navbar';
import TrensingNowTextBox from '../Components/TrensingNowTextBox';
import LandingPageSectionForTrending from '../Components/LandingPageSectionForTrending';
import SideBar from '../Components/SideBar';

export default function LandingPage() {
  return (
    <WrapperCard>
      <SideBar/>
    <LandingCloudsSection/>
    <TrensingNowTextBox/>
    <LandingPageSectionForTrending/>
    <TrensingNowTextBox/>
    
  </WrapperCard>

  
  )
}
const WrapperCard = styled.div`
  background-color: #fff;
  height: 100vh;
`;