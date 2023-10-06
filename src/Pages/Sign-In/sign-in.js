import axios from "axios";

const submitForm = async (e) => {
    e.preventDefault();

    const name = e.target.elements.lastName.value;
    const lastname = e.target.elements.firstName.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.pass.value;

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
