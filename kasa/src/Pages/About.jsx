import React from "react";
import "./About.css";
import Banner from "../Layout/Banner/Banner";
import AboutDescription from "../composant/AboutDescription/AboutDescription";
import Main from "../Layout/Main/Main";

function About() {
  return (
    <div>
      <Main>
        <Banner />
        <AboutDescription />
        <AboutDescription />
        <AboutDescription />
        <AboutDescription />
      </Main>
    </div>
  );
}
export default About;
