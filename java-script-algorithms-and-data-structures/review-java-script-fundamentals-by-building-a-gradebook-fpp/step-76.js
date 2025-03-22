//Step 76
//Comments can be helpful for explaining why your code takes a certain approach, or leaving to-do notes for your future self.

//In JavaScript, you can use // to leave a single-line comment in your code.

//Add a single-line comment above your for loop to remind yourself to change the code to a different kind of loop.
//Solution
const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
   return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

//change the code to a different kind of loop
for (let i = 1; i <= count; i++) {
   rows.push(padRow(i, count));
}

let result = ""

for (const row of rows) {
   result = result + row + "\n";
}

console.log(result);