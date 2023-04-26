import React from "react";
import "./About.css";
import BannerAbout from "../composant/BannerAbout/BannerAbout";
import DescriptionPanel from "../composant/DescriptionPannel/DescriptionPanel";
import Main from "../Layout/Main/Main";

function About() {
  return (
    <div>
      <Main>
        <BannerAbout />
        <div className="about_contener">
          <DescriptionPanel
            title="Fiabilité"
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
          <DescriptionPanel
            title="Respect"
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
          <DescriptionPanel
            title="Service"
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
          <DescriptionPanel
            title="Sécurité"
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
        </div>
      </Main>
    </div>
  );
}
export default About;
