/*console.log('Up and running');

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

// 4. Write a function calculateSide that takes two arguments: sideA and sideB, and returns the solution for sideC using the Pythagorean theorem.
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

// 5. Sum Array
// Write a function sumArray that takes an array as an argument. The array should contain numbers. The function should return the sum of the numbers in the array.
const sumArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return (sum);
};

console.log(sumArray([1, 2, 3, 4, 5, 6]));*/

// 6. Prime Numbers
// A Prime number is a number that is not evenly divisible by another number except 1 and itself. If you want to read more deeply about it, go here. To test whether a number is Prime, you only need to test as far as the square root of that number. This is advisable for optimization and testing large numbers.

// Step One
// Write a function called checkPrime that will test whether a number is Prime. The function will return true (Boolean) if Prime, false if not. Hint: Check every number up to the square root. To do this, try a for loop.
const checkPrime = (num) => {
  const sqRootOfNum = Math.sqrt(num);
  let primeFlag = true;

  if (num === 1) {
    primeFlag = false; // 1 is not a prime number
  }
  else if (num === 2 || num === 3) {
    // skip to end because 2 and 3 are prime numbers and are not caught in else
  } else {
    for (let i = 2; i <= sqRootOfNum; i++) {
      if (num % i === 0) {
        //console.log(`${num} is evenly divisible by ${i} and is not prime`);
        primeFlag = false;
        break;
      }
    }
  }
  return (primeFlag);
};
//console.log(checkPrime(25));

// Step Two
// Write another function called printPrimes that will print (console log) all the Primes up to an arbitrary limit. For example, if you invoke your function with printPrimes(97), it will print all the Prime numbers up to and including 97. This function can call on the previous checkPrime function.
const printPrimes = (limit) => {
  for (let i = 1; i < limit; i++) {
    if (checkPrime(i)) {
      console.log(i);
    }
  }
};
printPrimes(97);
