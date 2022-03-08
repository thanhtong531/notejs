const h3 = document.querySelector("h3");
// h3.insertAdjacentText("positon", "string");

h3.insertAdjacentText("beforebegin", "beforebegin");
h3.insertAdjacentText("afterbegin", "afterbegin");
h3.insertAdjacentText("beforeend", "beforeend");
h3.insertAdjacentText("afterend", "afterend");

const p = document.createElement("div");
p.className = "hi";
p.textContent = "Xin choa";
document.body.replaceChild(p, h3);
