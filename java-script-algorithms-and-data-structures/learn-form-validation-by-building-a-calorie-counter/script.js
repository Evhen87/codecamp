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
/*Step 20
The current pattern will match the exact text "hello", which is not the desired behavior. Instead, you want to search for +, -, or spaces. Replace the pattern in your regex variable with \+- to match plus and minus characters.

Note that you need to use the backslash \ character to escape the + symbol because it has a special meaning in regular expressions.*/
/*Step 21
In regex, shorthand character classes allow you to match specific characters without having to write those characters in your pattern. Shorthand character classes are preceded with a backslash (\). The character class \s will match any whitespace character. Add this to your regex pattern.*/
/*Step 22
Your current pattern won't work just yet. /+-\s/ looks for +, -, and a space in order. This would match +- hello but would not match +hello.

To tell the pattern to match each of these characters individually, you need to turn them into a character class. This is done by wrapping the characters you want to match in brackets. For example, this pattern will match the characters h, e, l, or o:

Example Code
const regex = /[helo]/;
Turn your +-\s pattern into a character class. Note that you no longer need to escape the + character, because you are using a character class.*/
/*Step 24
JavaScript provides a .replace() method that enables you to replace characters in a string with another string. This method accepts two arguments. The first argument is the character sequence to be replaced, which can be either a string or a regex pattern. The second argument is the string that replaces the matched sequence.

Since strings are immutable, the replace method returns a new string with the replaced characters.

In this example, the replace method is used to replace all instances of the letter l with the number 1 in the string hello.

Example Code
"hello".replace(/l/g, "1");
Use your regex to replace all instances of +, -, and a space in str with an empty string. Return this value.*/
/*Step 27
Once you have finished testing your cleanInputString function, you can remove both of your console statements.*/
function cleanInputString(str) {
   /*Step 25
Now it is time to test out your cleanInputString function.

Inside your cleanInputString function, add a console.log() statement with two arguments. The first argument should be the string "original string: " and the second argument should be the str parameter.*/
   const regex = /[+-\s]/g;
   return str.replace(regex, '');
}
/*Step 26
To see the results from the cleanInputString function, you will need to add a console.log() statement. Inside that console statement, call the cleanInputString function with the string value of "+-99" as an argument.

Open up the console and you should see the original string followed by the cleaned string value with the +- removed.*/
/*Step 28
In HTML, number inputs allow for exponential notation (such as 1e10). You need to filter those out.

Start by creating a function called isInvalidInput – it should take a single str parameter.*/
/*Step 29
Declare a regex variable, and assign it a regex that matches the character e.*/
/*Step 30
The e in a number input can also be an uppercase E. Regex has a flag for this, however – the i flag, which stands for "insensitive".

Example Code
/Hello/i
The regex above would match hello, Hello, HELLO, and even hElLo because of the i flag. This flag makes your pattern case-insensitive.

Add the i flag to your regex pattern.*/
/*Step 31
Number inputs only allow the e to occur between two digits. To match any number, you can use the character class [0-9]. This will match any digit between 0 and 9.

Add this character class before and after e in your pattern.*/
/*Step 32
The + modifier in a regex allows you to match a pattern that occurs one or more times. To match your digit pattern one or more times, add a plus after each of the digit character classes. For example: [0-9]+.*/
/*Step 33
There is a shorthand character class to match any digit: \d. Replace your [0-9] character classes with this shorthand.*/
/*Step 34
Strings have a .match() method, which takes a regex argument. .match() will return an array of match results – containing either the first match, or all matches if the global flag is used.

Example Code
const str = 'example string';
const regex = /example/;
const result = str.match(regex); // Returns ['example']
Return the result of calling the .match() method on str and passing your regex variable as the argument. You'll use this match result later on.*/
function isInvalidInput(str) {
   const regex = /\d+e\d+/i;
   return str.match(regex);
}
/*Step 35
Now it is time to test your isInvalidInput function. For this test, you want to check if the function can detect scientific notation like 1e3 or 10e2. While this is a valid way to represent numbers, it is not a valid input for your calorie counter project.

Below your isInvalidInput function, add a console statement. Inside that console statement, call the isInvalidInput function with an argument of "1e3".

Open up the console to see the result. In the next step, you will learn more about what that result means.*/
/*Step 36
When you open the console, you should see this result:

Example Code
[ '1e3', index: 0, input: '1e3', groups: undefined ]
The match method returns an array with any matches found in the string.

Here is a complete breakdown of that information:

"1e3" is the matched value against the /\d+e\d+/i regex.
index: 0 is the index of the matched value in the string.
input: '1e3' is the original string that was matched.
groups: undefined are the matched groups, which are not used in this case. You will learn more about groups in a later project.
Now it is time to test for a valid input. Update your console statement to the following: console.log(isInvalidInput("10")).

Open up the console to see the result. You will learn more about what this result means in the next step.*/
/*Step 37
When you open the console, you should see the result of null. The match method returns null when no match is found. In this case, the isInvalidInput function should return null when the input is a valid number without any scientific notation.

null in JavaScript is a special primitive that represents the intentional absence of a value. In a boolean context, null is considered falsy which evaluates to false in a conditional statement.

Now that you have finished testing your isInvalidInput function, you can remove the console.log statement.*/
/*Step 38
Now you need to retrieve the value of entryDropdown.value to get the currently selected option from the dropdown.

Print entryDropdown.value to the console to see its value.

Since entryDropdown.value is in a static context (outside of an event listener), it only shows the value at the moment the code runs. This means it won't automatically update as the user interacts with the dropdown.

It will capture the initial value (in this case, "breakfast") and won't reflect any changes the user makes afterward.*/
/*Step 39
Now that you have finished testing the value of entryDropdown.value, you can remove the console.log statement.

Your next step is to allow users to add entries to the calorie counter. Declare an empty function addEntry. This function should not take any parameters.*/
/*Step 40
You'll need to know which category the entry goes in. Thankfully, you added a dropdown for the user to select a category.

Remember that you queried that dropdown earlier in your JavaScript and assigned it to the entryDropdown variable. You can use the value property to get the value of the selected option.

Use concatenation to add a # to the beginning of the value property of entryDropdown, and assign that result to a targetId variable.*/
/*Step 41
Now you need to target the .input-container element within the element that has your targetId. Declare a new targetInputContainer variable, and assign it the value of document.querySelector(). Use concatenation to separate targetId and '.input-container' with a space, and pass that string to querySelector().*/
/*Step 42
JavaScript has a feature called template literals, which allow you to interpolate variables directly within a string. Template literals are denoted with backticks ``, as opposed to single or double quotes. Variables can be passed in to a template literal by surrounding the variable with ${} – the value of the variable will be inserted into the string.

For example:

Example Code
const name = "Naomi";
const templateLiteral = `Hello, my name is ${name}~!`;
console.log(templateLiteral);
The console will show the string "Hello, my name is Naomi~!".

Replace your concatenated string in the querySelector with a template literal – be sure to keep the space between your targetId variable and .input-container.*/
function addEntry() {
   const targetId = '#' + entryDropdown.value;
   const targetInputContainer = document.querySelector(`${targetId} .input-container`);
}