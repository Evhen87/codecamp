//Step 66
//A function call allows you to actually use a function. You may not have been aware of it, but the methods like .push() that you have been using have been function calls.

//A function is called by referencing the function's name, and adding (). Here's how to call a test function:

//Example Code
//test();
//Replace the character.repeat(i + 1) in your .push() call with a function call for your padRow function. Do not add any arguments to it yet.
//Solution
const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
   return character.repeat(rowNumber);
}


for (let i = 0; i < count; i = i + 1) {
   rows.push(padRow());
}

let result = ""

for (const row of rows) {
   result = result + row + "\n";
}

console.log(result);