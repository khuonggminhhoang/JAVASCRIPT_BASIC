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

// 4.
/**
 * 
 * @param {string} str
 * @returns {string} 
 */
const alternatingCaps = (str) => {
    let ans = '';
    let flag = true;
    for(let chr of str){
        if(chr == ' ') {
            ans += ' ';
            continue;
        }
        if(flag){
            ans += chr.toUpperCase();
            flag = false;
        }
        else{
            ans += chr.toLowerCase();
            flag = true;
        }
    }  
    return ans;
};

console.log(alternatingCaps('Khá bảnh'));
console.log(alternatingCaps('Khổ trước sướng sau thế mới giàu.'));
console.log(alternatingCaps('Giàu trước khổ sau thế càng đau.'));

// 5.
const median = (array) => {
    const size = array.length;
    let ans;
    if(size % 2 == 0){
        ans = (array[size/2 - 1] + array[size/2])/2
    }
    else{
        ans = array[Math.floor(size/2)];
    }
    return parseInt(ans) === ans ? ans : +ans.toFixed(1);
};

console.log(median([1, 2, 4, 5, 6, 8, 8, 8, 10]));
console.log(median([2, 2, 6, 8, 8, 10, 10]));
console.log(median([1, 2, 2, 5.5, 7, 8, 9, 10]));

// 6.
const getBirthdayCake = (name, age) => {
    const cover = age&2 ? '#' : '*';
    const content = `${cover} ${age} Chúc mừng sinh nhật ${name}! ${age} ${cover}`;
    const edge = cover.repeat(content.length);
    return `${edge}\n${content}\n${edge}`;
};

console.log(getBirthdayCake('Khương', 21));
console.log(getBirthdayCake('Hoàng Minh Khương', 20));

// 7.
const blahBlah = (str, num) => {
    const arr = str.split(/\s+/);
    // arr.forEach((_, index) => {
    //     if(num > arr.length - index - 1) arr[index] = 'blah'
    // });
    const arrTmp = arr.map((item, index) => {
        return (num > arr.length - 1 - index) ? 'blah' : item;
    });
    
    return `${arrTmp.join(' ')}...`;
}

console.log(blahBlah("Anh học CNTT hả, cài win dùm em nhé!", 3));
console.log(blahBlah("Cảm giác bất an khi tự dưng một đứa bạn cũ hỏi mình đang học IT phải không.",5));

//8.
/**
 * 
 * @param {object} products 
 * @return {number}
 */

const getTotalPrice = (products) => {
    return products.reduce((tol, obj) =>{
        return tol + obj.quantity * obj.price; 
    }, 0);
    
};

const test1 = getTotalPrice([
	{ product: "Sữa", quantity: 1, price: 7000 }
]);
console.log(test1); // 7000

const test2 = getTotalPrice([
    { product: "Sữa", quantity: 1, price: 7000 },
    { product: "Ngũ cốc", quantity: 1, price: 50000 },
  ]);
  console.log(test2); // 57000
  
  const test3 = getTotalPrice([
	{ product: "Sữa", quantity: 3, price: 7000 }
]);
console.log(test3); // 21000


const test4 = getTotalPrice([
  { product: "Sữa", quantity: 1, price: 7000 },
  { product: "Trứng", quantity: 12, price: 3000 },
  { product: "Bánh mỳ", quantity: 2, price: 15000 },
  { product: "Phô mai", quantity: 1, price: 5000 },
]);
console.log(test4); // 78000


const test5 = getTotalPrice([
  { product: "Sô cô la", quantity: 1, price: 12000 },
  { product: "Kẹo", quantity: 1, price: 2000 },
]);
console.log(test5); // 14000

//9.
/**
 * 
 * @param {string} str 
 * @returns {string}
 */
const makeTitle = (str) => {
    const arr = str.trim().split(/\s+/);
    return arr.map((item) => item[0].toUpperCase() + item.slice(1).toLowerCase()).join(' ');
};

console.log(makeTitle("Fix bug là chuyện dễ. Tìm đoạn code gây ra bug để fix mới là chuyện khó."));
console.log(makeTitle("Khi tui biên dịch và code chạy suôn sẻ trong lần đầu. Tui tự hỏi đã làm sai chỗ nào."));

// 10.
const chooseFuse = (fuses, curr) => {
    const arr = (fuses.filter((fuse) => parseFloat(fuse) >= parseFloat(curr))).map((fuse) => parseFloat(fuse));
    return Math.min(...arr) + 'V';
}

console.log(chooseFuse(["3V", "5V", "12V"], "4.5V"));

console.log(chooseFuse(["5V", "14V", "2V"], "5.5V"));

console.log(chooseFuse(["17V", "15V", "12V"], "9V"));

