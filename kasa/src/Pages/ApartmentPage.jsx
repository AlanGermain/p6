import React, { useEffect, useState } from "react";
import "./ApartmentPage.css";
import Main from "../Layout/Main/Main";
import ImageBanner from "../composant/ImageBanner/ImageBanner";
import ApartmentPageTitle from "../composant/ApartmentPageTitle/ApartmentPageTitle";
import DescriptionPanel from "../composant/DescriptionPannel/DescriptionPanel";

import { useLocation } from "react-router-dom";

function ApartmentPage() {
  const location = useLocation();
  console.log("location:", location);
  {
    /*useState sert à initialisé selectedFlat avec la valeur null, et la fonction setSelectedFlat est utilisée pour mettre à jour cet état. */
  }
  const [selectedFlat, setSelectedFlat] = useState(null);
  {
    /*useEffect est utilisé pour effectuer une action  */
  }
  useEffect(fetchApartmentData, []);

  function fetchApartmentData() {
    fetch("Db.json")
      .then((res) => res.json())
      .then((flats) => {
        const flat = flats.find(
          (flat) => flat.id === location.state.apartmentId
        );
        setSelectedFlat(flat);
      })
      .catch(console.error);
  }
  {
    /*si selectedflat ont été chargé et est pas nul affiche le contenue et si il est null retourn loading en atendant */
  }
  if (selectedFlat == null) return <div>...Loading</div>;

  return (
    <div className="Apartement-page">
      <Main>
        <ImageBanner pictures={selectedFlat.pictures} />

        <ApartmentPageTitle
          title={selectedFlat.title}
          description={selectedFlat.description}
          tags={selectedFlat.tags}
          location={selectedFlat.location}
          host={selectedFlat.host}
          rating={selectedFlat.rating}
        />
        <div className="apartment_area">
          <DescriptionPanel
            content={selectedFlat.description}
            title="Description"
          />
          <DescriptionPanel
            title="Equipement"
            content={selectedFlat.equipments.map((eq, i) => (
              <li key={i}> {eq} </li>
            ))}
          />
        </div>
      </Main>
    </div>
  );
}
export default ApartmentPage;
