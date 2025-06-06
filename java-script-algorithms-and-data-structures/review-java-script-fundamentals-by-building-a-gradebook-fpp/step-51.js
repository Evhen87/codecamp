//Step 51
//Your call variable has an undefined value, even though you defined it! This is because your padRow function does not currently return a value. By default, functions return undefined as their value.

//In order to return something else, you need to use the return keyword. Here is an example of a function that returns the string "Functions are cool!":

//Example Code
//function demo() {
//  return "Functions are cool!";
//}
//Use the return keyword to have your function return the string "Hello!".
//Solution
const character = "#";
const count = 8;
const rows = [];

function padRow() {
   return "Hello!";
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