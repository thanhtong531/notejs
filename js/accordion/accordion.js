const accordionHeader = document.querySelectorAll(".accordion-header");
[...accordionHeader].forEach((item) =>
  item.addEventListener("click", handleIsShow)
);

function handleIsShow(e) {
  //   console.log(e.target);
  const content = e.target.nextElementSibling;
  content.classList.toggle("is-show");
  // Lấy chiều cao của phần tử content kể cả padding
  content.style.height = `${content.scrollHeight}px`;

  if (!content.classList.contains("is-show")) {
    content.style.height = `0px`;
  }

  // Toggle icon
  const icon = e.target.querySelector(".icon");

  icon.classList.toggle("fa-angle-down");
  icon.classList.toggle("fa-angle-up");
}
