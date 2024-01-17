
// 1.
var x = 5;
var y = 3;


// addition
console.log("x + y = ", x + y);   // 8


// subtraction
console.log("x - y = ", x - y);     // 2


// multiplication
console.log("x * y = ", x * y);     // 15


// division
console.log("x / y = ", x / y);     // 1.666666667


// remainder
console.log("x % y = ", x % y);     // 2


// increment
console.log("++x = ", ++x);         // in ra 6, x = 6
console.log("x++ = ", x++);         // in ra 6, x = 7
console.log("x = ", x);             // in ra 7


// decrement
console.log("--x = ", --x);         // in ra 6, x = 6
console.log("x-- = ", x--);         // in ra 6, x = 5
console.log("x = ", x);             // in ra 5


//exponentiation
console.log("x ** y =", x ** y);    // in ra 125



// 2.
// equal operator
console.log(2 == 2);        // true
console.log(2 == '2');      // true


// not equal operator
console.log(3 != 2);                // true
console.log('hello' != 'Hello');    // true


// strict equal operator    
console.log(2 === 2);           // true
console.log(2 === '2');         // false


// strict not equal operator
console.log(2 !== '2');         // true
console.log(2 !== 2);           // false



// 3.
// logical AND
console.log(true && true);          // true
console.log(true && false);         // false


// logical OR
console.log(true || false);         // true


// logical NOT
console.log(!true);                 // false

// 4.
console.log("hello" + "world"); // in ra hello world

var a = "JavaScript";   

a += " tutorial";   
console.log(a);                 // in ra JavaScript tutorial

// 5.
var value1 = "one";
var value2 = "two";

var tmp = value1;
value1 = value2;
value2 = tmp;

console.log(value1, value2);

// 6.
var squareAreaDiff = (r) => {
    return 2 * r ** 2;
}

console.log(squareAreaDiff(5)); // 50
console.log(squareAreaDiff(6)); // 72
console.log(squareAreaDiff(7)); // 98

// 7.
// * @param {String} s 
//* @returns {boolean}

var palindromeString = (s) => {
    const rvsString = s.split('').reverse().join('');
    return s === rvsString;
}

console.log(palindromeString('cicic'));
console.log(palindromeString('solos'));
console.log(palindromeString('test'));
console.log(palindromeString('hello'));
console.log(palindromeString('rotavator'));

// 8.
console.log(typeof "Le Van A"); // string
console.log(typeof 5000);       // number
console.log(typeof 5000.99);    // number
console.log(typeof [10, 15, 17]);   // object
console.log(typeof { name: "Le Van A", age: 18, country: "Viet Nam" });     // object
console.log(typeof true);   // boolean
console.log(typeof false);  // boolean
console.log(typeof undefined);  // undefined
console.log(typeof null);   // object


// 9.
var img = "https://cdn.daca.vn/media/blog/lap-trinh/js%20tips%20-%20m%E1%BB%99t%20s%E1%BB%91%20c%C3%A1ch%20vi%E1%BA%BFt%20js%20ng%E1%BA%AFn%20g%E1%BB%8Dn%20h%C6%A1n.png";
var title = "JS TIPS - Một số cách viết JS ngắn gọn hơn";
var desc = "Hôm nay Daca.vn gửi tới các bạn một số những tips để giúp bạn code JS một cách hiệu quả...";
var url = "https://daca.vn/js-tips-mot-so-cach-viet-js-ngan-gon-hon";


var string = `
  <div class="article">
    <a href="${url}">
    <div class="inner-image">
      <img src="${img}" />
    </div>
    <div class="inner-content">
      <h2 class="inner-title">${title}</h2>
      <p class="inner-desc">${desc}</p>
    </div>
    </a>
  </div>
`;
console.log(string);



// 10.
var a = "100";
var b = 20;
var c = true;

console.log(+a + b + c);  // 100 + 20 + 1 = 121


// 11.
var a = 10;

a = a + 20;
console.log(a); // 30

a = a + 70;
console.log(a); // 100

a += 100;
console.log(a); // 200

