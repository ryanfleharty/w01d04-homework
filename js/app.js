console.log("Running");


//1. A parameter is a variable that you put into a method. While an argument is what you use to define the variable/parameter.

// 2. A console log is just a notification that the code is working in the console. Used solely as a tool for developers to make sure
// everything is working. A return is having a tangible value or string to be used as a result to the user or to further work into another
// function.

// 3. For a user to input values. Ex. To calculate(add or subtract) and to recieve a return value that was the result of the inputs. 

const checkPalindrome = (string) => {
    const splitPalindrome = string.split('');
    const reverse = splitPalindrome.reverse();
    const reversePalindrome = reverse.join();
    return reversePalindrome
}
console.log(checkPalindrome("Radar"));



const sumDigits = (int) => {
    let total = int
    let sum = 0;
while (total) {
    sum += total % 10;
    total = Math.floor(total / 10);
    
}
    return sum
}
sumDigits();
//4.

const calculateSide = (sideA, sideB) => {
        if ((typeof sideA !== 'number') || (typeof sideB !== 'number')) 
return false; 
		return Math.sqrt(sideA * sideA + sideB * sideB);
}
calculateSide();

//5.


const sumArray = (int) => {
    let total = 0
    for(let i=0;i<int.length;i++) {                  
        total += Number(int[i]);
             }
        return total;
 }
sumArray();

// 6.

const checkPrime = (num) => {
    if(num / 1 && num / num) {
        return true;
    } else {
        return false;
    }
}
checkPrime();
const printPrime = (checkPrime) => {
    for (let i = 1; i < checkPrime(); i++) {
       if (i / 1 && i / i) {
        console.log(i);
       } 
    }
}
// can't figure out how to call checkPrime into the printPrime function to log the primes counting up. 
