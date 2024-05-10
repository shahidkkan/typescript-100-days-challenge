"use strict";
console.log(`***********REST PARAMETER************\t`);
function restParameter(...numbers) {
    return numbers;
}
console.log(restParameter(1, 2, 3, 3));
// with another logic
function rest(...addNum) {
    let add = 0;
    for (let i = 0; i < addNum.length; i++) {
        add += addNum[i];
    }
    return `add : ${add}`;
}
console.log(rest(34, 67, 4, 7, 9));
