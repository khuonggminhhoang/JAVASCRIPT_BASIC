// Một số hàm built-in

function areaSquare(a) {
    return a * a;
}

function nameStd(name){
    var ans = '';
    var lst = name.split(/\s+/g);
    console.log(lst);
    for(let i = 0; i < lst.length; ++i){
        ans += lst[i].charAt(0).toUpperCase() + lst[i].slice(1).toLowerCase() + ' ';
    }
    return ans.trim();
}

(function() {
    // code ...

    // alert('hello kmh');     // in một thông báo một popup 
    /* alert('dậy đi'); */

    // var boolean = confirm("bạn ăn sáng chưa?");     // in 1 thông báo popup cho phép chọn yes/no -> true/false
    /* console.log("Hàm confirm trả về : " + boolean); */

    // prompt(title, defaultValue) : để lấy thông tin nhập vào từ user. defaultValue ko bắt buộc
    /* var n = prompt('nhập n xem nào :) ');           // nội dung nhập vào luôn là 1 string như python
     console.log('Giá trị n nhập vào:', n);  */

    // console.log() : in ra thông báo
    /* console.log('Đây là thông báo');  */

    // console.warn() : in ra cảnh báo
    /* console.warn('Đây là lỗi'); */

    // console.error() : in ra lỗi
    /* console.error('Đây là lỗi'); */

    // setTimeout(function, timeout) : chạy 1 lần duy nhất sau 1 khoảng tgian = time
    
    /*
    setTimeout(function() {
        console.log(areaSquare(12));
    }, 2000);                           // dùng anonymous function
    

    var x = setTimeout(() => {
        console.log(areaSquare(10));
    }, 1000);                            // dùng arrow function
    console.log(x);
    */

    // setInterval(function, timeout) : chạy function lặp lại sau 1 khoảng tgian timeout
    /*
    setInterval(() => {
        console.log(areaSquare(100));        // dùng arrow function
    }, 2000);

    var stop = setInterval(function() {
        console.log(areaSquare(12));          // dùng anonymous function
    }, 1000);

    setTimeout(()=> {
        clearInterval(stop);                // dừng hàm setInterval()
    }, 5000)
    */

    // typeof
    /*
    var a = 12;
    var b = 'hehe';
    var c;
    var d = null;
    var e = false;
    var lst = ['oke', 1, 4, true];
    console.log(typeof a);
    console.log(typeof b);
    console.log(typeof c);
    console.log(typeof d);
    console.log(typeof e);
    console.log(typeof (a == "number"));
    console.log(typeof lst);
    */

    // P7 - String:

    // length: return độ dài xâu
    /* var fullName = 'Hoàng Minh Khương';
    console.log(fullName.length);        
    */

    // indexOf(searchValue, startIndex) : return index đầu tiên của searchValue được tìm thấy trong xâu, tìm xuôi từ startIndex về cuối xâu. return -1 nếu không tìm thấy
    /* 
    var string = 'Xin chào, Tôi là Khương. Tôi năm nay 18 tuổi!';
    console.log(string.indexOf('Tôi'));
    console.log(string.indexOf('Tôi', 11));
    console.log(string.indexOf('Chào'));

    lastIndexOf(search, startIndex) : return index cuối cùng của searchValue được tìm thấy, sẽ tìm ngược từ startIndex về đầu xâu. return -1 nếu ko tìm thấy.
    console.log(string.lastIndexOf('Tôi'));
    console.log(string.lastIndexOf('Tôi', 23));
    */

    // slice(start, end) : cắt xâu từ vị trí (start) đến vị trí (end - 1)
    /*
    var str = 'html css js java c++ python';
    console.log(str.slice(5, 8));
    console.log(str.slice(9));
    console.log(str.slice(-6));
    console.log(str.slice(-1));

    var fullName = prompt('Nhập họ tên:');
    console.log(nameStd(fullName));
    */

    // replace(searchValue, newValue): thay thế chuỗi đầu tiên mà nó tìm thấy, tương tự như java
    /*
    var str = '     tôi là khương, năm nay tôi 19 tuổi, năm sau tôi 20 tuổi    ';
    console.log(str.trim().replace('tôi', 'mình'));
    console.log(str.trim().replace(/tôi/g, 'mình'))

    // toUpperCase(), toLoweCase(), trim() tương tự như java
    console.log(str.toLowerCase())
    console.log(str.toUpperCase())
    console.log(str.trim());        // bỏ đi khoảng trắng ở 2 đầu xâu ký tự.
    console.log(str.trimStart())    // bỏ đi khoảng trống ở đầu xâu
    console.log(str.trimEnd())      // bỏ đi khoảng trống ở cuối xâu

    // charAt(index) : lấy ra kí tự ở vị trí index. Tương tự java
    str = str.trim();
    console.log(str.charAt());
    console.log(str.charAt(0));
    console.log(str.charAt(5));
    console.log(str.charCodeAt(str.length - 1)); // return mã ascii của kí tự cuối xâu

    // split([regex], [limitNumber]) : tách xâu theo regex, tương tự java -> return array string
    console.log(str.split());
    console.log(str.split(' '));
    console.log(str.split(', '));
    console.log(str.split(/,\s+/g, 2));  // lấy ra 2 phần tử đầu tiên sau khi tách xâu
    */

    // P8 - Number:

    // isNaN(a) : return true nếu a là NaN
    var result = '10' / '2';
    console.log(result);
    var res = 10/'a';
    console.log(typeof res == "number");
    console.log(isNaN(res))

    // toString(): chuyển kiểu number thành kiểu string
    var a = 10;
    var b = a.toString();
    var c = (10).toString();
    var d = a + '';             // giống java
    console.log(a); // Trả về số 10
    console.log(typeof a); // Trả về kiểu number
    console.log(b); // Trả về chuỗi 10
    console.log(typeof b); // Trả về kiểu string
    console.log(c); // Trả về chuỗi 10
    console.log(typeof c); // Trả về kiểu string
    console.log(d);
    console.log(typeof d);

    // toFixed(digits): làm tròn số và lấy digits số sau dấu phẩy
    var num = 12.3456;
    console.log(num.toFixed())
    console.log(num.toFixed(3));
    console.log(num.toPrecision(4)); // lấy 4 số cả sau dấu thập phân
    

})();


