window.addEventListener("load", function () {
  const tabItems = document.querySelectorAll(".tab-item");
  const tabContents = document.querySelectorAll(".tab-content");
  [...tabItems].forEach((item) =>
    item.addEventListener("click", function () {
      [...tabItems].forEach((item) => item.classList.remove("active"));
      item.classList.add("active");
      const dataTab = item.dataset.tab;
      [...tabContents].forEach((value) => {
        if (value.dataset.tab === dataTab) {
          [...tabContents].forEach((item) => item.classList.remove("active"));
          value.classList.add("active");
        }
      });
    })
  );
});
