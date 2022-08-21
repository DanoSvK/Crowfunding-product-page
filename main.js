const openMenu = document.querySelector(".bookmark__button");
const menu = document.querySelector(".main-article-active");
const overlay = document.querySelector(".overlay");
const closeMenu = document.querySelector(".close");

function open() {
  menu.style.display = "block";
  overlay.classList.add("overlay-active");
}
openMenu.addEventListener("click", open);

function close() {
  menu.style.display = "none";
  overlay.classList.remove("overlay-active");
}
closeMenu.addEventListener("click", close);
