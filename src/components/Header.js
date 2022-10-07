import React from "react";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <div>
      <div className="header-container">
        <span className="header-title">The TV App</span>
        <Navigation />
      </div>
    </div>
  );
};

export default Header;
