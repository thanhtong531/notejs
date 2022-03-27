const student = {
  name: "Tong",
  age: 22,
};

// Constructor function
function Student(name, age) {
  this.name = name;
  this.age = age;

  this.getName = function () {
    return `your name is ${this.name}`;
  };
}

let student2 = new Student("Nhi", 20);
