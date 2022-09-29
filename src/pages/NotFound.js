import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import Title from "../components/Title";

const NotFound = () => {
  return (
    <div>
      <Header />
      <Title text="Erreur 404" />
      <NavLink to="/">
        <h2>
          Retour à l'accueil 🏠
        </h2>
      </NavLink>
    </div>
  );
};

export default NotFound;
