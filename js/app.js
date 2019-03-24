console.log('something');


// 1. Verbal questions
// Write answers to the following questions as comments.

// 1. What is the difference between a parameter and an argument?
// A parameter is what is being requested in a function, whereas an 
// argument is the input being added to the function.


// 2. Within a function, what is the difference between return and console.log?
// Within a function a console.log will print whatever it's being told to the 
// console and keep right on going through its function.  A return will print
// what its being told and then stop all activity.




// 3. What are the implications of the ability of a function to return a value?
//  Functions can store code to use later on to get data, set data, 
//  check or verify something, or print to the console.  


// 2. Palindrome again.

// Write a function checkPalindrome that accepts a single argument, a string. 
// Yes, you've done it before, but do it again. Later in this assignment we're 
// gonna beef up our palindrome function some. See if you can do it without 
// looking back at your previous answer. The function should return true if 
// the string is a palindrome, false if not. Make sure your function will 
// give the correct answer for words with capital letters.

function checkPalindrome(str) {
 let reversed = "";
 for (var i = str.length - 1;i >= 0; i--){
 	reversed += str[i];
 	} if(reversed.toLowerCase() == str.toLowerCase()){
 		return true;
 	} else {
 		return false;
 	}
 
 //return reversed;
}console.log(checkPalindrome('racecar'));


// 3. Digit Sum
// Write a function sumDigits that accepts a number and 
// returns the sum of its digits.

	function sumDigits (num) {
		let x =  num;
		let sum = 0;
		let digits = (""+x).split("");
		for(let i = 0; i < digits.length; i++){
		sum += +digits[i];
		}
		return sum;
	 }
	
console.log(sumDigits(42));

// function sumArray(arr) {
// 	let numbers = 0;
// 	for (let i = 0; i < arr.length; i++) {
// 		numbers += arr[i];
// 	}
// 	return numbers;
// }
// console.log(sumArray([1, 2, 3, 4, 5, 6]));










// var value = 22;
//   sum = 0;
// while(value) {
// 	sum += value % 10;
// 	value = Math.floor(value / 10);

// }

// console.log(sum)

// 4. Pythagoras
// Write a function calculateSide that takes two 
// arguments: sideA and sideB, and returns the solution 
// for sideC using the Pythagorean theorem.


const calculateSide = (sideA, sideB) => {
	let sideC = ((sideA * sideA) + (sideB * sideB));
	console.log(sideC);
	let theorem = Math.sqrt(sideC);
console.log(theorem);

}

calculateSide(5, 5,);




// 5. Sum Array
// Write a function sumArray that takes an array as 
// an argument. The array should contain numbers. 
// The function should return the sum of the numbers 
// in the array.

function sumArray(arr) {
	let numbers = 0;
	for (let i = 0; i < arr.length; i++) {
		numbers += arr[i];
	}
	return numbers;
}
console.log(sumArray([1, 2, 3, 4, 5, 6]));




















// 		6. Prime Numbers
// 	A Prime number is a number that is not evenly divisible by 
//	another number except 1 and itself. If you want to read 
//	more deeply about it, go here. To test whether a number 
//	is Prime, you only need to test as far as the square root 
//	of that number. This is advisable for optimization and 
//	testing large numbers.



// Step One
// Write a function called checkPrime that will test whether 
//	a number is Prime. The function will return true (Boolean) 
//	if Prime, false if not. Hint: Check every number up to the 
//	square root. To do this, try a for loop.

function checkPrime(num) {
  if (num === 1) {
    return false;
  } else if(num === 2) {
    return true;
  }else {
    for( x = 2; x < num; x++) {
      if(num % x === 0) {
        return false;
      }
    }
    return true;  
  }
}

console.log(checkPrime(3));
console.log(checkPrime(15));


// Step Two
// Write another function called printPrimes that will print 
//	(console log) all the Primes up to an arbitrary limit. For 
//	example, if you invoke your function with printPrimes(97), 
//	it will print all the Prime numbers up to and including 97. 
//	This function can call on the previous checkPrime function.


function printPrimes (number) {
	for(let i = 0; i <= number; i++){
		if (i !== 2 && i !== 3 && i !== 5 && i % 2 === 0 || i % 3 === 0 || i % 5 === 0) {}
		else {
		console.log(i + ' is prime');
		}
	}
	}
		printPrimes(97);




