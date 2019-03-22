// // ## 1. Verbal questions

// // Write answers to the following questions as comments. 

1. What is the difference between a **parameter** and an **argument**?
    A parameter or multiple parameters are set when the function is declared. 
    It tells the function what type of arguments to accept. 
    Aurguments are the input entered when the function is called.

2. Within a function, what is the difference between **return** and **console.log**?
    return produces a value that must be stored or passed.
    console.log is used to track outputs by loging them to the console.
3. What are the implications of the ability of a function to return a value?
    the returned value can be passed to another function as an aurgument 
    or stored in a variable to be used in other parts of your program.
// // // <hr>
// // &#x1F534; **Commit your work.** <br>
// // The commit message should read: <br>
// // "Commit 1 - Verbal questions".
// // <hr>


// //## 2. Palindrome again.
// //Write a function `checkPalindrome` that accepts a single argument, a string.Yes, you've done it before, but do it again. Later in this assignment we're gonna beef up our palindrome function some.See if you can do it without looking back at your previous answer.The function should return true if the string is a palindrome, false if not.Make sure your function will give the correct answer for words with ** capital letters **.

//declare the function and perameter
// const checkPalindrome = (str) => {
// //loop though the string
//        for(let i = 0; i < str.length; i++){
// //check if the value at the looped index position is equal to the value at the mirrored position in the array  
//             if (str[i] === str[i].length - 1 - str[i])
//                 {console.log("it's a palindrome!")
//             }

//             else { console.log ('sorry, not a palindrome')
// }   }   }
// //if true store in variable pass

//checkPalindrome("racecar")

// ## 3. Digit Sum
// //Write a function sumDigits that accepts a number and returns the sum of its digits.
// const sumDigits = (num) => {
//     let numToString = num.toString()
//     for (let i = 0; i< numToString.length; i++){
//          return parseInt(numToString[i] + [i])}
// }
// console.log(sumDigits(42))

//
//for (i = 0; i < splitNum.length; i++) 
//return splitNum[i]+[i]
//}

//console.log(sumDigits(42))

// ## 4. Pythagoras
// Write a function `calculateSide` that takes two arguments: `sideA` and `sideB`, and returns the solution for sideC using the Pythagorean theorem.
// const calculateSide = (a,b)=>{
//     return (Math.sqrt((a * a) + (b * b)));
// }
// console.log(calculateSide(8, 6));
// // => 10
// ```
// <hr>
// &#x1F534; **Commit your work.** <br>
// The commit message should read: <br>
// "Commit 4 - Pythagoras".
// <hr>

// // ## 5. Sum Array
// // Write a function `sumArray` that takes an **array** as an argument.
// // The array should contain numbers. The function should return the sum of the numbers in the array.
// const sumArray = (arr)=>{
// //loop through arr, check to see if array is numbers
// for (let i = 0;i<arr.length;i++){     
//     if (typeof arr[i] === Number){
//         //use .reduce method to find sum
//         return arr.reduce(





// console.log(sumArray([1, 2, 3, 4, 5, 6]))
// => 21


// ## 6. Prime Numbers
// A Prime number is a number that is not evenly divisible by another number except 1 and itself. 
//If you want to read more deeply about it, [go here](https://en.wikipedia.org/wiki/Prime_number).
// To test whether a number is Prime, 
//you only need to test as far as the **square root** of that number. This is advisable for optimization and testing large numbers.


// ### Step One
// Write a function called `checkPrime` that will test whether a number is Prime. The function will return true (Boolean) if Prime, false if not.
// _Hint:_ Check every number up to the square root. To do this, try a _for loop_.
// const checkPrime = (num)=>{
//     for (let i = 2; i <= num-1; i++){
//        if (num % i === 0){
//            return false
//        }else{
//         return true
// }   }   }

// const printPrimes = (num) => {
//     let arr = num.toString().split('');
//     for (let i = 0; i <= arr.length; i++)
//         if (checkPrime(arr[i])) { console.log([i]) }
// }
// Write another function called `printPrimes` that will print (console log) all the Primes up to an arbitrary limit. For example, if you invoke your function with `printPrimes(97)`, it will print all the Prime numbers up to and including 97.
// This function can **call on** the previous `checkPrime` function.
// </details>

// <hr>
// &#x1F534; **Commit your work.** <br>
// The commit message should read: <br>
// "Commit 6 - Prime Numbers".
// <hr>