a -= 50;
console.log(a); // 150

a /= 50;
console.log(a); // 3



// 12.
var a = 10;
var b = "20";
var c = 80;

var test1 = ++a + +b++ + +c++ - +a++;  // 11 + 20 + 80 - 11
console.log(test1);                    //a = 12, b = 21, c = 81
console.log(a, b, c);                  // 100 
console.log("------------");


var test2 = ++a + -b + +c++ - -a++ + +a;    //  13 + -21 + 81 + 13 + 14
console.log(test2);                         // a = 14 , b = 21 ,c = 82
console.log(a, b, c);
console.log("------------");


var test3 = --c + +b + --a * +b++ - +b * a + --a - +true;       // 81 + 21 + 13 * 21 - 22 * 13 + 12 - 1
console.log(test3);                                             // a = 12 , b = 22 , c = 81
console.log(a, b, c);
console.log("------------");


// 13.
console.log(Math.round(99.2));  // 99

console.log(Math.round(99.5)); // 100

console.log(Math.ceil(99.2));   // 100

console.log(Math.floor(99.9));  // 99

console.log(Math.min(10, 20, 100, -100, 90));   // -100

console.log(Math.max(10, 20, 100, -100, 90));   // 100

console.log(Math.pow(2, 4));    // 16

console.log(Math.random());     // ngẫu nhiên từ 0 đến 1

console.log(Math.trunc(99.5));  // 99


// 14.
var theName = "  28Tech  ";

console.log(theName);   // in ra '  28Tech  '
console.log(theName[1]);    // in ra dấu ' '
console.log(theName[5]);    // in ra 'e'


console.log(theName.charAt(1));     // in ra ' '
console.log(theName.charAt(5));     // in ra 'e'


console.log(theName.length);        //  10


console.log(theName.trim());        // in ra '28Tech'


console.log(theName.toUpperCase());     // in ra '  28TECH  '
console.log(theName.toLowerCase());     // in ra '  28tech  '


console.log(theName.trim().charAt(5).toUpperCase());  // in ra 'H'


// 15.
var a = "Daca.vn - Professional Web Design Services.";

console.log(a.indexOf("Web"));  // 23
console.log(a.indexOf("Web", 24));  // -1
console.log(a.indexOf("vn"));   // 5

console.log(a.lastIndexOf("Design"));   // 27

console.log(a.slice(10, 22));   // Professional
console.log(a.slice(-16, -10)); // Design 

console.log(a.split("", 7));    // [D, a, c, a, ., v, n]



// 16.
console.log(10 == "10");    // true
console.log(-100 == "-100");    // true
console.log(10 != "10");    // false


console.log(10 === "10");   // false
console.log(10 !== "10");   // true
console.log(10 !== 10);     // false


console.log(10 > 20);       // false
console.log(10 > 10);       // false
console.log(10 >= 10);      // true


console.log(10 < 20);       // true
console.log(10 < 10);       // false
console.log(10 <= 10);      // true


console.log(typeof "Daca.vn" === typeof "Nam Dang");  // true



// 17.
console.log(true);  // true

console.log(!true); // false

console.log(!(10 == "10")); // false

console.log((10 == "10") && (10 > 8) && (10 > 50)); //false

console.log((10 == "10") || (10 > 80) || (10 > 50));    // true



// 18.
// const myFriends = ["Le Van A", "Nguyen Thi B", "Do Van C", "Dao Thi D"];

// myFriends.unshift("Vu Van E", "Nguyen Van F");
// console.log(myFriends);

// const myFriends = ["Le Van A", "Nguyen Thi B", "Do Van C", "Dao Thi D"];

// myFriends.push("Vu Van E", "Nguyen Van F");
// console.log(myFriends);

// const myFriends = ["Le Van A", "Nguyen Thi B", "Do Van C", "Dao Thi D"];

// myFriends.shift();
// console.log(myFriends);

const myFriends = ["Le Van A", "Nguyen Thi B", "Do Van C", "Dao Thi D"];

myFriends.pop();
console.log(myFriends);




