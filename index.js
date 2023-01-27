"use strict";
let offset = 0;
let parent = document.querySelector(".event-listener");
let sliderLine = document.querySelector(".novelties_list");
let accept = document.querySelector(".newsletter_content-accept");
let checkbox = document.querySelector(".newsletter_content-accept__checkbox");
let acceptButton = document.querySelector(".newsletter_button");

parent.addEventListener("click", (e) => {
  if (e.target.classList.contains("button-next")) {
    offset += 359;
    if (offset > 2154) {
      offset = 0;
    }
    sliderLine.style.left = -offset + "px";
  }
  if (e.target.classList.contains("button-prev")) {
    offset -= 359;
    if (offset < 0) {
      offset = 2154;
    }
    sliderLine.style.left = -offset + "px";
  }
  if (e.target.classList.contains("novelties_viewall")) {
    document
      .querySelector(".novelties_list")
      .classList.replace("novelties_list", "novelties_list-all");
    e.target.classList.toggle("hidden");
    document.querySelector(".novelties_viewless").classList.toggle("hidden");
    document.querySelector(".novelties_arrows").classList.toggle("hidden");
  }
  if (e.target.classList.contains("novelties_viewless")) {
    document
      .querySelector(".novelties_list-all")
      .classList.replace("novelties_list-all", "novelties_list");
    e.target.classList.toggle("hidden");
    document.querySelector(".novelties_viewall").classList.toggle("hidden");
    document.querySelector(".novelties_arrows").classList.toggle("hidden");
  }
});

accept.addEventListener("click", () => {
  if (checkbox.checked) {
    acceptButton.removeAttribute("disabled");
  } else acceptButton.setAttribute("disabled", "true");
});
