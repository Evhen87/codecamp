//Step 24
//In the last few steps, you learned all about working with arrays. Take a moment to review what you have learned.

//Start by declaring a cities variable and initializing it as an array of the strings "London", "New York", and "Mumbai". Then log that variable to the console.

//After logging, change the last element of cities to the string "Mexico City", then log the cities variable again.

//When done correctly, you should see this output in the console.

//Example Code
//[ "London", "New York", "Mumbai" ]
//[ "London", "New York", "Mexico City" ]
//Solution
let character = 'Hello';
let count = 8;
let rows = ["Naomi", "Quincy", "CamperChan"];
let cities = ["London", "New York", "Mumbai"];
console.log(cities);
cities[cities.length - 1] = "Mexico City";
console.log(cities);
console.log(rows);