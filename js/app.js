// PROBLEM SOLVING WITH FUNCTIONS

// 1. VERBAL QUESTIONS
// 1
/*
A parameter is the value name for the input of a function,
it is only defined when you invoke the function.
An argument is the actual value that is passed to the
function through the parameter when it is invoked.
*/
// 2
/*
Return is actually the output of the function. It essentially
defines the variable that the function is tied to.
A console.log() is simply an operation that logs some value
to the console, without holding any real meaning.
*/
// 3
/*
There are amany implications, but the most important is the
idea that the value can later be called upon in other
functions or objects or wherever it is needed.
*/

// 2 PALINDROME AGAIN

      const checkPalindrome = (str) => {
        str.toLowerCase();
        let arr1 = str.split(' ');
        let arr2 = arr1.reverse()
        for (i = 0; i < arr1.length; i++) {
          if (arr1[i] !== arr2[i]) {
            return false;
          } else {
            console.log(`${str} is ${str} backwards!!!`);
            return true;
          }
        }
      }

      checkPalindrome("RacEcAr racecar");

// 3 DIGITAL SUM

      const sumDigits = (num) => {
        const digits = `${num}`;
        let digitSum = 0;
        for (let i = 0; i < digits.length; i++) {
           digitSum = digitSum + Number(digits[i]);
        }
        return digitSum;
      }
      console.log(sumDigits(538576345255353));

// 4 PYTHAGORAS

      const calculateSide = (sideA,sideB) => {
          let sideCSquared = ((sideA * sideA)+(sideB * sideB));
          let sideC = Math.sqrt(sideCSquared);
          return sideC;
      }

      console.log(calculateSide(49.2831999,49.2831999));

// 5 SUM ARRAY

      const sumArray = (arr) => {
        let sum = 0;
        for (i = 0; i < arr.length; i++) {
          sum += arr[i];
        }
        return sum;
      }

      console.log(sumArray([5,6,4,2,7,8,3,5,10,15,4]));




// 6 PRIME NUMBERS

      const checkPrime = (num) => {
// ** see "the Sieve of Eratosthenes"
        let odds = [];
// We must list out the odd numbers at some point.
        if (num === 2) {
          return true;
// 2 is the only prime number that isn't odd.
        } else if (num < 2 || num % 2 === 0){
          return false;
// this accounts for 1, 0, and all negative numbers. It also
// immediately returns false if num is even (and not 2).
        } else {
          for (i = 3; i <= num; i++) {
            if (i % 2 !== 0) {
              odds.push(i);
            }
          }
// Now we have listed all the odd numbers for 3 to num in the odds array.

      let nextPrime = 3;
      while (odds.length > 1 && odds[odds.length - 1] === num) {
// this While Loop will continue until there is only a single
// number left (num, which means it is prime) or until num (the
// final number in the array) is no longer in the array.

          for (i = 0; i < odds.length; i++) {
            if (odds[i] % nextPrime === 0 && odds[i] !== nextPrime) {
              odds.splice(odds[i],1);
            }
      }
// this for loop will eliminate any number from the array that is
// a multiple of the nextPrime value.

          odds.splice(0,1);
// this line removes the first value in the array, which is no
// longer being used. It wont remove the final value we are
// checking becasue the while loop will stop running when the
// array length drops to 1.

          nextPrime = odds[0];
// This resets the nextPrime value to the first value in the odds
// index (i.e. the smallest number in the array).
        }
        if (num !== odds[0]) {
          console.log(`${num} is not a prime number :(`);
          return false;
        } else {
          console.log(`${num} is a prime number!!!!`);
          return true;
        }
      }
      }


// *** it took my computer 30ish seconds to check if 1,000,001 is
// *** a prime number. It's not.
      checkPrime(11);
      checkPrime(101);
      checkPrime(1001);
      checkPrime(10001);
      // checkPrime(100001);
      // checkPrime(1000001);


// This is just a version without all
// the comments so its easier to read.

const checkPrime2 = (num) => {
  let odds = [];
  if (num === 2) {
    return true;
  } else if (num < 2 || num % 2 === 0) {
    return false;
  } else {
    for (i = 3; i <= num; i++) {
      if (i % 2 !== 0) {
        odds.push(i);
      }
    }
    let nextPrime = 3;
    while (odds.length > 1 && odds[odds.length - 1] === num) {
      for (i = 0; i < odds.length; i++) {
        if (odds[i] % nextPrime === 0 && odds[i] !== nextPrime) {
          odds.splice(odds[i], 1);
        }
      }
      odds.splice(0, 1);
      nextPrime = odds[0];
    }
    if (num !== odds[0]) {
      console.log(`${num} is not a prime number :(`);
      return false;
    } else {
      console.log(`${num} is a prime number!!!!`);
      return true;
    }
  }
}


// HUNGRY FOR MORE
// 1
// 2
