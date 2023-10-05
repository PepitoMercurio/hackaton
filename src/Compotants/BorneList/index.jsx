import React from "react";
import Button from "../Button";
import "../../Style/scss/Componants/BorneList/style.scss"

export default function BorneList() {
    return (
        <div className="BorneList">
            <h2>Liste des bornes</h2>
            <div className="BorneList-list">
                <div className="BorneList-Borne">
                    <h3>Nom</h3>
                    <p>Place : 4</p>
                    <p>Coordonées : X, Y</p>
                    <Button text={"Supprimer"} />
                </div>
                <div className="BorneList-Borne">
                    <h3>Nom</h3>
                    <p>Place : 4</p>
                    <p>Coordonées : X, Y</p>
                    <Button text={"Supprimer"} />
                </div>
                <div className="BorneList-Borne">
                    <h3>Nom</h3>
                    <p>Place : 4</p>
                    <p>Coordonées : X, Y</p>
                    <Button text={"Supprimer"} />
                </div>
                <div className="BorneList-Borne">
                    <h3>Nom</h3>
                    <p>Place : 4</p>
                    <p>Coordonées : X, Y</p>
                    <Button text={"Supprimer"} />
                </div>
            </div>
        </div>
    )
}