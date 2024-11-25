# Coding Exercises <!-- omit in toc -->

This is a small collection of coding exercises to work through, they'll get harder as it goes on. Give it a go, feel free to message me or just any devs for help. Google is definitely your best friend! ChatGPT or any sort of AI can help, but just make sure you actually understand the code being written, what it does, how it works etc.

And most importantly I hope it's a bit more fun than just those normal courses you're doing!

## Table of Contents <!-- omit in toc -->

- [Steps to Run](#steps-to-run)
- [Exercise 1 - A Simple Quiz](#exercise-1---a-simple-quiz)

## Steps to Run

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

## Exercise 1 - A Simple Quiz

This is a simple quiz application built with HTML, CSS and JavaScript.

### Task 1 <!-- omit in toc -->

Get it running! Have a play around, have a look at the code and see if you can work out what is going on!

### Task 2 <!-- omit in toc -->

Fix the Styling! You may notice that the styles are a bit skew-wiff. Go through and fix this. Make it look nicer (completely up to you how to take this).

### Task 3 <!-- omit in toc -->

Complete the JavaScript! I've started off the javascript. It's now your turn to finish this. You will see there is a function `getResultForQuestionOne` which finds the correct option on the page and returns `true` or `false` if the user has selected ticked the box or not.

We then grab the `<div>` which has been set up for the results and change the content of it to tell the user whether they got question 1 right or not

To complete this task you will need to do the same thing for Questions 2 and 3.

### Task 4 <!-- omit in toc -->

Add some validation! Make sure that the user cannot click `Submit` until they have answered all the questions. This can be done in many ways. You could disable the submit button until an answer has been given to all the questions. You could alert the user if they click the submit button but haven't answered all the questions. It's up to you!

### Task 5 <!-- omit in toc -->

Could you improve the JavaScript code? `getResultForQuestionOne()` is very specific to a single question and can't be reused for any other question. Write a single function that you can use for all of the questions. This will be very helpful for the next task

### Task 6 <!-- omit in toc -->

Expand the quiz! Add more questions, change the answers on the questions that are currently there, maybe add some new questions with different kinds of form inputs, like a text input, a number input etc.
