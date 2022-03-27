const dropdownSelected = document.querySelector(".dropdown-select");
const items = document.querySelectorAll(".dropdown-item");
const dropdownList = document.querySelector(".dropdown-list");
const dropdown = document.querySelector(".dropdown");
const dropdownCaret = document.querySelector(".dropdown-caret");
dropdownSelected.addEventListener("click", function (e) {
  dropdownCaret.classList.toggle("fa-caret-up");
  dropdownList.classList.toggle("show");
});
items.forEach((item) => {
  item.addEventListener("click", function (e) {
    const text = e.target.querySelector(".dropdown-text").textContent;
    document.querySelector(".dropdown-value").textContent = text;
    dropdownList.classList.remove("show");
  });
});

document.addEventListener("click", function (e) {
  console.log(e.target);
  if (!dropdown.contains(e.target)) {
    dropdownList.classList.remove("show");
  }
});
