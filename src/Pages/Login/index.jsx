import React, { useState } from "react";
import Header from "../../Compotants/Header";
import Button from "../../Compotants/Button";
import axios from "axios";
import "../../Style/scss/Pages/Login/style.scss";
import Footer from "../../Compotants/Footer";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1/phpmyadmin/index.php', {
                email,
                password
            });

            console.log('Réponse du backend :', response.data);
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

