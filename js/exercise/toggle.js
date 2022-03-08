const menu = document.querySelector(".menu");
const menuToggle = document.querySelector(".menu-toggle");
menuToggle.addEventListener("click", handleChangeMenu);

function handleChangeMenu(e) {
  e.target.classList.toggle("fa-times");
  e.target.classList.toggle("fa-bars");
  menu.classList.toggle("is-show");
}

document.addEventListener("click", handleExitMenu);

function handleExitMenu(e) {
  if (!menu.classList.contains(e.target) && !e.target.matches(".menu-toggle")) {
    menu.classList.remove("is-show");
    menuToggle.classList.remove("fa-times");
    menuToggle.classList.add("fa-bars");
  }
}
