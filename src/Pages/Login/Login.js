import axios from "axios";

const loginForm = async (e) => {
    e.preventDefault();

    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    try {
        const response = await axios.post('/login', {
            email,
            password,
        });

        console.log('Réponse du backend :', response.data);
    } catch (error) {
        console.error('Erreur lors de la soumission du formulaire :', error);
    }
};

export default loginForm;