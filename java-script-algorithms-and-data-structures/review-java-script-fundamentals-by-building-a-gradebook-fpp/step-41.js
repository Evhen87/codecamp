//Step 41
//To manipulate the result string, you will use a different type of loop. Specifically, a for...of loop, which iterates over each item in an iterable object and temporarily assigns it to a variable.

//The syntax for a for...of loop looks like:

//Example Code
//for (const value of iterable) {

//}
//Note that you can use const because the variable only exists for a single iteration, not during the entire loop.

//Create a for...of loop to iterate through your rows array, assigning each value to a row variable.
//Solution
const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
   rows.push(i);
}

let result = ""

for (const row of rows) {

}