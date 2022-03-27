window.addEventListener("load", function () {
  const menuItems = document.querySelectorAll(".menu-item");
  [...menuItems].forEach((item) =>
    item.addEventListener("mouseenter", handleHoverLink)
  );
  const line = document.createElement("div");
  line.className = "line-effect";
  document.body.appendChild(line);
  function handleHoverLink(e) {
    let { left, width, top, height } = e.target.getBoundingClientRect();
    console.log({ left, width, top, height });
    let offsetHeight = 5;
    line.style.left = `${left}px`;
    line.style.top = `${top + height + offsetHeight}px`;
    line.style.width = `${width}px`;
  }
  const menu = document.querySelector(".menu");
  menu.addEventListener("mouseleave", function () {
    line.style.width = 0;
  });
});
