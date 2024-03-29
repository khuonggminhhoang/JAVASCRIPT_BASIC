//----------- BOM window ------------
console.log(window);

//----------- innerHeight, innerWidth ----------
console.log('Chiều rộng nội dung trắng',window.innerWidth);
console.log('Chiều cao nội dung trắng',window.innerHeight);

//----------- window.open() ---------
/*
    ● Để mở một cửa sổ mới
    ● Cú pháp:
        window.open(url, name, options);

        + url: đường dẫn website muốn mở
        + name : tên đặt cho cửa sổ này
        + options : các thông số thông dụng, cách nhau bởi dấu phẩy
            - height: chiều cao của cửa sổ [px]
            - width: chiều rộng của cửa sổ [px]
            - top: vị trí hiển thị cửa sổ so với lề trên [px]
            - left: vị trí hiển thị cửa sổ so với lề trái [px]
*/

var tab, tab1;
const openTab = () => {
    tab = window.open(
        'https://www.w3schools.com/', 
        'nameTab', 
        'top=100px, left=250px, width=500px, height=500px'
    );
};

//---------- window.close() --------------
// nếu dùng window.close() sẽ đóng luôn cửa sổ hiện tại
const closeTab = () => {
    tab.close();
}

//-------------- BOM Screen ----------------
console.log(screen);
console.log('Chiều rộng màn hình',screen.width);        // trả về chiều rộng màn hình máy tính
console.log('Chiều cao màn hình',screen.height);        // trả về chiều cao màn hình máy tính

//-------------- BOM Location --------------
/* 
    ● location là một đối tượng được dùng để xử lý các vấn đề liên quan đến URL của trang web
    ● Cú pháp:
        window.location;
        hoặc 
        location;
*/

console.log(location);                      // 2 cách tương tự nhau
console.log(window.location);

const reloadPage = () => {
    location.reload();                      // location.reload() : để load lại trang web
}

// setInterval(reloadPage, 3000);
console.log(location);

/** LOCATION:
 * ●attribute
 * hash: lấy phần sau dấu # của URL
 * host: lấy phần hostname và port
 * hostname: lấy re tên host, không lấy port
 * origin: trả về protocol, hostname và port
 * pathname: lấy ra pathname của URL
 * port: lấy ra port của URL
 * search:  lấy ra phần query (string) của URL (sau dấu ?, trước dấu #)
 * href: toàn bộ link URL
 * protocol : trả về protocol của location
 * 
 * http://127.0.0.1:5500/JavaScript%20Basic/bai_09_JS_BOM/index.html?search=text#123
 */

console.log(location.href);
console.log(location.origin);
console.log(location.host);

console.log(location.protocol);
console.log(location.hostname);
console.log(location.port);
console.log(location.pathname);
console.log(location.search);
console.log(location.hash);

//-------------- BOM History -------------
/*
    ● dùng để truy vết lịch sử web
    ● Cú pháp:
        window.history
        hoặc
        history
*/
console.log(history);
console.log(window.history);

/** HISTORY:
 * ●attribute:
 *      length: trả về tổng số trang đã lưu trữ trong history
 * ●method:
 *      back(): quay lại trang trước
 *      forward() : đi tới trang kế tiếp
 *      go(number): đi tới một trang
 *            - nếu number âm thì tính từ trang hiện tại trừ đi number.
 *            - nếu number dương thì tính từ trang hiện tại cộng với number.
 *              nếu đi quá số trang return undefined.
 */


const backPage = () => {
    history.back();
};

//---------- BOM Navigator ------------
/*
    ● navigator được dùng để lấy các thông tin liên quan đến trình duyệt của người dùng.
    ● Cú pháp:
        window.navigator;
        // hoặc
        navigator;
*/
console.log(navigator);

