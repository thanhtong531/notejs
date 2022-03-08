const pets = ["dog", "cat", "bird", "dragon"];

// const pets2 = pets.splice(1, 2);
// console.log(pets); // ["dog","dragon"]
// console.log(pets2); // ["cat","bird"]

const pets3 = pets.splice(0, 2, "pig", "ant");
// console.log(pets); // [ 'pig', 'ant', 'bird', 'dragon' ]

const arr1 = [1, 2];
const arr2 = [1, 2];
console.log(arr1 === arr2); //false

// Dùng JSON.stringify
const arrnew1 = JSON.stringify(arr1);
const arrnew2 = JSON.stringify(arr2);

console.log(arrnew1 === arrnew2); // true
