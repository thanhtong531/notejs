const counterDecrease = document.querySelector(".counter-decrease");
const counterIncrease = document.querySelector(".counter-increase");
const counterNumber = document.querySelector(".counter-number");
let currentNumber = Number(counterNumber.textContent);
counterDecrease.addEventListener("click", function () {
  if (currentNumber <= 0) return;
  currentNumber--;
  counterNumber.textContent = currentNumber;
});
counterIncrease.addEventListener("click", function () {
  if (currentNumber >= 10) return;
  currentNumber++;
  counterNumber.textContent = currentNumber;
});
