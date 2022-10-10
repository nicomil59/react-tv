import React from "react";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <span className="header-title">React TV</span>
        <Navigation />
      </div>
    </div>
  );
};

export default Header;
