"use strict";
/*/Question 82: Find the Length of a String:

// This function counts how many characters are in a string
function stringLength(str: string): number {
    return str.length; // Returns the number of characters in the string
}

// Example: Measuring the length of a name
console.log(stringLength("shahid")); // Outputs: 6
// We're simply asking how long the string "Alice" is, and it tells us there are 6 characters.

//Question 83: Converting to Upper and Lower Case:

// This function changes a string to uppercase and then to lowercase
function convertCase(str: string) {
    let upperStr = str.toUpperCase(); // Converts to uppercase
    let lowerStr = str.toLowerCase(); // Converts to lowercase

    console.log("Uppercase:", upperStr, "Lowercase:", lowerStr);
}

// Example: Changing the case of "Hello World"
convertCase("Hello World"); // Outputs: "Uppercase: HELLO WORLD Lowercase: hello world"
// We're showing the same text in all uppercase and then all lowercase.*/
Object.defineProperty(exports, "__esModule", { value: true });
//Question 84: Replacing Text in a String:
// This function swaps "JavaScript" with "TypeScript" in a sentence
function replaceJavaScriptWithTypeScript(sentence) {
    return sentence.replace(/JavaScript/g, "TypeScript");
    // Uses a regular expression with the 'g' flag for a global replacement
}
// Example: Changing a programming language name in a sentence
console.log(replaceJavaScriptWithTypeScript("I love JavaScript and JavaScript is awesome!"));
// Outputs: "I love TypeScript and TypeScript is awesome!"
// Every "JavaScript" in the sentence is changed to "TypeScript".
