//Step 87
//The equality operator == is used to check if two values are equal. To compare two values, you'd use a statement like value == 8.

//Below done++ inside your loop, add an if statement. The statement should check if done is equal to count using the equality operator.
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

let continueLoop = false;
let done = 0;

while (continueLoop) {
   done++;
   if (done == count) {

   }
}

let result = ""

for (const row of rows) {
   result = result + row + "\n";
}

console.log(result);