window.addEventListener("load", function () {
  const inputPassword = document.querySelector(".input");
  inputPassword.addEventListener("input", function (e) {
    const checkLengthClass = e.target.parentNode.querySelector(".check-length");
    const checkUpperCaseClass =
      e.target.parentNode.querySelector(".check-upper");
    const checkNumberClass = e.target.parentNode.querySelector(".check-number");
    const checkItems = e.target.parentNode.querySelectorAll(".check-item");
    const checkSpecial = e.target.parentNode.querySelector(".check-special");
    const value = e.target.value;
    const regexUpperCase = /[A-Z]/;
    const regexNumber = /[0-9]/;

    if (!value) {
      [...checkItems].forEach((item) => {
        item.classList.remove("unactive");
        item.classList.remove("active");
      });
      return;
    }
    if (value.length < 8) {
      checkLengthClass.classList.add("unactive");
    } else {
      checkLengthClass.classList.add("active");
      checkLengthClass.classList.remove("unactive");
    }
    if (regexUpperCase.test(value.trim())) {
      checkUpperCaseClass.classList.add("active");
      checkUpperCaseClass.classList.remove("unactive");
    } else {
      checkUpperCaseClass.classList.add("unactive");
    }
    // if (regexNumber.test(value.trim())) {
    //   checkNumberClass.classList.add("active");
    //   checkNumberClass.classList.remove("unactive");
    // } else {
    //   checkNumberClass.classList.add("unactive");
    // }
    passwordInputClass(checkNumberClass, value, regexNumber);
    passwordInputClass(checkSpecial, value, /[@$%^*+.[\]{}()]/);

    // if (!/[@$%^*+.[\]{}()]/.test(value)) {
    //   checkSpecial.classList.add("unactive");
    //   checkSpecial.classList.remove("active");
    // } else {
    //   checkSpecial.classList.add("active");
    //   checkSpecial.classList.remove("unactive");
    // }
  });
  function passwordInputClass(selector, value, regex) {
    if (!regex.test(value)) {
      selector.classList.add("unactive");
      selector.classList.remove("active");
    } else {
      selector.classList.add("active");
      selector.classList.remove("unactive");
    }
  }
});
