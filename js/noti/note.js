function createNoti(title = "Welcome to Tong Nguyen") {
  const template = `<div class="noti">
    <img src="https://source.unsplash.com/random" alt="" class="image-noti" />
    <div class="noti-content">
      <h3 class="noti-title">${title}</h3>
      <p class="noti-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
        dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
    </div>`;
  document.body.insertAdjacentHTML("afterbegin", template);
}

let lastTitle;
const timer = setInterval(function () {
  const noti = document.querySelector(".noti");
  if (noti) {
    noti.parentNode.removeChild(noti);
  }
  const notiList = [
    "I am frontend developer",
    "I am Tong Nguyen",
    "Welcome to Evondev",
    "Hello world",
  ];
  const title = notiList[Math.trunc(Math.random() * notiList.length)];
  if (lastTitle !== title) {
    createNoti(title);
  }
  lastTitle = title;
}, 4000);
