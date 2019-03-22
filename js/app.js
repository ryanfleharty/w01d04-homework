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