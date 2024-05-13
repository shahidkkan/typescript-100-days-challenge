"use strict";
console.log(`******************
Tuple Type
*****************`);
let Name = ["shahid", 18, true];
console.log(Name);
// Name[0] = 'Ayesha'; 
//Erorr: Cannot assign to '0' because it is a read-only property.
// use Tuple Type with function
function person(information) {
    return information;
}
console.log(person(["zakir", 67, false]));
// we can also define Tuple Types this method
let student = ["Adil", 20, true];
console.log(...student);
// here i am doing Array Destructuring
let [name1, age, present] = student;
console.log(name1);
console.log(age);
console.log(present);
