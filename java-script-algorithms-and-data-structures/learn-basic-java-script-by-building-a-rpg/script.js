/*Step 5
//Your view has been switched to your new script.js file. Remember that you can use the tabs above to switch between files.

//Add your console.log("Hello World"); line to this file, and see it appear in your console.*/
/*Step 6
//Remove your console.log("Hello World"); line to begin writing your project code.

//In the previous project, you learned how to work with variables and the let keyword like this:

//Example Code
//let camperbot;
//You also learned how to initialize a variable with a value like this:

//Example Code
//let age = 32;
//Use the let keyword to declare a variable called xp and assign it the value of 0, a number.*/
/*Step 7
Initialize another variable called health with a value of 100, and a variable called gold with a value of 50.*/
/*Step 8
Create another variable called currentWeaponIndex and set it to 0.*/
/*Step 9
Declare a variable called fighting but do not initialize it with a value.*/
/*Step 10
//Declare two more variables named monsterHealth and inventory.

//For your inventory variable, assign it the value of an array containing the string "stick".

//Remember that you worked with arrays in the previous project like this:

//Example Code
//let exampleArray = ["first", "second", "third"];*/
let xp = 0;
let health = 100;
let gold = 50;
let currentWeaponIndex = 0;
let fighting;
let inventory = ["stick"];
let monsterHealth;
/*/Step 15
//JavaScript interacts with the HTML using the Document Object Model, or DOM. The DOM is a tree of objects that represents the HTML. You can access the HTML using the document object, which represents your entire HTML document.

//One method for finding specific elements in your HTML is using the querySelector() method. The querySelector() method takes a CSS selector as an argument and returns the first element that matches that selector. For example, to find the <h1> element in your HTML, you would write:

//Example Code
//let h1 = document.querySelector("h1");
//Note that h1 is a string and matches the CSS selector you would use.

//Create a button1 variable and use querySelector() to assign it your element with the id of button1. Remember that CSS id selectors are prefixed with a #.*/
/*Step 17
//button1 is a variable that is not going to be reassigned. If you are not going to assign a new value to a variable, it is best practice to use the const keyword to declare it instead of the let keyword. This will tell JavaScript to throw an error if you accidentally reassign it.

//Change your button1 variable to be declared with the const keyword.*/
/*Step 18
//Use querySelector() to get the other two button elements using their ids: button2 and button3. Store them in variables called button2 and button3. Remember to use const.*/
/*Step 29
//Just like you did with the buttons, create variables for the following ids and use querySelector() to give them the element as a value:

//text, xpText, healthText, goldText, monsterStats, and monsterName.

//Remember to declare these with the const keyword, and name the variables to match the ids.*/
/*Step 30
//Finally, use querySelector() to get the #monsterHealth element. Because you have already declared a monsterHealth variable earlier, you need to use a different variable name for this element.

//Declare a new variable with the const keyword and name it monsterHealthText.*/
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
/*Step 31
//In the previous project, you learned how to create a function like this:

//Example Code
//function functionName() {

//}
//Create an empty function named goStore.*/
/*Step 32
//For now, make your goStore function output the message "Going to store." to the console.*/
/*Step 35
//In the previous project, you learned how to work with single line and multi-line comments like this:
//Example Code
//// I am a single-line comment
//  I am a multi-line comment
//Add a single-line comment that says initialize buttons.*/
/*Step 36
button1 represents your first button element. These elements have a special property called onclick, which you can use to determine what happens when someone clicks that button.

You can access properties in JavaScript a couple of different ways. The first is with dot notation. Here is an example of using dot notation to set the onclick property of a button to a function reference.

Example Code
button.onclick = myFunction;
In this example, button is the button element, and myFunction is a reference to a function. When the button is clicked, myFunction will be called.

Use dot notation to set the onclick property of your button1 to the function reference of goStore. Note that button1 is already declared, so you don't need to use let or const.*/
/*Step 37
Using the same syntax, set the onclick properties of button2 and button3 to goCave and fightDragon respectively.
Once you have done that, open your console and try clicking the buttons on your project.*/

