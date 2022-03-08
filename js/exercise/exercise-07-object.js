// 1. Check xem dữ liệu đầu vào có phải object hay không?

function isObject(value) {
  if (typeof value === "object" && !Array.isArray(value) && value !== null) {
    return true;
  }
  return false;
}

// console.log(isObject({ a: 1, b: 2 }));

// 2.Từ object ban đầu hay tạo một array nested [["a",1],["b",2]]

function objecttoArray(object) {
  if (!isObject(object)) return;

  //   Cach 1
  //   return Object.entries(object);

  //   Cach 2
  //   ['a','b'].map => [[]]
  //   const value = Object.keys(object).map((key) => [key, object[key]]);
  //   return value;
  const result = [];
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      result.push([key, object[key]]);
    }
  }
  return result;
}

// console.log(objecttoArray({ a: 1, b: 2 }));

// 3.without({a:1,b:2},'b') => {a:1}

function without(object, ...key) {
  console.log(key);
  const newObject = { ...object }; //dùng spread operator
  // Trường hợp chỉ xoá 1 key
  //   if (!isObject(object)) return;
  //   delete object[deleteKey];
  //   return object;
  key.forEach((item) => {
    delete newObject[item];
  });
  return newObject;
}

// console.log(without({ a: 1, b: 2 }, "b", "a"));

// Chekc 2 object có bằng nhau không

function checkEqualObject(obj1, obj2) {
  const object1 = Object.keys(obj1);
  const object2 = Object.keys(obj2);

  if (object1.length !== object2.length) return false;

  // [a,b]
  const result = object1.every((key) => obj1[key] === obj2[key]);
  return result;
}

console.log(checkEqualObject({ a: 1 }, { a: 2 }));
