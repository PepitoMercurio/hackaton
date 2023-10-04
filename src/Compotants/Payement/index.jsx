import React from "react";
import Map from "../Map";
import Button from "../Button";
import "../../Style/scss/Componants/Payement/style.scss"

export default function Payement() {
    return (
        <div className="Payement">
            <h2>Payement</h2>
            <div className="Payement-content">
                <div className="Payement-detail">
                    <h3>2 Vélos</h3>
                    <p>Disneyland Paris</p>
                    <Map/>
                </div>
                <form className="Payement-form">
                    <label>Numéro de carte</label>
                    <input type="text" name="cardNumber"/>

                    <div className="smallInput">
                        <div className="smallInput-input">
                            <label>Date d'expiration</label>
                            <input type="text" name="Date"/>
                        </div>

                        <div className="smallInput-input">
                            <label>Cryptogramme</label>
                            <input text="number" name="crypto"/>
                        </div>
                    </div>

                    <label>Titulaire de la carte</label>
                    <input type="text" name="holder"/>

                    <Button text="Valider" />
                </form>
            </div>
        </div>
    )
}