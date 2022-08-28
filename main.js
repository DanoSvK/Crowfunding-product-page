// Menu variables
const menu = document.querySelector(".menu");
const openMenuButton = document.querySelector(".nav-bar__open");
const closeMenuButton = document.querySelector(".nav-bar__close");
const navBar = document.querySelector(".nav-bar");

// Open menu
function openMenu() {
  menu.style.display = "block";
  overlay.classList.add("overlay-menu");
  navBar.style.zIndex = 4;
  openMenuButton.style.display = "none";
  closeMenuButton.style.display = "block";
}
openMenuButton.addEventListener("click", openMenu);

// Close menu
function closeMenu() {
  menu.style.display = "none";
  overlay.classList.remove("overlay-menu");
  navBar.style.zIndex = 2;
  openMenuButton.style.display = "block";
  closeMenuButton.style.display = "none";
}
closeMenuButton.addEventListener("click", closeMenu);

// Pledge options window
// Variables
const openRewardsWindow = document.querySelector(".bookmark__button");
const rewardsWindow = document.querySelector(".main-article-active");
const overlay = document.querySelector(".overlay");
const closeRewardsWindow = document.querySelector(".close");

// Open rewards window
function open() {
  rewardsWindow.style.display = "block";
  overlay.classList.add("overlay-active");
}
openRewardsWindow.addEventListener("click", open);

// Close rewards window
function close() {
  // Remove style from every option in case one is chosen before closing the windows
  for (i = 0; i < section.length; i++) {
    section[i].classList.remove("main-article__section-active");
  }
  // Remove enterPledge from every option in case one is chosen before closing the windows
  for (i = 0; i < enterPledge.length; i++) {
    enterPledge[i].style.display = "none";
  }
  // Remove dot from every radio button in case one is chosen before closing the windows
  for (i = 0; i < options.length; i++) {
    options[i].checked = false;
  }
  rewardsWindow.style.display = "none";
  overlay.classList.remove("overlay-active");
}
closeRewardsWindow.addEventListener("click", close);

// Pledge options selection
// Variables
const options = document.querySelectorAll(".option");
const enterPledge = document.querySelectorAll(".main-article__enter-pledge");
const disabled = document.querySelector("#disabled");
const section = document.querySelectorAll(".main-article__section");
const activeArticle = document.querySelectorAll(".main-article__enter-pledge");

function choose(e) {
  // Setting all forms to display none, so only one can be opened at a time
  for (i = 0; i < enterPledge.length; i++) {
    enterPledge[i].classList.remove("main-article__enter-pledge-active");
  }
  // Selecting the form so it can be set to display block on clicking on a radio button
  e.path[2].lastElementChild.classList.add("main-article__enter-pledge-active");
  // Remove active class from all the sections
  for (i = 0; i < section.length; i++) {
    section[i].classList.remove("main-article__section-active");
  }
  // Selecting the section to add the active class to the one being clicked
  e.path[2].classList.add("main-article__section-active");
}
options.forEach((option) => option.addEventListener("click", choose));

// Open and close thanks window + setting rewards window to display none
const continueButtons = document.querySelectorAll(".main-article__continue");
const closeThanksWindowButtons = document.querySelectorAll(".got-it");

// Open window
function openWindow() {
  document.querySelector(".thanks-window").style.display = "block";
  rewardsWindow.style.display = "none";
}
continueButtons.forEach((continueButton) =>
  continueButton.addEventListener("click", openWindow)
);

// Close window and remove all styles from active windows with pledge option on closing the window
function closeWindow() {
  document.querySelector(".thanks-window").style.display = "none";
  overlay.classList.remove("overlay-active");
  for (i = 0; i < section.length; i++) {
    section[i].classList.remove("main-article__section-active");
  }
  for (i = 0; i < activeArticle.length; i++) {
    activeArticle[i].style.display = "none";
  }
  for (i = 0; i < options.length; i++) {
    options[i].checked = false;
  }
}
closeThanksWindowButtons.forEach((button) =>
  button.addEventListener("click", closeWindow)
);
