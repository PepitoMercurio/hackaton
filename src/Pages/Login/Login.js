import axios from "axios";

export const loginForm = async (e) => {
    e.preventDefault();

    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    console.log('Email:', email); 
    console.log('Password:', password); 

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

