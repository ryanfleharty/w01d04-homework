//What is the difference between a parameter and an argument?

///A parameter is a variable in a method definition

///Argument is the actual value of this variable that gets passed to function


//Within a function, what is the difference between return and console.log?

///Console.log will display the parameter in the console.

///Return statement will stop executing of the function and return the specified value (not into the console).


//What are the implications of the ability of a function to return a value?


///The function returns the value the return statement determines


//"Commit 1 - Verbal questions".

let Palindrome = function(string){
// return true if sting is Palindrome if not return false
    if (string === string.split("").reverse().join("")) {
        return true;

    }else{
        return false
      }
    }
Palindrome('chicken')
Palindrome('radar')

//"Commit 2 - Palindrome".
const add = (num1, num2) => {
    console.log(num1 + num2);
    }
  add(4, 2);

  //"Commit 3 - Digit Sum".

  function Pythagoras (sideA, sideB){
      return Math.sqrt(Math.pow(sideA, 2) + (Math.pow(sideB, 2)));
     }
     Pythagoras(8, 6)
     
//"Commit 4 - Pythagoras".


const sum = [1, 2, 3, 4, 5, 6].reduce(add);

function add(accumulator, a){
    return accumulator + a
}

console.log(sum);


//"Commit 5 - Sum Array".

function isPrime(num) {
    if(num < 2) return false;
    for (var i = 2; i < num; i++) {
        if(num%i==0)
            return false;
    }
    return true;
}

var array = new Array(100);
 
    for (var i=2 ; i<=array.length-1; i++){
 
        if((i%2===0) || (i%3===0))
        continue;
          document.writeln (i+",");
 }
//"Commit 6 - Prime Numbers".