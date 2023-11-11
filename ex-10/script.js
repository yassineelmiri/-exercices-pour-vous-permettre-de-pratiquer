  // Génération d'un nombre aléatoire entre 1 et 100
  const secretNumber = Math.floor(Math.random() * 100) + 1;
  let attempts = 0;

  function checkGuess() {
      // Récupération de la valeur saisie par l'utilisateur
      const userGuess = document.getElementById("guessInput").value;

      // Vérification de la devinette
      if (userGuess == secretNumber) {
          document.getElementById("message").innerHTML = `Bravo! Vous avez trouvé le nombre en ${attempts} tentatives.`;
          document.getElementById("message").style = 'background-color: #33ff00';
      } else if (userGuess < secretNumber) {
          document.getElementById("message").innerHTML = "Le nombre est plus grand. Essayez à nouveau.";
          document.getElementById("message").style = 'background-color: #8825f2';
          
      } else {
          document.getElementById("message").innerHTML = "Le nombre est plus petit. Essayez à nouveau.";
          document.getElementById("message").style = 'background-color: #8825f2';
      }

      // Incrémentation du nombre de tentatives
      attempts++;
  }