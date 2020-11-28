import React from "react";
import logo from "./cat-happy.png";

function Header() {
  return (
    <div className="Header">
      <h1>Jouw Kinderen voor Kinderen playlist</h1>
      <a href="https://www.youtube.com/channel/UCzHvQ71dc49Hhf9POhCANIQ">
        <img src={logo} alt="happy cat" />
      </a>
    </div>
  );
}

export default Header;
