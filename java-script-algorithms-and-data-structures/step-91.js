//Step 91
//The strict inequality operator !== allows you to check if two values are not equal, or do not have the same type. The syntax is similar to the equality operator: value !== 4.

//Currently the while loop runs only if continueLoop is true. Update the while loop condition to check if done is not equal to count.
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

while (done !== count) {
   done++;
   rows.push(padRow(done, count));
   if (done === count) {
      continueLoop = false;
   }
}

let result = ""

for (const row of rows) {
   result = result + row + "\n";
}

console.log(result);