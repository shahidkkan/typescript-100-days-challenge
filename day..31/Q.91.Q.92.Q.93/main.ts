//Question 91: Create an array of your three favorite fruits and add a new fruit to the end of the array.

// Defines an array with three favorite fruits
let favoriteFruits: string[] = ["Apple", "Banana", "Cherry"];
favoriteFruits.push("Mango"); // Adds "Mango" to the end of the array

console.log(favoriteFruits); // Outputs: ['Apple', 'Banana', 'Cherry', 'Mango']
// This line adds a new fruit to our list of favorites.

//Question 92: Write a function to remove the last element from an array and return the removed element.

// This function removes the last element from an array and returns it
function removeLastElement<T>(arr: T[]): T | undefined {
    return arr.pop(); // Removes and returns the last element of the array
}

// Example: Removing the last fruit from the array
const fruits: string[] = ["Apple", "Banana", "mango"];
console.log(removeLastElement(fruits)); // Outputs: 'mango'
console.log(fruits); // Outputs: ['Apple', 'Banana']
// Here, we take out the last fruit and show the updated list.

//Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".

// This function finds "Banana" in the fruits array and replaces it with "Mango"
function replaceBananaWithMango(fruits: string[]): void {
    const index = fruits.indexOf("Banana"); // Finds the index of "Banana"
    if (index !== -1) fruits[index] = "Mango"; // Replaces "Banana" with "Mango" if found
}

// Example: Replacing "Banana" in the array
const fruits: string[] = ["Apple", "Banana", "Cherry"];
replaceBananaWithMango(fruits);
console.log(fruits); // Outputs: ['Apple', 'Mango', 'Cherry']
// We're swapping "Banana" for "Mango" in our fruit list.