import React from "react";
import "../../Style/scss/Componants/Profil/style.scss"

export default function Profil() {
    return (
        <div className="Profil">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/56/Paloma_brav%C3%ADa_%28Columba_livia%29%2C_Palacio_de_Nymphenburg%2C_M%C3%BAnich%2C_Alemania01.JPG"/>
            <div className="Profil-text">
                <h1>NOM Prenom</h1>
                <h3>email@email.com</h3>
                <p>Date de naissance</p>
            </div>
        </div>
    )
}