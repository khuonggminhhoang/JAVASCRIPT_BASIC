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


function Dog(name) {
    this.name = name;
}
  
function Bird(name){
    this.name = name;
}

Bird.prototype.age = 7;


let duck = new Bird('Gau');
console.log(duck.age);
let dog = new Dog('Mew');

console.log(duck.constructor == Bird)
console.log(duck instanceof Bird);

