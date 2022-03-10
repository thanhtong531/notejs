const tabItem = document.querySelectorAll(".tab-item");
const tabList = document.querySelector(".tab-list");
const tab = document.querySelector(".tab");
window.addEventListener("load", function () {
  [...tabItem].forEach((item) =>
    item.addEventListener("click", handleTabClick)
  );
  function handleTabClick(e) {
    [...tabItem].forEach((item) => item.classList.remove("active"));
    e.target.classList.add("active");
    const leftSpacing = e.target.offsetLeft - tab.offsetLeft;
    tabList.scroll(leftSpacing / 2, 0);
  }
});
