"use strict";
console.log(`****************
* VOID & NEVER *
****************`);
console.log(`\n.........void.........`);
function Name(name) {
    console.log(name);
}
Name('Tehreem');
console.log(`\n ..........never..........`);
function message(message) {
    throw new Error(message);
}
message(' I like Coding');
