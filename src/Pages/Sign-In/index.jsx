import React from "react";
import Header from "../../Compotants/Header";
import Button from "../../Compotants/Button";
import "../../Style/scss/Pages/Sign-In/style.scss"
import Footer from "../../Compotants/Footer";
import submitForm from "./sign-in";

export default function SignInPage() {
    return (
        <div className="SignIn">
            <Header/>

            <form className="SignIn-form">
                <h2>S'inscrire</h2>
                <div className="SignIn-input">
                    <label>Nom</label>
                    <input type="text" name="name" />

                    <label>Prénom</label>
                    <input type="text" name="lastname" />

                    <label>Date de Naissance</label>
                    <input type="date" name="birth" />

                    <label>Email</label>
                    <input type="email" name="email" />

                    <label>Password</label>
                    <input type="password" name="password" />
                </div>

                <Button text="S'inscrire" click={submitForm}/>
                <p>Vous avez déjà un compte ? <a href="/login">Connectez-Vous</a></p>
            </form>
            <Footer/>
        </div>
    )
}
