"use strict";
console.log(`**********************************
* OPTIONAL AND DEFAULT PARAMETER *
**********************************\n`);
console.log(`******* Defult Parameters ********`);
function defult(name, course = "GIAIC") {
    return `name : ${name} , course : ${course}`;
}
console.log(defult("shahid", "PIAIC")); // output: "name : Ayesha , course : PIAIC"
console.log(defult("zakir")); // output: "name : Tehreem , course : GIAIC"
console.log(`\n******* Optinol Parameter *******`);
function Optinol(name, age) {
    if (age != undefined) {
        return `name : ${name} ,  Age : ${age} `;
    }
    else {
        return `name : ${name}`;
    }
}
console.log(Optinol("shahid")); // output : "name : shahid"
console.log(Optinol("zakir", 19)); // output : "name : zakir , Age : 19"
