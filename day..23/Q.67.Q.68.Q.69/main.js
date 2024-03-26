"use strict";
/*/Question 67: Arithmetic with Mixed Types:

// This function adds a number and a string that represents a number
function addNumberAndString(number1: number, numberString: string): number {
    // Converts the string to a number and adds it to the first number
    return number1 + Number(numberString);
}

// Trying it with 20 and "8"
console.log(addNumberAndString(20, "8")); // Shows 15
// The string "5" is turned into the number 8, and then added to 20.

//Question 68: Multiplying Decimals:

// This function multiplies two decimal numbers
function multiplyDecimals(num1: number, num2: number): number {
    // Multiplies the numbers and rounds the result to two decimal places
    return Math.round((num1 * num2) * 200) / 200;
}

// Trying it with 0.1 and 0.2
console.log(multiplyDecimals(0.1, 0.2)); // Shows 0.02
// After multiplying, we round to make the result easier to read.*/
//Question 69: Dividing and Finding the Remainder: 
// This function divides two numbers and finds the quotient and remainder
function divideAndRemainder(dividend, divisor) {
    // Calculates the quotient and remainder
    let quotient = Math.floor(dividend / divisor);
    let remainder = dividend % divisor;
    // Returns both in an object
    return { quotient, remainder };
}
// Trying it with 10 divided by 3
console.log(divideAndRemainder(20, 3)); // Shows { quotient: 6, remainder: 1 }
// It shows how many times 3 goes into 10, and what's left over.
