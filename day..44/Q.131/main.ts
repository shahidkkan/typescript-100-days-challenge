//Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.

// In another file:
import { Person } from "./Person";

const alice = new Person("shahid");
alice.greet(); // Outputs: Hello, my name is shahid
// This snippet imports the Person class and uses it to create an instance.