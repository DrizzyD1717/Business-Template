let closeBtn = document.querySelector(".uil-times-circle");
let openBtn = document.querySelector(".uil-bars");
let header = document.querySelector("header");
let subMenu = document.querySelector(".sub-menu");

console.log(closeBtn, openBtn);

closeBtn.addEventListener("click", (e) => {
  subMenu.classList.toggle("no-display");
  header.classList.toggle("no-display");
});

openBtn.addEventListener("click", (e) => {
  header.classList.toggle("no-display");
  subMenu.classList.toggle("no-display");
});
