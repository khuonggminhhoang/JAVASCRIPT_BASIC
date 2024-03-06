// import { lowerString, upperString } from "script.js" 

// // class Book {

// //     constructor(author){
// //         this._author = author;
// //     }



// //     toString(){
// //         return this._author;
// //     }
// // }

// // const book = new Book('John');
// // book._author = 'haha';
// // console.log(book.toString());

// function makeClass(){
//     "use strict";
//     class User {
//         constructor(name){
//             this.name = name;
//         }

//         toString(){
//             return `${this.name}`
//         }
//     }
//     return User;
// }

// const user = makeClass();
// const username = new user('Khương');
// console.log(username.toString());

// // kế thừa (inheritance)
// class Shape{
//     constructor(id, x, y){
//         this.id = id;
//         this.x = x;
//         this.y = y;
//     }

//     get axisX(){
//         return this.x;
//     }

//     set axisX(x){
//         this.x = x;
//     }

//     toString(){
//         return `id: ${this.id}\nx: ${this.x}\ny: ${this.y}`;
//     }
// }

// class Circle extends Shape {
//     constructor(id, x, y, radius){
//         super(id, x, y);
//         this.radius = radius;
//     }

//     toString(){
//         return super.toString() + `\nradius: ${this.radius}`;
//     }
// }

// const shape = new Shape('#111', 3, 5);
// console.log(shape.toString());
// const cir = new Circle('#222', 4, 4, '45deg');
// console.log(cir.toString());

// // dùng hàm set (.tên hàm = ...)
// cir.axisX = 10;
// // dùng hàm get (.tên hàm)
// console.log(cir.axisX);

// console.log(cir instanceof Shape);
// console.log(cir instanceof Circle);

// const upperString = (str) => {
//     return str.toUpperCase();
// }

// const lowerString = (str) => {
//     return str.toLowerCase();
// } 

// export {lowerString, upperString};


// function Dog(name) {
//     this.name = name;
// }
  
// function Bird(name){
//     this.name = name;
// }

// Bird.prototype.age = 7;


// let duck = new Bird('Gau');
// console.log(duck.age);
// let dog = new Dog('Mew');

// console.log(duck.constructor == Bird)
// console.log(duck instanceof Bird);

function MakeMultiFilter (originalArray) {
    let currentArray = [...originalArray];
    function arrayFilter(filterCriteria, callback1 = null){
        if(typeof filterCriteria === 'function') {
            currentArray = currentArray.filter(filterCriteria);
        }
        else return currentArray;
        if(typeof callback1 === 'function') {
            callback1.call(originalArray, currentArray);
        }
        else return arrayFilter;
    }
    return arrayFilter;
}

// function MakeMultiFilter(originalArray) {
//     let currentArray = originalArray.slice();
//     function arrayFilterer(filterCriteria, callback) {
//       if (typeof filterCriteria === 'function') {
//         currentArray = currentArray.filter(filterCriteria);
//       } else if (typeof filterCriteria !== 'undefined') {
//         return currentArray;
//       }
//       if (typeof callback === 'function') {
//         callback.call(originalArray, currentArray);
//       }
//       return arrayFilterer;
//     }
//     return arrayFilterer;
// }

// Invoking MakeMultiFilter() with originalArray = [1, 2, 3] returns a
// function, saved in the variable arrayFilterer1, that can be used to
// repeatedly filter the input array
var arrayFilterer1 = MakeMultiFilter([1, 2, 3]);
// Call arrayFilterer1 (with a callback function) to filter out all the numbers
// not equal to 2.
arrayFilterer1(function (elem) {
    return elem !== 2; // check if element is not equal to 2
}, function (currentArray) {

// 'this' within the callback function should refer to originalArray whichis [1, 2, 3]
    console.log(this); // prints [1, 2, 3]
    console.log(currentArray); // prints [1, 3]
});


let soccerWord = "gooooooooal!";
let gPhrase = "guot feeling";
let oPhrase = "over the moon";
let goRegex = /go*/gi;
console.log(soccerWord.match(goRegex));
console.log(gPhrase.match(goRegex));
console.log(oPhrase.match(goRegex));

// Only change code below this line
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh aaaa AAaa!";
let chewieRegex = /Aa*/g; // Change this line
// Only change code above this line

let result = chewieQuote.match(chewieRegex);
console.log(result);