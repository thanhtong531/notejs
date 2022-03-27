window.addEventListener("load", function () {
  const accordionHeader = document.querySelectorAll(".accordion-header");
  [...accordionHeader].forEach((item) => {
    item.addEventListener("click", function (e) {
      const content = item.nextElementSibling;
      content.classList.toggle("is-show");
      content.style.height = `${content.scrollHeight}px`;
      if (!content.classList.contains("is-show")) {
        content.style.height = `0px`;
      }
      const icon = e.target.querySelector(".icon");
      icon.classList.toggle("fa-angle-up");
      icon.classList.toggle("fa-angle-down");
    });
  });
});
