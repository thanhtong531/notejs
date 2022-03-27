const btn = document.querySelector(".btn");
window.addEventListener("load", function () {
  const template = `<div class="modal">
    <div class="modal-content">
      <i class="fa fa-times modal-close"></i>
    </div>
  </div>
  `;
  btn.addEventListener("click", function () {
    document.body.insertAdjacentHTML("afterbegin", template);
  });
  document.body.addEventListener("click", function (e) {
    if (e.target.matches(".modal-close")) {
      const modal = e.target.parentNode.parentNode;
      modal.parentNode.removeChild(modal);
    } else if (e.target.matches(".modal")) {
      e.target.parentNode.removeChild(e.target);
    }
  });
});
