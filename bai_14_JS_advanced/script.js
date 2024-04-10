// ---------- localStorage ----------
/*
    ● localStorage là kho lưu trữ ở phía người dùng.
    ● Lưu trữ dữ liệu vô thời hạn, dữ liệu sẽ được lưu trữ cho tới khi người dùng xóa lịch sử duyệt web.
    ● localStorage có 5 phương thức:
        ● setItem() : Thêm dữ liệu vào localStorage.
        ● getItem() : Lấy dữ liệu từ localStorage.
        ● removeItem() : Xóa dữ liệu ra khỏi localStorage.
        ● clear() : Xóa toàn bộ dữ liệu ra khỏi localStorage.
        ● key() : Lấy tên key của dữ liệu đang lưu trữ trong localStorage.

 */

// localStorage.setItem('fullName', 'Hoàng Minh Khương');
// console.log(localStorage.getItem('fullName'));

// let body = document.getElementsByTagName('body')[0];

// document.querySelector('#fullName').innerHTML = localStorage.getItem('fullName');

// Add Dark Mode

// let body = document.getElementsByTagName('body')[0];
// let currMode = localStorage.getItem('mode');
// if(currMode == 'dark'){
//     body.setAttribute('class','dark');
// }


// let buttonMode = document.querySelector('.change-mode');
// buttonMode.addEventListener('click', () => {
//     body.classList.toggle('dark');

//     if(body.className == 'dark'){
//         document.querySelector('.change-mode').innerHTML = 'Light Mode';
//         localStorage.setItem('mode', 'dark');
//     }
//     else{
//         document.querySelector('.change-mode').innerHTML = 'Dark Mode';
//         localStorage.removeItem('mode');
//     }
// });



// console.log(typeof(localStorage));   // là một object

// localStorage.removeItem('a');   // xóa một key-val
// localStorage.clear();           // xóa toàn bộ key-val

// localStorage.setItem('a', 123);
// localStorage.setItem('b', 456);
// localStorage.setItem('c', 789);

// localStorage.setItem('mode', 'dark');

console.log(localStorage.key(0));   // lấy ra key của localStorage

// ------------ sessionStorage ------------
/*
● sessionStorage là kho lưu trữ theo phiên.
● Lưu trữ dữ liệu cho một phiên làm việc, có nghĩa dữ liệu sẽ bị mất khi bạn tắt browser.
● sessionStorage có 5 phương thức:
    ● setItem() : Thêm dữ liệu vào sessionStorage.
    ● getItem() : Lấy dữ liệu từ sessionStorage.
    ● removeItem() : Xóa dữ liệu ra khỏi sessionStorage.
    ● clear() : Xóa toàn bộ dữ liệu ra khỏi sessionStorage.
    ● key() : Lấy tên key của dữ liệu đang lưu trữ trong sessionStorage.

*/

let body = document.getElementsByTagName('body')[0];

document.querySelector('#fullName').innerHTML = sessionStorage.getItem('fullName');


let currMode = sessionStorage.getItem('mode');
if (currMode == 'dark') {
    body.setAttribute('class', 'dark');
}


let buttonMode = document.querySelector('.change-mode');
buttonMode.addEventListener('click', () => {
    body.classList.toggle('dark');

    if (body.className == 'dark') {
        document.querySelector('.change-mode').innerHTML = 'Light Mode';
        sessionStorage.setItem('mode', 'dark');
    }
    else {
        document.querySelector('.change-mode').innerHTML = 'Dark Mode';
        sessionStorage.removeItem('mode');
    }
});


const resetMode = document.querySelector('.reset-mode');
resetMode.addEventListener('click', () => {
    sessionStorage.removeItem('mode');
    body.classList.remove('dark');
});

const clearAll = document.querySelector('.clear-all');
clearAll.addEventListener('click', () => {
    sessionStorage.clear();
    location.reload();
});

/*
    ● Closure là một hàm ở bên trong hàm khác.
    ● Nó có thể sử dụng các biến toàn cục, biến cục bộ của hàm cha và biến cục bộ của chính nó.
    ● Nếu có các biến trùng tên thì closure sẽ ưu tiên theo thứ tự: biến cục bộ của chính nó, biến cục bộ
    của hàm cha, biến toàn cục.
    ● Nếu muốn return nhiều hàm closure thì bạn phải sử dụng một object, trong đó mỗi phần tử sẽ là
    một hàm closure.
    ● Closure thay đổi được giá trị biến toàn cục lẫn cục bộ.
*/
// const c = 30;
const tinhToan = (a, b) => {
    const tinhTong = () => {
        // return a + b + c;
        return a + b;
    }

    const tinhHieu = () => {
        return a - b;
    }

    const tinhTich = () => {
        return a * b;
    }

    const tinhThuong = () => {
        return a / b;
    }

    return {
        tong: tinhTong,
        hieu: tinhHieu,
        tich: tinhTich,
        thuong: tinhThuong
    };
}

const tinh = tinhToan(10, 20);
console.log(tinh.tong());
console.log(tinh.hieu());
console.log(tinh.tich());
console.log(tinh.thuong());

// ---- Default parameter ----
const tinhTong = (a = 0, b) => {
    b = b || 10;                // có thể gán trong hàm như này hoặc trên tham số truyền vào như biến a
    return a + b;
}

console.log(tinhTong(9));

// Spread Syntax
// áp dụng cho mảng và object

const fullNameDB = [
    'nguyen van a', 
    'tran thi c'
];

const fullNameFE = [
    'nguyen van d', 
    'tran thi c',
    'tran thi e'
];

const newFullNameUser = [...fullNameFE, ...fullNameDB];

console.log(newFullNameUser);

// ----

const infoUserDB = {
    fullName: 'Hoàng Minh Khương',
    age: 21
};

const infoUserFE = {
    email: 'khuonghm@gmail.com',
    phone: '0123456897'
};

const newInfoUser = {  
    ...infoUserFE,
    ...infoUserDB,
    fullName: 'HoangMinhKhuong'
};

console.log(newInfoUser);

// ----- Rest Parameter -----
// áp dụng cho hàm

function sum(a, b, ...otherNumbers) {
    console.log('num1:', a);
    console.log('num2:', b);
    console.log(otherNumbers);
    return a + b;
}

console.log(sum(10, 20, 30, 40, 50));

// ----- Destructuring -----
// chỉ áp dụng với array và object
const arr = [1, 2, 3, 4, 5];

const [a, b] = arr;

console.log(a);
console.log(b);

const info = {
    fullName: 'Hoàng Minh Khương',
    age: 21
}

const {fullName, age} = info;

console.log(fullName);
console.log(age);