const tabItem = document.querySelectorAll(".tab-item");
const tabList = document.querySelector(".tab-list");
const tab = document.querySelector(".tab");
const tabNext = document.querySelector(".tab-next");
const tabPrev = document.querySelector(".tab-prev");
let deltascrollWidth = 40;
console.log(tabList.scrollWidth, tabList.clientWidth);
window.addEventListener("load", function () {
  [...tabItem].forEach((item) =>
    item.addEventListener("click", handleTabClick)
  );
  function handleTabClick(e) {
    [...tabItem].forEach((item) => item.classList.remove("active"));
    e.target.classList.add("active");
    let leftSpacing = e.target.offsetLeft;
    if (leftSpacing >= tab.offsetLeft) {
      leftSpacing = e.target.offsetLeft - tab.offsetLeft;
    }
    tabList.scroll(leftSpacing / 2, 0);
  }
  tabList.addEventListener("wheel", function (e) {
    // Khi lang chuot len co gia tri duong, co lan xuong se co gia tri am
    const delta = e.deltaY;
    this.scrollLeft += delta;
  });
  tabNext.addEventListener("click", function (e) {
    tabList.scrollLeft += deltascrollWidth;
  });
});
