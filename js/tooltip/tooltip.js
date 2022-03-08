window.addEventListener("load", function () {
  const span = document.querySelector(".text");
  span.addEventListener("mouseenter", function (e) {
    // console.log("Hi");

    const title = e.target.dataset.tooltip;
    const divTooltip = document.createElement("div");
    divTooltip.className = "tooltip-text";
    divTooltip.textContent = title;
    document.body.appendChild(divTooltip);

    const cords = e.target.getBoundingClientRect();
    const tooltipHeight = divTooltip.offsetHeight;
    const { top, left, width } = cords;
    const triangle = 20;
    divTooltip.style.left = `${left}px`;
    divTooltip.style.top = `${top - tooltipHeight - triangle}px`;
  });

  span.addEventListener("mouseleave", function (e) {
    const tooltip = document.querySelector(".tooltip-text");
    if (tooltip) {
      tooltip.parentNode.removeChild(tooltip);
    }
    console.log(tooltip);
  });
});
