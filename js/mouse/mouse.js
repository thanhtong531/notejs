const btn = document.querySelector(".btn");
// btn.addEventListener("mousemove", function () {
//   console.log("Mousemove");
// });
btn.addEventListener("mouseover", function () {
  console.log("mouseo");
});

document.addEventListener("mouseover", function (e) {
  console.log(`clientY ${e.clientY}`);
  console.log(`pageY ${e.pageY}`);
});
