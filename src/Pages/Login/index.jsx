import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Header from "../../Compotants/Header";
import Button from "../../Compotants/Button";
import axios from "axios";
import "../../Style/scss/Pages/Login/style.scss";
import Footer from "../../Compotants/Footer";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            fetch(`http://localhost:3001/check-login/${email}/${password}`)
            .then(response => response.json())
            .then(data => {
                if (data.result === 0) {
                    console.log("L'utilisateur et le mot de passe correspondent.");
                    navigate("/");
                } else {
                    console.log("L'utilisateur n\'a pas été trouvé ou le mot de passe est incorrect.");
                }
            })
            .catch(error => console.error('Erreur lors de la requête :', error));

            // console.log('Réponse du backend :', response.data);
        } catch (error) {
            console.error('Erreur lors de la soumission du formulaire :', error);
        }
    };

    return (
        <div className="Login">
            <Header />
            <form className="Login-form">
                <div className="titre">
                    <h2>Se Connecter</h2>
                </div>
                
                <div className="Login-input">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                
                <Button text="Se Connecter" click={handleLogin} /> 
                <p>Vous n'avez pas encore de compte ? <a href="/sign-in">Inscrivez-Vous</a></p>
            </form>
            <Footer />
        </div>
    );
}

