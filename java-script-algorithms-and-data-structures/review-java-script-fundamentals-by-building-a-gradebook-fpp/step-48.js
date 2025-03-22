//Step 48
//In order to use a function, you need to call it. A function call tells your application to run the code from the function wherever you choose to call it. The syntax for a function call is the function name followed by parentheses. For example, this code defines and calls a test function.

//Example Code
//function test() {

//}
//test();
//Call your padRow function.
const character = "#";
const count = 8;
const rows = [];

function padRow() {

}
padRow()


for (let i = 0; i < count; i = i + 1) {
   rows.push(character.repeat(i + 1))
}

let result = ""

for (const row of rows) {
   result = result + row + "\n";
}

console.log(result);