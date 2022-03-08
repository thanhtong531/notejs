const boxed = document.querySelector(".box");

console.log(boxed.offsetWidth); // 200
console.log(boxed.offsetTop); // 38 = 10 + 28(height of h3)
console.log(boxed.offsetHight); // 200
console.log(boxed.offsetLeft); // 10 (margin:10)
console.log(boxed.offsetParent);

console.log("------------CLIENT------------");
console.log(boxed.clientWidth); // 190 = 200- (border: 5 x 2(2 bên) )
console.log(boxed.clientHeight); // 190 = 200- (border: 5 x 2(2 bên) )
console.log(boxed.clientLeft); // 5 = border- left
console.log(boxed.clientTop); // 50 = border- top

console.log("------------WINDOW------------");

console.log(window.innerHeight);
console.log(window.outerHeight);
console.log(window.innerWidth);
console.log(window.outerWidth);

console.log("----------getBoundingClientRect()--------------");

const t = boxed.getBoundingClientRect();
console.log(t.left);
console.log(boxed.getBoundingClientRect());

console.log("-------PARENTNODES || PARENTELEMENT");

// document.documentElement -> lấy thẻ HTML
console.log(document.documentElement.parentElement); //null
console.log(document.documentElement.parentNode); //#document

console.log("-------insertBefore---------");

// # insertBefore

// // -> parentNode.insertBefore(newnode,existingnode) => đưa element newnode lên trên element existingnode đã tồn tại.
const ul = document.querySelector("ul");

document.body.insertBefore(ul, document.querySelector("h3"));
