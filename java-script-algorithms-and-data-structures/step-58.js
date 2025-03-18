//Step 58
//Variables can also be declared inside a function. These variables are considered to be in the local scope, or block scope. A variable declared inside a function can only be used inside that function. If you try to access it outside of the function, you get a reference error.

//To see this in action, use const to declare a test variable in your padRow function. Initialise it with the value "Testing".

//Then, below your function, try to log test to the console. You will see an error because it is not defined outside of the function's local scope. Remove that console.log to pass the tests and continue.
//Solution
const character = "#";
const count = 8;
const rows = [];

function padRow(name) {
   const test = "Testing";
   return character + name;
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
