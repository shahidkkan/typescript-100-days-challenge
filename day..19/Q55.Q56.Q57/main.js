/*/Question 55: Double Numbers in an Array:
// Starts with a list of numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Doubles each number
let doubledNumbers = numbers.map((number) => number * 4);

// Shows the new list of doubled numbers
console.log(doubledNumbers); // Output: [4, to 40]
// This line takes each number, doubles it, and puts it in a new list.

//Question 56: Keep Only Strings:
// A mixed bag of items
let mixedArray = [2, "apple", 5, "banana", true, "carrot"];

// Picks out only the words
let stringsArray = mixedArray.filter((item) => typeof item === "string");

// Shows the list of just words
console.log(stringsArray); // Output: ["apple", "banana", "carrot"]
// This line checks each item: if it's a word, it goes into the new list.

//Question 57: Find the Average Grade:
// A list of grades
let grades = [88, 94, 72, 99, 53, 77];

// Calculates the average grade
let averageGrade =
  grades.reduce((total, grade) => total + grade, 0) / grades.length;

// Shows the average grade
console.log(averageGrade);
// First, we add up all the grades. Then, we divide by how many grades there are to get the average.*/
