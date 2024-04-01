"use strict";
/*/Question 88: Rounding to the Nearest Integer:

// This function rounds a decimal number to the nearest whole number
function roundToNearestInteger(num: number): number {
    return Math.round(num); // Rounds the number
}

// Example: Rounding a decimal
console.log(roundToNearestInteger(4.7)); // Outputs: 5
console.log(roundToNearestInteger(4.4)); // Outputs: 4
// This shows how the function rounds numbers either up or down.

//Question 89: Converting Strings to Numbers:

// This function changes a string into a number
function convertStringToNumber(str: string): number {
    return parseFloat(str); // Converts the string to a number
}

// Example: Turning a numeric string into a real number
console.log(convertStringToNumber("123.45")); // Outputs: 123.45
console.log(convertStringToNumber("100")); // Outputs: 100
// We're taking strings that look like numbers and turning them into actual numbers.*/
Object.defineProperty(exports, "__esModule", { value: true });
//Question 90: Checking if a Value is NaN: 
// This function checks if a value is Not a Number (NaN)
function isValueNaN(value) {
    return isNaN(value); // Checks and returns true if the value is NaN, false otherwise
}
// Examples: Checking different values
console.log(isValueNaN("hello world")); // Outputs: true, because "hello world" isn't a number
console.log(isValueNaN(123)); // Outputs: false, because 123 is a number
// This way, we can guard against unexpected non-numeric values in our calculations or inputs.
