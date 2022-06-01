const button = document.querySelector(".nav-button img");
const nav = document.querySelector(".header-nav");
button.addEventListener("click", () => {
  nav.classList.toggle("open")
    ? (button.src = "img/NAV CLOSE.svg")
    : (button.src = "img/NAV.svg");
});
