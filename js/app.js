console.log('loaded'); 


//1.) VERBAL QUESTIONS
 	// A parameter goes with in a function and an argument is used to call a function. 
 	// Return will give you and the user an actual output while console.log will simply test
 	// that function and its potential output. 
 	// In order for a function to return a value you must properly call on that black of function
 	// from with in that block. 


 //2.) PALINDROME 


 const checkPalindrome = (str) =>{
 	for(let i=0; i < str.length; i ++){
 		if(str[i] !== str[str.length -1 -i]){
 			return false 
 		}else{
 			return true
 		}
 	}
 }
console.log(checkPalindrome("radar"));
console.log(checkPalindrome("letter"));


//3.) DIGIT SUM
sumDigits = (number) => {
	sum = 0

	while (number) {
    	sum += number % 10; // taking last number, pulling it down and repeating
    	number = Math.floor(number / 10);
	}
	return sum;		
} 
	

console.log("diget sum = " + sumDigits(42));


// 4.) PYTHAGORAS
calculateSide = (sideA, sideB) =>{
	output = sideA * sideA;
	output += sideB * sideB; // adding sideA output to sideB

	return output;

}
console.log("pythagoras = " + calculateSide(8, 6));

sumArray = (arr) =>{
	sum = 0;
	for(i=0; i < arr.length; i++){
		sum += arr[i];
	}
	return sum;
}
console.log(sumArray([1, 2, 3, 4, 5, 6]));

// CHECKPRIME
checkPrime = (number) =>{
	
	output = false
	for(i=1; i < number; i++){
		//alert(i*i)
		if (i * i == number){
			output = true
		}
	} 
	return output;
}
console.log(checkPrime(9));

// PART 2 PRINTPRIMES
printPrimes = (number) =>{

	for(i=0; i < number; i++){
		
		if (checkPrime(i))
			console.log(i)
	}

}
printPrimes(97);







