/**
 * @returns {boolean} Whether they answered the question correctly or incorrectly
 */
function getResultForQuestionOne() {
  const correctAnswer = document.getElementById("question-1-option-1")
  
  if (correctAnswer.checked) {
    // The answer is correct!
    return true;
  } else {
    // The answer is incorrect!
    return false;
  }
}


/**
 * Runs when the button of type "submit" in the form is clicked
 * @param e The HTML Form Event
 */
function submitForm(e) {
  e.preventDefault(); // Stops the form submission from reloading the page

  const question1Answer = getResultForQuestionOne();

  const resultsBox = document.getElementById("result");
  resultsBox.innerHTML = `Question 1: ${question1Answer ? "Correct" : "Incorrect"}`
}