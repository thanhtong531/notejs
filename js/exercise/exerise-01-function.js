
// Viết function so sánh 2 số a và b, tìm ra số lớn hơn

function findMax(a,b){
    // if(a>b){
    //     console.log(`${a} la so lon hon ${b}`);
    // }
    return Math.max(a,b);
}

console.log(findMax(3,3));

// 02: In hoa chữ cái đầu trong chữ ví dụ: tuan -> Tuan,NAM -> Nam;

function toCamelCaseWord(name = ''){
    if(name=== '' || typeof name !== "string") return null;

    const newName = name.toLowerCase();
    const first = newName[0].toUpperCase();
    return `${first}${newName.slice(1)}`
}
console.log(toCamelCaseWord("TAN"));
console.log(toCamelCaseWord(123));

// 03: Viết hàm sử dụng callback in ra kết quả của hàm so sánh đã viết ở bài 1
function useCallback(a,b,callback){ 
    // if(typeof fn !== 'function') return null;
    let max = findMax(a,b);
    callback(max);
}

function printMax(number){
    console.log("Max: "+ number);
}
console.log(useCallback(1,4,printMax));