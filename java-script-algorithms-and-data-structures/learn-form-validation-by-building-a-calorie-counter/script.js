/*Step 14
It is time to start writing the script that makes your form work.

To access an HTML element with a given id name, you can use the getElementById() method. Here's an example of how to use this method:

Example Code
<h1 id="title">Main title</h1>
Example Code
const mainTitleElement = document.getElementById('title');
Begin by getting the form element (using the id) and storing it in a variable called calorieCounter.*/
/*Step 15
Get your #budget element and assign it to budgetNumberInput, and your #entry-dropdown element and assign it to entryDropdown.*/
/*Step 16
Following the same pattern, assign your #add-entry element to addEntryButton, your #clear element to clearButton, and your #output element to output.*/
/*Step 17
In programming, prefixing a variable with is or has is a common practice to signify that the variable represents a boolean value.

Here are a few examples:

Example Code
let isRunning = true;
let hasCompleted = false;
Declare a variable named isError using let and initialize it with false, allowing for its reassignment later.

Later on in the project, you will update the value of isError if the user provides an invalid input.*/
const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;
/*Step 18
When the user inputs their daily calorie budget, the input field will only accept numerical values. However, if a number is entered with a + or - sign, you'll need to remove those characters.

Start by declaring a cleanInputString function that takes a str parameter.

NOTE: Values from an HTML input field are received as strings in JavaScript. You'll need to convert these strings into numbers before performing any calculations. Converting string values into numbers will be covered in a future step.*/
/*Step 19
To match specific characters in a string, you can use Regular Expressions or "regex" for short.

Regex in JavaScript is indicated by a pattern wrapped in forward slashes. The following example will match the string literal "hello":

Example Code
const regex = /hello/;
Declare a regex variable and assign it the value from the example above. In future steps, you will update this regex pattern to match specific characters needed for the calorie counter.*/
function cleanInputString(str) {
   const regex = /hello/;
}