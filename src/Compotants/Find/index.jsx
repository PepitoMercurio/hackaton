import React, { useState, useEffect } from "react";
import BornesFetch from "../../API/BornesFetch";
import MapDisplay from "../FetchAPI_V/MapDisplay";
import Button from "../Button";
import "../../Style/scss/Componants/Find/style.scss";
import velibImage from "../../Style/img/Velib-couple.png";

export default function Find() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Appel à la fonction BornesFetch pour récupérer les données
    BornesFetch({ setData, setLoading });
  }, []);

  return (
    <div className="Find">
        <img src={velibImage} alt="Velib Paris" />
      <div className="Find-contenue">
        {!loading ? (
          <MapDisplay stations={data.results} />
        ) : (
          <p>Chargement...</p>
        )}
        <form className="Find-form">
          <h2>Entrez une adresse pour trouver les vélos à proximité.</h2>
          <input
            name="address"
            className="address"
            placeholder="Adresse (ex : Pl. Charles de Gaulle, 75008 Paris)"
          />
          <Button text="Rechercher" />
        </form>
      </div>
    </div>
  );
}