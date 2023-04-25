import React from "react";
import "./AppartementCard.css";
import { Link } from "react-router-dom";

function AppartementCard(props) {
  return (
    //use parames v6
    <Link to="/flat" state={{ apartmentId: props.id }} className="appartement">
      <img className="img" src={props.image} alt="" />
      <div className="title-appartment">{props.title}</div>
    </Link>
  );
}
export default AppartementCard;
