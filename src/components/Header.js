import React from "react";
import { NavLink } from "react-router-dom";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <NavLink to="/react-tv" className="header-title">React TV</NavLink>
        <Navigation />
      </div>
    </div>
  );
};

export default Header;
