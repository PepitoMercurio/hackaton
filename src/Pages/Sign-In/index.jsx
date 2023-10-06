import React, {useState} from "react";
import axios from "axios";
import Header from "../../Compotants/Header";
import Button from "../../Compotants/Button";
import "../../Style/scss/Pages/Sign-In/style.scss"
import Footer from "../../Compotants/Footer";

export default function SignInPage() {
    const [userData, setUserData] = useState({
        id: 2,
        name: "",
        lastname: "",
        age: 0,
        address_id: 0,
        email: "",
        phonenumber: "",
        password: "",
        user_type: 0,
        co2_id: 0
      });

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
          const response = await axios.post("http://localhost:3001/addUser", userData);
          console.log("Utilisateur ajouté avec succès", response.data);
        } catch (error) {
          console.error("Erreur lors de l'ajout de l'utilisateur :", error);
        }
      };

    return (
        <div className="SignIn">
            <Header/>

            <form className="SignIn-form">
                <h2>S'inscrire</h2>
                <div className="SignIn-input">
                    <label>Nom</label>
                    <input 
                        type="text"
                        name="name"
                        value={userData.name}
                        onChange={handleInputChange}
                    />

                    <label>Prénom</label>
                    <input
                        type="text"
                        name="lastname"
                        value={userData.lastname}
                        onChange={handleInputChange}
                        />

                    <label>Age</label>
                    <input
                        type="number"
                        name="age"  
                        value={userData.age}
                        onChange={handleInputChange}
                    />

                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={userData.email}
                        onChange={handleInputChange}
                    />

                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={userData.password}
                        onChange={handleInputChange}
                    />
                </div>

                <Button text="S'inscrire" click={handleSubmit}/>
                <p>Vous avez déjà un compte ? <a href="/login">Connectez-Vous</a></p>
            </form>
            <Footer/>
        </div>
    )
}
