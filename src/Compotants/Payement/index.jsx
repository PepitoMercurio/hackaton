import React, { useState } from "react";
import Map from "../Map";
import Button from "../Button";
import { useNavigate } from 'react-router-dom';
import "../../Style/scss/Componants/Payement/style.scss"

export default function Payement() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        cardNumber: "",
        date: "",
        crypto: "",
        holder: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(formData.cardNumber);

        if (formData.cardNumber === '' || formData.date === '' || formData.crypto === '' || formData.holder === '') {
            alert("Veuillez remplir tous les champs du formulaire.");
            return;
        } else {
            navigate("/");
        }
    }

    return (
        <div className="Payement">
            <h2>Payement</h2>
            <div className="Payement-content">
                <div className="Payement-detail">
                    <h3>2 Vélos</h3>
                    <p>Disneyland Paris</p>
                    <Map/>
                </div>
                <form className="Payement-form" onSubmit={handleSubmit}>
                    <label>Numéro de carte</label>
                    <input
                        type="text"
                        name="cardNumber" 
                        maxLength="16"
                        value={formData.pass}
                        onChange={handleInputChange}
                    />

                    <div className="smallInput">
                        <div className="smallInput-input">
                            <label>Date d'expiration</label>
                            <input
                                type="text"
                                name="Date"
                                maxLength="5"
                                value={formData.pass}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="smallInput-input">
                            <label>Cryptogramme</label>
                            <input
                                type="number"
                                name="crypto"
                                maxLength="3"
                                value={formData.pass}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <label>Titulaire de la carte</label>
                    <input
                        type="text"
                        name="holder"
                        value={formData.pass}
                        onChange={handleInputChange}/>

                    <Button text="Valider" type="Submit" click={handleSubmit} />
                </form>
            </div>
        </div>
    )
}
