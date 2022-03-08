const colors = ["#F2BAC9", "#F2E2BA", "#BAD7F2", "#BAF2D8", "#43281C"];
const btn = document.querySelector(".btn");
btn.addEventListener("click", handeChangeColor);

function handeChangeColor() {
  const color = colors[Math.trunc(Math.random() * colors.length)];
  //   document.body.setAttribute("style", `background-color:${color}`);
  //   btn.setAttribute("style", `background-color:${color}`);
  //   btn.setAttribute("style", "opacity:0.5");
  //   btn.style.backgroundColor = color;
  document.body.style.backgroundColor = color;
}
