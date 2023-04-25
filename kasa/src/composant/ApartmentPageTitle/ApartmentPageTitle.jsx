import React from "react";
import "./ApartmentPageTitle.css";

function ApartmentPageTitle(props) {
  const name = props.host.name;
  const [firstName, LastName] = name.split("2");

  return (
    <div>
      <div className="header">
        <div className="apartement-page__title">
          <h1>{props.title}</h1>
          <h2> {props.location} </h2>
          <div className="tags">
            {props.tags.map((tag) => (
              <span className="tag"> {tag} </span>
            ))}
          </div>
        </div>
        <div className="apartment_owner">
          <div className="details">
            <h3>
              <span>{firstName}</span>
              <span>{LastName}</span>
            </h3>
            <div className="badge">
              <img src={props.host.picture} alt="" />
            </div>
          </div>
          <div className="star">
            <span className="on">★</span>
            <span className="on">★</span>
            <span className="on">★</span>
            <span className="on">★</span>
            <span>★</span>
            <span>★</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ApartmentPageTitle;
