// 01.
console.log(location.href);

// 02.
const protocol = location.protocol;
const hostname = location.hostname;
const port = location.port;

console.log(protocol);
console.log(hostname);
console.log(port);
console.log(location.origin);

// 03.
const redirect = (rhref, rtime) => {
    setInterval(()=>{
        location.href = rhref;
    }, rtime);
};

const redirectNewTab = (rhref, rtime) => {
    setTimeout(()=>{
        window.open(rhref, '_blank');
    }, rtime);
};

// redirect('https://github.com/khuonggminhhoang', 5000);
// redirectNewTab('https://github.com/khuonggminhhoang', 5000);

// 04.
const reloadPage = () => {
    setInterval(() => location.reload(), 3000);
}
// reloadPage();

// 05.
const checkHttps = (protocol) => {
    return protocol == location.protocol;
}
console.log(checkHttps('https:'));
console.log(location.protocol);

// 06.
const printWindow = () => {
    window.print();
}
// setTimeout(printWindow, 5000);

// 07.
let count = 10;
const countDown = (count) => {
    if(count >= 0) {
        console.log(count--);
        setTimeout(countDown, 1000, count);
    }
    else{
        console.log('Happy new year!');
    }

}

// countDown(count);

// 08.
console.log('Chiều rộng trình duyệt:',window.innerWidth);
console.log('Chiều cao trình duyệt:',window.innerHeight);

// 09.
console.log('Cách trái màn hình:',window.screenLeft);
console.log('Cách trên màn hình:',window.screenTop);
console.log(window.screenX);
console.log(window.screenY);

// 10.
var tab;
const openPopup = () => {
    tab = window.open(
        'https://github.com/khuonggminhhoang', 
        'name', 
        `top = 200 left = 250, width = ${500}, height = ${500}`
    );
}

const closePopup = () => {
    tab.close();
}
// window.close();

// 11.
console.log(navigator.userAgent);

// 12.
console.log(navigator.language);

// 13.
console.log(screen.width);
console.log(screen.height);

// 14.
const checkDevice = () => {
    return navigator.userAgentData.mobile ? 'Mobile' : 'PC'
};

console.log(checkDevice());

console.log('HDH:', navigator.userAgentData.platform);

// 15.
console.log(navigator.languages);
