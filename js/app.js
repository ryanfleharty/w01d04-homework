
//Verbal questions 
//1.    Parameters are variables in a method definition. When you call a method, 
//the arguments are the data that you pass into the method’s parameters. 
//In a declaration of a function the parameter is the variable. 
//The argument is the value of the variable that gets passed in the function. 

//2.    console.log displays the parameter that is passed into the log method in the window.
// It is used like print and will print into the console window. 
//When you use return, the function will stop executing, 
//to return the specified value.

//3.    Functions are objects, the value is called an argument, functions always return 
//a value. If no return value is specified  the function 
//will return default (undefined).

//Palindrome again 
//2.


//

//Digit Sum
//3.
const sumDigits = (num) => {
    let sumTotal = 0;
    let newStr = num.toString().split(" ", 3);
    for (var i = 0; i < newStr.length; i ++) {
       let converted = parseInt(newStr[i]);
       sumTotal += converted;
    }
    return sumTotal;
}
sumDigits(42);
console.log(sumDigits(42));

    

//Pythagoras
//4.
/*const calculateSide = (a, b) => {
    return(Math.sqrt((a * a) + (b * b)))
}
calculateSide(8, 6);
console.log(calculateSide(8, 6));

//Sum Array
//5.       //Remember to practice more with .reduce() (Delete before push)
const sumArray = [1, 2, 3, 4, 5, 6].reduce(add);
function add(accumulator, x) {
    return accumulator + x;
}
console.log(sumArray);
//Prime Numbers 
//Step One //remember to use backticks not quotes idiot (Delete before push)
    
var arr = [1, 22, 8, 5, 7, 11, 13, 2, 3, 5, 7, 11, 13, 17, 19, 23];
const checkPrime = (num) => {
    if(Math.sqrt(num) % 1 === 0) {
      console.log(`${num}`);
    }
}
//Step Two
const printPrimes = (num) => {
    for (i = 0; i <= num; i++){
    checkPrime(i);
}
}
console.log(printPrimes(97)); */