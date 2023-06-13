/**
Author: Julian Zarcone #000878972 March, 13th, 2023
This is a javascript file that adds circles into svg element with the use of add or remove buttons creating the Circle's Game!
*/

// Get the SVG, add button, and remove button elements
var svg = document.getElementById("mySVG");
var addButton = document.getElementById("addButton");
var removeButton = document.getElementById("removeButton");

// Get the score element
var score = document.getElementById("score");

// Add event listener to the add button
addButton.addEventListener("click", function() {

// Create a new circle element
var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
circle.setAttribute("cx", Math.random() * 400);
circle.setAttribute("cy", Math.random() * 400);
circle.setAttribute("r", 50);
circle.setAttribute("fill", "red");

// Add the circle to the SVG element
svg.appendChild(circle);

// Updates the score
score.textContent = "Score: " + svg.childElementCount;
});

// Add event listener to the remove button
removeButton.addEventListener("click", function() {
// Remove the last circle element from the SVG
svg.removeChild(svg.lastElementChild);

// Update the score
score.textContent = "Score: " + svg.childElementCount;
});

// Add event listener to the circle elements for interaction
svg.addEventListener("click", function(event) {

// Get the target element
var target = event.target;

// Checks if the target is a circle element
if (target.tagName === "circle") {

// Change the fill color of the circle
target.setAttribute("fill", "blue");
}
});