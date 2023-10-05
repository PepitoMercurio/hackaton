import React from "react";
import Map from "../Map";
import "../../Style/scss/Componants/Reservations/style.scss"
import Footer from "../../Compotants/Footer";
import Header from "../../Compotants/Header";

export default function Reservations() {
    return (
        
        <div className="CurrentReservation">
            <Header/>
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
            <Footer/>
        </div>
    )
}