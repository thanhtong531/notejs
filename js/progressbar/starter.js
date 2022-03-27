const progress = document.querySelector(".progress");
window.addEventListener("scroll", function (e) {
  // Lấy chiều cao của thanh chúng ta đang scroll = ScrollTop
  const scrollHeight = window.pageYOffset;
  //   Tính ra chiều cao thật của scrollbar = chieu cao cua document bao gom scrollbar - chieu cao cua document khong bao gom scrollbar (viewport)
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const width = (scrollHeight / height) * 100;
  progress.style.width = `${width}%`;
});
