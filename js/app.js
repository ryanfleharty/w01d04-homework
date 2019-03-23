//1. Verbal Questions
//a parameter are listed as part of a function defintion
// arguements are values passed to a function when its invoked or called upon

//2
//console.logs are more for the developer, it is something that helps us debug and check our work (ie true/false)
//returns do the thing, we cant really see them but they perform the function

//3. not entirely sure what the question is asking
//the functions job is to return some type of value to make something happen or work
// can also be used and reffered back to many times, as long as its invoked.


//2. Palindrome 
function checkPalindrome(str) {
if (str == str.split(''). reverse().join('')
	return true;
} else {
	return false;
}

checkPalindrome("trashcan");
checkPalindrome("racecar");


//3 Digit sum
const sumDigits = (num) => {

return (num - 1) % 9 +1;
}  
console.log(sumDigits(42));
=> 6;



//Commit 4- Pythagoras
const calcuteSide = (sideA, sideB) => {
return Math.floor(Math.sqrt((a * a) + (b * b)))
}

calcuteSide(4,5);

//5. sum array
const arr = [1, 2, 3, 4, 5, 6];
const sumArray = (a, b) => a + b

const sum = arr.reduce(sumArray);
console.log(sum);

//6 Prime Numbers
//step 1
const checkPrime = (num) => {
    for(let i = 2; i < num; i++)
        if(num % i === 0)
            return false;
    	return num > 1;
}
checkPrime(10);
//=>false
checkPrime(7);
//=>true

//step 2
const checkPrime = (num) => {
    for(let i = 2; i < num; i++)
        if(num % i === 0)
            return false;
    	return num > 1;
}


printPrimes(num) => {
	for(let i = 2; i <= 100; i++)
	console.log([num[i]]);
}


