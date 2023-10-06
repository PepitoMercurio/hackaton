import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import "../Style/scss/Componants/Mailer/style.scss"
import Button from "../Compotants/Button";

export default function Mailer() {
    const form = useRef();

    let confirmMessage = "";

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_pssqocz', 'template_ac7bxaf', form.current, 'o5k5NoHk2HPiFkx41')
        .then((result) => {
            console.log(result.text);
            console.log("message send");
            confirmMessage = "MESSAGE ENVOYÉ"
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div className="Mailer">
            <h1>Un problème ? Contactez-nous !</h1>
            <form className="Mailer-form" ref={form} onSubmit={sendEmail}>
                <input 
                    type="text"
                    name="user_name"
                    placeholder="NOM Prenom"
                />

                <input 
                    type="email"
                    name="user_email"
                    placeholder="Votre mail"
                />

                <textarea placeholder="Votre message" name="message"/>

                <Button text={"Envoyer"} />

                {/* <input className="Mailer-button" type="submit" value="Send" /> */}

                <p>{confirmMessage}</p>
            </form>
        </div>
    )
}