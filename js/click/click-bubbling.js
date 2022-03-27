const btn = document.querySelector(".button");
const span = document.querySelector(".button span");

// // khi ta click vào span
// // Cả 3 cùng chạy sư kiện click vì nó bị bubbling(nổi bọt) lên

// // Để ngăn chặn sự nổi bọt (muốn click sự kiện nào thì sự kiện đó chạy) => e.stopPropagation();
// function handleClick() {
//   console.log("button click");
// }
// btn.addEventListener("click", handleClick, {
//   capture: true,
// });

// span.addEventListener("click", function (e) {
//   // Lúc này chỉ có span chạy vì đã chặn sự nổi bọt lên các phần tử cha
//   // e.stopPropagation();
//   //   Nó chỉ chặn 1 sự kiện click , nếu phần tử có thêm một sự kiện thì nó sẽ chạy 2 sự kiện muốn chặn 1 sự kiện ta dùng stopImmediatePropagation();
//   // e.stopImmediatePropagation();
//   console.log("span click");
// });

// document.body.addEventListener("click", function () {
//   console.log("body click");
// });

// Capture
span.addEventListener(
  "click",
  function (e) {
    console.log("span click 2");
  },
  {
    capture: true,
  }
);

document.body.addEventListener(
  "click",
  function () {
    console.log("body click");
  },
  {
    capture: true,
  }
);

btn.addEventListener("click", function (e) {
  // e.target: Nó sẽ chọn chính xác element mà mình click tới
  console.log(e.target); // element span khi mình click vào span
  console.log("e.currentTarget");
  //   e.currentTarget: Nó sẽ chọn phần tử mà mình click
  console.log(e.currentTarget); // element button
});
