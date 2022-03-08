const student = {
  name: "Tong Nguyen",
  age: 22,
  love: true,
  isDeveloper: true,
  hi: function () {
    console.log("Hi");
  },
};

const entries = Object.entries(student);
console.log(entries);

// [
//     [ 'name', 'Tong Nguyen' ],
//     [ 'age', 22 ],
//     [ 'love', true ],
//     [ 'isDeveloper', true ],
//     [ 'hi', [Function: hi] ]
//   ]

// Object assign
const a = { firstName: "Nguyễn" };
const b = { lastName: "Tòng" };
const c = Object.assign(a, b); //{ firstName: 'Nguyễn', lastName: 'Tòng' }
const d = { ...a, ...b }; // { firstName: 'Nguyễn', lastName: 'Tòng' } => Spread operator

const car = { name: "BMW" };
const newCar = Object.freeze(car);
newCar.name = "Lambo";
newCar.status = true;
console.log(newCar); // { name: 'BMW' }

// Object.seal(object)
const fullName = { firstName: "Tòng" };
const newName = Object.seal(fullName);
newName.firstName = "Nguyễn";
newName.lastName = "Tòng";
console.log(newName); //{ firstName: 'Nguyễn' }

// Clone Object nested
// const users = {
//   name: "Thanh Tong",
//   school: {
//     name: "DHCT",
//     class: "DI1895A2",
//     teacher: { name: "Quyen", age: 34 },
//   },
// };

// ta dùng cách thông thường thì giá trị trong nested sẽ thay đổi và thay đổi object gốc
// const newUser2 = { ...users };
// newUser2.school.name = "CTU";
// console.log("newUser2", newUser2);
// console.log("U", users);

const newUser3 = JSON.parse(JSON.stringify(users));
newUser3.school.name = "CTU";
console.log("New user3", newUser3);

// Optional chaining
const users = {
  name: "Thanh Tong",
  school: {
    name: "DHCT",
    class: "DI1895A2",
    teacher: { name: "Quyen", age: 34 },
  },
};

// console.log(users.teacher.name); //Cannot read property 'name' of undefined
console.log(users.teacher?.name); //undefine vì chưa khai báo key nếu có giá trị thì nó sẽ trả về giá trị
console.log(users.school?.teacher?.name); //Quyen
console.log(users.hi?.name);
