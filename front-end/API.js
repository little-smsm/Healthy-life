const jsonString = '{"name": "John", "age": 30, "skills": ["JavaScript", "Python", "PHP"]}';

// Convert JSON string to a JavaScript object
const jsonObject = JSON.parse(jsonString);

// Now you can use the object
console.log(jsonObject.name);  // Output: John
console.log(jsonObject.skills);  // Output: ["JavaScript", "Python", "PHP"]
