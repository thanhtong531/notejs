// const template = `
// <div class="modal">
// <div class="modal-content">
//   <i class="fa fa-times modal-close"></i>
//   <div class="modal-desc">
//     Lorem ipsum dolor sit amet consectetur adipisicing elit. In iste
//     voluptatem velit enim iure repellendus doloremque, temporibus placeat
//     et architecto molestias nihil harum est dolorem nesciunt dicta sit
//     porro a.
//   </div>
//   <div class="modal-action">
//     <button class="modal-submit">Comfirm</button>
//     <button class="modal-cancel">Cancel</button>
//   </div>
// </div>
// </div>`;
const modal = document.createElement("div");
const body = document.body;
modal.classList.add("modal");
const modalContent = document.createElement("div");
modalContent.classList.add("modal-content");
const modalClose = document.createElement("i");
modalClose.className = "fa fa-times modal-close";
modalContent.appendChild(modalClose);
const modalDesc = document.createElement("div");
modalDesc.classList.add("modal-desc");
modalDesc.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. In iste
    voluptatem velit enim iure repellendus doloremque, temporibus placeat
    et architecto molestias nihil harum est dolorem nesciunt dicta sit
    porro a.`;
modalContent.appendChild(modalDesc);
const modalAction = document.createElement("div");
modalAction.classList.add("modal-action");
modalContent.appendChild(modalAction);
const buttonSubmit = document.createElement("button");
buttonSubmit.classList.add("modal-submit");
buttonSubmit.textContent = "Comfirm";
modalAction.appendChild(buttonSubmit);
modal.appendChild(modalContent);

body.appendChild(modal);
// document.body.insertAdjacentHTML("afterbegin", template);

const modal1 = document.querySelector(".modal");
setTimeout(function () {
  modal1.classList.add("is-show");
}, 3000);
