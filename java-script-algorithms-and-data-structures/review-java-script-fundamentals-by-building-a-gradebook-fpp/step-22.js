//Step 22
//Notice how the value inside your rows array has been changed directly? This is called mutation. As you learn more about arrays, you will learn when to mutate an array, and when you should not.

//Before moving on, this is a great opportunity to learn a common array use. Currently, your code accesses the last element in the array with rows[2]. But you may not know how many elements are in an array when you want the last one.

//You can make use of the .length property of an array - this returns the number of elements in the array. To get the last element of any array, you can use the following syntax:

//Example Code
//array[array.length - 1]
//array.length returns the number of elements in the array. By subtracting 1, you get the index of the last element in the array. You can apply this same concept to your rows array.

//Update your rows[2] to dynamically access the last element in the rows array. Refer to the example above to help you.

//You should not see anything change in your console.
//Solution
let character = 'Hello';
let count = 8;
let rows = ["Naomi", "Quincy", "CamperChan"];
console.log(rows[0]);
rows[rows.length - 1] = 10;
console.log(rows);
