
/**
 * Server Routes for the Quiz. This is a server using [Express.js](https://expressjs.com/)
 * @param {Router} app 
 */
const createQuizRoutes = (app) => {

  const QUIZ_ANSWERS = ["Paris", "Berlin", "Rome"];

  /**
   * POST `/finish`
   * 
   * API route for finishing the Quiz. The body should be as follows:
   * 
   * ```json
   * {
   *   "answers": ["Paris", "London", "Berlin"]
   * }
   * ```
   */
  app.post("/finish", (request, response) => {
    const { answers } = request.body;

    if (answers.length !== QUIZ_ANSWERS.length) {
      return response.status(400).json({ error: "Invalid number of answers" });
    }

    const results = answers.map((answer, i) => {
      return answer === QUIZ_ANSWERS[i];
    });

    const numberWrong = results.filter(result => !result).length;

    if (numberWrong > 0) {
      return response.status(200).json({ result: "incorrect" });
    } else {
      return response.status(200).json({ result: "correct" });
    }
  });
}

export default createQuizRoutes;
