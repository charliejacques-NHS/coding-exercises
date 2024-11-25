/**
 * @param {number} question The question you want the answer for
 * @param {number} n The number of options in the question
 * @returns {string} The answer the user chose
 */
function getChosenAnswerForMultipleChoiceQuestion(question, n) {
  const answers = [];

  for (let i = 1; i <= n; i++) {
    const option = document.getElementById(`question-${question}-option-${i}`);
    answers.push(option);
  }

  let chosenAnswer;

  answers.forEach(answer => {
    if (answer.checked) {
      chosenAnswer = answer.value;
    }
  });

  if (chosenAnswer) 
    return chosenAnswer;
  else 
    throw new Error("No answer chosen");
};

/**
 * @param {string[]} answers The answers for the quiz
 */
async function fetchResults(answers) {
  return fetch("/api/finish", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ answers })
  })
  .then(response => response.json())
  .then(data => {
    if (data.error)
      throw new Error(data.error);
    else
      return data.result;
  })
  .catch(error => {
    console.error(error);
  });
}


/**
 * Runs when the button of type "submit" in the form is clicked
 * @param e The HTML Form Event
 */
function submitForm(e) {
  e.preventDefault(); // Stops the form submission from reloading the page

  const question1Answer = getChosenAnswerForMultipleChoiceQuestion(1, 3);
  const question2Answer = getChosenAnswerForMultipleChoiceQuestion(2, 3);
  const question3Answer = getChosenAnswerForMultipleChoiceQuestion(3, 3);

  const answers = [question1Answer, question2Answer, question3Answer];

  fetchResults(answers).then(result => {
    const resultsBox = document.getElementById("result");
    resultsBox.innerHTML = result;
  });
}