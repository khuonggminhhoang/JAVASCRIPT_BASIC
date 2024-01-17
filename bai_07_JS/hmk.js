// 1.
/*
const isNonNegative = (num) => {
    return num % 1 == 0 && num > 0;
}

let n;
do {
    n = prompt('Nhập số n:');
    if(!isNaN(n)) break;
    else{
        console.log('Nhập lại số');
    }
}
while(true);

alert(isNonNegative(parseFloat(n)) ? 'YES' : 'NO');
*/

//2.

const sum = (arr) => {
    const total = arr.reduce((total, item) => {
        return total + item;
    }, 0);
    return total;
}

const isShape = (n, arr) => {
    if (n < 3) return false;
    if (!arr.every((angle) => angle > 0 && angle < 180)) return false;
    return sum(arr) === (n - 2) * 180;
};

console.log(isShape(4, [90, 90, 90, 90]));
console.log(isShape(3, [20, 20, 140]));
console.log(isShape(1, [21]));
console.log(isShape(5, [500, 0, 20, 10, 10]));

//3.
/**
 * 
 * @param {string} str 
 * @param {number} n 
 */
const abbreviate = (str, n = 0) => {
    const arrSubStr = str.trim().split(/\s+/);
    const arr = arrSubStr.filter((subStr) => subStr.length >= n);
    const ans = arr.map((subStr) => subStr[0]).join('');
    return ans.toUpperCase();
};

console.log(abbreviate("Xin chào! Tôi tên là Nam."));
console.log(abbreviate("Xin chào! Tôi tên là Nam.", 3));
console.log(abbreviate("Xin chào! Tôi tên là Nam.", 4));
