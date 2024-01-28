//------------- DOM --------------

//--------- DOM Element -------
/*
    getElementById('id_element'):
        ● Để lấy ra một thẻ HTML theo id.
        ● Kết quả sẽ trả về 1 phần tử.
*/
const doc = document
console.log(document);
const eleSoc = document.getElementById('soccer');
console.log(eleSoc);
const eleVol = document.getElementById('volleyball');
console.log(eleVol);
console.log(document.getElementById('badminton'));

/*
    getElementsByTagName('nameTag'):
        ● Để lấy ra một thẻ HTML theo tên thẻ.
        ● Kết quả sẽ trả về 1 mảng các object.
*/

const lstLabel = document.getElementsByTagName('label');
console.log(lstLabel);
for(let ele of lstLabel){
    console.log(ele);
}

const lstInput = [document.getElementsByTagName('input')];
console.log(lstInput);
for(let ele of lstInput){
    console.log(ele);
}
/*
    getElementsByClassName('className'):
        ● Để lấy ra một thẻ HTML theo class.
        ● Kết quả sẽ trả về 1 mảng các object.
*/

const lstTitle = document.getElementsByClassName('title');
console.log(lstTitle);
for(let ele of lstTitle){
    console.log(ele);
}
// HTMLCollection ko phải là 1 mảng, muốn duyệt forEach phải convert array
var arr = Array.from(lstTitle);
console.log(arr);
arr.forEach((ele) => console.log(ele));

/*
    querySelector('selector')
        ● Để lấy ra một thẻ HTML theo bộ trọn trong CSS.
        ● Kết quả sẽ trả về 1 phần tử.
*/
const tagA = document.querySelector('#menu-1 li a');
console.log(tagA);                                  // nếu có nhiều phần tử thì sẽ lấy ra phần tử đầu tiên

/*
    querySelectorAll('selector')
        ● Để lấy ra một thẻ HTML theo bộ trọn trong CSS.
        ● Kết quả sẽ trả về 1 mảng các object.
*/
console.log(document.location);
console.log(window.location);           // location ở 2 object này là như nhau

// lấy ra danh sách tagA ở trong menu-2
var listTagA = document.querySelectorAll('#menu-2 li a');
console.log(listTagA);
listTagA.forEach((item) => console.log(item));

// const menu2 = document.getElementById('menu-2');
// const lstTagA = menu2.getElementsByTagName('a');
// Array.from(listTagA).forEach((item) => console.log(item));               cách này quá rườm rà

// lấy ra tag a thứ 2 từ menu-1
var tag = document.querySelector('#menu-1 li:nth-child(2) a');
console.log(tag); 

// lấy ra tag a thứ 3 từ menu-2
console.log(document.querySelector('#menu-2 li:nth-child(3) a'));

//--------------- DOM HTML ---------------

/*
    ● Lấy nội dung
    ● Để lấy nội dung của một element dùng innerHTML.
*/

var innerHTML_h2 = document.querySelector('h2:nth-child(4)').innerHTML; 
console.log(innerHTML_h2);

// innerText để lấy ra nội dung trong 1 thẻ, không lấy ra các thẻ con bên trong
var content = document.querySelector('h2:nth-child(4)').innerText;
console.log(content);

// NOTE: khi dùng :nth-child(n) thì n là số thẻ tính từ thẻ cha 

/*
    ● Thay đổi nội dung
    ● Để thay đổi nội dung của một element dùng innerHTML và gán lại giá trị.
*/

document.querySelector('h2:nth-child(3)').innerHTML = '<u>innerHTML đang dùng thêm thẻ <unhé</u>';
document.querySelector('h2:nth-child(4)').innerText = 'Dùng innerText thì không thêm được các thẻ vào trong như dòng trên';

var listNodeLi = document.querySelectorAll('li');
listNodeLi.forEach((li, index) => li.innerHTML = 'Đã đổi tên dùng js nhé ' + (index + 1));

/*
    Lấy giá trị của thuộc tính
        ● Để lấy giá trị của thuộc tính HTML sử dụng getAttribute().
 */

var idUlMenu1 = document.querySelector('ul:nth-child(8)').getAttribute('id');
console.log(idUlMenu1);

var dataIdMenu1 = document.querySelector('#menu-1').getAttribute('data-id');
console.log(dataIdMenu1);

console.log(document.querySelector('h2[userChange="user-change"]').getAttribute('class'));

/*
    ● Thay đổi giá trị của thuộc tính:
        ● Để thay đổi giá trị của thuộc tính HTML sử dụng setAttribute().
        ● Ví dụ:
            <h2 class="test">Nội dung hiện tại</h2>
            <script language="javascript">
                document.querySelector("h2").setAttribute("class", "Nội dung mới");
            </script>
*/

// document.querySelector('h2[userChange="user-change"]').setAttribute('class', 'title bgr-orange');       // đổi giá trị của thuộc tính class từ bgr-yellow sang bgr-orange

// ghim quảng cáo sau 5s
setTimeout(() => {
    // document.querySelector('#ads').setAttribute('class', 'ads ads-display');
    document.querySelector('#ads').classList.add('ads-display');                // tương tự setAttribute nhưng chỉ áp dụng cho class được thôi.
}, 5000);
// console.log( document.querySelector('#ads').classList);

//------------------ DOM CSS --------------------
/*
● Cú pháp thiết lập giá trị:
    document.getElementById("idName").style.propertyName = "value";

● Cú pháp lấy giá trị:
    document.getElementById("idName").style.propertyName;

    !note: lưu ý, method này chỉ lấy được giá trị của property trên thẻ style được css inline trên element thôi 

    window.getComputedStyle([element]).propertyName

● Lưu ý:
    ● propertyname: Tên thuộc tính viết theo kiểu camelCase.
    ● Ví dụ:
        ● font-size → fontSize
        ● margin-bottom → marginBottom
*/


document.querySelector('h2[userchange="user-change"]').innerHTML = 'effect tại đây sẽ bị thay đổi dựa vào DOM CSS';
console.log(document.querySelector('h2[userchange="user-change"]').style.backgroundColor);
var element = document.querySelector('h2[userchange="user-change"]');
console.log(element.style.backgroundColor); // sẽ không in ra giá trị nào vì style css không đươc viết theo kiểu inline, tức là ko được css trực tiếp trên thẻ

console.log(document.querySelector('h2[userchange="user-change"]'));

// lấy ra giá trị thuộc tính trong css
// c1: dùng getPropertyValue('tên property css')
var background  = window.getComputedStyle(document.querySelector('h2[userchange="user-change"]')).getPropertyValue('background-color');
console.log(background);
// c2
console.log(window.getComputedStyle(document.querySelector('h2[userchange="user-change"]')).backgroundColor);

// set giá trị thuộc tính css:
// c1:
// document.querySelector('h2[userchange="user-change"]').style.backgroundColor = 'gray';
// c2:
document.querySelector('h2[userchange="user-change"]').style.setProperty('background-color', 'gray');
