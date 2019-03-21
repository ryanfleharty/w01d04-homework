console.log("app.js loaded");


//1. A parameter is a variable declared in the function definition,
//whereas an argument is what you actually pass to the function.

//2. Return sets the value of the function and exits. console.log merely
//prints something to the console.

//3. You can use functions to serve as reusable containers for code
//that you will be using frequently.

const checkPalindrome = function(s)
{
	//s is the string we are checking

	//Make the string all uppercase:
	s = s.toUpperCase();

	for (let i = 0; i < s.length; i++)
	{
		if (!(s[i] == s[s.length - i - 1])) //that is, if we found a non-matching letter
		{
			return false;
		}
	}
	return true;
}

console.log(checkPalindrome("Radar"));
console.log(checkPalindrome("Borscht"));
