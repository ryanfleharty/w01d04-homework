console.log('i am loaded');

// PROBLEM SOLVING WITH FUNCTIONS

//1. VERBAL QUESTIONS

//1. What is the difference between a parameter and an argument. 
//   Parameter is what you use as the placeholders for the data that will be input in
//   your function
//   Arguments are the data that is passed in to the function in place of the parameters

//2. Return gives you the output of a function. It does not print anything to the console
//   or inherently do anything until called. 

//   console.log() will log whatever is passed in to the console. It does not actually do anything
//   other than print to the console and its output cannot be assigned to a variable. 

//3. When you assign a function to a variable, you are then able to use the function
//   to do stuff. This allows you to use functions in other functions and in other 
//places around the page. 


//2. Palindrome Again
//   Write a function checkPalindrome that accepts a single arg, a string. Function should return 
//   true if a string is a palindrome, false if not. Make sure it still works with capital letters. 


const checkPalindrome = (str) => {
    let capStr = str.toUpperCase();
    for (let i = 0; i < capStr.length; i++) {
        if(capStr[i] !== capStr[capStr.length -1 -i]){
            return false;
        } else {
            return true;
        }
    }
}; 


console.log(checkPalindrome('racEcaR'));


//3. Digit Sum
// Write a function sumDigits that accepts a number and returns the sum of its digits.

const sumDigits = (num) => {
    let stringNum = num.toString();
    let sum = 0;
    
    for (let i = 0; i < stringNum.length; i++){   
    sum = sum + parseInt(stringNum[i]);
    }
};

sumDigits(1234);

//4. Pythagoras 
//Write a function calculateSide that takes two arguments: sideA and sideB, 
//and returns the solution for sideC using the Pythagorean theorem.
// a squared + b squared = c squared

const calculateSide = (sideA, sideB) => {
    let sideC = Math.pow(sideA, 2) + Math.pow(sideB, 2);
    return sideC;
}

console.log(calculateSide(2, 5)); 


//5. Sum Array
// Write a function sumArray that takes an array as an argument and returns the sum
// of its numbers


const sumArray = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum = sum + parseInt(arr[i])
    }
    return sum;
};

console.log(sumArray([1, 2, 3, 4]));

