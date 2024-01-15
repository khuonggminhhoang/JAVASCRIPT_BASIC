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
const arr = [1, 3, 5, 7 ,9 , 11];
console.log(arr);

// forEach(function(item, index, arrayOrigin){...code...});
arr.forEach((item, index, array) => {
    console.log(item, index, array);
});

arr.forEach(( _, index) => {
    arr[index] += 1;
});
console.log(arr);