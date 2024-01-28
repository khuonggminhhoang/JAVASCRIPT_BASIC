// thay đổi icon trang web
document.querySelector('link[rel="icon"]').setAttribute('href', 'https://i.pinimg.com/originals/48/5c/81/485c811a692e5110e4b8bed7c42845ed.jpg');

// 1. ẩn thông báo 
// console.log(window.getComputedStyle(document.querySelector('#notification')).display);
/*
setTimeout(() => {
    document.querySelector('#notification').style.display = 'none';
    clearInterval(n)
}, 5000);

var cnt = 0;
var n = setInterval(() => console.log(cnt++), 1000, 0);
*/
//2. làm mờ dần thông báo rồi ẩn:

const fadeOut = () => {
    let opacity = 1;
    const notification = document.querySelector('#notification');
    const number = setInterval(() => {
        if(opacity <= 0){
            notification.style.display = 'none';
            clearInterval(number);
        }
        opacity -= 0.01;
        notification.style.opacity = opacity;
    }, 100);
};

// setTimeout(fadeOut, 5000);

// 3.Thay đổi nội dung một phần tử.
var element = document.getElementById('element');
element.innerHTML = 'Nội dung mới';

// 4.Thay đổi màu chữ.
let elements = document.getElementsByClassName('title');
elements = Array.from(elements);
elements.forEach((element) => element.style.color = 'blue');

// 5.
setTimeout(()=> {
    document.getElementsByTagName('body')[0].style.backgroundColor = '#FECF73';
}, 3000);

// 6.
const changeButton = () => {
    let button = document.getElementsByTagName('button')[0];
    setTimeout(() => {
        button.style.backgroundColor = '#5CB874';
        button.style.width = '300px';
        button.style.height = '100px';
    }, 5000);
}
changeButton();