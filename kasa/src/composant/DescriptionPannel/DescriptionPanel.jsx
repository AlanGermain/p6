import React, { useState } from "react";
import "./DescriptionPanel.css";

function DescriptionPanel(props) {
  const [isConstentVisible, setIsContentVisibile] = useState(false);
  const showContent = () => {
    setIsContentVisibile(!isConstentVisible);
  };
  return (
    <div className="description">
      <p className="titre_description">
        <span>{props.title}</span>
        <span>
          <i className="fa-solid fa-chevron-up" onClick={showContent}></i>
        </span>
      </p>
      {isConstentVisible && (
        <p className="description_content">{props.content}</p>
      )}
    </div>
  );
}

export default DescriptionPanel;
