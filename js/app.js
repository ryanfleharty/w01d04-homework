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