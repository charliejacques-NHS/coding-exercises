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
 * @returns {boolean} Whether they answered the question correctly or incorrectly
 */
function getResultForQuestionTwo() {
  const correctAnswer = document.getElementById("question-2-option-1")
  
  if (correctAnswer.checked) {
    // The answer is correct!
    return true;
  } else {
    // The answer is incorrect!
    return false;
  }
}
/**
 * @returns {boolean} Whether they answered the question correctly or incorrectly
 */
function getResultForQuestionThree() {
  const correctAnswer = document.getElementById("question-3-option-1")
  
  if (correctAnswer.checked) {
    // The answer is correct!
    return true;
  } else {
    // The answer is incorrect!
    return false;
  }
}

/**
 * Check to see whether the user has answered all the questions
 */
function checkAnswered() {
  const numberOfQuestions = 3;
  const numberOfOptions = 3;
  const questionsWithAnswer = []; // [false, true, false, true]

  for (let i = 1; i <= numberOfQuestions; i++) {
    let optionChosen = false;
    for (let j = 1; j <= numberOfOptions; j++) { 
      const option = document.getElementById(`question-${i}-option-${j}`);
      if (option.checked) {
        optionChosen = true;
      }
    }
    questionsWithAnswer.push(optionChosen);
  }

  if (questionsWithAnswer.includes(false)) {
    return false;
  } else {
    return true;
  }
}


/**
 * Runs when the button of type "submit" in the form is clicked
 * @param e The HTML Form Event
 */
function submitForm(e) {
  e.preventDefault(); // Stops the form submission from reloading the page

  if (!checkAnswered()) {
    alert("Please answer all the questions!")
    return;
  }

  const question1Answer = getResultForQuestionOne();
  const question2Answer = getResultForQuestionTwo();
  const question3Answer = getResultForQuestionThree();

  const resultsBox = document.getElementById("result");
  resultsBox.innerHTML = `Question 1: ${question1Answer ? "Correct" : "Incorrect"} <br />`
  resultsBox.innerHTML += `Question 2: ${question2Answer ? "Correct" : "Incorrect"} <br />`
  resultsBox.innerHTML += `Question 3: ${question3Answer ? "Correct" : "Incorrect"}`
}