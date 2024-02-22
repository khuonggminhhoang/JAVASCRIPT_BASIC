// -------------- DOM Events ---------------
/*
    ● Dom Event (sự kiện) là một tác động nào đó lên thẻ HTML.
    ● Để bắt được sự kiện và thực thi một chương trình.
    ● Cú pháp:
        element.eventname = function () {
            // Code
        }
    ● Trong đó:
        ● element: là phần tử muốn bắt sự kiện.
        ● eventname: Tên sự kiện.
*/

// onload : Khi trình duyệt đã load xong mọi thứ (image, js, css) thì những đoạn code nằm bên trong đó mới được chạy.
window.onload = () => {
    console.log();
    let tagAs = document.querySelectorAll('#menu li a');
    console.log(tagAs);
}

var element = document.querySelector('#menu li a');
window.onload = () => {
    console.log(element);
    element.style.color = 'gray';
}

// onblur : Kích hoạt khi một phần tử mất trọng tâm (không được focus vào nữa).

var elementInput = document.querySelector('#input');
elementInput.onblur = (event) => {
    console.log(event);
    elementInput.value = elementInput.value.toUpperCase();     
    elementInput.style.backgroundColor = '#fff';               // dùng .value sẽ trả về giá trị của value thực tế khi người dùng nhập, khác với .getAttribute('value') trả về giá trị mặc định của giá trị attr value ban đầu
}

// var elementInput = document.querySelector('#input');
// elementInput.onblur = () => {
//     console.log(elementInput.getAttribute('value') + '2');         
// }

// onfocus : Kích hoạt khi một phần tử hiển thị đúng trọng tâm (được focus vào).

elementInput.onfocus = (event) => {
    console.log(event);
    elementInput.style.backgroundColor = 'greenyellow';
}

// onkeydown : kích hoạt khi một phím được ấn
var text = 'txt';
elementInput.onkeydown = (event) => {
    // alert(event.key);
    text += event.key;
    console.log(event.key);
}
console.log(text);      // không in như này được vì hàm này ko đợi sự kiện onkeydown xong, nó sẽ in luôn

// onkeyup : kích hoạt khi một phím ấn được nhả ra
elementInput.onkeyup = (event) => {
    // alert(event.key);
    console.log(event.key);
}

// const user = {
//     johnDoe: { 
//       age: 34,
//       email: 'johnDoe@freeCodeCamp.com'
//     }
// };

console.log(user);
// const { johnDoe } = user
// console.log(johnDoe); 

// const {johnDoe : pp} = user
// console.log(pp);


// const {johnDoe : {email, age}} = user
// console.log(email, age);