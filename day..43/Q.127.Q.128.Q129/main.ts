//Question 127: Convert a traditional function expression to an arrow function.

// Traditional function expression
const traditionalFunction = function (a: any , b: any ) {
    return a + b;
  };
  
  // Converted to arrow function
  const arrowFunction = (a: any , b: any) => a + b;
  
  console.log(traditionalFunction(5, 3)); // Outputs: 8
  console.log(arrowFunction(5, 3)); // Outputs: 8
  // Demonstrates the conversion of a traditional function expression to an arrow function.

  //Question 128: Create an arrow function that takes multiple parameters and returns the product of all parameters.

  // Arrow function that calculates the product of all its parameters
const multiplyParameters = (...numbers: number[]) =>
    numbers.reduce((total, number) => total * number, 1);
  
  console.log(multiplyParameters(2, 3, 4)); // Outputs: 24
  // This function uses the rest parameter syntax to take any number of arguments, then multiplies them together.

  //Question 129: Explain how this behaves differently in arrow functions compared to traditional functions.

  // Demonstrating 'this' in traditional vs. arrow functions
const traditionalVsArrow =  {
    value: "traditionalVsArrow value",
    traditionalFunction: function () {
      console.log("Traditional function:", this.value); // 'this' refers to traditionalVsArrow object
    },
    arrowFunction: () => {
      console.log("Arrow function:", this. value); // 'this' is not bound to traditionalVsArrow object but to the scope in which traditionalVsArrow was defined
    },
  };
  
  traditionalVsArrow.traditionalFunction(); // Logs "traditionalVsArrow value"
  traditionalVsArrow.arrowFunction(); // Likely undefined, depending on the outer scope's 'this.value'
  // This code snippet illustrates the difference in how 'this' is determined in traditional functions versus arrow functions.