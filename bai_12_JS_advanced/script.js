// ------------ Scope --------------------

function add(n1, n2){
    var res = n1 + n2;
    return res;
}

// console.log(res);  -> error
// ------------ Hoisting -----------------

console.log(a);
var a = 'Hello world';

// tương đương
// var a;
// console.log(a);
// a = 'Hello world';

let x = 10;
console.log(x);

function greater(){
    var a = 'Hello world';
    console.log(a);
}

greater();
// Declaration function
// function test(){
//     console.log('Test');
// }

// test();

// Expression function

/*
test()

var test = function() {
    console.log('Test');
}
*/

// Tương đương
/*
var test;

test();

test = function(){
    console.log('Test');
}
===> error
*/

// Arrow function: tương tự Expression function

document.querySelector('#click').addEventListener('click', function() {
    console.log(this);                      // => this ở đây là đối tượng phía trước dấu chấm (button)
});
//  button

document.querySelector('#click').addEventListener('click', () => {
    console.log(this);                      // => this ở đây là một đối tượng cha của đối tượng button là window
});
// window

/*
    Trong arrow function, this sẽ là phạm vi this của ngữ cảnh bên ngoài, có thể là global context hoặc một đối tượng khác (tuỳ thuộc vào cách gọi hàm).
    Trong Function Expression (function() {}): Khi bạn sử dụng function() {}, this được xác định bởi cách gọi hàm
*/

const inforUser = {
    name: "Khương",
    age: 21,
    dob: "07/08/2003",
    getName: function(){
        return this.name;
    },
    getAge: function hehe() {
        return this.age;
    },

    cccd: {
        fullName: 'Hoàng Minh Khương',
        sdt: '0123456789',
        getFullName: () => {
            return this;                            // trả về đối tượng window vì nó là arrow function
        }
    }
}

console.log(inforUser.getName());
console.log(inforUser.getAge());
console.log(inforUser.cccd.getFullName());   // => window

/*
    ● Arrow function không tồn tại đối tượng this.
    ● Khi sử dụng this sẽ lấy đối tượng window.
*/

//---------- Modules ------------
/*
● Khai báo module
● Dùng từ khóa export.
    ● Cú pháp:
        export function tenHam(){
            //code
        }

● Sử dụng module
● Dùng từ khóa import.
● Cú pháp:
    import { tenHam } from "duong_dan_file.js";

*/
// có thể dùng as để đổi tên modules
import { sum, MUL as tich} from "./calc.js";

console.log(sum(1, 2, 3));
console.log(tich(1, 2, 3, 4));

// Default export module
import sayHello from "./calc.js";

sayHello();


// ------------------ JSON ----------------

/*
    ● JSON viết tắt của JavaScript Object Notation.
    ● Là một định dạng dữ liệu được lưu dưới dạng chuỗi.

    ● Chỉ cho phép các kiểu dữ liệu cơ bản: number, string, boolean, array, object, null.
    ● Không cho phép: function, date, undefined.

    ● Trường hợp giá trị của JSON là dạng Object thì:
        ● Có các cặp key/value.
        ● key: đặt trong dấu nháy kép.
        ● Không có dấu phẩy ở cặp key/value cuối cùng.
*/

// Ví dụ 1: JSON có giá trị là Object

let objectJSON = `
    {
        "fullName": "Hoàng Minh Khương",
        "age": 21,
        "phone": "0123454789"
    }
`;

// note: các property phải đặt trong ""

const objectJS = JSON.parse(objectJSON);    // dùng JSON.parse() để chuyển chuỗi json sang dạng object của js
console.log(objectJS);

objectJSON = JSON.stringify(objectJS);      // dùng JSON.stringify() để chuyền object js sang chuỗi json
console.log(objectJSON);

// Ví dụ 2: JSON có giá trị là number
let numberJSON = `10`;

let numberJS = JSON.parse(numberJSON);
console.log(numberJS);

console.log(JSON.stringify(numberJS));         // chuyển về dạng chuỗi 

// Ví dụ 3: JSON có giá trị là string

let stringJSON = `"khương"`;

let stringJS = JSON.parse(stringJSON);

console.log(stringJS);

console.log(JSON.stringify(stringJS));


// Ví dụ 4: JSON có giá trị là boolean

let booleanJSON = `true`;

let booleanJS = JSON.parse(booleanJSON);

console.log(booleanJS);
console.log(JSON.stringify(booleanJS));


// Ví dụ 5: JSON có giá trị là array

let arrayJSON = `[
    {
        "fullName": "Hoàng Minh Khương",
        "age": 21,
        "phone": "0123454789"
    },
    {
        "fullName": "Hoàng Minh Trường",
        "age": 13,
        "phone": "0123454789"
    }
]`;

let arrayJS = JSON.parse(arrayJSON);

console.log(arrayJS);
console.log(JSON.stringify(arrayJS));


// Ví dụ 6: JSON có giá trị là null

let nullJSON = `null`;

let nullJS = JSON.parse(nullJSON);
console.log(nullJS);
console.log(JSON.stringify(nullJS));