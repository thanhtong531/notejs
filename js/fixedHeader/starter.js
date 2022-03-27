const header = document.querySelector(".header");
const heightHeader = header.scrollHeight;
window.addEventListener("scroll", function () {
  const height = window.pageYOffset;
  if (height >= heightHeader) {
    header && header.classList.add("is-fixed");
    document.body.style.paddingTop = `${heightHeader}px`;
  } else {
    header && header.classList.remove("is-fixed");
    document.body.style.paddingTop = 0;
  }
});