/*Step 47
In your role playing game, you will be able to visit different locations like the store, the cave, and the town square. You will need to create a data structure that will hold the different locations.

Use const to create a variable called locations and assign it an empty array.*/
const locations = [];
/*Step 48
Before you can begin to build out your locations array, you will first need to learn about objects. Objects are an important data type in JavaScript. The next few steps will be dedicated to learning about them so you will better understand how to apply them in your project.

Objects are non primitive data types that store key-value pairs. Non primitive data types are mutable data types that are not undefined, null, boolean, number, string, or symbol. Mutable means that the data can be changed after it is created.

Here is the basic syntax for an object:

Example Code
{
  key: value
}
You will learn about keys and values in the next few steps.

For now, create a const variable called cat and assign it an empty object {}.

Below that cat variable, add a console.log(cat) statement to see the object in the console.*/
/*Step 49
Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through properties.

Properties consist of a key and a value. The key is the name of the property, and the value is the data stored in the property.

Here is an example of an object with a single property:

Example Code
const obj = {
  name: "Quincy Larson"
};
Inside your cat object, add a new property. The key should be name and the value should be the string "Whiskers".

Open up the console to see the updates to your object.*/
/*Step 50
If the property name (key) of an object has a space in it, you will need to use single or double quotes around the name.

Here is an example of an object with a property name that has a space:

Example Code
const spaceObj = {
  "Space Name": "Kirk",
};
If you tried to write a key without the quotes, it would throw an error:

Example Code
const spaceObj = {
  // Throws an error
  Space Name: "Kirk",
}; 

Add a new property with a key of "Number of legs" and value of 4 to the cat object.

Open up the console to see the output.*/
const cat = {
   name: "Whiskers",
   "Number of legs": 4
};
/*Step 51
There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array.

Dot notation is what you use when you know the name of the property you're trying to access ahead of time.

Example Code
object.property;
Here is a sample of using dot notation (.) to read the name property of the developer object:

Example Code
const developer = {
  name: "Jessica",
}

// Output: Jessica
console.log(developer.name); 
Update your console statement to access the name property of the cat object using dot notation.

Open up the console to see the name of "Whiskers" logged to the console.*/
console.log(cat.name);
//initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;
/*Step 38
The innerText property controls the text that appears in an HTML element. For example:

Example Code
<p id="info">Demo content</p> 
Example Code
const info = document.querySelector("#info"); 
info.innerText = "Hello World"; 
The example above would change the text of the p element from Demo content to Hello World.

When a player clicks your Go to store button, you want to change the buttons and text. Remove the code inside the goStore function and add a line that updates the text of button1 to say "Buy 10 health (10 gold)".*/
/*Step 39
//Now, add a line that updates the text of button2 to say "Buy weapon (30 gold)" and update the text of button3 to say "Go to town square".*/
/*Step 40
You will also need to update the functions that run when the buttons are clicked again.

In your goStore() function, update the onclick property for each button to run buyHealth, buyWeapon, and goTown, respectively.*/
/*Step 40
You will also need to update the functions that run when the buttons are clicked again.

In your goStore() function, update the onclick property for each button to run buyHealth, buyWeapon, and goTown, respectively.*/
/*Step 41
Now you need to modify your display text. Change the innerText property of the text variable to be "You enter the store.".*/
/*Step 43
Move your goTown function above your goStore function. Then copy and paste the contents of the goStore function into the goTown function.*/
/*Step 44
In your goTown function, change your button elements' innerText properties to be "Go to store", "Go to cave", and "Fight dragon". Update your onclick properties to be goStore, goCave, and fightDragon, respectively.

Finally, update innerText property of your text to be "You are in the town square. You see a sign that says Store.".*/
/*Step 45
You need to wrap the text Store in double quotes. Because your string is already wrapped in double quotes, you'll need to escape the quotes around Store. You can escape them with a backslash \. Here is an example:

Example Code
const escapedString = "Naomi likes to play \"Zelda\" sometimes.";
Wrap the text Store in double quotes within your text.innerText line.*/
/*Step 46
You have repetition in the goTown and goStore functions. Repetition in your code is a sign that you need another function.

In the previous project, you learned how to work with function parameters like this:

Example Code
function myFunction(param) {
  console.log(param);
}
Function parameters act as placeholders for values that you pass to the function when you call it.

Create an empty update function that takes a parameter called location.*/
function update(location) {

}
function goTown() {
   button1.innerText = "Go to store";
   button2.innerText = "Go to cave";
   button3.innerText = "Fight dragon";
   button1.onclick = goStore;
   button2.onclick = goCave;
   button3.onclick = fightDragon;
   text.innerText = "You are in the town square. You see a sign that says \"Store\".";
}
function goStore() {
   button1.innerText = "Buy 10 health (10 gold)";
   button2.innerText = "Buy weapon (30 gold)";
   button3.innerText = "Go to town square";
   button1.onclick = buyHealth;
   button2.onclick = buyWeapon;
   button3.onclick = goTown;
   text.innerText = "You enter the store.";
}
/*Step 33
//Now create a goCave function that prints "Going to cave." to the console.*/
function goCave() {
   console.log("Going to cave.");
}
/*Step 34
//Now create a fightDragon function that prints "Fighting dragon." to the console.*/
function fightDragon() {
   console.log("Fighting dragon.");
}
/*Step 42
Create three new empty functions called buyHealth, buyWeapon, and goTown.*/
function buyHealth() {
}
function buyWeapon() {
}
