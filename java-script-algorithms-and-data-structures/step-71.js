//Step 71
//Your pyramid generator now functions as expected. But this is an excellent opportunity to further explore the code you have written.

//The addition operator is not the only way to add values to a variable. The addition assignment operator can be used as shorthand to mean "take the original value of the variable, add this value, and assign the result back to the variable." For example, these two statements would yield the same result:

//Example Code
//test = test + 1;
//test += 1;
//Update your iteration statement in the for loop to use addition assignment.
const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
   return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

for (let i = 0; i < count; i += 1) {
   rows.push(padRow(i + 1, count));
}

let result = ""

for (const row of rows) {
   result = result + row + "\n";
}

console.log(result);