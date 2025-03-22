//Step 39
//Unfortunately, now you cannot see what your loop is doing.

//Use let to declare a result variable, and assign it an empty string. An empty string is represented by quotation marks with nothing between them, such as "".
//Solution
const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
   rows.push(i);
}

let result = "";