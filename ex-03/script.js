const form = document.getElementById('contact-form');
const confirmation = document.getElementById('confirmation');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = form.querySelector('#name').value;
    const email = form.querySelector('#email').value;
    const message = form.querySelector('#message').value;

    if (name && email && message) {
        // Validation réussie, vous pouvez ici envoyer les données à un serveur.
        confirmation.textContent = "Formulaire soumis avec succès!";
        form.reset(); // Réinitialise le formulaire après la soumission.
    } else {
        confirmation.textContent = "Veuillez remplir tous les champs du formulaire.";
    }
});
