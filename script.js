// 1.	Write an arrow function that takes two parameters, a and b, and returns their sum.
let x = (a,b) => a+b;
console.log(x(10,20));

//2.	Create an arrow function that takes a single parameter name and returns a greeting message: “Hello, {name}!”
let greet = (Name) => "Hello, "+Name;
console.log(greet("abhi"));

//3.	Write an arrow function that* checks if a number is even and returns true if it is, or false otherwise.
let isNumEven = (num) => {
    return num % 2 == 0;
} 
console.log(isNumEven(7));
console.log(isNumEven(8));

// 4.	Write an arrow function that accepts a number and returns true if the number is greater than 10, or false otherwise.
let isNumGreater = (number) => {
    return number > 10;
}
console.log(isNumGreater(11));
console.log(isNumGreater(9));

// 5.	Create an arrow function that takes two strings, compares their lengths, and returns the longer string. If both have the same length, return “Equal length.”
let compareTwoStrings = (str1 , str2) =>{
    if(str1.length>str2.length){
        return str1;
    }
    else if (str2.length>str1.length){
        return str2;
    }
    else{
        return "equal";
    }
}
console.log(compareTwoStrings("rudransh","laddu"));
console.log(compareTwoStrings("beta","laddu"));
console.log(compareTwoStrings("rudra","laddu"));
