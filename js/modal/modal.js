/*
<div class="modal">
      <div class="modal-content">
        <i class="fa fa-times modal-close"></i>
      </div>
    </div>
*/

const btn = document.querySelector(".btn");
const template = `
<div class="modal">
      <div class="modal-content">
        <i class="fa fa-times modal-close"></i>
      </div>
    </div>
    `;
btn.addEventListener("click", function () {
  document.body.insertAdjacentHTML("beforeend", template);
});

// Khong doc duoc modal-close vì được sinh ra sau khi DOM đã load xong, khi web load xong rồi DOM add sự kiện không có nên trả về null
// const modalClose = document.querySelector(".modal-close");
// modalClose.addEventListener("click", handleCloseModal);
// function handleCloseModal(e) {
//   console.log(e.target);
// }
document.body.addEventListener("click", function (e) {
  if (e.target.matches(".modal-close")) {
    const modal = e.target.parentNode.parentNode;
    modal.parentNode.removeChild(modal);
  } else if (e.target.matches(".modal")) {
    e.target.parentNode.removeChild(e.target);
  }
});
