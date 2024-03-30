function TongHaiSo(a, b, callback){
    const sum = a + b;
    console.log(sum, callback(sum) ? 'YES' : 'NO');
}

export default TongHaiSo;