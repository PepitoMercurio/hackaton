import React from "react";
import "../../Style/scss/Componants/Header/style.scss"

export default function Header() {
    return (
        <div className="Header">
            <a href="/"><h2>LOGO</h2></a>
            <div className="Log">
                <a href="/login"><p>Se connecter</p></a>
                <a href="/sign-in"><p>S'inscrire</p></a>
            </div>
        </div>
    )
}