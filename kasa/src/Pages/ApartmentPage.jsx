import React from "react";
import "./ApartmentPage.css";
import Main from "../Layout/Main/Main";
import BannerApartment from "../composant/BannerApartment/BannerApartment";
import ApartmentPageTitle from "../composant/ApartmentPageTitle/ApartmentPageTitle";
import ApartmentDescription from "../composant/ApartmentDescription/ApartmentDescription";
import ApartmentEquipement from "../composant/ApartmentEquipement/ApartmentEquipement";

function ApartmentPage() {
  return (
    <div className="Apartement-page">
      <Main>
        <BannerApartment />
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
