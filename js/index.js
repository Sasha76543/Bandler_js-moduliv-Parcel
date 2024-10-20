import { saveFormData } from './fromData';

document.getElementById('feedback-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const formData = {
        name,
        email,
        message
    };

    saveFormData(formData);

    document.getElementById('success-message').style.display = 'block';

    document.getElementById('feedback-form').reset();
});