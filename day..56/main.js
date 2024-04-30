let a = 1, b = 1;

let c = ++a; // output 2
//because here a is prefix increment
let d = b++; // output 1
//here b is postfix increment

// What are the values of a and x after the code below?

let a1 = 2;//a=4

let x = 1 + (a *= 2);//x=5

// What are results of these expressions?

"" + 1 + 0 // '10'
"" - 1 + 0 // -1
true + false //1
6 / "3" //2
"2" * "3" //6
4 + 5 + "px" // '9px'
"$" + 4 + 5 // '$45'
"4" - 2 // 2
"4px" - 2 // NaN
"  -9  " + 5 //'9 5'
"  -9  " - 5 // -14
null + 1 //1
undefined + 1 // NaN
" \t \n" - 2 // -2


// let a2 = prompt("First number?");
// let b1 = prompt("Second number?");

// alert(a2 + b1); // this prompt convert number into string thats why we use + before prompt
//e.g
let a2 = +prompt("First number?");
 let b1 = +prompt("Second number?");
 alert(a2 + b1)