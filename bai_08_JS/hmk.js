//11.
const countOnes = (array) => {
    return array.reduce((total, row) => total + row.filter((cell) => cell === 1).length, 0);
};

const test1 = countOnes([
    [1, 0],
    [0, 0],
  ]);
  console.log(test1); // 1
  
  
  const test2 = countOnes([
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1],
  ]);
  console.log(test2); // 7
  
  
  const test3 = countOnes([
    [1, 2, 3],
    [0, 2, 1],
    [5, 7, 33],
  ]);
  console.log(test3); // 2
  
//12.
const swappingCases = (string) => {
    let ans = '';
    for(let chr of string){
        ans += (chr === chr.toUpperCase()) ? chr.toLowerCase() : chr.toUpperCase();
    }
    return ans;
};

console.log(swappingCases("Le VAn HunG"));
console.log(swappingCases("Đặng PhưƠnG NAm"));

//13.
const invertedNumbers = (arr) => {
    const newArr = arr.map((item) => -item);
    return newArr;
};

console.log(invertedNumbers([1, -10, -20, 15, 100, -30]));

console.log(invertedNumbers([-20, 30, 10, -25, -60, 20]));

//14.
const ignoreNumbers = (string) => {
    let ans = '';
    for(let char of string){
        if(isNaN(char)){
            ans += char;
        }
    }
    return ans;
};

console.log(ignoreNumbers("Test4Ag54SF"));
console.log(ignoreNumbers("JHk34Gl3gG"));

//15.
const smallWords = (string, number) => {
    const arr = string.trim().split(/\s+/).filter((sub) => sub.length <= number);
    return arr.join(' ');
};

console.log(smallWords("I Love Foood Code Too Playing Much", 4));
console.log(smallWords("I Love Foood Code Too Playing Much", 3));

//16.
const multiplyNumberInString = (string) => {
    let ans = '';
    for(let char of string){
        if(!isNaN(char)){
            ans += char * char;
        }
    }
    return +ans;
};
console.log(multiplyNumberInString("JG23BGH5BA"));
console.log(multiplyNumberInString("VD23GS8S6AH"));
console.log(multiplyNumberInString("AGD353GDSK8"));
console.log(multiplyNumberInString("JBKJJKLDJ"));

//17.
const totalPrice = (arrayProduct) => {
    return arrayProduct.reduce((tol, product) => tol + product.price * product.quantity, 0);
}

const cart = [
    { name: "iPhone", price: 1000, quantity: 5 },
    { name: "iPad", price: 500, quantity: 2 },
    { name: "MacBook", price: 2000, quantity: 1 },
  ];

console.log(totalPrice(cart));

//18.
const groupedStudents = (arrayStd) => {
    const objAns = {};  
    for(let obj of arrayStd){
        if(objAns[obj.gioiTinh]){
            objAns[obj.gioiTinh].push(obj.hoTen);
        }
        else{
            objAns[obj.gioiTinh] = [obj.hoTen];
        }
    }
    return objAns;
};

const students = [
    { hoTen: "Le Van A", gioiTinh: "Nam" },
    { hoTen: "Do Van B", gioiTinh: "Nam" },
    { hoTen: "Nguyen Thi C", gioiTinh: "Nu" },
    { hoTen: "Dao Van D", gioiTinh: "Nam" },
    { hoTen: "Hoang Thi E", gioiTinh: "Nu" },
    { hoTen: "Vu Van F", gioiTinh: "Nam" },
  ];

console.log(groupedStudents(students));

//19.
const totalSubArr = (array) => {
    let ans = []
    for(let sub of array){
        ans.push(sub.reduce((tol, item) => tol + item, 0));
    }
    return ans;
};

const numbers = [
    [1, 2],
    [3, 4],
    [5, 6],
  ];
console.log(totalSubArr(numbers));  

//20.
const totalMark = (arrStudent) => {
    const ans = {};
    arrStudent.forEach((obj) => {
        if(ans[obj.lop]){
            ans[obj.lop] += obj.diem;
        }
        else{
            ans[obj.lop] = obj.diem;
        }
    });
    return ans;
};

const arrayStudent = [
    { hoTen: "Le Van A", lop: "A", diem: 7.5 },
    { hoTen: "Do Van B", lop: "B", diem: 6.8 },
    { hoTen: "Nguyen Thi C", lop: "A", diem: 8 },
    { hoTen: "Dao Van D", lop: "C", diem: 9 },
    { hoTen: "Hoang Thi E", lop: "B", diem: 8.5 },
    { hoTen: "Vu Van F", lop: "B", diem: 7.2 },
  ];
  
console.log(totalMark(arrayStudent));