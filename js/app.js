console.log('Up and running');

// 1. Verbal questions
// Write answers to the following questions as comments.
// 1. What is the difference between a parameter and an argument?
// A parameter is defined in the function declaration to indicate what should be input when calling it
// An argument is the actual value put into the parameters when invoking a function.
// 2. Within a function, what is the difference between return and console.log?
// return commend passes whatever is placed in it back to the calling location; console.log only prints values to the console.
// 3. What are the implications of the ability of a function to return a value?
// If a function can return a value, it can then be used by the calling location, functions allow for DRY modularized code.

// 2. Palindrome again.
// Write a function checkPalindrome that accepts a single argument, a string. Yes, you've done it before, but do it again. Later in this assignment we're gonna beef up our palindrome function some. See if you can do it without looking back at your previous answer. The function should return true if the string is a palindrome, false if not. Make sure your function will give the correct answer for words with capital letters.
const checkPalindrome = (str) => {
  const strRevArr = [];
  let strReversed = '';
  for (let i = 0; i < str.length; i++) {
    strRevArr[(str.length - 1) - i] = str[i];
  }
  strRev = strRevArr.join('');

  console.log(str);
  console.log(strRev);
  if (str === strRev) {
    console.log(true);
    return true;
  }
  console.log(false);
  return false;
};

checkPalindrome('cool');
checkPalindrome('racecar');

//or alternatively and more succintly
const checkPalindromeClean = (str) => {
  let strRev = str.split('').reverse().join('');

  console.log(str);
  console.log(strRev);
  if (str === strRev) {
    console.log(true);
    return true;
  }
  console.log(false);
  return false;
};

checkPalindromeClean('cool');
checkPalindromeClean('racecar');

// 3. Digit Sum
// Write a function sumDigits that accepts a number and returns the sum of its digits.
const sumDigits = (number) => {
  const numToStrToArrToNum = number.toString().split('').map(Number);
  let sum = 0;

  for (let i = 0; i < numToStrToArrToNum.length; i++) {
    sum += numToStrToArrToNum[i];
  }

  return (sum);
};

console.log(sumDigits(42));

// Write a function calculateSide that takes two arguments: sideA and sideB, and returns the solution for sideC using the Pythagorean theorem.
// hint: discover the Pythagorean Theorem on a website called google.com
// hint: checkout the Math methods in javascript
const calculateSide = (sideA, sideB) => {
  const sqOfSideA = Number(sideA) ** 2;
  const sqOfSideB = Number(sideB) ** 2;
  const sumOfSquares = sqOfSideA + sqOfSideB;
  const sqRootOfSum = Math.sqrt(sumOfSquares);
  return (sqRootOfSum);
};

console.log(calculateSide(8, 6));
