'use strict';
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

// onclick : kích hoạt khi một element được click vào 

const adsClose = document.querySelector('#close-ads');
const ads = document.querySelector('#ads');
ads.onclick = (event) => {
    ads.setAttribute('class', 'd-none');
}

setTimeout(() => {
    ads.setAttribute('class', 'd-none');
}, 3000);

// onchange: kích hoạt khi giá trị được thay đổi so với giá trị trước đó
const selectColor = document.querySelector('#color');
selectColor.onchange = (event) => {
    console.log(event.target.value);
}

// ------------------ DOM Events Listener -----------------
/*
DOM Events Listener giống Dom Event, nhưng khác ở chỗ:
    ● Một element có thể gọi được nhiều sự kiện.
    ● Có thể hủy bỏ lắng nghe sự kiện bất kỳ (Dom Events chỉ lắng nghe được nhưng không hủy
    bỏ lắng nghe được).

● Cú pháp:
    element.addEventListener("eventname", function (e) {
        // Code
    });

● Trong đó:
    ● element: là phần tử muốn bắt sự kiện.
    ● eventname: Tên sự kiện (bỏ chữ on, Ví dụ: onclick → click).
*/

const func1 = () => {
    console.log('Thực hiện công việc 1');
}

const func2 = () => {
    console.log('Thực hiện công việc 2');
}

const button = document.querySelector('#button');

// nếu dùng DOM Events onclick thì sẽ chỉ gọi được một sự kiện thôi
// button.onclick = (event) => {
//     func1();
// }

// button.onclick = (event) => {
//     func2();
// }
//nó sẽ thực hiện func2 

button.addEventListener('click', func1)

button.addEventListener('click', func2);

// xóa sự kiện:
setTimeout(() => {
    button.removeEventListener('click', func1);
}, 3000);


//------------------- DOM Navigation ------------------
/*
Thể hiện mối quan hệ cha – con của các thẻ HTML.
● Các thuộc tính:
    ● parentNode: Truy cập phần tử cha.
    ● childNodes: Truy cập vào các phần tử con.
    ● firstElementChild: Truy cập vào phần tử con đầu tiên.
    ● lastElementChild: Truy cập vào phần tử con cuối cùng.
    ● nextElementSibling: Truy cập vào phần tử kế tiếp.
    ● previousElementSibling: Truy cập vào phần tử trước đó.
    ● nodeName: Lấy ra tên node.
*/

const child = document.querySelector('.child');
console.log(child.parentNode);

let arrChild = child.childNodes;
console.log(arrChild);                  //NodeList(7) [text, div.box, text, div.box, text, div.box, text]
// in ra ra text vì sau mỗi div ta xuống dòng để gõ div tiếp theo thì \n cũng là 1 node text
arrChild = child.querySelectorAll('.box');    // thường dùng cách này nha
console.log(arrChild);

// const firstEle = child.firstElementChild;
// console.log(firstEle);

// const lastEle = child.lastElementChild;
// console.log(lastEle);

console.log(child.querySelector('.box:nth-child(2)'));   //thường dùng cách này

const nextEle = child.nextElementSibling;
console.log(nextEle.textContent);                     

const preEle = child.previousElementSibling;
console.log(preEle);                                     // null vì trước phần tử child không có phần tử nào cùng cấp

console.log(child.nodeName);                          // lấy ra tên node (tên thẻ)


// ----------------DOM Nodes-----------------
/*
    ● Tạo ra một phần tử HTML.
    ● Cú pháp:
        var tenBien = document.createElement("tagName");

    ● Trong đó:
    ● tagName: là tên thẻ (Ví dụ: p, h1, div,...).
*/

const div = document.createElement('div');
div.innerHTML = '<strong>hehe</strong>';
const body = document.querySelector('body');
body.appendChild(div);
console.log(div);

const script = document.createElement('script');
script.src = 'change.js';
body.appendChild(script);

/*
● Tạo ra một chuỗi văn bản.
● Cú pháp:
    var tenBien = document.createTextNode("Nội dung...");
*/

// let text = document.createTextNode('Hoàng Minh Khương đang chill chill');
const text1 = document.createTextNode('Hoàng Minh Khương đang chill chill');
const p = document.createElement('p');
p.appendChild(text1);
console.log(p);


/*
    ● Dùng để thêm vào vị trí cuối cùng của một thẻ HTML khác.
    ● Cú pháp:
        element_parent.appendChild(node_insert);

    ● Trong đó:
    ● element_parent: là phần tử cha.
    ● node_insert: là node bạn muốn thêm vào.
*/

const addButton = document.querySelector('#add');
var func = () => {
    const li = document.createElement('li');
    li.innerHTML = 'New Item';
    document.querySelector('#menu1').appendChild(li);
};
addButton.addEventListener('click', func);

/*
    ● Dùng để thêm một Node vào đằng trước một node con nào đó.
    ● Cú pháp:
        element_parent.insertBefore(node_insert, node_child);

    ● Trong đó:
    ● element_parent: là phần tử cha.
    ● node_insert: là node bạn muốn thêm vào.
    ● node_child: là node con mà bạn muốn thêm node_insert vào đằng trước nó.
*/
addButton.removeEventListener("click", func);   

let count = 1;
func = () => {
    const liFirst = document.querySelector('#menu1').querySelector("li:nth-child(1)");
    const li = document.createElement("li");
    li.innerHTML = "New item " + count++;
    document.querySelector('#menu1').insertBefore(li, liFirst); 
};

addButton.addEventListener("click", func);

/*
    ● Dùng để xóa một node con ra khỏi node cha.
    ● Cú pháp:
        element_parent.removeChild(node_remove);

    ● Trong đó:
    ● element_parent: là phần tử cha.
    ● node_remove: là node cần xóa.
*/

const menu2 = document.querySelector('#menu2');
const buttonsDelete = menu2.querySelectorAll("button");
const addInp = document.querySelector("#add-inp");
console.log(buttonsDelete);

buttonsDelete.forEach((buttonDelete) => {
    buttonDelete.addEventListener("click", () => {
        const li = buttonDelete.parentNode;
        menu2.removeChild(li);
    });
});

addInp.addEventListener("click", () => {
    const li = document.createElement("li");
    li.innerHTML = `<input type="text" name="" id=""><button>X</button>`
    console.log(li);
    menu2.appendChild(li);

    // phải gắn sự kiện click cho ô mới tạo ra để áp dụng thao tác delete
    const buttonDelete = li.querySelector('button');
    buttonDelete.addEventListener("click", () => {
        menu2.removeChild(li);
    });
});

/*
    ● Dùng để thay thế một node con bằng một node mới.
    ● Cú pháp:
        element_parent.replaceChild(node_insert, node_remove);

    ● Trong đó:
    ● element_parent: là phần tử cha.
    ● node_insert: là node bạn muốn thay thế.
    ● node_remove: là node cũ muốn bỏ đi.

*/
const liR = document.createElement("li");
liR.innerHTML = 'New item';
const liReplace = menu2.querySelector('li:nth-child(2)');
console.log(menu2.replaceChild(liR, liReplace), 'hehe');