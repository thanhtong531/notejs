window.addEventListener("load", function () {
  const text = document.querySelector(".text");
  text.addEventListener("mouseenter", function () {
    const title = text.dataset.tooltip;
    const divElement = document.createElement("div");
    divElement.className = "tooltip-text";
    divElement.textContent = title;
    document.body.appendChild(divElement);

    const cords = text.getBoundingClientRect();
    const { left, top } = cords;
    const triangle = 20;
    divElement.style.left = `${left}px`;
    divElement.style.top = `${top - divElement.offsetHeight - triangle}px `;
  });
  text.addEventListener("mouseleave", function () {
    const toolTip = document.querySelector(".tooltip-text");
    if (toolTip) {
      toolTip.parentNode.removeChild(toolTip);
    }
  });
});
