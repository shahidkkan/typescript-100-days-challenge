"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log(`*******************
* Nullable Types *
*******************`);
let studentName = "Tehreem";
console.log(studentName);
let fun = (name, password) => {
    if (password !== undefined && password !== null) {
        return ` Name : ${name} , password : ${password}`;
    }
    else {
        return `Name : ${name}`;
    }
};
console.log(fun("Arham", undefined));
