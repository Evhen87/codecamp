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
const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');