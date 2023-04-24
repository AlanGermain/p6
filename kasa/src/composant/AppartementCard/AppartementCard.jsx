import React from "react";
import "./AppartementCard.css";
import { NavLink } from "react-router-dom";

function AppartementCard() {
  return (
    <NavLink to="/flat" className="appartement">
      <img className="appartement_image" src="Background.png" alt="" />
      <div className="title-appartment">titre de la location</div>
    </NavLink>
  );
}
export default AppartementCard;
