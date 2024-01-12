(function(){
    var a = 101;
    var b = 20;

    if(a > b){
        console.log('a > b')
    }

    if(a % 2 === 0){
        console.log('số chẵn');
    }
    else{
        console.log('số lẻ');
    }

    var score = 6.7;
    if(score > 9){
        console.log('Giỏi');
    } 
    else if (7 <= score ){
        console.log('Khá')
    }
    else{
        console.log('TB')
    }

    var diemToan = 8;
    var diemTin = 9;
    if(diemTin != null && diemToan != null){
        var avg = (diemToan + diemTin)/2;
        if(avg > 5){
            console.log('pass exam');
        }
        else{
            console.log('failed');
        }
    }
    else{
        console.log('chưa có đủ đầu điểm');
    }

    var res = a%2 == 1 ? 'Số lẻ' : 'Số chẵn';
    console.log(res);


    var n = 12;

    switch(n){
        case 1:
        case 3: 
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            console.log('31 ngày');
            break;
        case 2: 
            console.log('28 ngày');
            break;
        case 4:
        case 6: 
        case 9:
        case 11:
            console.log('30 ngày');
            break;
        default:
            console.error('error');
            break;
    }

    var res = ''
    for(var i = 0; i < 10; ++i){
        res += i + ' ';
    }                                           // tương tự c++, java
    console.log(res.trim());

    for(var i = 0; i < 5; ++i){
        for(var j = i; j < 5; ++j){
            console.log(`Hàng ${i} cột ${j}`);
        }
    }

    // ĐOẠN NÀY BẮT ĐẦU KHÁC C++, JAVA
    console.log('++++++++++++++++++---Object---++++++++++++++++++');
    // for in : để lặp qua các key của object, không nên áp dụng cho các phần tử của array, string.
    var infoUser = {
        fullName : 'Hoàng Minh Khương',
        age : 20,
        major : 'CNTT',
        email : 'kmh@gmail.com',
        phone : '0377476212'
    };

    for(key in infoUser){
        console.log(`${key} : ${infoUser[key]}`);           // cái này tương tự dictionary trong python
    }
    console.log(Object.keys(infoUser));             // lấy ra list các thuộc tính của object
    console.log(Object.values(infoUser));           // lấy ra list các value của object
    console.log(Object.entries(infoUser));          // lấy ra các cặp key-value của object

    console.log(infoUser['fullName']);
    console.log(infoUser);


    console.log('++++++++++++++++++---Array---++++++++++++++++++');
    // array bản chất cũng là object với key là các chỉ số bắt đầu từ 0

    var arr = ['HTML', 'CSS', 'JS', 'JAVA', 'PYTHON'];
    console.log(arr);
    console.log(arr.length);

    for(var i = 0; i < arr.length; ++i){
        console.log(arr[i]);
    }

    console.log('---------------------');
    for(key in arr){                                // duyệt như này cũng được, nma hạn chế dùng
        console.log(typeof key);        
        console.log(arr[key]);
    }

    // console.log(Object.entries(arr));
    // console.log(Object.keys(arr));
    // console.log(Object.values(arr));

    // for of : dùng duyệt qua từng phần tử của array/string, tương tự for(obj x : arr) trong java hoặc for x in lst trong python
    // for of miễn nhiễm mọi sát thương của object, ko dùng được.
    console.log('---------------------');
    for(var item of arr){
        console.log(item);
    }

    var str = 'Hoàng Minh Khương';
    console.log(str);
    for(let i = 0; i < str.length; ++i){
        console.log(str[i]);
    }
    console.log(str['length'])

    for(var char of str){
        console.log(char);
    }
    // note: duyệt xâu tương tự như duyệt mảng, duyệt theo chỉ số hoặc duyệt theo for of từng phần tử


    // Đoạn này lại giống java, c++:
    // vòng lặp while
    var testCase = 4;
    while(testCase--){
        console.log(testCase);
    } 

    // do...while(condition)  
    var i = 0;  
    do{
        console.log(i);
        ++i;
    }while(i < 10)

    // break và continue tương tự các nnlt đã học
    for(var i = 0; i < 10; ++i){
        console.log(i);
        if(i === 5){
            break;
        }
    }

    for(let i = 0; i < 5; ++i){
        if(i === 2){
            continue;
        }
        console.log(i);
    }

    // var, let, const và khai báo biến
    // var x = 2;
    // if(true){
    //     var tmp = 3.1;                              // var dùng khai báo biến toàn cục, dùng ở bất kì đâu trong file ctrinh
    //     console.log(x);
    // }
    // console.log(tmp);

    // let y = 3;
    // if(true){
    //     let y = 10;                                  // let chỉ có phạm vi trong khối khai báo {}.
    //     console.log(y);
    // }
    // console.log(y);

    // if(true){
    //     const pii = 3.14;                               // Chỉ có phạm vi trong khối khai báo.
    //                                                     // Là hằng số nên không thể gán lại giá trị.
    //     console.log(pii);
    // }

    


    





})()