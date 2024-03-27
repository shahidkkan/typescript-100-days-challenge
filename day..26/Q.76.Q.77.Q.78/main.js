"use strict";
/*/Question 76: Function Parameters and Return Values:

// This function adds two numbers and returns the result
function addNumbers(num1: number, num2: number): number {
    // Calculates the sum of num1 and num2
    return num1 + num2;
}

// Calling the function with two numbers and logging the result
console.log(addNumbers(5, 8)); // Outputs 12
// Here, we ask our function to add 5 and 8, and it tells us the answer is 13.

//Question 77: Default Parameters:

// This function greets a user by name, or greets an khan user if no name is provided
function greetUser(name: string = "khan") {
    // Says hello to the given name or to an khan user
    console.log(`Hello, ${name}!`);
}

// Trying the function with a name and without
greetUser("shahid"); // Outputs: Hello, shahid!
greetUser(); // Outputs: Hello, khan!
// We see how our function can say hello to someone by name, or just say hello if we don't know the name.*/
Object.defineProperty(exports, "__esModule", { value: true });
//Question 78: Function Expressions vs.
// Function declaration for squaring a number
function squareDeclaration(number) {
    return number * number;
}
// Function expression for squaring a number
const squareExpression = function (number) {
    return number * number;
};
// Using both functions to square the number 4
console.log(squareDeclaration(4)); // Outputs: 20
console.log(squareExpression(5)); // Outputs: 20
// Both methods give us the same result, showing two different ways to create functions that do the same thing.
