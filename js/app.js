console.log("hello");

// ## 1. Verbal questions

// 1. What is the difference between a **parameter** and an **argument**?
                //A parameter is a variable in a method or function that will later be given a value to through arguments. 
                //When a method is called, the arguments are the data you pass into the method's parameters.
// 2. Within a function, what is the difference between **return** and **console.log**?
                //return will actully spit something back at you and end the functoin.WHile 
                //console.log will only log your result to the console but wont do anything with it
// 3. What are the implications of the ability of a function to return a value?
                //once it returns a value the finction will end


// ## 2. Palindrome again.
// Write a function `checkPalindrome` that accepts a single argument, a string. Yes, you've done it before, 
//but do it again. Later in this assignment we're gonna beef up our palindrome function some. See if you can do it without 
//looking back at your previous answer. The function should return true if the string is a palindrome, 
//false if not. Make sure your function will give the correct answer for words with **capital letters**.

let str = "steponnopets";
let str2 = str.split("").reverse().join();     //this takes a string and adds spaces to it, then reverses its order, then joins the letter back
for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length -1 -i]) {
        console.log("false")
    } else {
        console.log("true")
    }}

// const checkPalindrome = (str) => {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] !== str[str.length -1 -i]) {
//             console.log("false")                             // How do I make it run inside of a function?
//         } else {
//             console.log("true")
//         }}
      
// checkPalindrome("radar");



// ## 3. Digit Sum
// Write a function `sumDigits` that accepts a number and returns the sum of its digits.
let num = 645;

const sumDigits = () => { 
    let digits = (""+num).split("")
  for (let i = 0; i < digits.length; i++) { 
        digits[i] = +digits[i];}
    console.log(digits);
  for (let x = 0; x < digits.length; x++){
      digitsSum = digits[x] + digits[0] + digits[1] + digits[2];  //NEED TO COUNT X + next value
  } console.log(digitsSum);
    }

sumDigits();


// ## 4. Pythagoras
// Write a function `calculateSide` that takes two arguments: `sideA` and `sideB`, and returns the solution for sideC using the Pythagorean theorem.

const calculateSide = (sideA, sideB) => {
  sideA = Math.pow(sideA,2)
  sideB = Math.pow(sideB, 2)
  let sideC = (sideA + sideB)
  let sideCsqr = Math.sqrt(sideC);
  console.log(`Side C's length is: ${sideCsqr}`); 
};

calculateSide(8,6);

// ## 5. Sum Array
// Write a function `sumArray` that takes an **array** as an argument.
// The array should contain numbers. The function should return the sum of the numbers in the array.

const sumArray = (arr) => {
    let totalArr = 0
    for (let i = 0; i < arr.length; i++){
          totalArr += Number(arr[i]) 
      } console.log(totalArr)
        }
sumArray([1,2,3,4,5,6]);


// Expected result:
// ```javascript
// console.log(sumArray([1, 2, 3, 4, 5, 6]));
// => 21
// ```
// <hr>
// &#x1F534; **Commit your work.** <br>
// The commit message should read: <br>
// "Commit 5 - Sum Array".
// <hr></hr>