"use strict";
// function
function Name(name) {
    return `hello ${name}`;
}
console.log(Name("shahid"));
// function expression
let N_ame = function (name) {
    return `hello ${name}`;
};
console.log(N_ame("zakir"));
// Arrow function
let Nam_e = (name) => `hello ${name}`;
console.log(Nam_e("faheem"));
// multiple expression in arrow function
let multipleExpression = (name) => {
    let add = `${name} do you like programing `;
    console.log(add);
};
multipleExpression("adil");
