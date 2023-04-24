import React from "react";
import "./ApartmentPageTitle.css";

function ApartmentPageTitle() {
  return (
    <div>
      <div className="header">
        <div className="apartement-page__title">
          <h1>Cozy loft on the Canal Saint-Martin</h1>
          <h2>Paris, Île-de-France</h2>
          <div className="tags">
            <span className="tag">cozy</span>
            <span className="tag">Canak</span>
            <span className="tag">Paris 10</span>
          </div>
        </div>
        <div className="apartment_owner">
          <div className="details">
            <h3>
              <span>Alexandre</span>
              <span>Dumas</span>
            </h3>
            <div className="badge"></div>
          </div>
          <div className="star">
            <span className="on">★</span>
            <span className="on">★</span>
            <span className="on">★</span>
            <span className="on">★</span>
            <span className="off">★</span>
            <span className="off">★</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ApartmentPageTitle;
