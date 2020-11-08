// select the body tag in the HTML
const bodyTag = document.querySelector("body");

const menuToggle = document.querySelector("a.menu-toggle");

menuToggle.addEventListener("click", function () {
  bodyTag.classList.toggle("nav-open");
});
