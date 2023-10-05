import React from "react";
import Header from "../../Compotants/Header";
import Profil from "../../Compotants/Profil";
import Reservations from "../../Compotants/Reservations";
import Footer from "../../Compotants/Footer";

export default function ProfilPage() {
    return (
        <div>
            <Header/>
            <Profil/>
            <Reservations/>
            <Footer/>
        </div>
    )
}