//Step 65
//Remember in an earlier step, you learned about return values. A function can return a value for your application to consume separately.

//In a function, the return keyword is used to specify a return value. For example, this function would return the value given to the first parameter:

//Example Code
//function name(parameter) {
//  return parameter;
//}
//Use the return keyword to return the value of the character variable, repeated rowNumber times.
//Solution
const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
   return character.repeat(rowNumber);
}


for (let i = 0; i < count; i = i + 1) {
   rows.push(character.repeat(i + 1))
}

let result = ""

for (const row of rows) {
   result = result + row + "\n";
}

console.log(result);