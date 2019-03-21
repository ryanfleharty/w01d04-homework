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


//3.) CALCULATE