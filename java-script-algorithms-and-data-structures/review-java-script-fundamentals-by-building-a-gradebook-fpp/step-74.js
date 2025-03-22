//Step 74
//The pyramid looks a little funny now. Because you are starting the loop at 1 instead of 0, you do not need to add one to i when you pass it to padRow.

//Update the first argument of your padRow call to be i.
//Solution
const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
   return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

for (let i = 1; i < count; i++) {
   rows.push(padRow(i, count));
}

let result = ""

for (const row of rows) {
   result = result + row + "\n";
}

console.log(result);