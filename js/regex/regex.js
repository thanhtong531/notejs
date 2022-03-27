// Có 2 cách khai báo biểu thức chính quy (regex);

// const re1 = /hello/;
// const re2 = new RegExp("hello");

// console.log(re1.test("Hello hello")); //true

// console.log(/^hi/.test("hi 3")); // true
// console.log(/^hi/.test("hello 3 hi")); //false
// console.log(/hi$/.test("hello 3 hi")); //true
// console.log(/hi$/.test("hello 3 hihi3")); //false

// 4.Meta characters

// /\d/: khớp với số [0-9]
// console.log(/\d/.test("1")); //true
//  /\D/: ngược lại với \d tương đương với [^0-9](phủ đỊnh)
// console.log(/\D/.test("1")); //false

// /\w/: khớp với các kí tự và dấu gạch dưới và số, nó sẽ tương đương [a-zA-Z0-9_]

// console.log(/\w/.test("_")); //true
// /\W/: ngược lại với \w tương đương với [^a-zA-Z0-9_]
// console.log(/\W/.test("_")); //false

// /\s/: khớp với các kí tự khoảng trắng: space, tab , newline
// console.log(/\s/.test("     ")); //true

// /\S/: ngược lại  các kí tự không phải khoảng trắng: space, tab , newline

// console.log(/\S/.test("     ")); // false;

// \n: khớp với newline(xuống hàng)
// \t: khớp với lại tab character
//  .: khớp với tất cả mọi thứ ngoại trừ newline(xuống dòng)(\n)
// [^]: khớp với tất cả mọi thử kể cả newline(\n)

// 5.Quantifiers: {n} {n,m} + ? *

// string.match(regex) -> "abc".match(/\w/) -> []

// {n}: số lượng nhất định
const str1 = "Welcome to Ha Tien 20222324";
// console.log(str1.match(/\d{4}/)[0]); //2022

// {n,m}: số lượng trong khoảng từ n đến m (Lấy 4 hoặc 6 kí tự)
// console.log(str1.match(/\d{4,6}/)[0]); //202223

// +: Lấy 1 hoặc nhiều kí tự thoả điều kiện (nếu không đúng 1 điều kiện trở lên => null)
// console.log(str1.match(/\d+/)[0]); //20222324
// console.log("".match(/\d+/)); //null

// ?: Có thể có hoặc không có kí tự nào đó

// const str2 = "color or colour";
// console.log(str2.match(/color/g)); // ["color"]
// console.log(str2.match(/colou?r/g)); // ["color","colour"]
// console.log("".match(/\d?/g)); // ['']
// Flag
// g: global
// i: case insensitive (không phân biệt hoa thường)
// m: multipe lines (nhiều hàng)
// *: không có hoặc là nhiều

// const str3 = "a1232";
// const str4 = "1232";
// console.log(str3.match(/\d*/g)); //[ '', '1232', '' ]
// console.log(str4.match(/\d*/g)); //[ '1232', '' ]

// 6.Group ()
// có thể group nhiều regex lại với nhau và đặt thêm quantifier cho group
console.log(/(\d{3})(\w+)/.test("123")); // false
console.log(/(\d{3})(\w+)/.test("123abc")); //true
console.log(/(\d{3})?(\w+)/.test("123")); //true

const str = "Hello world hello";

const t = str.replace(/hello/gi, "Tong");
console.log(t);
