//Step 44
//Printing numbers won't result in a visually appealing pyramid. Now that you're outputting the formatted content of your rows array, it's time to update your original loop.

//Instead of pushing i to the array, push the value of your character variable.
//Solution
const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
   rows.push(character);
}

let result = ""

for (const row of rows) {
   result = result + row + "\n";
}

console.log(result);