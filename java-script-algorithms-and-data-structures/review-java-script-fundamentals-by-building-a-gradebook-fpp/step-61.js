
//Step 61
//Now your call variable has the value "Testing". But your function is no longer using the name parameter.

//Remove the name parameter from your function declaration, then remove your "CamperChan" string from the padRow call.

//Also, remove both console.log from the padRow function.
//Solution
const character = "#";
const count = 8;
const rows = [];

function padRow() {
   const test = "Testing";

   return test;

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