import React from "react";
import Header from "../../Compotants/Header";
import Banner from "../../Compotants/Banner";
import About from "../../Compotants/About";
import Footer from "../../Compotants/Footer";
import Find from "../../Compotants/Find";
import velibImage from "../../Style/img/banniere.png";
import "../../Style/scss/Componants/Banner/banner2.scss"

export default function HomePage() {
    return (
        <div>
            <Header/>
            <Banner/>
            <About/>
            <img src={velibImage} alt="Velib Paris" />
            <Find/>
            <Footer/>
        </div>
    )
}