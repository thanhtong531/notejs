window.addEventListener("load", function () {
  const links = document.querySelectorAll(".menu-item");
  [...links].forEach((item) =>
    item.addEventListener("mouseenter", handleHoverLink)
  );
  const line = document.createElement("div");
  line.className = "line-effect";
  document.body.appendChild(line);

  function handleHoverLink(e) {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const offsetHeight = 5;
    line.style.left = `${left}px`;
    line.style.width = `${width}px`;
    line.style.top = `${top + height + offsetHeight}px`;
  }
  const menu = document.querySelector(".menu");
  menu.addEventListener("mouseleave", function () {
    line.style.width = 0;
  });
});
