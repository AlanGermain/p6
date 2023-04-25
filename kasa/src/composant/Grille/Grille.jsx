import React, { useEffect, useState } from "react";
import "./Grille.css";
import AppartementCard from "../AppartementCard/AppartementCard";

function Grille() {
  const [apartments, setApartment] = useState([]);
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
          title={apartment.title}
          image={apartment.cover}
          id={apartment.id}
        />
      ))}
    </div>
  );
}
export default Grille;
