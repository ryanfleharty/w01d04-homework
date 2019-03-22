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

console.log(sumArray([1, 2, 3, 4, 5, 6]));

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

//Begin Functions Lab problems

// 1. printGreeting
// Write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting.
const printGreeting = (name) => {
  return (`Hello there, ${name}!`);
};
console.log(printGreeting("Slimer"));

// 2. reverseWordOrder
// Write a function reverseWordOrder that accepts a single argument, a string. The function should return a string with the order of the words reversed. Don't worry about punctuation.
const reverseWordOrder = (str) => {
  return (str.split(' ').reverse().join(' '));
};
console.log(reverseWordOrder("Ishmael me Call"));
console.log(reverseWordOrder("I use Lâncome on my comb"));

// 3. calculate
// Write a function called calculate.
// This function should take three arguments: two numbers and a string.
// Name the parameters num1, num2, and operation.
// If if the function is called with the third argument as "add", it should return the sum of num1 and num2.
// If if the function is called with the third argument as "sub", it should return return num1 minus num2.
// Do the same thing for multiplication "mult", division "div", and exponent "exp" (where num2 is the exponent of num1).
const calculate = (num1, num2, operation) => {
  let result;
  switch (operation) {
    case 'add':
      result = num1 + num2;
      // code block
      break;
    case 'sub':
      result = num1 - num2;
      // code block
      break;
    case 'mul':
      result = num1 * num2;
      // code block
      break;
    case 'div':
      result = num1 / num2;
      // code block
      break;
    case 'exp':
      result = num1 ** num2;
      // code block
      break;
    default:
      // code block
  }
  return (result);
};
console.log(calculate(4, 3, "add"));
console.log(calculate(4, 3, "div"));
console.log(calculate(4, 3, "sub"));
console.log(calculate(4, 3, "mul"));
console.log(calculate(4, 3, "exp"));

// 4. pandigital numbers
// Note: The following question is weird, we know. In interviews, you will absolutely be given coding challenges with "weird" questions and you'll need to be very careful when reading these types of questions to make sure you understand what you're being asked to do.
// A number of length n is 1-to-n pandigital if it makes use of all the digits 1 to n exactly once.
// The number 15234 is 1-to-n pandigital because it is 5 numbers long and includes 1, 2, 3, 4, and 5.
// The number 333 is not 1-to-n pandigital.
// The number 0 is not 1-to-n pandigital.
// The number 987654321 is 1-to-n pandigital.
// Write a function that checks if a number is 1-to-n pandigital.
const checkPanDigital = (strNum) => {
  let strNumArrSorted = strNum.split('').sort();
  const maxNum = strNumArrSorted[strNumArrSorted.length - 1];
  let panDigiFlag = false;
  //console.table(strNumArrSorted);
  //console.log(maxNum);

  let panDigiCtr = 1;
  for (let i = 0; i < maxNum; i++) {
    //initialize first counted individual number making up the str at index i of the Array of chars
    if (Number(strNumArrSorted[i]) !== panDigiCtr) {
      panDigiFlag = false;
      break;
    } else {
      panDigiFlag = true;
    }
    panDigiCtr++;
    //console.log(panDigiCtr);
  }
  return (panDigiFlag);
};
console.log(checkPanDigital("54123"));
console.log(checkPanDigital("765324"));
console.log(checkPanDigital("765321498"));

//5. printGreeting v2.0
// There is a very rudimentary JavaScript function for receiving user input called prompt().
// Usage:
 // const userInput = prompt("Please enter some input");
//userInput is now whatever the user entered.
// There is another rudimentary JavaScript function for displaying text called alert(). You probably have heard of it. It takes a string as a parameter. Read about it on mdn.
// Let's revisit printGreeting.
// First get the userInput as above. Then write a function called printGreeting2 with a parameter name that returns a greeting with the argument interpolated into the greeting as before, but this time use the alert function to display the greeting to the user.
const printGreeting2 = (name) => {
  return (alert(`Hello there, ${name}!`));
};
const userInput = prompt("Please enter your name: ");
printGreeting2(userInput);
