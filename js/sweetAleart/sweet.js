window.addEventListener("load", function () {
  const btn = document.querySelector(".button");
  function renderSweet() {
    const template = `
        <div class="sweet-alert">
        <i class="fa fa-check sweet-icon"> </i>
        <p class="sweet-text">Congratulation on learning JS</p>
      </div>`;
    document.body.insertAdjacentHTML("beforeend", template);
  }
  btn.addEventListener("click", function (e) {
    renderSweet();
    const sweet = document.querySelector(".sweet-alert");
    if (sweet) {
      setTimeout(function () {
        sweet.parentNode.removeChild(sweet);
      }, 1000);
    }
  });
});
