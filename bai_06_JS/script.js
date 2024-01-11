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
    /*
    var result = '10' / '2';
    console.log(result);
    var res = 10/'a';
    console.log(typeof res == "number");
    console.log(isNaN(res))
    */

    // toString(): chuyển kiểu number thành kiểu string
    /*
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
    */

    // toFixed(digits): làm tròn số và lấy digits số sau dấu phẩy
    /*
    var num = 12.3456;
    console.log(num.toFixed())
    console.log(num.toFixed(3));
    console.log(num.toPrecision(4)); // lấy 4 số cả sau dấu thập phân
    */
    
    // P9 - Array:
    
    // toString(): chuyển array thành string, ngăn cách nhau bởi dấu ,
    var list = ['C++', 'Python', 'HTML', 'CSS', 'JS', 'Java'];
    console.log(list.toString());

    // join(seperator) : dùng để thêm các seperator vào giữa các phần tử của mảng
    console.log(list.join(' - '));
    console.log(list.join(' '));
    console.log(list.join()); /// giống toString()
    list.forEach(x => console.log(x));

    // pop(): remove and return the last item of the array
    var array = ['C++', 'Python', 'HTML', 'CSS', 'JS', 'Java'];
    console.log(array.toString());
    console.log(array.pop());
    console.log(array.pop());
    console.log(array.pop());
    console.log(array.pop());
    console.log(array.pop());
    console.log(array.pop());
    console.log(array.pop());   // pop hết thì trả về undefined
    console.log(array.join(' '));

    // push(item1, item2, item3, ...): thêm phần tử vào cuối mảng, return new length of the array
    console.log(array.push('JAVA', 'C'));
    console.log(array.join(' '));
    var arr = ['JAVA', 'C'];
    console.log(arr == array);
    console.log(arr === array);

    // reverse() : đảo ngược array
    console.log(arr.reverse().join(' '))

    // shift(): xóa và trả về phẩn tử đầu tiên của mảng
    console.log(arr.shift());
    console.log(arr);

    // unshift(item1, item2, item3, ...): thêm các item vào đầu array và trả về new length
    arr.push('HTML', 'CSS', 'PHP', 'PYTHON');
    console.log(arr);
    console.log(arr.unshift('JS', 'C++', 'C'));
    console.log(arr);

    // splice(index, howMany, item1, item2, ...): chèn hoặc xóa howMany phần tử tại vị trí index; return array bị xóa
    // trong đó index là vị trí thao tác, howMany là số phần tử cần xóa
    // console.log(arr.splice(2)); // xóa các phần tử từ vị trí index đến cuối
    console.log(arr.splice(2, 3, 'C#', 'TypeScript'));
    console.log(arr);
    // để thêm các phần tử vào vị trí index thì howMany = 0 là okeee :))
    // để xóa theo ý muốn thì ko cần thêm các item.

    // vidu chèn phàn tử:
    var list = ["HTML5", "CSS3", "Javascript"];
    console.log(list.splice(2, 0, "Bootstrap 4", "ReactJS")); // Trả về: []
    console.log(list);
    // Trả về: ["HTML5", "CSS3", "Bootstrap 4", "ReactJS", "Javascript"]

    // vidu xóa phần tử:
    var list = ["HTML5", "CSS3", "Javascript"];
    console.log(list.splice(1, 1)); // Trả về: ["CSS3"]
    console.log(list); // Trả về: ["HTML5", "Javascript"]

    // vidu Xóa phần tử và chèn phần tử mới vào mảng
    var list = ["HTML5", "CSS3", "Javascript"];
    console.log(list.splice(2, 1, "Bootstrap 4", "ReactJS"));
    // Trả về: ["Javascript"]
    console.log(list);
    // Trả về: ["HTML5", "CSS3", "Bootstrap 4", "ReactJS"]
    
    // concat(array2, array3, ..., arrayX) : nối các array với nhau mà ko ảnh hưởng tới array ban đầu
    var list = ["HTML5", "CSS3", "Javascript"];
    var list2 = ["Bootstrap 4", "ReactJS"];
    console.log(list.concat(list2));
    // Trả về: ["HTML5", "CSS3", "Javascript", "Bootstrap 4", "ReactJS"]
    console.log(list);
    // Trả về: ["HTML5", "CSS3", "Javascript"]

    // dùng toán tử spread để nối 2 array:
    // list.push(...list2);
    // console.log(list);                       // cách này cũng nối, nhưng làm thay đổi array ban đầu


    var resultArray = [...list, ...list2];
    console.log(resultArray);
    console.log(...list, ...list2);


    // slice(start, end): giống xử lý xâu, cắt từ phần tử index bằng start đến phần tử có index = end - 1
    console.log(resultArray.slice(3));
    console.log(resultArray.slice(1, 3));
    console.log(resultArray.slice(-3, -1));
    console.log(resultArray);
    // tương tự python, chỉ khác cú pháp

})();