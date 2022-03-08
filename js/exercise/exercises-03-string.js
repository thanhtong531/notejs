// Đảo ngược 1 chuỗi ví dụ : "My name is Tong" => "Tong is name My";

// function reverseString(str) {
//   if (!str) return null;
//   return str.split(" ").reverse().join(" ");
// }

// console.log(reverseString("My name is Tong"));

// // Đảo ngược 1 chuỗi bao gồm các kí tự ví dụ : "i love" => "evol i";

// function reverseWord(str) {
//   return str
//     .split(" ")
//     .map((word) => word.split("").reverse().join(""))
//     .reverse()
//     .join(" ");
// }
// console.log(reverseWord("i love")); // evol i

// ["i","love"].map() // ["i","evol"].reserve()

// 3. In hoa chữ cái đầu trong từng chữ  => VD: "my name is evondev" -> "My Name Is Evondev"

function capitalize(word = "") {
  const wordFirst = word.charAt(0).toUpperCase();
  const words = word.slice(1).toLowerCase();
  return `${wordFirst}${words}`;
}

// console.log(capitalize("tong"));

// function capitalizeStr(str) {
//   if (str === "" || str.length === 0) return;
//   const arrStr = str.split(" ");
//   return arrStr
//     .map((word) => {
//       return `${word[0].toUpperCase()}${word.slice(1)}`;
//     })
//     .join(" ");
//   // return newArr.join(" ");
// }

function capitalizeStr(str) {
  if (str === "" || str.length === 0) return;
  const arrStr = str.split(" ");
  return arrStr.map((word) => capitalize(word)).join(" ");
  // return newArr.join(" ");
}
// console.log(capitalizeStr("my name is evondev"));

// console.log([1, 2, 3, 4, 5].slice(0, 2));

// // Destructuring

// const toys = ["ball", "car", "arrow", "magic", "water"];

// const [x, y, z] = toys;

// console.log(x); // ball
// console.log(y); // car
// console.log(z); // arrow

// // 1. Sao chép mảng dùng vòng lặp for
// const pets = ["cat", "dog", "bird", "elephant", "ant"];

// let newPets = [];

// for (let i = 0; i < pets.length; i++) {
//   const pet = pets[i];
//   newPets.push(pet);
// }

// console.log(newPets);

// 2. Đảo ngược từ dùng for
const str = "i love you to h";
let result = "";
for (let i = str.length - 1; i >= 0; i--) {
  result += str[i];
}
console.log(result);
