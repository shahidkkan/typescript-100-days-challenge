"use strict";
// TYPE ANNOTATIONS WITH OBJECT
// Declear variable object with type annotations
let person;
// initilaized a object
person = {
    name: "shahid",
    // f_name : 890, Error : Type 'number' is not assignable to type 'string'.
    f_name: "Nahmat gul",
    city: "Karachi",
    roll_number: 1234,
};
console.log(person);
//we can also use another mthod
let course = {
    course: "html",
    fee: 5000,
    confirm: true,
};
console.log(course);