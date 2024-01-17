// 1.
const findMax = (num1, num2) => {
    return num1 > num2 ? num1 : num2;
}

console.log('Max number :', findMax(10, 5));
console.log('Max number :',findMax(10, 15));
console.log('Max number :',findMax(100, 100));

// 2.
const isFizzBuzz = (arg) => {
    if(typeof arg !== 'number' ) return 'Vui lòng nhập số!';
    if(arg % 3 == 0 && arg % 5 == 0) return 'FizzBuzz';
    if(arg % 3 == 0) return 'Fizz';
    if(arg % 5 == 0) return 'Buzz';
    return arg;
}

console.log(isFizzBuzz('one'));
console.log(isFizzBuzz(true));
console.log(isFizzBuzz(9));
console.log(isFizzBuzz(10));
console.log(isFizzBuzz(30));
console.log(isFizzBuzz(11));

// 3.
const LIMITSPEED = 70;
const KMPERPOINT = 5;
const MONEY = 30000;

const safeSpeed = (speed) => {
    if(speed <= 70) return 'Vận tốc an toàn';
    else{
        const penaltyPoint = Math.floor((speed - LIMITSPEED)/KMPERPOINT);
        if(penaltyPoint < 10) return 'Bạn đã bị phạt: ' + penaltyPoint * MONEY;
        else return 'Bạn đã bị tước giấy phép lái xe'; 
    }
}

console.log(safeSpeed(40));
console.log(safeSpeed(70));
console.log(safeSpeed(75));
console.log(safeSpeed(99));
console.log(safeSpeed(120));

// 4.
/**
 * 
 * @param {object} obj
 * @returns {void} 
 */
const showKeyVal = (obj) => {
    for(let key in obj){
        if(typeof obj[key] === 'string'){
            console.log(key ,':', obj[key]);
        }
    }
}

const person = {
    name: "Le Van A",
    age: 40,
    height: 175,
    country: "Viet Nam",
    designation: "UI Developer",
};

const technology = {
    name: "JavaScipt",
    version: 6,
    purpose: "Scripting language for Web",
    developer: "Netscape Corporation",
};
  
showKeyVal(person);
showKeyVal(technology);

// 5.

const isPrime = (num) => {
    for(let factor = 2; factor <= Math.sqrt(num); ++factor){
        if(num % factor === 0) return false;
    }
    return num > 1;
}

const showNumIsPrime = (numLimit) => {
    for(let num = 2; num <= numLimit; ++num){
        if(isPrime(num)){
            console.log('Số nguyên tố:', num);
        }
    }
}

showNumIsPrime(20);

// 6.
/**
 * 
 * @param {string} str 
 * @returns {string}
 */
const convertTime = (str) => {
    let ampm = str.slice(-2);
    let hours = str.slice(0, 2);
    let minutes = str.slice(3, 5);
    let seconds = str.slice(6, 8);
    if(hours == '12'){
        hours = '00';
    }
    if(ampm == 'PM'){
        hours = +hours + 12;
    }
    return [hours, minutes, seconds].join(':')
}

console.log(convertTime('07:05:45PM'));
console.log(convertTime('12:40:22AM'));
console.log(convertTime('12:45:54PM'));

// 7.
/**
 * 
 * @param {number} year 
 * @returns {boolean}
 */
const isLeapYear = (year) => {
    return year % 100 == 0 ? year % 400 == 0 : year % 4 == 0;
}

console.log(isLeapYear(2016));
console.log(isLeapYear(2000));
console.log(isLeapYear(1700));
console.log(isLeapYear(1800));
console.log(isLeapYear(100));


// 8.
/**
 * 
 * @param {string} fileName 
 * @returns {string}
 */
const extensionFilename = (fileName) => {
    return fileName.includes('.') ? fileName.split('.').pop() : 'đây không phải file';
}

console.log(extensionFilename('test.html'));
console.log(extensionFilename('abc.java'));
console.log(extensionFilename('test.js'));

//9.
// let price = 100;
// const discount = true;
// const discountAmount = 30;
// const country = "Việt Nam";


// if (discount === true) {
//   price -= discountAmount;
// } else if (country === "Thái Lan") {
//   price -= 40;
// } else if (country === "Hàn Quốc") {
//   price -= 50;
// } else {
//   price -= 10;
// }

// console.log(price);

//10.
let price = 100;
const discount = false;
const discountAmount = 30;
const country = "Việt Nam";
const student = true;


if (discount === true) {
  price -= discountAmount;
} else if (country === "Việt Nam") {
  if (student === true) {
    price -= discountAmount + 30;
  } else {
    price -= discountAmount + 10;
  }
} else {
  price -= 10;
}

console.log(price);

// 11.
const fullName = "Hoàng Minh Khương";
const gender = "Nam";
const age = 20;

const vocative = gender === "Nam" ? "Ông" : "Bà";

console.log(vocative);

console.log(`Xin chào ${gender === "Nam" ? "Ông" : "Bà"} ${fullName}`);

console.log(`Xin chào ${vocative} ${fullName}`);

const drinkAlcohol =
  age < 18
    ? "Bạn chưa được phép uống rượu."
    : age >= 18 && age <= 60
    ? "Bạn nên uống ít rượu."
    : age > 60
    ? "Bạn không nên uống rượu."
    : "Bạn ơi! Bạn còn đó chứ!";

console.log(drinkAlcohol);

// 12.
const myFriends = [1, 2, "Nam", "Hùng", 3, 4, "Hòa", 6, "Long"];

const arr = myFriends.filter((item) => {
    return typeof item === 'string';
});

console.log(arr);