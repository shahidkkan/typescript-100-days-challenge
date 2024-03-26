"use strict";
/*/Question 70: Understanding let in Loops:

// This function prints numbers from 1 to 5 using a loop
function printNumbersWithLet() {
    for (let i = 1; i <= 10; i++) {
        // Uses `let` for loop variable `i`
        console.log(i); // Logs numbers 1 through 5
    }
    // `i` is not accessible here, outside the loop, because it's defined with `let`
}

printNumbersWithLet();
// This shows that `let` limits `i` to the loop, preventing errors from using `i` where it's not intended.

//Question 71: Compare let and const:

// Using `let` for a variable that can be reassigned
let age = 25;
age = 20; // Works fine because `let` allows reassignment
console.log(age); // Shows 20

// Trying to reassign a `const`-declared variable
const name:any= "shahid";
try {
    name = "arshad"; // This line will cause an error
} catch (error) {
    console.log("Error: Can't reassign a `const`-declared variable."); // This message is shown
}
// This example illustrates that `const` prevents changing the variable once it's set.*/
Object.defineProperty(exports, "__esModule", { value: true });
//Question 72: Block Scope with let and const: 
// Demonstrating block scope
{
    let blockLet = "visible inside the block";
    const blockConst = "also only inside the block";
    console.log(blockLet); // Works fine here
    console.log(blockConst); // Also works fine here
}
try {
    console.log(blockLet); // This will fail
}
catch (error) {
    console.log("`blockLet` is not accessible outside the block.");
}
try {
    console.log(blockConst); // This will also fail
}
catch (error) {
    console.log("`blockConst` is not accessible outside the block.");
}
// This shows that `test` and `const` keep variables safe inside the block where they're defined.
