import React from "react";
import { Link } from "react-router-dom";
import logo from "../media/logo.png";
import "../css/Header.css";

const Header = () => {
  return (
    <div className="header">
      <header>
        <Link to="/">
          <img src={logo} alt="VenueSnap" />
        </Link>
      </header>
    </div>
  );
};

export default Header;
