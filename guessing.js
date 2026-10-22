// Variables used in the game.
let secretNumber;
let attempts;
let gameOver;

// Start a new game.
function startGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  gameOver = false;

  document.getElementById("attempts").textContent = attempts;
  document.getElementById("message").textContent = "Start guessing!";

  document.getElementById("guess").value = "";
  document.getElementById("guess").disabled = false;

  document.querySelector("#guessForm button").disabled = false;
}

// Check the player's guess.
document.getElementById("guessForm").addEventListener("submit", function(event) {
  event.preventDefault();

  if (gameOver) {
    return;
  }

  const guess = Number(document.getElementById("guess").value);
  const message = document.getElementById("message");

  // Validate the input.
  if (!Number.isInteger(guess) || guess < 1 || guess > 100) {
    message.textContent = "Enter a whole number between 1 and 100.";
    return;
  }

  attempts++;
  document.getElementById("attempts").textContent = attempts;

  // Compare the guess with the secret number.
  if (guess === secretNumber) {
    message.textContent =
      "Correct! You guessed the number in " + attempts + " attempts!";

    gameOver = true;
    document.getElementById("guess").disabled = true;
    document.querySelector("#guessForm button").disabled = true;
  } else if (guess < secretNumber) {
    message.textContent = "Too low! Try a higher number.";
  } else {
    message.textContent = "Too high! Try a lower number.";
  }
});

// Start another game when the button is clicked.
document.getElementById("restart").addEventListener("click", startGame);

startGame();