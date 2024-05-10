console.log(`**********************************
* OPTIONAL AND DEFAULT PARAMETER *
**********************************\n`);

console.log(`******* Defult Parameters ********`);

function defult(name: string, course: String = "GIAIC") {
  return `name : ${name} , course : ${course}`;
}
console.log(defult("shahid", "PIAIC")); // output: "name : shahid , course : PIAIC"
console.log(defult("zakir")); // output: "name : zakir \\\ course : GIAIC"

console.log(`\n******* Optinol Parameter *******`);

function Optinol(name: string, age?: number) {
  if (age != undefined) {
    return `name : ${name} ,  Age : ${age} `;
  } else {
    return `name : ${name}`;
  }
}

console.log(Optinol("shahid")); // output : "name : shahid"
console.log(Optinol("zakir", 19)); // output : "name : zakir , Age : 19"