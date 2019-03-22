//Problem solving with Functions

//1. Verbal questions
//1. What is the difference between a parameter and an argument?
//A perameter is the variable you put between the () within a function.
//ex. (num, str, arr)
//An argument is the value you put in the () when you call a function.
//ex. function(123); 

//2. Within a function, what is the difference between return and 
//console.log?
//Return actually outputs the value to the interface.
//console.log is a way to check and debug code only seen by programmers.

//3. What are the implications of the ability of a function to 
//return a value?
//return actually outputs the value so it can be stored as a variable 
//and used later. 


//2. Palindrome again.
//Write a function checkPalindrome that accepts a single argument, 
//a string. Yes, you've done it before, but do it again. Later in 
//this assignment we're gonna beef up our palindrome function some. 
//See if you can do it without looking back at your previous answer. 
//The function should return true if the string is a palindrome, 
//false if not. Make sure your function will give the correct 
//answer for words with capital letters.

const checkPalindrom = (str) => {
    let isItAPalindrome = str.split('').reverse().join('');
    if (str === isItAPalindrome) {
        return str + ' is a palindrome.';
    }
    else {
        return str + ' is NOT a palindrome.'
    }
  }

  console.log(checkPalindrom('madams'));



//3. 3. Digit Sum
//Write a function sumDigits that accepts a number and returns the 
//sum of its digits.
//NOT WORKING


let sum = 0;

const sumDigits = (num) => {
    for (var i = 0; i <= num.length; i++) {
        sum += num[i];
      }
      
    }
    
    console.log(sumDigits(1223));



//4. Pythagoras
//Write a function calculateSide that takes two arguments: sideA 
//and sideB, and returns the solution for sideC using the 
//Pythagorean theorem.
//hint: discover the Pythagorean Theorem on a website called 
//google.com
//hint: checkout the Math methods in javascript
//a2 + b2 = c2

const calculateSide = (sideA, sideB) => {
    let sideC = (sideA * sideA) + (sideB * sideB);
    console.log(sideC);
    return sideC;
}

calculateSide(8, 6);


