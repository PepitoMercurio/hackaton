import React, { useState, useEffect } from "react";
import BornesFetch from "../../API/BornesFetch";
import MapDisplay from "../FetchAPI_V/MapDisplay";
import Button from "../Button";
import "../../Style/scss/Componants/Find/style.scss";

export default function Find() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [address, setAddress] = useState('');

  useEffect(() => {
    BornesFetch({ setData, setLoading });
  }, []);

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  return (
    <div className="Find">
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
            value={address}
            onChange={handleAddressChange}
          />
          <Button text="Rechercher" />
        </form>
      </div>
    </div>
  );
}