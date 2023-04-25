import React, { useState } from "react";
import "./ApartmentDescription.css";

function ApartmentDescription(props) {
  const [isConstentVisible, setIsContentVisibile] = useState(false);
  const showContent = () => {
    setIsContentVisibile(!isConstentVisible);
  };
  return (
    <div className="description">
      <p className="titre_description">
        <span>Description</span>
        <span>
          <i className="fa-solid fa-chevron-up" onClick={showContent}></i>
        </span>
      </p>
      {isConstentVisible && (
        <p className="description_content">{props.description}</p>
      )}
    </div>
  );
}

export default ApartmentDescription;
