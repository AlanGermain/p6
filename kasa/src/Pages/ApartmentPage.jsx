import React from "react";
import "./ApartmentPage.css";
import Main from "../Layout/Main/Main";
import ImageBanner from "../composant/ImageBanner/ImageBanner";
import ApartmentPageTitle from "../composant/ApartmentPageTitle/ApartmentPageTitle";
import ApartmentDescription from "../composant/ApartmentDescription/ApartmentDescription";
import ApartmentEquipement from "../composant/ApartmentEquipement/ApartmentEquipement";

function ApartmentPage() {
  return (
    <div className="Apartement-page">
      <Main>
        <ImageBanner />
        <ApartmentPageTitle />
        <div className="apartment_area">
          <ApartmentDescription />
          <ApartmentEquipement />
        </div>
      </Main>
    </div>
  );
}
export default ApartmentPage;
