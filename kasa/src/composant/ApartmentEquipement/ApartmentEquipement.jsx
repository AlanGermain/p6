import React from "react";
import "./ApartmentEquipement.css";

function ApartmentEquipement(props) {
  return (
    <div className="equipements">
      <p className="titre_equipements">
        <span> Équipements</span>
        <span>
          <i className="fa-solid fa-chevron-up"></i>
        </span>
      </p>
      <p className="equipements_content">{props.equipements}</p>
    </div>
  );
}

export default ApartmentEquipement;
