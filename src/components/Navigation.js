import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <NavLink end to="/react-tv" className={({ isActive }) => (isActive ? "nav-active" : "")}>Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/react-tv/bookmarks" className={({ isActive }) => (isActive ? "nav-active" : "")}>Favoris</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
