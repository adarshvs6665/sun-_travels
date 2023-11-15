import { useState } from "react";

const NavbarStyle = () => {

  return (
    <nav className="navbar-container">
      <ul className="list">
        <div style="--position: 0;"  className="indicator">
          <div className="corners"></div>
        </div>
        <li>
          <a href="#" className="active">
            <div className="icon">
              <ion-icon name="heart"></ion-icon>
            </div>
            <div className="text">Home</div>
          </a>
        </li>
        <li>
          <a href="#">
            <div className="icon">
              <ion-icon name="heart"></ion-icon>{" "}
            </div>
            <div className="text">Account</div>
          </a>
        </li>
        <li>
          <a href="#">
            <div className="icon">
              <ion-icon name="heart"></ion-icon>{" "}
            </div>
            <div className="text">Messages</div>
          </a>
        </li>
        <li>
          <a href="#">
            <div className="icon">
              <ion-icon name="heart"></ion-icon>{" "}
            </div>
            <div className="text">Photos</div>
          </a>
        </li>
        <li>
          <a href="#">
            <div className="icon">
              <ion-icon name="heart"></ion-icon>{" "}
            </div>
            <div className="text">Settings</div>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarStyle;
