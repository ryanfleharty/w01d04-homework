console.log("Homework page ready!")
//Verbal Questions
//1. A parameter is a variable within a method definition.
// An argument is the value a parameter holds.

//2. A return will end a function and (sometimes) returns a value
// while a console.log doesn't interact with your code, it just
// will log a value into the browser console if it gets called.

//3. If a function returns a value, the user knows that the function
// has been completed and is no longer running.

//Palindrome Again
const checkPalindrome = (word) => {
    let backwards = word.split("").reverse().join("");
    console.log(backwards);
    if (backwards === word) {
        console.log("It's a palindrome!");
    }
  } 

  checkPalindrome("mom");

// Digital Sum 
const sumDigits = (num) => {
    
}