import React from 'react'
import "./Grille.css"
import Appartement from '../Appartement/Appartement.jsx'

function Grille() {
  return (
    <div className='location'>
    <Appartement/>
    <Appartement/>
    <Appartement/>
    <Appartement/>
    </div>
  )
}
export default Grille