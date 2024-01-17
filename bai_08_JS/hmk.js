const check = (n) => {
    return n > 0 && n % 1 == 0;
}

let n;
do{
    n = prompt('Nhập số n:');
    console.log(parseFloat(n));
}
while(isNaN(n));
alert(check(parseFloat(n)) ? 'YES' : 'NO');
