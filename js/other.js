// const str = "";
// console.log(+str); //113
// console.log(!!str);
// console.log(typeof [1, 3]);

// function number(a, b, c) {
//   console.log(arguments);
//   if (!arguments.length) console.log("enter your arguments");
//   return a + b + c;
// }
// console.log(number(1));

// var bị hoisting nên nó sẽ khai báo biến var ra ngoài
// var i;
// for (var i = 1; i < 5; i++) {
//   console.log(i);
// }

// Let không bị hoisting
// for (let i = 1; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   });
// }

// const input = document.querySelector(".input");
// input.addEventListener("keyup", () => {
//   console.log(this.value); //undefined
// });

// const student = {
//   count: 0,
//   increase: () => {
//     return ++this.count;
//   },
// };

// console.log(student.increase()); //NaN
// console.log(student.name?.age);

// const student = {
//   age: 20,
//   love: true,
//   fullname: {
//     name: "Thanh Tong",
//   },
// };

// console.log(student.fullname1?.girl); // undefined nếu có fullname1 mới làm tiếp vế sau
// console.log(student.fullname1.girl); // Cannot read properties of undefined (reading 'girl') => undefined.girl nên lỗi
// console.log(student.fullname?.name);

// Đệ quy (recursion)

const complexArr = [
  [1, 2, 3],
  [3, 4, 5],
  9,
  [
    [2, 3],
    [2, 3, 6, [999]],
    [1, 2],
  ],
];

// [].concat([1,2,3])
// [1,2,3]

function flatArr(arr, deep) {
  const result =
    deep > 0
      ? arr.reduce(
          (a, val) =>
            a.concat(Array.isArray(val) ? flatArr(val, deep - 1) : val),
          []
        )
      : arr.slice();
  return result;
}

// console.log(flatArr(complexArr, Infinity));

// const mySet = new Set();
// mySet.add(1);
// mySet.add("Thanh Tong");
// console.log(mySet); //{ 1,"Thanh Tong"}
// console.log(mySet.has(1)); //true
// mySet.delete(1);
// console.log(mySet); //{ "Thanh Tong"}
// // Xoá tất cả
// mySet.clear();
// console.log(mySet); //{}

const arr = [2, 1, 3, 5, 6, 2, 4, 1, 5, 1, 1, 1, 4, 2, 4];

// Dùng set để tạo ra một giá trị object unique

const arr2 = new Set(arr);
// console.log(arr2); //Set(6) { 2, 1, 3, 5, 6, 4 } => object

// Convert set to array
// const newArr = Array.from(arr2);
const newArr = [...arr2];
// console.log(newArr);

// BOM

// 1. Location
// console.log(window.location);
// console.log(location);
// http://127.0.0.1:5500/js/other.html?type=demo&page=2#title
// Lấy ra giá trị cần tìm trên thanh params
// Lấy ra được => type=demo&page=2
const params = new URLSearchParams(location.search);
// console.log(params.get("type"));
console.log(params.get("type"));
console.log(params.set("page", 10));
console.log(params.get("page")); //10 vì đã set ở trên
console.log(params.has("type")); //true
// console.log(params.delete("type"));
// console.log(params.get("type")); // null

// Để lấy key hoặc giá trị ta dùng for...of

for (let it of params.keys()) {
  console.log(it);
}

// Điều hướng
// setTimeout(() => {
//   location.href = "https://Hihi.com";
// });