/*
    ● navigator.cookieEnabled: Để kiểm tra trình duyệt có bật Cookie hay không.
    ● navigator.appName: Để kiểm tra tên trình duyệt.
    ● navigator.appCodeName: Để kiểm tra tên mã code của trình duyệt.
    ● navigator.appVersion: Để kiểm tra Version của trình duyệt.
    ● navigator.platform: Xem hệ điều hành mà người dùng đang sử dụng.
    ● navigator.language: Để kiểm tra ngôn ngữ của trình duyệt.
    ● navigator.online: Để kiểm tra xem người dùng còn online hay không (bật tắt trruy cập mạng) 
*/

// console.log(navigator.onLine);
// setInterval(() => console.log(navigator.onLine), 2000);

console.log('Hệ điều hành:',navigator.platform);
console.log('Ngôn ngữ:',navigator.language);
console.log('Trình duyệt:', navigator.userAgent);
console.log('cookies:', navigator.cookieEnabled);
console.log('version:', navigator.appVersion);


//------------- BOM Popup ------------
/*
    ● alert("Nội dung");
    ● confirm("Nội dung");
    ● prompt("Nội dung", "Nội dung mặc định");
*/
// window.alert('alert nha');
// console.log(window.confirm('nhấn ok thì return true'));
// const content = window.prompt('Nhập đi','default value');

//------------- BOM Timing ------------
/*
    ● setTimeout(function, milliseconds);       Thực thi 1 lần sau milliseconds ms
    ● setInterval(function, milliseconds);      Thực thi sau mỗi milliseconds ms
*/
// window.setTimeout(()=> console.log('setTimeout nha'), 2000);
// const id = window.setInterval(() => console.log('setInterval nha'), 3000);
// window.setTimeout(() => window.clearInterval(id), 6000);

// ----------------- cookies --------------
/*
    Tạo cookie:
        document.cookie = "name=value";
*/
document.cookie = 'fullName = Khương';
document.cookie = 'age = 21';
document.cookie = 'address = Hà Nội';
console.log(document.cookie);
document.cookie = 'fullName = Khương; expires = Thu, 01 Jan 2025 00:00:00 UTC';

// bonus: class Date
const date = new Date();
console.log(date);
console.log(date.getTime());    // return milliseconds các kiểu các kiểu đọc doc nhé
console.log('năm',date.getFullYear()); // return năm nay
console.log('tháng:',date.getMonth());
date.setDate(21);
console.log('ngày:',date.getDate());    // return ngày trong tháng
console.log('thứ:',date.getDay());     // return thứ trong tuần (từ 0 -> 6)
console.log('giờ:',date.getHours());
console.log('phút:',date.getMinutes());
console.log('giây:',date.getSeconds());
console.log('ms:',date.getMilliseconds());

// hàm set cookie tự build
function setCookie(cname, cvalue, exday){
    const date = new Date();
    date.setTime(date.getTime() + exday * 24 * 60 * 60 * 1000);
    exday = 'expires = ' + date.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + exday;
}

setCookie('address', 'Hà Nội', 2);
setCookie('id', '01234632', 30);

/*
    Lấy ra các giá trị cookie
    var cookie = document.cookie;
*/
console.log(document.cookie);

function getCookie(cname){
    const arrCookie = document.cookie.trim().split('; ');
    for(let cookie of arrCookie){
        if(cookie.indexOf(cname) == 0){
            return cookie.substring(cname.length + 1, cookie.length);
        }
    }
    return '';
}

console.log(getCookie('fullName'));
console.log(getCookie('age'));

/*
    Sửa cookie:
    document.cookie = 'name=diffValue';
*/
document.cookie = 'fullName = Minh';
console.log(document.cookie);

/*
    Xóa cookie: chỉ cần đưa thời gian expires về quá khứ là được
    document.cookie = 'name=; expires = Thu, 01 Jan 1970 00:00:00 UTC';

*/
const cname = 'fullName'
document.cookie = `${cname}=; expires = Thu, 01 Jan 1970 00:00:00 UTC`;

function deleteCookie(cname){
    document.cookie = `${cname} = ; expires = Thu, 01 Jan 1970 00:00:00 UTC`;
}

deleteCookie('age');
deleteCookie('');
console.log(document.cookie);