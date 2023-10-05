import React from "react";
import Map from "../Map";
import "../../Style/scss/Componants/Reservations/style.scss"

export default function Reservations() {
    return (
        <div className="CurrentReservation">
            <div className="Reservations">
                <h2>Vos Réservations</h2>
                <div className="Reservations-list">
                    <h3>H3ETS7</h3>
                    <p>2 vélos</p>
                    <p>Disneyland Paris</p>
                </div>
                <div className="Reservations-list">
                    <h3>H3ETS7</h3>
                    <p>2 vélos</p>
                    <p>Disneyland Paris</p>
                </div>
                <div className="Reservations-list">
                    <h3>H3ETS7</h3>
                    <p>2 vélos</p>
                    <p>Disneyland Paris</p>
                </div>
                <div className="Reservations-list">
                    <h3>H3ETS7</h3>
                    <p>2 vélos</p>
                    <p>Disneyland Paris</p>
                </div>
                <div className="Reservations-list">
                    <h3>H3ETS7</h3>
                    <p>2 vélos</p>
                    <p>Disneyland Paris</p>
                </div>
            </div>
            <Map/>
        </div>
    )
}