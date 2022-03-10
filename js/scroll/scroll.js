const boxed = document.querySelector(".boxed");
boxed.addEventListener("scroll", function () {
  console.log(boxed.scrollLeft);
  console.log(boxed.scrollTop);
});
