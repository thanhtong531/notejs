const span = document.querySelector(".span");
span.parentNode.removeChild(span);

console.log(span.childNodes); //text <a> text
console.log(span.children); // <a>

console.log(span.firstChild); // text
console.log(span.firstElementChild); // <a>
