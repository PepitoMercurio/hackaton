import React from "react";
import Header from "../../Compotants/Header";
import Button from "../../Compotants/Button";
import "../../Style/scss/Pages/Login/style.scss"
import Footer from "../../Compotants/Footer";

export default function LoginPage() {
    return (
        <div className="Login">
            <Header/>
            <form className="Login-form">
                <div className="titre">
                    <h2>Se Connecter</h2>
                </div>
                
                <div className="Login-input">
                    
                    <label>Email</label>
                    <input type="email" name="email"/>
                    <label>Password</label>
                    <input type="password" name="pass"/>
                </div>
                
                <Button text="Se Connecter" />
                <p>Vous n'avez pas encore de compte ? <a href="/sign-in">Inscrivez-Vous</a></p>
            </form>
            <Footer/>
        </div>
    )
}