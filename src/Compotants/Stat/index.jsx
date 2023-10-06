import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBicycle, faTablet } from '@fortawesome/free-solid-svg-icons'
// import "../../Style/scss/Componants/Stats/style.scss"
import "../../Style/scss/Componants/Stats/style.scss"

export default function Stats() {
    return (
        <div className="Stats">
            <h1>Statistiques</h1>
            <div className="Stats-list">
                <div className="Stat">
                    <FontAwesomeIcon icon={faBicycle} style={{color: "#ffffff", fontSize: "5rem"}} />
                    <h2>40 vélos</h2>
                </div>
                <div className="Stat">
                    <FontAwesomeIcon icon={faTablet} style={{color: "#ffffff", fontSize: "5rem"}} />
                    <h2>40 bornes</h2>
                </div>
            </div>
        </div>
    )
}