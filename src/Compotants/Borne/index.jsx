import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../Style/scss/Componants/Borne/style.scss"; // Correction du chemin pour le style

export default function Borne() {

  const [pickupLocation, setPickupLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [reservationDuration, setReservationDuration] = useState(""); // Changement du nom de la variable
  const [bikeType, setBikeType] = useState("electrique");
  const navigate = useNavigate();

  const [reservationData, setReservationData] = useState({
    id: 1,
    user_id: 1,
    station_id: 123,
    reserv_date: "2023-10-10",
    total_price: 5, // Modification de la valeur par défaut
  });

  const handleReservation = async () => {
    try {
      // const response = await axios.post(
      //   "http://localhost:3001/add-reservation",
      //   reservationData
      // );
      // console.log("Réservation effectuée avec succès", response.data);
      navigate("/payement")
    } catch (error) {
      console.error("Erreur lors de la réservation :", error);
    }
  };

  return (
    <div>
      <Header />
      <div className="Borne">
        <h1>Réservation de Vélos</h1>
        <form>
          <h2>BORNE</h2>
          <h3>5.00$</h3>
          <label htmlFor="reservationDuration">
            Durée de la location (heures) :
          </label> 
          <input
            type="number"
            id="reservationDuration"
            placeholder="En heures"
            value={reservationDuration}
            onChange={(e) => setReservationDuration(e.target.value)} 
          />
          <label>Choix du Vélib:</label>
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
          <Button text={"Réserver"} click={handleReservation} />
        </form>
      </div>
      <Footer />
    </div>
  );
}
