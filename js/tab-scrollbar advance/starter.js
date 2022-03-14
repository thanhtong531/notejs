const tabItem = document.querySelectorAll(".tab-item");
const tabList = document.querySelector(".tab-list");
const tab = document.querySelector(".tab");
const tabNext = document.querySelector(".tab-next");
const tabPrev = document.querySelector(".tab-prev");
const width = tabList.scrollWidth - tabList.clientWidth;
let deltascrollWidth = 40;
window.addEventListener("load", function () {
  [...tabItem].forEach((item) =>
    item.addEventListener("click", handleTabClick)
  );
  function handleTabClick(e) {
    [...tabItem].forEach((item) => item.classList.remove("active"));
    e.target.classList.add("active");
    let leftSpacing = e.target.offsetLeft;
    // Vì có position relative
    // if (leftSpacing >= tab.offsetLeft) {
    //   leftSpacing = e.target.offsetLeft - tab.offsetLeft;
    // }
    tabList.scroll(leftSpacing / 2, 0);
    // tabList.scrollLeft(leftSpacing);
  }
  tabList.addEventListener("wheel", function (e) {
    // Khi lang chuot len co gia tri duong, co lan xuong se co gia tri am
    const delta = e.deltaY;
    this.scrollLeft += delta;
    if (this.scrollLeft > 0) {
      tabPrev.classList.remove("disable");
    } else {
      tabNext.classList.remove("disable");
    }

    // Neu vuot qua khoi chieu rong cua cac phan tu
    if (this.scrollLeft >= width) {
      tabNext.classList.add("disable");
    } else if (this.scrollLeft <= 0) {
      tabPrev.classList.add("disable");
    }
  });
  tabNext.addEventListener("click", function (e) {
    tabPrev.classList.remove("disable");

    tabList.scrollLeft += deltascrollWidth;
    if (tabList.scrollLeft >= width) {
      this.classList.add("disable");
    }
  });
  tabPrev.addEventListener("click", function (e) {
    tabNext.classList.remove("disable");
    tabList.scrollLeft -= deltascrollWidth;
    if (tabList.scrollLeft <= 0) {
      this.classList.add("disable");
    }
  });
});
