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
        reject('Lỗi nhé!');     // parameter ở đây sẽ truyền xuống cho đối số của catch
    }
    else {      
        resolve(2 * x);         // parameter ở đây sẽ truyền xuống cho then đầu tiên
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

// const promiseTest = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10);
//         // reject('error'); 
//     }, 3000);
// })

// setTimeout(() => {
//     console.log('Sau 1s:',promiseTest);
// }, 1000);

// setTimeout(() => {
//     console.log('Sau 2s:',promiseTest);
// }, 2000);

// setTimeout(() => {
//     console.log('Sau 3s:',promiseTest);
// }, 3000);

// --------------- Fetch API -------------

/*
● Phương thức Fetch dùng để gọi lên trên server thông qua một API để lấy dữ liệu từ trên server trả về.
● Api là một url để cho phép bên Front-end có thể giao tiếp được với bên Back-end.
● Cú pháp:


fetch('http://example.com/movies.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });

● Trong đó:
● fetch() dùng để gửi yêu cầu lên server thông qua api.
● then() được thực thi khi có phản hồi từ server trả về.
● catch() được thực thi khi không có phản hồi từ máy chủ.

*/

// fetch('https://dummyjson.com/products')
//     .then( response => response.json())
//     .then( data => {
//         const products = data.products;

//         const productList = document.querySelector('.product-list');
//         const nameProducts = products.map((item) => item.title);
//         const thumbnailProducts = products.map((item) => item.thumbnail);

//         const itemsDraw = nameProducts.map((name, index) => {
//             return `
//             <div class='product-item'>
//                 <img src=${thumbnailProducts[index]} width="200px"/>
//                 <h2>
//                     ${name}
//                 </h2>
//             </div>
//             `
//         }) 
//         const html = itemsDraw.join('');
//         productList.innerHTML = html;
//     });

// ------- Async Await ---------

/*
● Async/Await là một tính năng của JavaScript giúp chúng ta làm việc với các hàm bất đồng bộ theo
cách dễ hiểu hơn.
● Nó được xây dựng trên Promise.
● Async: Khai báo một hàm bất đồng bộ.
    ● Tự động biến đổi một hàm thông thường thành một Promise.
    ● Từ khóa Async được đặt trước 1 hàm.
● Await: Tạm dừng việc thực hiện các hàm async.
    ● Khi được đặt trước một Promise, nó sẽ đợi cho đến khi Promise kết thúc và trả về kết quả.
    ● Await chỉ có thể được sử dụng bên trong các hàm async.
*/
const api1 = 'https://dummyjson.com/products';
const api = 'http://localhost:3000/product';
const fetchAPI = async (api) => {            // hoặc async function fetchAPI(api){}
    const response = await fetch(api);        // vì fetch() là hàm promise nên dùng await để chờ 
    const data = await response.json()        // vì json() là hàm promise nên dùng await để chờ 
    return data;
}

fetchAPI(api1)
    .then(data => console.log(data.products));

fetchAPI('http://localhost:3000/product')
    .then(data => console.log(data));

// ----- JSON server --------
/*
● Khái niệm: Json server là một server để fake API và trả chuỗi JSON.
● Yêu cầu: Cài đặt nodejs vào máy tính, gõ npm -v để xem phiên bản.
● Hướng dẫn cấu hình:
    ● Bước 1: Gõ lệnh npm init để khởi tạo file package.json.
    ● Bước 2: Gõ lệnh npm i json-server để cài.
    ● Bước 3: Tạo 1 file database.json.
    ● Bước 4: Thêm vào mục script trong package.json dòng lệnh: "start": "json-server --watch
    database.json".
    ● Bước 5: Gõ lệnh npm start để chạy.

*/

// -------- Postman --------
/*
    Dùng để test API (GET, POST, PUT, PATCH, DELETE)
    GET: Để lấy một hoặc nhiều bản ghi
    POST: Để tạo mới một bản ghi (Trường hợp data gửi lên dạng json thì headers phải thêm Content-Type là application/json).
    PUT: Để cập nhật một bản ghi (Gửi lên đầy đủ các cặp key value kể cả ko cần cập nhật).
    PATCH: Để cập nhật một bản ghi (Chỉ cần gửi lên các cặp key-value cần cập nhật).
    DELETE: Để xóa một bản ghi.
*/


fetchAPI('http://localhost:3000/product/')
    .then(data => {
        const products = [].concat(data);

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