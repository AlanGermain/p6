import React, { useState } from "react";
import "./DescriptionPanel.css";

function DescriptionPanel(props) {
  const [isContentVisible, setIsContentVisible] = useState(true);

  const showContent = () => {
    setIsContentVisible(!isContentVisible);
  };
  {
    /*si la valeur est true le test est affiché au click il passe a false et le chevron change de position */
  }
  return (
    <div className="description">
      <p className="titre_description">
        <span>{props.title}</span>
        <span>
          <i
            className={`fa-solid ${
              isContentVisible ? "fa-chevron-up" : "fa-chevron-down"
            }`}
            onClick={showContent}
          ></i>
        </span>
      </p>
      {isContentVisible && (
        <p className="description_content">{props.content}</p>
      )}
    </div>
  );
}

export default DescriptionPanel;
