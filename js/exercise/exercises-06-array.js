// 1. Cho một mảng gồm nhiều giá trị . Viết chương trình loại bỏ những giá trị falsy ra khỏi mảng chỉ giữ lại giá trị truthy

const arrays = [
  1,
  1000,
  20,
  false,
  null,
  "tong",
  "",
  undefined,
  "javascript",
  [1, 2, 3],
  NaN,
  "Nhi",
];

console.log(arrays.filter((x) => Boolean(x)));

// 2.Cho 1 mảng phức tạp [[1,2,3,[false,null]],[1,5,6,["javascript"]],[888,666,[90]]];

const array = [
  [1, 2, 3, [false, null]],
  [1, 5, 6, ["javascript"]],
  [888, 666, [90]],
];
console.log(array.flat(99));

// 3. Đảo ngược số nguyên vd: 1234 -> 4321 , -567 -> -765

function converseNumber(number) {
  const result =
    parseInt(number.toString().split("").reverse().join("")) *
    Math.sign(number);
  console.log(result);
}

converseNumber(-1234);

// 6. Cho một chuỗi bất kì, đếm số lượng vowels có trong chuỗi
//  vowels là các kí tự: u , e , o, a, i
// VD: "ThanhTong" -> 2

function countVowels(string) {
  let count = 0;
  const vowels = "ueoai";
  for (let str of string.toLowerCase()) {
    if (vowels.includes(str)) count++;
  }
  return count;
}

console.log(countVowels("ThanhTong"));
console.log(countVowels("THANHTONG"));

// 7. Cho một mảng các giá trị số [1,2,3,4,1,4,5,6,2,4,6,3,7,7,6]. Viết một hàm trả về một mảng unique. Kết quả [1,2,3,4,5,6,7]

function uniqueNumber(arr) {
  if (arr.length === 0 || !Array.isArray(arr)) return;
  let subArr = [];

  arr.forEach((num) => {
    if (subArr.length === 0 || !subArr.includes(num)) {
      subArr.push(num);
    }
  });
  return subArr;
}
console.log(uniqueNumber([1, 2, 3, 4, 1, 1, 4, 5, 6, 2, 4, 6, 3, 7, 7, 6]));

// 7.Viết một function xử lý từ một mảng lớn thành nhiều mảng con dựa vào số nguyên đầu vào
// -> vd: ([1,2,3,4,5],2) => [[1,2],[3,4],[5]]
// Cách 1
function splitArr(arr, count) {
  if (!Array.isArray(arr)) return;
  let subArr = [];
  let arrBig = [];
  for (let i = 0; i < arr.length; i++) {
    if (subArr.length <= count) subArr.push(arr[i]);
    if (subArr.length === count || i === arr.length - 1) {
      arrBig.push(subArr);
      subArr = [];
    }
  }
  return arrBig;
}

console.log(splitArr([1, 2, 3, 4, 5, 6], 4));

// Cách 2: dùng slice
// console.log(splitArr([1, 2, 3, 4, 5, 6], 4));

function splitArray(arr, number) {
  if (!Array.isArray(arr)) return;
  const result = [];
  let index = 0;
  while (index < arr.length) {
    result.push(arr.slice(index, number + index));
    index = index + number;
  }
  console.log(result);
  // return result;
}

splitArray([1, 2, 3, 4, 5, 6], 4);
// console.log(splitArray([1, 2, 3, 4, 5, 6], 4));
