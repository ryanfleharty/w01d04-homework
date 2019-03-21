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
