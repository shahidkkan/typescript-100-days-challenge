"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log(`*******************
* LITERAL TYPE *
*******************`);
let literal_Types = 1234;
console.log(`literal type : ${literal_Types}`);
// literal Types with functions
function store(item) {
    return ` item : ${item}`;
}
console.log(store("copy"));
// console.log(store('pencile'));Error :Argument of type '"pencile"' is not assignable to parameter of type '"stickers" | "copy"'.
