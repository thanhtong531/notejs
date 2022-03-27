window.addEventListener("load", function () {
  const dropdownSelect = document.querySelector(".dropdown-select");
  const dropdownList = document.querySelector(".dropdown-list");
  const dropdownCaret = document.querySelector(".dropdown-caret");
  const dropdownItems = document.querySelectorAll(".dropdown-item");
  const dropdownText = document.querySelector(".dropdown-text");
  const dropdownValue = document.querySelector(".dropdown-value");
  dropdownSelect.addEventListener("click", function (e) {
    dropdownList.classList.toggle("show");
    dropdownCaret.classList.toggle("fa-caret-up");
  });
  [...dropdownItems].forEach((item) =>
    item.addEventListener("click", handleText)
  );
  function handleText(e) {
    const text = e.target.textContent;
    dropdownValue.textContent = text;
    dropdownList.classList.remove("show");
    dropdownCaret.classList.toggle("fa-caret-up");
  }
});
