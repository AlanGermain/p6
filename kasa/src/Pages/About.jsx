import React from "react";
import "./About.css";
import ImageBanner from "../composant/ImageBanner/ImageBanner";
import AboutDescription from "../composant/AboutDescription/AboutDescription";
import Main from "../Layout/Main/Main";

function About() {
  return (
    <div>
      <Main>
        <ImageBanner />
        <div className="about_contener">
          <AboutDescription />
          <AboutDescription />
          <AboutDescription />
          <AboutDescription />
        </div>
      </Main>
    </div>
  );
}
export default About;
