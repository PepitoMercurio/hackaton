import React from "react";
import Header from "../../Compotants/Header";
import Button from "../../Compotants/Button";
import "../../Style/scss/Pages/Sign-In/style.scss"

export default function SignInPage() {
    return (
        <div className="SignIn">
            <Header/>
            <form className="SignIn-form">
                <h2>S'inscrire</h2>

                <label>Nom</label>
                <input type="text" name="lastName"/>
                
                <label>Prénom</label>
                <input type="text" name="firstName"/>

                <label>Date de Naissance</label>
                <input type="date" name="birth"/>

                <label>Email</label>
                <input type="email" name="email"/>

                <label>Password</label>
                <input type="password" name="pass"/>

                <Button text="S'inscrire" />
                <p>Vous avez déjà un compte ? <a href="/login">Connectez-Vous</a></p>
            </form>
        </div>
    )
}