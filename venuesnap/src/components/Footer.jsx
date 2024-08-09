import React from "react";
import { Link } from "react-router-dom";
import logo from "../media/logo.png";
import "../css/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <Link to="/">
          <img src={logo} alt="VenueSnap" width="284px" height="95px" />
        </Link>
        <p className="footerText">
          2024 VenueSnap™. The 2024 VenueSnap trademark is property of the
          DevWizards©
        </p>
      </footer>
    </div>
  );
};

export default Footer;
