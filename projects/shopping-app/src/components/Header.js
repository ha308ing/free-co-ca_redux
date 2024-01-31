import React from "react";
import Cart from "./Cart";
import "./Header.css";
import Logout from "./Logout";
const Header = () => {
  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <h2
              className="header-h2"
              style={{ fontFamily: "monospace", fontSize: "30px" }}
            >
              Redux Shopping App
            </h2>
          </li>
          <li style={{ display: "flex", gap: "1em", paddingRight: "1em" }}>
            <Cart />
            <Logout />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
