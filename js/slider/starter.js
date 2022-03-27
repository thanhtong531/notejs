window.addEventListener("load", function () {
  const slider = document.querySelector(".slider");
  const sliderdotItems = document.querySelectorAll(".slider-dots-item");
  const sliderMain = document.querySelector(".slider-main");
  const sliderItems = document.querySelectorAll(".slider-item");
  const btnPrev = document.querySelector(".slider-prev");
  const btnNext = document.querySelector(".slider-next");
  const sliderItemWidth = sliderItems[0].offsetWidth;
  const sliderLength = sliderItems.length;
  let positionX = 0;
  let index = 0;
  btnNext.addEventListener("click", function () {
    handleChangeSlider(1);
  });
  btnPrev.addEventListener("click", function () {
    handleChangeSlider(-1);
  });
  [...sliderdotItems].forEach((item) => {
    item.addEventListener("click", function (e) {
      [...sliderdotItems].forEach((el) => el.classList.remove("active"));
      e.target.classList.add("active");
      const sliderIndex = parseInt(e.target.dataset.index);
      index = sliderIndex;
      positionX = sliderItemWidth * index * -1;
      sliderMain.style = `transform: translateX(${positionX}px)`;
    });
  });
  function handleChangeSlider(dir) {
    //   next
    if (dir === 1) {
      if (index >= sliderLength - 1) {
        index = sliderLength - 1;
        return;
      }
      positionX = positionX - sliderItemWidth;
      sliderMain.style = `transform: translateX(${positionX}px)`;
      index++;
    } else if (dir === -1) {
      if (index <= 0) {
        index = 0;
        return;
      }
      //   console.log("prev slider");
      positionX = positionX + sliderItemWidth;
      sliderMain.style = `transform: translateX(${positionX}px)`;
      index--;
    }
    [...sliderdotItems].forEach((el) => el.classList.remove("active"));

    [...sliderdotItems][index].classList.add("active");
  }
});
