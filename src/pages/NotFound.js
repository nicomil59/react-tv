import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import Title from "../components/Title";

const NotFound = () => {
  return (
    <div className="notfound">
      <Header />
      <h2 className="notfound-title">404</h2>
      <p className="notfound-text">
        Visiblement, cette page n'existe plus ou n'a jamais existé... 😮
      </p>
      <NavLink to="/">
        <button className="btn notfound-btn">Retourner à l'accueil <i className="fa-solid fa-house"></i></button>
        {/* <p>
          Retour à l'accueil 🏠
        </p> */}
      </NavLink>
    </div>
  );
};

export default NotFound;
