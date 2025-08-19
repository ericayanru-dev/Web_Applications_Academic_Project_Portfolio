const year = document.querySelector("#copyYear");
const lastModified = document.querySelector("#lastModification");
const hamButton = document.querySelector("#menu");
const nav = document.querySelector("nav");

function hamButton1() {
    nav.classList.toggle("show");
    hamButton.classList.toggle("show");
}
const currentYear = new Date();
year.textContent = currentYear.getFullYear()
lastModified.textContent = document.lastModified
hamButton.addEventListener("click", hamButton1)