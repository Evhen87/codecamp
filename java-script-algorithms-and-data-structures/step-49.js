//Step 49
//You are calling your padRow function, but not doing anything with that function call. All functions in JavaScript return a value, meaning they provide the defined result of calling them for you to use elsewhere.

//To see the result of calling your padRow function, declare a call variable and assign your existing padRow call to that variable.
//Solution
const character = "#";
const count = 8;
const rows = [];

function padRow() {

}
const call = padRow();


for (let i = 0; i < count; i = i + 1) {
   rows.push(character.repeat(i + 1))
}

let result = ""

for (const row of rows) {
   result = result + row + "\n";
}

console.log(result);