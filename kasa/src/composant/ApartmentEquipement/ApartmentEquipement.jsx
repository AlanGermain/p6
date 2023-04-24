import React from "react";
import "./ApartmentEquipement.css";

function ApartmentEquipement() {
  return (
    <div className="equipements">
      <p className="titre_equipements">
        <span> Équipements</span>
        <span>
          <i className="fa-solid fa-chevron-up"></i>
        </span>
      </p>
      <p className="equipements_content">
        Climatisation Wi-Fi Cuisine Espace de travail Fer à repasser
        Sèche-cheveux Cintres{" "}
      </p>
    </div>
  );
}

export default ApartmentEquipement;
