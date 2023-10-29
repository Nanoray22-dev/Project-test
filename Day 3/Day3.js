// Prompt the user for the number of correct, incorrect, and blank answers
const correctAnswers = parseInt(prompt("Enter the number of correct answers:")) || 0;
const incorrectAnswers = parseInt(prompt("Enter the number of incorrect answers:")) || 0;
const blankAnswers = parseInt(prompt("Enter the number of blank answers:")) || 0;

// Calculate the final score
const finalScore = correctAnswers * 4 + incorrectAnswers * (-1) + blankAnswers * 0;

// Display the final score
console.log("Final Score: " + finalScore);
