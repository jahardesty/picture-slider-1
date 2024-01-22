"use strict";
const btnPrevious = document.querySelector(".btn btn--previous");
const btnNext = document.querySelector(".btn btn--next");
const instrumentEl = document.querySelector(".instrument");
const checkBox = document.querySelector(".test");

//adding next picture button functionality

let i = 0; //start point
let images = [];
let time = 5000;

// image list
images[0] = "instrument-1.jpeg";
images[1] = "instrument-2.jpeg";
images[2] = "instrument-3.jpeg";
images[3] = "instrument-4.jpeg";

// Change Image
function changeImg() {
  document.slide.src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("changeImg()", time);
}

window.onload = changeImg;
