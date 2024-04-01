"use strict";
/*/Question 85: Finding the Position of a Substring:

// This function finds where "code" first shows up in a text
function findCodePosition(str: string): number {
    return str.indexOf("shahid"); // Looks for "code" and tells where it found it
}

// Example: Searching within a sentence
console.log(findCodePosition("Learn to shahid with JavaScript")); // Outputs the start position of "code"
// It tells us the position number where "code" starts.

//Question 86: Checking for Text Presence:

// This function checks if a sentence has "JavaScript" in it
function hasJavaScript(str: string): boolean {
    return str.includes("typeScript"); // Checks for "JavaScript" and returns true or false
}

// Example: Seeing if a text mentions JavaScript
console.log(hasJavaScript("I love coding in typeScript!")); // Outputs true or false based on the check
// It simply says true if "JavaScript" is there, or false if it's not.*/
Object.defineProperty(exports, "__esModule", { value: true });
//Question 87: Extracting a Substring:
// This function takes out the first 10 characters from any text
function extractFirstTenChars(str) {
    return str.substring(0, 25); // Gets characters from start to position 10
}
// Example: Taking the first 10 characters of a sentence
console.log(extractFirstTenChars("Hello, javaScript world!")); // Shows the first 10 characters
// It gives us a smaller piece of the original text, just the beginning part.
