import React from "react";
import { NavLink } from "react-router-dom";
import "./Error.css";
import Navbar from "../composant/Navbar/Navbar";

function Error() {
  return (
    <div className="error commun-error">
      <Navbar />
      <strong>404</strong>
      <h4>Oups! La page que vous demandez n'existe pas.</h4>
      <p>
        <NavLink to="/">Retourner sur la page d’accueil</NavLink>
      </p>
    </div>
  );
}

export default Error;
