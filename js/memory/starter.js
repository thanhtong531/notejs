const cardsArray = [
  {
    name: "fire",
    img: "img/fire.png",
  },
  {
    name: "youtube",
    img: "img/youtube.png",
  },
  //   {
  //     name: "flash",
  //     img: "img/flash.png",
  //   },
  //   {
  //     name: "gift",
  //     img: "img/gift.png",
  //   },
  //   {
  //     name: "tron",
  //     img: "img/tron.png",
  //   },
  //   {
  //     name: "ufo",
  //     img: "img/ufo.png",
  //   },
  //   {
  //     name: "plant",
  //     img: "img/plant.png",
  //   },
  //   {
  //     name: "burger",
  //     img: "img/burger.png",
  //   },
];
const grid = document.querySelector(".grid");
const delay = 1000;
let firstGuess = "";
let secondGuess = "";
let previousCard;
let count = 0;
function generaCard() {
  grid.innerHTML = "";
  // array.sort(() => 0.5 - Math.random()) => random array
  const cardArrayMerge = cardsArray
    .concat(cardsArray)
    .sort(() => 0.5 - Math.random());
  cardArrayMerge.forEach((item) => {
    const card = document.createElement("div");
    //   front
    const front = document.createElement("div");
    front.classList.add("front");
    //   back
    const back = document.createElement("div");
    back.classList.add("back");
    card.classList.add("card");
    card.dataset.name = item.name;
    back.style.backgroundImage = `url(${item.img})`;
    card.appendChild(front);
    card.appendChild(back);
    grid.appendChild(card);
  });
}
generaCard();

function matchingCard() {
  const selects = document.querySelectorAll(".selected");
  [...selects].forEach((item) => item.classList.add("matches"));
}

function resetGuess() {
  firstGuess = "";
  secondGuess = "";
  previousCard = null;
  count = 0;
  const matchesAll = document.querySelectorAll(".matches");
  const cardLength = document.querySelectorAll(".card").length;
  const selects = document.querySelectorAll(".selected");
  [...selects].forEach((item) => item.classList.remove("selected"));
  if (matchesAll.length === cardLength) {
    //   done game -> reset game
    matchesAll.forEach((el) => el.classList.remove("matches"));
    setTimeout(generaCard, delay);
  }
  z;
}

grid.addEventListener("click", function (e) {
  const clicked = e.target;
  if (
    clicked.nodeName === "SECTION" ||
    clicked === previousCard ||
    clicked.parentNode.classList.contains("selected") ||
    clicked.parentNode.classList.contains("matches")
  ) {
    return;
  }
  if (count < 2) {
    count++;
    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add("selected");
    } else {
      secondGuess = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add("selected");
    }

    if (firstGuess && secondGuess) {
      if (firstGuess === secondGuess) {
        //   handle matching
        // console.log("match");
        setTimeout(matchingCard, delay);
      }
      setTimeout(resetGuess, delay);
    }
  }
  previousCard = clicked;
  //   firstGuess = clicked.classList.add("selected");
});
