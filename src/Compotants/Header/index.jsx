import React from "react";
import "../../Style/scss/Componants/Header/style.scss"

export default function Header() {
    return (
        // <div className="Header">
        //     <a href="/"><h2>LOGO</h2></a>
        //     <div className="Log">
        //         <a href="/login"><p>Se connecter</p></a>
        //         <a href="/sign-in"><p>S'inscrire</p></a>
        //     </div>
        // </div>
        <header class="header-fixed">

            <div class="header-limiter">

                <h1><a href="/">Loca<span>Bikes</span></a></h1>

                <nav>
                    {/* <a href="#">Home</a> */}
                    <a href="/login">Se connecter</a>
                    <a href="/sign-in">S'inscrire</a>
                    <a href="/sav">Sav</a>
                    <a href="/Profil">Profil</a>
                    {/* <a href="#">Contact</a> */}
                </nav>

            </div>

        </header>
    )
}