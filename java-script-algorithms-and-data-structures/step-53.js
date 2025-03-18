//Step 53
//A function does not have to return a hard-coded value. It can return the value stored in a variable. Parameters are special variables for a function, so they can also be returned.

//Change your padRow function to return the name parameter directly.
//Solution
const character = "#";
const count = 8;
const rows = [];

function padRow(name) {
   return name;
}
const call = padRow();
console.log(call);


for (let i = 0; i < count; i = i + 1) {
   rows.push(character.repeat(i + 1))
}

let result = ""

for (const row of rows) {
   result = result + row + "\n";
}

console.log(result);