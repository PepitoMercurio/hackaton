import axios from "axios";

const submitForm = async (e) => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const lastname = e.target.elements.lastname.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    try {
        const response = await axios.post('/sign-in', {
            name,
            lastname,
            email,
            password,
        });

        console.log('Réponse du backend :', response.data);
    } catch (error) {
        console.error('Erreur lors de la soumission du formulaire :', error);
    }
};

export default submitForm;
