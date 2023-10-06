import React from "react";
import Header from "../../Compotants/Header";
import Stats from "../../Compotants/Stat";
import BorneList from "../../Compotants/BorneList";
import Footer from "../../Compotants/Footer";


export default function AdminPage() {
    return (
        <div>
            <Header/>
            <Stats/>
            <BorneList/>
            <Footer/>
        </div>
    )
}