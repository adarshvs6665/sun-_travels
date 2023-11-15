import React from "react";
import styled from "styled-components";

export default function SideBar() {
  return (
    <MainWrapper>
      <div>
        <ion-icon name="logo-instagram"></ion-icon>
      </div>
      <div>
        <ion-icon name="logo-facebook"></ion-icon>
      </div>
      <div>
        <ion-icon name="logo-twitter"></ion-icon>
      </div>
      <div>
        <ion-icon name="mail-outline"></ion-icon>
      </div>
      <div>
        <ion-icon name="location-outline"></ion-icon>
      </div>
    </MainWrapper>
  );
}
const MainWrapper = styled.div`
  background-color: #fff;
  width: 60px;
  z-index: 95;
  position: absolute;
  height: 100vh;
  border-radius: 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ion-icon {
  color: #001499;
  
}
ion-icon {
  font-size: 20px;
}
div{
    margin-bottom: 15px;
    padding: 6px; /* Adjust the padding as needed */
    background: #fff;
    border-radius: 50%;
    border: 1px solid #001499;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
`;
