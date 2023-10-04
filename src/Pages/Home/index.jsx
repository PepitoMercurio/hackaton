import React from "react";
import Header from "../../Compotants/Header";
import Banner from "../../Compotants/Banner";
import About from "../../Compotants/About";
import Footer from "../../Compotants/Footer";
import Find from "../../Compotants/Find";

export default function HomePage() {
    return (
        <div>
            <Header/>
            <Banner/>
            <About/>
            <Find/>
            <Footer/>
        </div>
    )
}