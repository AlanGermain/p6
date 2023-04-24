import React from "react";
import "./Grille.css";
import AppartementCard from "../AppartementCard/AppartementCard";

function Grille() {
  return (
    <div className="location">
      <AppartementCard />
      <AppartementCard />
      <AppartementCard />
      <AppartementCard />
    </div>
  );
}
export default Grille;
