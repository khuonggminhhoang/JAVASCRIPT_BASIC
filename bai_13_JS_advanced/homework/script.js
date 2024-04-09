// BT1
const forEachTest = (array, callback) => {
    for (let i = 0; i < array.length; ++i) {
        callback(array[i]);
    }
}

const consoleLog = (x) => {
    console.log(x);
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = ["Lê Văn A", "Nguyễn Thị B", "Đỗ Thị C"];

forEachTest(arr1, consoleLog);
forEachTest(arr2, consoleLog);


// BT2
const forEachPair = (array, callback) => {
    for (let i = 0; i < array.length - 1; ++i) {
        callback(array[i] + array[i + 1]);
    }
}

const arr3 = [1, 2, 3, 4, 5];
const arr4 = [5, 20, 30, 60, 90];

forEachPair(arr3, consoleLog);
forEachPair(arr4, consoleLog);

// BT3
const promise = new Promise((resolve, reject) => {
    let number = Math.floor(Math.random() * 10) + 1;
    // number = undefined;
    if (number == undefined) {
        reject('Không thể tạo số ngẫu nhiên');
    }
    else {
        resolve(number)
    }
});

promise
    .then((number) => {
        console.log('Số ngẫu nhiên tạo ra:', number);
    })
    .catch((e) => console.error(e, 'hehe'));


// BT4
function getEvenNumber(numbers) {
    const evenNumbers = numbers.filter((x) => x % 2 == 0);

    return new Promise((resolve, reject) => {
        if (evenNumbers.length != 0) {
            resolve(evenNumbers);
        }
        else {
            reject('Không tìm thấy số chẵn');
        }
    })
}

const arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr6 = [11, 13, 15, 17, 19];

getEvenNumber(arr5)
    .then((evenNumbers) => {
        evenNumbers.forEach((item) => console.log(item));
    })
    .catch(e => console.error(e));

getEvenNumber(arr6)
    .then((evenNumbers) => {
        evenNumbers.forEach((item) => console.log(item));
    })
    .catch(e => console.error(e));

// BT5
const divCountries = document.querySelector('.countries');

fetch('https://restcountries.com/v2/all')
    .then(response => response.json())
    .then(data => {

        let htmls = data.map((item) => {
            return `
                <div class='country'>
                    <div class='inner-item'>
                        <img class='inner-image' src=${item.flags.png} alt='${item.nativeName} image'>
                        <p class='inner-title'>${item.capital} - ${item.nativeName}</p>   
                    </div> 
                </div>
            `;
        });
        divCountries.innerHTML = htmls.join('');

    })
    .catch(e => console.log(e));

// BT6

const divIPAddress = document.querySelector('.ipAddress');

const API = 'https://api.ipify.org?format=json';

fetch(API)
    .then(response => response.json())
    .then((data) => {
        divIPAddress.innerHTML = 'IP user: ' + data.ip;
    })
    .catch(e => console.log(e));

