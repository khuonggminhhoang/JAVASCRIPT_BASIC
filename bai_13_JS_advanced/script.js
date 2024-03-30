/*
// ------------ Callback function -------------

import kiemTraSoChan from "./helpers/kiemTraSoChan.js";
import kiemTraSoLe from "./helpers/kiemTraSoLe.js";
import TongHaiSo from "./helpers/tongHaiSo.js";

TongHaiSo(10, 20, kiemTraSoChan);
TongHaiSo(10, 20, kiemTraSoLe);
console.log(kiemTraSoChan(20));

const loginSuccessful = () => {
    console.log('Login successful!');
}

const dataUser = {
    email: 'khuongne@gmail.com',
    password: '2222'
}

const checkLogin = (data, callback) => {
    const emailTarget = 'khuong@gmail.com';
    const passwordTarget = '1111';

    const {password, email} = data;

    if(password === passwordTarget && email === emailTarget){
        callback();
    }
    else{
        console.log('Login Failed');
    }
}

checkLogin(dataUser, loginSuccessful)
*/

// ------------- Promise ----------------

/*
● Promise dùng để giải quyết vấn đề callback hell.
● Callback hell là có nhiều hàm lồng nhau gây ra khó chịu.
● Promise có cách viết đơn giản và dễ nhìn hơn so với callback.

● Cú pháp:

var promise = new Promise((resolve, reject) => {
    // resolve(): Nếu thành công chạy vào hàm này
    // reject(): Nếu thất bại chạy vào hàm này
});

promise
    .then((success) => {
        // Nếu thành công chạy vào đây
    })
    .catch((error) => {
        // Nếu thất bại chạy vào đây
    })
    .finally(() => {
        // Luôn luôn chạy vào đây
    })

    ● Trong đó:
        ● new Promise: khởi tạo promise.
        ● resolve: là một hàm callback xử lý cho hành động thành công.
        ● reject: là một hàm callback xử lý cho hành động thất bại.
        ● .then: Thành công chạy vào đây.
        ● .catch: Thất bại chạy vào đây.
        ● .finally: Luôn luôn chạy vào đây.
*/

const promise = new Promise((resolve, reject) => {
    let x;
    if (x === undefined) {
        reject('Lỗi nhé!');
    }
    else {
        resolve(2 * x);
    }
})

// promise
//     .then(() => {
//         console.log('Complete!', x);
//     })
//     .catch(() => {
//         console.log('Failed!');
//     })
//     .finally(() => {
//         console.log('Always visit here!');
//     });


promise
    .then((a) => {                  // a là đối số nào cũng được, nó đại diện cho parameter của resolve
        console.log(a);
        return a ** 2;
    })
    .then((x) => {                  // x là đối số nào cũng được, nó đại diện cho giá trị trả về của then trước nó
        console.log(x);
    })
    .catch((error) => {
        console.log(error);
    })

/*
    Promise có 3 trạng thái:
    ● Pending:
        ● Khi promise đang chạy thì sẽ ở trạng thái này.
        ● Kết quả là undefined.
    ● Fulfilled:
        ● Khi promise đã chạy xong thì sẽ ở trạng thái này.
        ● Kết quả là một giá trị.
    ● Rejected:
        ● Khi promise bị lỗi thì sẽ ở trạng thái này.
        ● Kết quả là một object lỗi.
*/

const promiseTest = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
        // reject('error'); 
    }, 3000);
})

setTimeout(() => {
    console.log('Sau 1s:',promiseTest);
}, 1000);

setTimeout(() => {
    console.log('Sau 2s:',promiseTest);
}, 2000);

setTimeout(() => {
    console.log('Sau 3s:',promiseTest);
}, 3000);

// --------------- Fetch API -------------

fetch('https://dummyjson.com/products')
    .then( response => response.json())
    .then( data => {
        const products = data.products;

        const productList = document.querySelector('.product-list');
        const nameProducts = products.map((item) => item.title);
        const thumbnailProducts = products.map((item) => item.thumbnail);

        const itemsDraw = nameProducts.map((name, index) => {
            return `
            <div class='product-item'>
                <img src=${thumbnailProducts[index]} width="200px"/>
                <h2>
                    ${name}
                </h2>
            </div>
            `
        }) 
        const html = itemsDraw.join('');
        productList.innerHTML = html;
    });