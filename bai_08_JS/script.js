// ------------- Try Catch -----------
/*
    ● Try catch là một khối lệnh dùng để bắt lỗi chương trình.
    ● Sử dụng try catch khi muốn chương trình không bị dừng khi một lệnh nào đó bị lỗi.
*/
// x = 10
try{
    console.log('x =' + x)
} catch (error){
    console.log(error)
}
finally{
    console.log('lệnh luôn chạy vào đây sau cùng')
}

//--------------    CÁC THAO TÁC VỚI OBJECT NÂNG CAO ------------
const inforUser = {
    name : 'Hoàng Minh Khương',
    age : 21
}
console.log(inforUser);
// thêm phần tử vào object
inforUser.phone = '0324175874'
inforUser['email'] = 'kmh@gmail.com'
inforUser["address"] = 'Thái Bình'      // nên thêm cặp key-value vào trong object kiểu này 
console.log(inforUser)
console.log(inforUser.address)
console.log(inforUser.name);

// xóa phần tử của object
delete inforUser['phone']
delete inforUser.email                    // gần giống xóa key của dict trong python, xóa key của map trong java
console.log(inforUser)


//--------------- CÁC THAO TÁC VỚI ARRAY NÂNG CAO ---------------

/*
    ● Để duyệt qua mỗi phần tử của mảng và thực hiện một hành động nào đó.
        ● Cú pháp:
        
            arr.forEach(function (currentValue, index, array) {
                // code xử lý
            });

        ● Trong đó:
        ● currentValue: phần tử hiện tại đang được xử lý của array.
        ● index: chỉ số của phần tử hiện tại đang được xử lý của array.
        ● array: mảng hiện tại đang gọi hàm forEach().
*/
let arr = [1, 3, 5, 7 ,9 , 11];
console.log(arr);

// forEach(function(item, index, arrayOrigin){...code...});
arr.forEach((item, index, array) => {
    console.log(item, index, array);
});

arr.forEach(( _, index) => {
    arr[index] += 1;
});
console.log(arr);
arr.unshift('PHP')
arr.forEach((_, index) => arr[index] += 1, arr);

delete arr[0]                                                   // xóa phần tử ở đầu mảng tương tự xóa phần tử của object

arr.forEach((item) => console.log(item))

// let sum = 0;
// arr.forEach((item) => sum += item)
// console.log(sum);


// every(function(item, index, arrayOrigin){...code...}); => false nếu 1 phần tử nào đó không thỏa đk nào đó  :  Kiểm tra tất cả các phần tử của một mảng phải thỏa mãn một điều kiện gì đó. 
arr = [2, 4, 6, 8 , 10];
let ans = arr.every((item) => {
    return item%2 == 0;
}); 
console.log('arr chẵn : ' + ans);

// some(function(item, index, arrayOrigin){...code...}); => true nếu ít nhất 1 item tm đk gì đó   :   Kiểm tra chỉ cần một phần tử của một mảng thỏa mãn một điều kiện gì đó là được.
ans = arr.some((item) => {
    return item % 3 == 0;
});

console.log('tồn tại ít nhất 1 phần tử trong arr chia hết cho 3 : ' + ans);

const isPrime = (n) => {
    for(let i = 2; i <= Math.sqrt(n); ++i){
        if(n % i == 0){
            return false;
        }
    }
    return n > 1;
};

arr = [2, 11, 5, 7, 19];
console.log('all item in the arr is prime number :  ' + arr.every((x) => {
    return isPrime(x);
}));

// find(function(curentValue, index, arrayOrigin) {...code...});  => return ra 1 phần tử đầu tiên tìm thấy trong arr, nếu ko tìm thấy return undefined 
const subjects = [
    {
        name : 'C++',
        score : 9.3
    },
    {
        name : 'Java',
        score : 8.2
    },

    {
        name : 'Python',
        score : 9
    },

    {
        name : 'C',
        score : 7.8
    },

    {
        name : 'Java',
        score : 10
    }
]
let str = 'Java';
let target = subjects.find((item) => {
    return item.name === str;
});

console.log(target);

// filter(function(curentValue, index, arrayOrigin) {...code...}); => return array bao gồm các phần tử tìm được trong arr thỏa mãn đk gì đó, ko tìm thấy return undefined
let lst = subjects.filter((item, index, arrOrg) => {
    return item.name === str;
});

console.log(lst);

subjects.push({name : 'C#', score : 7.9});
subjects[0]['temp'] = 3.4;
delete subjects[0]['temp'];
console.log((subjects));

arr = [2, 3, 5, 1, 0, -9];
arr.forEach((item, index) => {
    arr[index] += 1;
});
console.log((arr));

// arr.map(function (currentValue, index, array) {...code...});   => new array với các giá trị được quyết định bởi từ khóa return

let arrSubject = [
    {
        name : 'C++',
        score : 9.3
    },
    {
        name : 'Java',
        score : 8.2
    },

    {
        name : 'Python',
        score : 9
    },

    {
        name : 'C',
        score : 7.8
    },

    {
        name : 'C#',
        score : 10
    }
]

arr = arrSubject.map((item, index, arrOrg) => {
    return item;
});

console.log(arr);

arr = arrSubject.map((item) => {
    return item.name;
});

console.log(arr);

lst = [];
arrSubject.forEach((item) => {
    lst.push(item.name);
});

console.log(lst);


/*
    Hàm reduce() duyệt qua từng phần tử trong mảng để tính toán và trả về một giá trị cuối cùng.
        ● Cú pháp:

        arr.reduce(function (accumulator, currentValue, currentIndex, array) {
            // code xử lý
        }, initialValue);

        ● Trong đó:
            ● accumulator: là giá trị của lệnh return cho mỗi lần lặp.
            ● initialValue: giá trị khởi tạo ban đầu (không bắt buộc).
*/

arr = [2, 3, 5, 1, 0, 9];

let sum1 = arr.reduce((total, item, index, array) => {
    console.log(total, item);
    return total + item;                                        // tại hàm này, cố tình không khởi tạo giá trị ban đầu nên total sẽ lấy phần tử đầu tiên của mảng, item sẽ lấy ptu thứ 2 tại vòng lặp đầu tiên
});

console.log(sum1);


let sum2 = arr.reduce((total, item) =>{
    return total + item;
}, 0);

console.log(sum2);


arrSubject = [
    {
        name : 'C++',
        score : 9.3
    },
    {
        name : 'Java',
        score : 8.2
    },

    {
        name : 'Python',
        score : 9
    },

    {
        name : 'C',
        score : 7.8
    },

    {
        name : 'C#',
        score : 10
    }
]

// cách 1 : dùng forEach()
let avg = 0;
arrSubject.forEach((item) => {
    avg += item.score/arrSubject.length;
});

console.log(avg);

avg = arrSubject.reduce((avg, item) => {
    return avg + item.score/arrSubject.length;
}, 0);
console.log(avg);