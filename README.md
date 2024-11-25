# Coding Exercises <!-- omit in toc -->

This is a small collection of coding exercises to work through, they'll get harder as it goes on. Give it a go, feel free to message me or just any devs for help. Google is definitely your best friend! ChatGPT or any sort of AI can help, but just make sure you actually understand the code being written, what it does, how it works etc.

And most importantly I hope it's a bit more fun than just those normal courses you're doing!

## Table of Contents <!-- omit in toc -->

- [1. Steps to Run](#1-steps-to-run)
- [2. Exercise 1 - A Simple Quiz](#2-exercise-1---a-simple-quiz)
  - [2.1. Task 1](#21-task-1)
  - [2.2. Task 2](#22-task-2)
  - [2.3. Task 3](#23-task-3)
  - [2.4. Task 4](#24-task-4)
  - [2.5. Task 5](#25-task-5)
  - [2.6. Task 6](#26-task-6)
- [3. Exercise 2 - A Less Simple Quiz](#3-exercise-2---a-less-simple-quiz)
  - [3.1. Task 1](#31-task-1)
  - [3.2. Task 2](#32-task-2)
  - [3.3. Task 3](#33-task-3)
  - [3.4. Task 4](#34-task-4)
  - [3.4. Task 5](#34-task-5)
  - [3.5. Task 6](#35-task-6)

## 1. Steps to Run

Install the dependencies in the root folder of this project.

```sh
npm install
```

Start the server for the exercise you want to do. So for exercise 1 you'll do

```sh
cd exercise-1
npm start
```

If you make changes to any html, javascript or css files you will need to refresh the page.

You should see this in your browser by navigating to your [localhost at port 3000](http://localhost:3000/index.html)

## 2. Exercise 1 - A Simple Quiz

This is a simple quiz application built with HTML, CSS and JavaScript.

### 2.1. Task 1

Get it running! Have a play around, have a look at the code and see if you can work out what is going on!

### 2.2. Task 2

Fix the Styling! You may notice that the styles are a bit skew-whiff. Go through and fix this. Make it look nicer (completely up to you how to take this).

### 2.3. Task 3

Complete the JavaScript! I've started off the javascript. It's now your turn to finish this. You will see there is a function `getResultForQuestionOne` which finds the correct option on the page and returns `true` or `false` if the user has selected ticked the box or not.

We then grab the `<div>` which has been set up for the results and change the content of it to tell the user whether they got question 1 right or not

To complete this task you will need to do the same thing for Questions 2 and 3.

### 2.4. Task 4

Add some validation! Make sure that the user cannot click `Submit` until they have answered all the questions. This can be done in many ways. You could disable the submit button until an answer has been given to all the questions. You could alert the user if they click the submit button but haven't answered all the questions. It's up to you!

### 2.5. Task 5

Could you improve the JavaScript code? `getResultForQuestionOne()` is very specific to a single question and can't be reused for any other question. Write a single function that you can use for all of the questions. This will be very helpful for the next task

### 2.6. Task 6

Expand the quiz! Add more questions, change the answers on the questions that are currently there, maybe add some new questions with different kinds of form inputs, like a text input, a number input etc.

## 3. Exercise 2 - A Less Simple Quiz

This is a less simple quiz application built with HTML, CSS and JavaScript also featuring a small Express API.

Here we have the HTML & JS dealing with showing the user the UI and then some API (business logic) code in [`exercise-2/src/quiz-server-routes.js`](exercise-2/src/quiz-server-routes.js). This declares a `POST /api/finish` endpoint which is called at the end of the quiz.

### 3.1. Task 1

Get it running! Have a play around, have a look at the code and see if you can work out what is going on! You may notice the similarities to the first exercise. You can copy over your CSS to have it styled as you like!

### 3.2. Task 2

At the moment this only tells the user `correct` or `incorrect` depending on whether they have all the answers to the questions correct. Adjust this so it tells the user their score.

> **HINT**: You will need to adjust the logic in [`exercise-2/src/quiz-server-routes.js`](exercise-2/src/quiz-server-routes.js)

### 3.3. Task 3

Now you have this displaying the user's score. Can you get it to tell the user which questions they specifically got wrong?

### 3.4. Task 4

How about telling the user what the correct answers were? And think about how to style this as well. Will you just add them into the results box? Or would you add display the correct answer next to the question it's related to?

### 3.4. Task 5

Expand the quiz! Add more questions, change the answers on the questions that are currently there, maybe add some new questions with different kinds of form inputs, like a text input, a number input etc.

### 3.5. Task 6

Could you improve the JavaScript code? Look for any cleaner way of doing things. Maybe a function you've written is a bit too specific and can be refactored to apply to more than just one situation. Maybe you have a large function and can use some JavaScript shorthand to shorten it. Who knows? Give it a go!

> Here is a [Medium Article](https://lokesh-prajapati.medium.com/javascript-shorthand-techniques-ultimate-cheat-sheet-415d9abbe47c) with some shorthand techniques. There is another cheat sheet [here](https://quickref.me/javascript.html). Have a play around!
