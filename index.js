"use strict";
let offset = 0;
let parent = document.querySelector(".novelties_arrows");
let sliderLine = document.querySelector(".novelties_list");

parent.addEventListener("click", (e) => {
  if (e.target.classList.contains("button-next")) {
    offset += 359;
    if (offset > 1436) {
      offset = 0;
    }
    sliderLine.style.left = -offset + "px";
  }
});
parent.addEventListener("click", (e) => {
  if (e.target.classList.contains("button-prev")) {
    offset -= 359;
    if (offset < 0) {
      offset = 1436;
    }
    sliderLine.style.left = -offset + "px";
  }
});
