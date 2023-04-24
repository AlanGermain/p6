import React from 'react';
import "./HomePage.css";
import Banner from "./Layout/Banner/Banner.jsx"
import Grille from './Composant/Grille/Grille.jsx';
import Main from "./Layout/Main/Main.jsx";


function HomePage() {
  return (
    <div>
      <Main>
        <Banner/>
        <Grille/>
      </Main>  
    </div>
  )
}

export default HomePage