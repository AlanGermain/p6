import React from 'react';
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className='navbar'>
      <NavLink to="/">
        <div className='logo-kasa'>
          <img src="Logo-Kasa.png" alt="logo" />
        </div>
      </NavLink>
    <div className='liste'>
      <NavLink to= "/">
        <div>Accueil</div>
      </NavLink>
     <NavLink to="/about">
        <div className='propos'>A propos</div>
    </NavLink>
   </div>
   </nav>
  )
}
export default Navbar