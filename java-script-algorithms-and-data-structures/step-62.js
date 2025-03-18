//Step 62
//Because your function was no longer using the parameter, changing the argument did not affect it.

//Go ahead and remove the test declaration and return statement from your padRow function, so the function is empty again.
//Solution
const character = "#";
const count = 8;
const rows = [];

function padRow() {

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