//Question 52: Make a Smartphone Object:
// Sets up details about a smartphone
var smartphone = {
    make: "vivo",
    model: "v51",
    specs: {
        storage: "128GB",
        screenSize: "6.2 inches",
        batteryLife: "8 hours"
    }
};
// Shows what we've set up about the smartphone
console.log(smartphone);
//Question 53: Pulling Apart a Nested Object: 
// A list showing a programmer's skills in detail
var developerSkills = {
    languages: ["JavaScript", "TypeScript", "Python"],
    frameworks: ["React", "Angular", "Vue"],
    tools: ["Git", "Webpack", "Docker"]
};
// Getting specific skills from the list
var languages = developerSkills.languages, frameworks = developerSkills.frameworks, tools = developerSkills.tools;
// Showing a skill from each category
console.log("Language: ".concat(languages[0], ", Framework: ").concat(frameworks[0], ", Tool: ").concat(tools[0]));
//Question 54: Making Flexible Object Keys:
// A way to make a flexible list
function createObjectWithDynamicKey(key, value) {
    var dynamicObject = {};
    // Setting up a section in the list with a changeable name
    dynamicObject[key] = value;
    return dynamicObject;
}
// Using the flexible list setup for a user's preference
var userPreference = createObjectWithDynamicKey("city", "dark");
// Showing the user's choice
console.log(userPreference);
