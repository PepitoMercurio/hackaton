import React from "react";
import Header from "../../Compotants/Header";
import Button from "../../Compotants/Button";
import "../../Style/scss/Pages/Login/style.scss"

export default function LoginPage() {
    return (
        <div className="Login">
            <Header/>
            <form className="Login-form">
                <h2>Se Connecter</h2>
                <label>Email</label>
                <input type="email" name="email"/>
                <label>Password</label>
                <input type="password" name="pass"/>
                <Button text="Se Connecter" />
                <p>Vous n'avez pas encore de compte ? <a href="/sign-in">Inscrivez-Vous</a></p>
            </form>
        </div>
    )
}