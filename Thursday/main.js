// main.js use js for logic, interaction and responsiveness on the website, making them less static. 
// repeat objects, functions and variables to gain base understanding of js
console.log("Hello there written once!");

let titleisclicked = false;
let imgisclicked = false;

// define title as variable in html
let title= document.getElementById("Test")
//test if title found
if(title){
    console.log("Title found:  Flo is cool");
}

//listening to click here to then change title color using this logic
title.addEventListener("click", function() {
    console.log("Title clicked!");
    titleisclicked = !titleisclicked; // Toggle the boolean value
    if(titleisclicked){
    title.style.color = "white"; // Change text color to blue on click
    } else{
        title.style.color = "blue"; // Change text color to blue on click
    }
})

// let img = document.getElementsByClassName("img") // Get the first image element with class "img"

let img = document.querySelector(".imgScaleonclick")

img.addEventListener("click", function() {
    console.log("Image clicked!");
    imgisclicked = !imgisclicked; // Toggle the boolean value
    if(imgisclicked){
        img.style.scale = 1; 
    } else{
        img.style.scale = "1.2"; // Scale the image up on click
        img.style.transition = "transform 0.5s ease"; // Add a transition effect
    } 
})

// Function to greet a user with their name and age, two parameters are defined in the ().
function greet(name, age) {
    console.log(`Hello ${name}, you are ${age} years old!`);
}

// Call the function with the different arguments, resulting in a console log output.
greet("Flo", 30);


//query selector all: Will return a list of results, which match the selector
// let elements = document.querySelectorAll(".imgScaleonclick"); // Select all elements with the class "imgScaleonclick"

//with js you can manipulate the DOM "walk the DOM"

// we also briefly looked APIs (Application Programming Interface) and how they can be used to fetch data from external sources.
// an API client (e.g. bruno) can help you to debug, simplify and test your API calls.