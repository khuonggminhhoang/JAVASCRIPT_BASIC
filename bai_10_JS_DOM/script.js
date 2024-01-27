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