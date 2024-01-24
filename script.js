"use strict";
const btnPrevious = document.getElementById("btnPrevious");
const btnNext = document.getElementById("btnNext");
let colorToggle = document.getElementById("colorToggle");
let myHeading = document.getElementById("myHeading");

const imageFiles = [
  "instrument-1.jpeg",
  "instrument-2.jpeg",
  "instrument-3.jpeg",
  "instrument-4.jpeg",
];
let currentIndex = 0;

function changeImage() {
  const imageEl = document.getElementById("image");
  imageEl.src = imageFiles[currentIndex];
}

// Function for Previous Picture button to go back
function prevImage() {
  currentIndex = (currentIndex - 1 + imageFiles.length) % imageFiles.length;
  changeImage();
}

// Function for Next Picture button to go through multiple pictures
function nextImage() {
  currentIndex = (currentIndex + 1) % imageFiles.length;
  changeImage();
}

// Toggle button to change the background color...enables dark mode
colorToggle.addEventListener("change", function () {
  if (colorToggle.checked) {
    document.body.style.background = "rgb(58, 58, 58)";
    myHeading.style.color = "rgb(220, 220, 220)";
  } else {
    document.body.style.background = "rgb(220, 220, 220)";
    myHeading.style.color = "rgb(58, 58, 58)";
  }
});

// Initialize Function
changeImage();
