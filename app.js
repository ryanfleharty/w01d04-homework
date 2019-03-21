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
// const checkPalindrome = (word) => {
//     let backwards = word.split("").reverse().join("");
//     console.log(backwards);
//     if (backwards === word) {
//         console.log("It's a palindrome!");
//     }
//   } 

//   checkPalindrome("mom");

// Digital Sum 
// const sumDigits = (num) => { // setting function and parameter type
//  let numArray = num.toString().split("").map(Number); // setting variable for 
//  // the argument and transforming it into split chars, then split numbers in an array

//  let sum = 0; // setting up placeholder for total digits sum

//     for (i = 0; i < numArray.length; i++) { //setting up for loop to cycle through all
//         // integers in numbers array
//         sum = sum + numArray[i]; // redefining sum as the total of the prior loop added to the current i
        
//     }
//     return sum; // output the total once the loop is finished
// }

// console.log(sumDigits(34));

// Pythagoras Theorem = a^2 + b^2 = c^2
// const calculateSide = (sideA, sideB) => {
// let sideC = sideA**2 + sideB**2;
// return sideC;
// }

// console.log(calculateSide(1, 2));

// // Sum Array
// const sumArray = (arr) => {
//     let sum = 0;
//     for (i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     return sum;
// }

// console.log(sumArray([1, 2, 3]));
