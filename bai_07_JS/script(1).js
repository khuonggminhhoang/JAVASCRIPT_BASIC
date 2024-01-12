// --------- function -------------

/*
    Declaration function (Hàm định nghĩa):
        ● Có tính hoisting (nghĩa là gọi được hàm trước lúc khai báo hàm đó).
        ● Có đối tượng arguments. (chứa các đối số truyền vào hàm ~~  1 mảng các đối số)

    form:
        function tenHam(thamSo1, thamSo2, ...) {
            // Code
        }
*/

// example: (hàm định nghĩa)
function sum(){
    let result = 0;
    for(let item of arguments){
        result += item;
    }
    return result;
}

/*
    Expression function (Hàm biểu thức)
        ● Không có tính hoisting (Nếu gọi hàm trước lúc khai báo hàm thì sẽ gặp lỗi).
        ● Có đối tượng arguments.

        ● Cú pháp:

        var tenHam = function (thamSo1, thamSo2, ...) {
            // Code
        }

*/
// example: (hàm biểu thức)
var mul = function (){
    let result = 1;
    for(let item of arguments){
        result *= item;
    }
    return result;
}

/*
    Arrow function (Hàm mũi tên)
        ● Không có tính hoisting (Nếu gọi hàm trước lúc khai báo hàm thì sẽ gặp lỗi).
        ● Không có đối tượng arguments.

        ● Cú pháp:
        
        var tenHam = (thamSo1, thamSo2, ...) => {
            // Code
        }
*/
// example:
var solve = (...args) => {
    let result = 0;
    console.log(args);
    for(let x of args){
        result += x;
    }
    return result;
}
//---main---:
var y = sum(1, 2, 3);
var x = mul(1,2,3);
console.log(x, y);

var arr = [1, 2, 3, 4, 5];
console.log(...arr)         // toán tử spread
console.log(mul(...arr, 2, 5));
console.log(solve(...arr));
console.log(solve(1, 2, 3));


// Ví dụ 1: Tính tổng các số chẵn của mảng. Mảng như sau:
// cách 1: dùng Declaration Function
function declarationFunctionNoArgs(array){
    let result = 0;
    for(let item of array){
        if(item%2 == 0)
            result += item;
    }
    return result;
}

function declarationFunction(){
    let result = 0;
    for(let item of arguments){
        if(item % 2 == 0)
            result += item;
    }
    return result;
}

// cách 2: dùng Expression Function
var expressionFunctionNoArgs = function(array){
    let result = 0;
    for(let item of array){
        if(item % 2 == 0)
            result += item;
    }
    return result;
}

var expressionFunction = function(){
    let result = 0;
    for(let item of arguments){
        if(item % 2 == 0)
            result += item;
    }
    return result;
}

// cách 3: dùng Arrow Function
var arrowFunction = (...args) => {
    let result = 0;
    for(let item of args){
        if(item % 2 == 0)
            result += item;
    }
    return result;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(declarationFunctionNoArgs(arr));
console.log(declarationFunction(...arr));

console.log(expressionFunctionNoArgs(arr));
console.log(expressionFunction(...arr));

console.log(arrowFunction(...arr));

/*
Ví dụ 2: Viết chương trình cho người dùng nhập vào số n lớn hơn 0, sau đó dựa vào n tính giá trị của
biểu thức:
        bieuThuc = 1/n + 2/n + 3/n + ... + n/n
*/

// var test = () => {
//     console.log('hello');
// }10

const sumDiv = (n) => {
    let res = 0;
    for(let i = 1; i <= n; ++i){
        res += i/n; 
    }
    return res;
}

let n;
do{
    n = prompt('Nhập n:');
    n = parseInt(n);
    if(n <= 0){
        console.log('Nhập n > 0');
    }
    else{
        console.log(sumDiv(n).toFixed(3)); 
    }
} while(n <= 0 || isNaN(n));




