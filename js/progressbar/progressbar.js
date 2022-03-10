const progress = document.querySelector(".progress");
window.addEventListener("scroll", function () {
  // Lấy chiều cao của thanh dang scroll so voi top => scrollTop
  const scrollTop = window.pageYOffset;
  //   Tính ra chiều cao thật của scrollbar = chieu cao cua document bao gom scrollbar / chieu cao cua document khong bao gom scrollbar
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const width = (scrollTop / height) * 100;
  progress.style.width = `${width}%`;
});
