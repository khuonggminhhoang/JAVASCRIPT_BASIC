import {tong, hieu, tich, thuong} from './math.js'

// bai 8

console.log(tong(2, 3));

console.log(hieu(5, 2));

console.log(tich(4, 8));

console.log(thuong(4, 8));

// bai 9

let dataJSON = `{
    "name": "Lê Văn A",
    "age": 20,
    "email": "levana@gmail.com",
    "address": {
      "street": "Số 123, đường ABC",
      "city": "Hà Nội",
      "country": "Việt Nam"
    }
}`;

let dataJS = JSON.parse(dataJSON);

console.log(dataJS.name);
console.log(dataJS.email);
console.log(dataJS.address.city);

// bài 10:
dataJSON = `
  [
    {
      "name": "Lê Văn A",
      "age": 30,
      "skills": ["JavaScript", "HTML", "CSS"]
    },
    {
      "name": "Nguyễn Thị B",
      "age": 25,
      "skills": ["Python", "Java", "C++"]
    },
    {
      "name": "Đỗ Văn C",
      "age": 35,
      "skills": ["Ruby", "PHP", "SQL"]
    }
  ]
`;


dataJS = JSON.parse(dataJSON);

const nameArray = dataJS.map(item => item.name);
console.log(nameArray);

// bài 11:
const ordersJSON = `
  [
    {
      "id": 1,
      "items": [
        {
          "productId": 1,
          "quantity": 2
        },
        {
          "productId": 2,
          "quantity": 1
        }
      ]
    },
    {
      "id": 2,
      "items": [
        {
          "productId": 3,
          "quantity": 3
        }
      ]
    }
  ]
`;


let productsJSON = `
  [
    {
      "id": 1,
      "name": "iPhone 12",
      "price": 1200
    },
    {
      "id": 2,
      "name": "Samsung Galaxy S21",
      "price": 1000
    },
    {
      "id": 3,
      "name": "Google Pixel 5",
      "price": 900
    }
  ]
`;

const ordersJS = JSON.parse(ordersJSON);
let productsJS = JSON.parse(productsJSON);

const caculateTotal = (idOrder) => {
    let foundOrder = false;
    let order;
    for(let x of ordersJS){
        if(idOrder == x.id){
            order = x;
            foundOrder = true;
            break;
        }
    }
    
    if(!foundOrder){
        return 'Không tìm thấy đơn hàng';
    }

    let sum = 0;
    for(let item of order.items){
        for(let prd of productsJS){
            if(item.productId == prd.id){
                sum += item.quantity * prd.price;
            }
        }
    }
    return sum;
}

console.log(caculateTotal(1));
console.log(caculateTotal(2));
console.log(caculateTotal(3));

// bài 12:

productsJSON = `
  [
    {
      "id": 1,
      "name": "iPhone 12",
      "price": 1200
    },
    {
      "id": 2,
      "name": "Samsung Galaxy S21",
      "price": 1000
    },
    {
      "id": 3,
      "name": "Google Pixel 5",
      "price": 900
    }
  ]
`;

productsJS = JSON.parse(productsJSON);
const deleteProduct = (idProduct) => {
    let foundProduct = false;
    for(let product of productsJS){
        if(product.id === idProduct){
            foundProduct = true;
            productsJS.splice(productsJS.indexOf(product), 1);    // splice xóa 1 phần tử từ vị trí index
        }
    }
}

deleteProduct(2);
console.log(productsJS);


// bài 13:
productsJSON = `
  [
    {
      "id": 1,
      "name": "iPhone 12",
      "quantity": 10
    },
    {
      "id": 2,
      "name": "Samsung Galaxy S21",
      "quantity": 5
    },
    {
      "id": 3,
      "name": "Google Pixel 5",
      "quantity": 8
    }
  ]
`;

productsJS = JSON.parse(productsJSON);

const caculateTotalQuantity = ()=> {
    return productsJS.reduce((total, product) => total + product.quantity, 0);
}

console.log(caculateTotalQuantity());