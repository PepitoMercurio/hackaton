import React, { useState } from "react";
import Header from "../../Compotants/Header";
import Footer from "../../Compotants/Footer";

export default function Borne() {
  const [pickupLocation, setPickupLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");
  const [bikeType, setBikeType] = useState("electrique");

  const handleReservation = () => {
    // Vous pouvez ajouter ici la logique pour effectuer la réservation.
    // Par exemple, envoyer les données au backend.
    console.log("Réservation effectuée !");
  };

  return (
    <div>
      <Header />
      <h1>Réservation de Vélos</h1>
      <div>
        <label htmlFor="pickupLocation">Lieu de prise en charge : </label>
        <input
          type="text"
          id="pickupLocation"
          value={pickupLocation}
          onChange={(e) => setPickupLocation(e.target.value)}
        />
      </div>


      <div>
        <label htmlFor="pickupDate">Date de prise en charge : </label>
        <input
          type="text"
          id="pickupDate"
          value={pickupDate}
          onChange={(e) => setPickupDate(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="dropoffDate">Durée de la location : </label>
        <input
          type="text"
          id="dropoffDate"
          value={dropoffDate}
          onChange={(e) => setDropoffDate(e.target.value)}
        />
      </div>

      <div>
        <label>Choix du Vélib:</label>
        <div>
          <label>
            <input
              type="radio"
              name="bikeType"
              value="electrique"
              checked={bikeType === "electrique"}
              onChange={() => setBikeType("electrique")}
            />
            Électrique
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="bikeType"
              value="mecanique"
              checked={bikeType === "mecanique"}
              onChange={() => setBikeType("mecanique")}
            />
            Mécanique
          </label>
        </div>
      </div>

      <button onClick={handleReservation}>Réserver</button>
      <Footer />
    </div>
  );
}
