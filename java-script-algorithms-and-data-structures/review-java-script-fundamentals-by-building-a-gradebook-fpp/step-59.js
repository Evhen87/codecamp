//Step 59
//Values returned out of a function are used by calling the function. You can use the function call directly as the value it returns, or capture the returned value in a variable. This way, you can use the value assigned to a locally scoped variable, outside the function it was created in.

//Example Code
//function getName() {
//  const name = "Camper cat";
//  return name;
//}

//console.log(getName()); // "Camper cat"

//const capturedReturnValue = getName();
//console.log(capturedReturnValue); // "Camper cat"

//console.log(name); // reference error
//To use your "Testing" value, return it out of the padRow function by updating your return statement to return only the test variable.
//Solution
const character = "#";
const count = 8;
const rows = [];

function padRow(name) {
   const test = "Testing";
   return test;
}

const call = padRow("CamperChan");
console.log(call);


for (let i = 0; i < count; i = i + 1) {
   rows.push(character.repeat(i + 1))
}

let result = ""

for (const row of rows) {
   result = result + row + "\n";
}

console.log(result);