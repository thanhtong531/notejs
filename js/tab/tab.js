const tabItem = document.querySelectorAll(".tab-item");
const tabContent = document.querySelectorAll(".tab-content");
[...tabItem].forEach((item) => item.addEventListener("click", handleClickItem));
function handleClickItem(e) {
  //   console.log(e.target);
  [...tabItem].forEach((item) => item.classList.remove("active"));
  e.target.classList.add("active");

  const tabNumber = e.target.dataset.tab;
  [...tabContent].forEach((item) => {
    item.classList.remove("active");
    if (item.getAttribute("data-tab") === tabNumber) {
      item.classList.add("active");
    }
  });
  //   [...tabContent][tabNumber - 1].classList.add("active");
}
