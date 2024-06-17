// script.js
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add your form handling logic here, like sending the form data to a server
    // For now, let's just log the form data to the console
    const formData = new FormData(this);
    console.log({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    });
});
