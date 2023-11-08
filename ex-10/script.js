  // Générez un nombre aléatoire entre 1 et 100
  const targetNumber = Math.floor(Math.random() * 100) + 1;
  let numberOfGuesses = 0;
  let isGameWon = false;

  function checkGuess() {
      const guessInput = document.getElementById('guessInput');
      const message = document.getElementById('message');
      const userGuess = parseInt(guessInput.value);

      if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
          message.textContent = 'Veuillez entrer un nombre valide entre 1 et 100.';
      } else {
          numberOfGuesses++;
          if (userGuess === targetNumber) {
              message.textContent = `Bravo ! Vous avez deviné le nombre en ${numberOfGuesses} essais.`;
              isGameWon = true;
          } else if (userGuess < targetNumber) {
              message.textContent = 'Le nombre est trop bas. Essayez à nouveau.';
          } else {
              message.textContent = 'Le nombre est trop élevé. Essayez à nouveau.';
          }

          if (isGameWon) {
              // Désactivez le bouton de devinette si le jeu est gagné
              const guessButton = document.querySelector('button');
              guessButton.disabled = true;
          }
      }
  }