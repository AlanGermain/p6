import React, { useEffect, useState } from "react";
import "./Grille.css";
import AppartementCard from "../AppartementCard/AppartementCard";

function Grille() {
  {
    /* use state crée un tableau vide et initie l'état appartement et set appartement permet de le maintenir a jour  */
  }
  const [apartments, setApartment] = useState([]);
  {
    /* useEffect est utilisé pour effectuer une action une fois, au moment  initial du composant. Nous passons fetchApartments comme fonction à exécuter. */
  }
  useEffect(fetchApartments, []);

  function fetchApartments() {
    fetch("Db.json")
      .then((res) => res.json())
      .then((res) => setApartment(res));
  }
  return (
    <div className="location">
      {apartments.map((apartment) => (
        <AppartementCard
          key={apartment.id}
          title={apartment.title}
          image={apartment.cover}
          id={apartment.id}
        />
      ))}
    </div>
  );
}
export default Grille;
