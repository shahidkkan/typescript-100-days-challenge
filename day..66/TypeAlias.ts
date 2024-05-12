console.log(`*******************
* Type Alias *
*******************`);
// defined custom types
type Person = {
  name: string;
  course: string;
  rollnumber: number;
  email?: string;
};

// add custom types
let shahid: Person = {
  name: "shahid",
  course: "GIAIC",
  rollnumber: 12345,
  email: "sk@gmail.com",
};

console.log(shahid);
console.log("course : ", shahid.course); 