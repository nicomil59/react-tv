import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <NavLink end to="/" className={({ isActive }) => (isActive ? "nav-active" : "")}>Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/bookmarks" className={({ isActive }) => (isActive ? "nav-active" : "")}>Favoris</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
