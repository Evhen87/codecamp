/*Step 1
CamperBot is trying to build out a random background color changer. But they keep running into issues and need your help to debug the code.

CamperBot has already added the HTML and CSS for the project. But they are confused as to why none of the styles and content is showing up on the page.

When they open up the console they see this message:

Example Code
SyntaxError: unknown: Unexpected token, expected "," (5:2)
Syntax errors are thrown when the JavaScript engine encounters something it can't interpret. In this case, it looks like CamperBot has syntax errors in the darkColorsArr array.

Fix the syntax errors in the darkColorsArr array and you should see the content and styles show up on the page.*/
const darkColorsArr = [
   "#2C3E50",
   "#34495E",
   "#2C2C2C",
   "#616A6B",
   "#4A235A",
   "#2F4F4F",
   "#0E4B5A",
   "#36454F",
   "#2C3E50",
   "#800020",
];
function getRandomIndex() {
   /*Step 2
   Now, CamperBot is trying to create a function that will return a random index from the darkColorsArr. But they have run into the following error message:
   
   Example Code
   Uncaught ReferenceError: math is not defined
   A ReferenceError is thrown when a non-existent variable is referenced. In this case, it looks like CamperBot is trying to use math but JavaScript doesn't have a math object.
   
   Fix CamperBot's error in the math.random() line and open up the console again.*/
   console.log(darkColorsArr.length * Math.random())
}
getRandomIndex();