// Key down: khi nhấn xuống
// const input = document.querySelector(".input");
// // const form = document.querySelector(".form");
// input.addEventListener("keydown", function (e) {
//   //   console.log(e.key); //a => a
//   //   console.log(e.keyCode); //a=> 65
//   //   console.log(e.which); //a=> 65
// });

// // Keyup: khi ta nhan xuong ma buong ra thi no moi goi su kien
// // Khong the e.preventDefault()
// input.addEventListener("keyup", function (e) {
//   //   console.log(e.key);
// });

// // Key express
// input.addEventListener("keypress", function (e) {
//   //   console.log(e.key);
// });

// // Change
// input.addEventListener("change", function (e) {
//   //   console.log("working");
// });

// // Focus
// input.addEventListener("focus", function () {
//   //   console.log("input is focus");
// });

// // blur

// input.addEventListener("blur", function (e) {
//   //   console.log("Blur out input");
// });

// // form.addEventListener("submit", function (e) {
// e.preventDefault();
// //   console.log(this.elements["username"].value);
// //   console.log(this.elements["gender"].value);
// // const hobby = this.querySelectorAll(`input[name="hobby"]`);
// // let hobbyValue = [];
// // hobby.forEach((item) => {
// //   if (item.checked) hobbyValue.push(item.value);
// // });
// // console.log(hobbyValue);
// // const username = this.elements["username"].value;
// // const password = this.elements["password"].value;
// // if (!username) {
// //   alert("You need username");
// //   return;
// // }

// // if (!password) {
// //   alert("You need password");
// //   return;
// // }
// // if (username.length <= 3) {
// //   alert("Password is short");
// // }
// // });

const toggle = document.querySelector(".toggle");
toggle.addEventListener("click", function () {
  const input = this.previousElementSibling;
  const inputType = input.getAttribute("type");
  if (inputType === "password") {
    input.setAttribute("type", "text");
  } else {
    input.setAttribute("type", "password");
  }
});
