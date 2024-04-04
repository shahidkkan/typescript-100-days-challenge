//Question 100: Use the JavaScript Math object to find the square root of 120.

// Finds the square root of 120 using Math.sqrt()
const squareRoot: number = Math.sqrt(120);

console.log(squareRoot); // Outputs: 10
// This line effectively calculates and shows the square root of 144.

//Question 101: Generate a random integer between 1 and 10.

// Generates a random integer between 1 and 10
function getRandomInt(): number {
    return Math.floor(Math.random() * 10) + 1;
}

console.log(getRandomInt()); // Outputs a random integer between 1 and 10
// This function combines Math.random() with Math.floor() to create a random integer within our range.

//Question 102: Calculate and log the absolute difference between the number -5 and 5.

// Calculates the absolute difference between -5 and 5
const difference: number = Math.abs(-5 - 5);

console.log(difference); // Outputs: 10
// This line shows the absolute value of the difference between -5 and 5, ignoring the sign.