import Logo from "./assets/Logo.svg";

import styled from "styled-components";
import img1 from "./assets/1.png";
import img2 from "./assets/2.png";
import img3 from "./assets/3.png";
import img4 from "./assets/4.png";
import img5 from "./assets/5.png";
import img6 from "./assets/6.png";
// import { Link } from "react-router-dom";
// import { Link as ScrollLink, Element } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
export default function Navbar() {
  const Menus = [
    { name: "Home", icon: "home-outline", dis: "translate-x-0" },
    { name: "Profile", icon: "person-outline", dis: "translate-x-16" },
    { name: "Message", icon: "chatbubble-outline", dis: "translate-x-32" },
    { name: "Photos", icon: "camera-outline", dis: "translate-x-48" },
    { name: "Settings", icon: "settings-outline", dis: "translate-x-64" },
  ];
  return (
    <MainWrapper>
      {/* <Slide top> */}
      <Wrapper>
        <HeaderWrapper>
          <HeaderLogo>
            <img src={Logo} />
            <HeaderMenu>
              <MenuBlock>
                <HeaderUl>
                  <HeaderLi>
                    <img className="rotate" src={img1} alt="" />
                  </HeaderLi>
                  <HeaderLi>
                    <img className="rotate" src={img2} alt="" />
                  </HeaderLi>
                  <HeaderLi>
                    <img className="rotate" src={img3} alt="" />
                  </HeaderLi>
                  <HeaderLi>
                    <img className="rotate" src={img4} alt="" />
                  </HeaderLi>
                  <HeaderLi>
                    <img className="rotate" src={img5} alt="" />
                  </HeaderLi>
                  <HeaderLi className="rotate">
                    <img src={img6} alt="" />
                  </HeaderLi>
                </HeaderUl>
                <p>(Approved by Govt. of India, Ministry of Tourism)</p>
              </MenuBlock>
            </HeaderMenu>
          </HeaderLogo>
          <NavPagesWrapper>
            <LinkRouter to="/">Home</LinkRouter>

            <LinkRouter to="/about">Page2</LinkRouter>

            <LinkRouter to="/project">Page3</LinkRouter>
          </NavPagesWrapper>
        </HeaderWrapper>
      </Wrapper>
    </MainWrapper>
  );
}
const NavPagesWrapper = styled.div`
  a {
    text-decoration: none;
    color: #fff;
    margin-left: 10px;
  }
  .pageName {
    padding-top: 6px;
    display: flex;
    align-items: center;
  }
`;
const MenuBlock = styled.div`
  margin-left: 20px;
`;

const MainWrapper = styled.div`
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  /* background: rgb(255 255 255 / 20%); */
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  position: fixed;
  &.fixed {
    padding: 0;
    & > div {
      & > div {
        border-radius: 0 0 15px 15px;
        background: #001499;
        & > div {
          width: 100%;
        }
      }
    }
  }
  & > div {
    width: 100%;
  }
`;
const Wrapper = styled.div`
  width: 100%;
`;
const HeaderWrapper = styled.div`
  background: #001499;
  justify-content: space-between;
  border-radius: 15px;
  align-items: center;
  padding: 10px 20px;
  max-width: 95%;
  margin: 0 auto;
  display: flex;
`;
const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  img {
    max-height: 40px;
  }
`;
const HeaderUl = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0 0 0 0 !important;
  padding: 0 0 0 0 !important;
  justify-content: center;
`;
const HeaderMenu = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  p {
    font-family: "Rubik";
    margin: 5px 0 0 0;
    font-size: 12px;
    background: #fff;
    border-radius: 5px;
  }
`;
const HeaderLi = styled.li`
  font-family: "Rubik";
  padding: 0 3px;
  text-transform: capitalize;
  letter-spacing: 1.5px;
  font-size: 16px;
  background: #fff;
  margin-left: 5px;
  border-radius: 5px;
  box-shadow: #463b3bde;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(-7px);
  }
  img {
    max-width: 40px;
  }
  /* .rotate {
    transition: all 1s ease-in-out;
  }
  .rotate:hover {
    transform: translateY(-10px);
    /* background: #65b5da8f; */
  /* border-radius: 50%; */
  /* }  */
`;
