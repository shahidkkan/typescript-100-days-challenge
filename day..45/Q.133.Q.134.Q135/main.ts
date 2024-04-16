/*/ Question 133: Write a JavaScript object and convert it into a JSON string.

// Defines a JavaScript object
const person = {
    name: "shahid",
    age: 20,
    city: "karachi",
  };
  
  // Converts the object into a JSON string
  const jsonString = JSON.stringify(person);
  
  console.log(jsonString); // Outputs: {"name":"shahid","age":20,"city":"karachi"}
  // Demonstrates converting an object to a JSON string, making it easy to store or transmit.

//  Question 134: Take a JSON string and parse it into a JavaScript object.

// Defines a JSON string
const jsonString = '{"name":"shahid","age":20,"city":"karachi"}';

// Parses the JSON string back into a JavaScript object
const person = JSON.parse(jsonString);

console.log(person); // Outputs the original object
// This snippet shows how to take a JSON string and convert it back into a JavaScript object.

// Question 135: Explain how you can format a JSON string with proper indentation for readability.

// Reusing the person object from Question 133
const person = {
    name: "shahid",
    age: 20,
    city: "karachi",
  };
  
  // Converts the object into a JSON string with indentation
  const jsonString = JSON.stringify(person, null, 2); // The '2' specifies the number of spaces to use as white space
  
  console.log(jsonString);
  /* Outputs:
  {
    "name": "shahid",
    "age": 20,
    "city": "karachi"
  }
  */
  // Shows how adding indentation to the JSON string makes it easier to read.*/