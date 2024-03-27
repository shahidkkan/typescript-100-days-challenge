//Question 73: Assigning and Updating Variables:

// This function shows how to assign and update variable values
function updateVariable() {
    let number = 15; // Initially assigns the value 15
    console.log("Initial value:", number); // Logs the initial value

    number = 25; // Updates the value to 25
    console.log("Updated value:", number); // Logs the updated value
}

updateVariable();
// We assign a value to a variable and then update it, showing how values can change.

//Question 74: Swapping Variables: 

// This function swaps the values of two variables
function swapValues() {
    let a = 5, b = 10; // Initially, a is 5 and b is 10
    console.log("Before swap: a =", a, "b =", b);

    let temp = a; // Temporarily stores the value of a
    a = b; // Sets a to b's value
    b = temp; // Sets b to a's original value stored in temp

    console.log("After swap: a =", a, "b =", b); // Logs the swapped values
}

swapValues();
// We use a temporary variable to hold one value while we swap them, like a magic trick!*/

//Question 75: Compound Assignment Operators:

// This function uses compound assignment operators for different operations
function useCompoundOperators() {
    let x = 4; // Starts with x equal to 4
    console.log("Initial x:", x);

    x += 2; // Adds 2 to x
    console.log("After addition:", x); // Shows x after addition

    x -= 1; // Subtracts 1 from x
    console.log("After subtraction:", x); // Shows x after subtraction

    x *= 3; // Multiplies x by 3
    console.log("After multiplication:", x); // Shows x after multiplication

    x /= 2; // Divides x by 2
    console.log("After division:", x); // Shows x after division
}

useCompoundOperators();
// We simplify arithmetic operations on x using compound assignment operators, like a shortcut.