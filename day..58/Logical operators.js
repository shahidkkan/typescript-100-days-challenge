// Task 1: What's the result of OR?

alert(null || 2 || undefined); // ouput 2

//Task 2: What's the result of OR'ed alerts?

alert(alert(1) || 2 || alert(3)); // output 1 and 2

// Task 3: What is the result of AND?

alert(1 && null && 2); // ouput null

// Task 4: What is the result of AND'ed alerts?

alert(alert(1) && alert(2)); // output 1 and undefined

// Task 5 : The result of OR AND OR

alert(null || (2 && 3) || 4); // output 3
// The precedence of AND && is higher than ||, so it executes first. (null || 3 || 4)
