import React from "react";
import "./AppartementCard.css";
import { NavLink } from "react-router-dom";

function AppartementCard(props) {
  return (
    <NavLink to="/flat" className="appartement">
      <img className="img" src={props.image} alt="" />
      <div className="title-appartment">{props.title}</div>
    </NavLink>
  );
}
export default AppartementCard;
