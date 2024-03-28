"use strict";
/*/Question 79: Creating and Accessing Object Properties:

// This sets up an object for a car with specific details

let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    color: "red"
};
// Accessing and showing the car's model
console.log(car.model); // Outputs: Corolla
// We use dot notation (car.model) to get the model of the car from our object.

//Question 80: Updating Object Properties:
// Starting with our car object
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "red"  // This is the initial color of the car
};

// Adding a new property 'color' and updating 'year'
car. color = "red"; // Adds a new property 'color'
car.year = 2021; // Updates the 'year' property

// Showing the updated car object
console.log(car); // Outputs the car object with the new color and updated year
// Now our car is blue and its model year is updated to 2021.*/
Object.defineProperty(exports, "__esModule", { value: true });
//Question 81: Iterating Over Object Properties:
// This function shows every detail about an object
function logObjectProperties(obj) {
    for (let property in obj) {
        // Loops through each property in the object
        console.log(`${property} : ${property}`); // Uses the property name to access the value of the property
        // Shows the property name and its value
    }
}
// Using the function with a car object
logObjectProperties({
    make: "Toyota",
    model: "Corolla",
    year: 2021,
    color: "blue",
});
// It tells us each piece of information stored about the car.
