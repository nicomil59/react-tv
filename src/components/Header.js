import React from "react";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <div>
      <div className="header-container">
        <p className="header-title">The TV App</p>
        <Navigation />
      </div>
    </div>
  );
};

export default Header;
