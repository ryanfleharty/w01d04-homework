console.log("Homework Day 4");

//Verbal questions
//1. a parameter is defined in the function and describes what
//the argument will be inputed by the user and will be evaluated
//by the function

//2. a console log is simply a debugging tool that doesn't 
//accomplish anything; return actually "returns" us a value,
//it's the output of a function

//3. the implications of the ability of a function to return
//a value is that a user is able to input a value on the front
//end, the function will evaluate it based on the block of code
//it's programmed to run, and then the user will actually SEE
//the result. furthermore, the result can then be redefined into
//a new variable that can be used elsewhere

//Palindrome again

const checkPalindrome = (palindrome) => {
	return palindrome == palindrome.split('').reverse().join('');
}

console.log(checkPalindrome('racecar'));
console.log(checkPalindrome('borscht'));

//.split is a string method 
//"" is going to separate everything and return you an array
//now that we have the array, .reverse will reverse it
//.join is another array method that will put it back together
//we then will compare the original word to the new output

//OR the answer that makes MORE sense...
//	 for(let i = 0; i <str.length; i++){
	//if(str[i] !== str[str.length -1 -i])
		//return false
//}




