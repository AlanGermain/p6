import React from "react";
import "./appartement.css";
import { NavLink } from "react-router-dom";

function AppartementCard() {
  return (
    <NavLink to="/flat" className="appartement">
      <div className="title-appartment">titre de la location</div>
    </NavLink>
  );
}
export default AppartementCard;
