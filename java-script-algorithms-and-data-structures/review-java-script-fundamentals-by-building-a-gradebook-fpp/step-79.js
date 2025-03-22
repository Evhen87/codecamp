//Step 79
//You'll see the string printed in the console, because true is in fact true.

//Change the condition of your if statement to the boolean false.
//Solution
const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
   return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

// TODO: use a different type of loop
/*for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));
}*/

if (false) {
   console.log("Condition is true");
}

let result = ""

for (const row of rows) {
   result = result + row + "\n";
}

console.log(result);