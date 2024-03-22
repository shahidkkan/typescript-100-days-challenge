/*/Question 61: Making Enums for Vehicles:

// Making a list (enum) for different types of vehicles
enum VehicleType {
    Car,
    Truck,
    Motorcycle
}

// Showing one type of vehicle from the list
console.log(VehicleType.Car); // It shows 0 because enums start counting from 0
// Here, we're just checking what number the Car category got in our list.

//Question 62: Making a Student Template:

// Creating a blueprint (interface) for student information
interface Student {
    name: string;
    age: number;
    courses: string[];
}

// Filling in the blueprint with an example student
let student: Student = {
    name: "shahid khan",
    age: 20,
    courses: ["typescript", "python", "History"]
};

// Showing the student's information
console.log(student);
// We're using the blueprint to make sure our student has a name, age, and list of courses.*/
// Describing a circle using our Shape type
var circle = {
    kind: "circle",
    radius: 5
};
// Describing a rectangle using our Shape type
var rectangle = {
    kind: "rectangle",
    width: 10,
    height: 20
};
// Showing what we described
console.log(circle); // Here's the circle
console.log(rectangle); // And here's the rectangle
// We made a flexible program that can describe different shapes in detail.*/
