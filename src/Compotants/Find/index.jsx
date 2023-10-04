import React from "react";
import Map from "../Map";
import Button from "../Button";
import "../../Style/scss/Componants/Find/style.scss"

export default function Find() {
    return (
        <div className="Find">
            <Map/>
            <form className="Find-form">
                <h2>Entrez une adresse pour trouver les velos à proximité.</h2>
                <input name="address" className="address" placeholder="Adresse (ex : Pl. Charles de Gaulle, 75008 Paris)"/>
                <Button text="Rechercher"/>
            </form>
        </div>
    )
}