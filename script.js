const randomNumber = Math.floor(Math.random() * 100) + 1;
const message = document.getElementById('message');
const guessField = document.getElementById('guessField');

let attempts = 0;

function checkGuess() {
  const userGuess = parseInt(guessField.value);
  attempts++;

  if (userGuess === randomNumber) {
    message.textContent = Congratulations in $;{attempts} attempts;
  } else if (userGuess < randomNumber) {
    message.textContent = 'Слишком низко! Попробуйте еще раз.';
  } else if (userGuess > randomNumber) {
    message.textContent = 'Слишком высоко! Попробуйте еще раз.';
  }
}