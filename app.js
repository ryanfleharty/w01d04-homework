//What is the difference between a parameter and an argument?

  /*the the parameter is the variable that is defined by a function.
   the parameter then recieves value when the function is in use where as the argument, is the
   data that is being passed when the function is active.*/

//Within a function, what is the difference between return and console.log?

  /* a console.log prints input onto the console and is used to test and debug code.
    a return will return a value when a function is called, when it is called it ends a return or function.*/

//What are the implications of the ability of a function to return a value?
  /* return is keeping the value of the output and if the value is not returned it will be undefined.*/

//Palindrome
  const checkPalindrome = (word) => {
    let original = word.toUpperCase()
    let reverse = original.split('').reverse().join('');
    if (original === reverse){
      return true
    } else {
      return false
    }
  }
console.log(checkPalindrome("racecar"));

//digit sum
const sumDigits = (digits) => { // creating a function
  let numString = digits.toString(); // declaring a new variable for digits as a string
  let listDigits = numString.split("");// declaring a new variable and setting it to an arroy of numbers
  let sum = 0 // creating a variable for the output
  for(let i = 0; i < listDigits.length; i++){//creating a loop through the array
    sum += Number(listDigits[i])//accessing the array and adding it to the sum
  }
  return sum//returning sum
}
console.log(sumDigits(5678));

//Pythagoras
const calculateSide = (sideA, sideB) => { //creating a functions
  let a = sideA// declaring variablefor sideA
  let b = sideB//declaring a variable for sideB
  let a2 = a * a//declaring a variable for a * a
  let b2 = b * b//declaring a variable for b * b
  let c2 = a2 + b2 //declaring a variable for a2 + b2
  let c = Math.sqrt(c2); //declaring a variable for square root of c
  return c// returning outputc
}
console.log(calculateSide(8,6));

// Sum array
const sumArray = (array) => {
  let arr = array
  let sum = 0
  for(let i = 0; i < arr.length; i++)
    sum += arr[i]
  return sum
}
console.log(sumArray([1, 2, 3, 4, 5, 6]));
// create a function
// declare variable to store Array
//declare variable for sum
//create a loop to loop through Array
//adding the elements to the sum
//return sum of numbers in array
