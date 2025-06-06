// main.js
console.log("Hello there written once!");

let titleisclicked = false;
let imgisclicked = false;

// define title as variable in html
let title= document.getElementById("Test")
//test if title found
if(title){
    console.log("Title found Flo is cool");
}

//listening to click here to then change color using this logic
title.addEventListener("click", function() {
    console.log("Title clicked!");
    titleisclicked = !titleisclicked; // Toggle the boolean value
    if(titleisclicked){
    title.style.color = "white"; // Change text color to blue on click
    title.style.scale = "1"; // Scale the title up on click
    } else{
        title.style.color = "blue"; // Change text color to blue on click
        title.style.scale = "1.1"; // Scale the title up on click
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