    var a = 10;
    var b = 3;
    console.log(a ** b);

    // Arithmetic (toán tử số học)

    var sum = a + b;
    console.log(sum);

    var sub = a - b;
    console.log(sub);

    var mul = a * b;
    console.log(mul);

    var mod = a % b;
    console.log(mod);

    var div = a / b;
    console.log(div);

    // var int_div = parseInt(a/b);        
    var int_div = Math.floor(a / b);
    console.log(int_div);

    // var x = Math.pow(a, b);
    var x = a ** b;
    console.log(x);

    // toán tử ++ và -- 
    var x = a++;
    console.log(x)

    var x = ++a;
    console.log(x)

    // Assignment (toán tử gán)
    // tương tự như các nnlt C C++ Java python: = += -= /= %= *=
    a = 10;
    b = 3;
    console.log(a *= b);

    // Comparison (toán tử so sánh < > >= <= == != === !==)
    console.log(a < b);
    console.log(a >= b);

    var a = 20;
    var b = "20";
    console.log(a == b);  // -> true 
    console.log(a === b); // -> false         // so sánh nghiêm ngặt hơn, bắt buộc a, b phải cùng datatype
    // cùng kiểu và cùng giá trị -> true

    console.log(a != b);
    console.log(a !== b);
    // khác kiểu hoặc khác giá trị -> true

    // Logical (toán tử logic && || !)

    var a = 10;
    var b = 20;
    var c = 30;
    var d = 40;

    console.log(a > b && c < d);
    console.log(a > b || c < d);
    console.log('in ra')
    console.log(!(a > b));

    // Kiểu dữ liệu nguyên thủy (Primitive datatype : Number, String, Boolean, Undefined, Null, Symbol):
    // Kiểu number:
    var a = 10; // số nguyên
    var b = 20.1; // số thực
    var c = Infinity; // dương vô cùng
    var d = -Infinity; // âm vô cùng
    var e = 'a' / 10;    // NaN là Not a Number
    console.log(c);
    console.log(e);
    console.log(a === 10.0);

    // Kiểu String:
    var msg1 = 'sử dụng dấu \'';
    var msg2 = "sử dụng dấu \"";
    var msg3 = `sử dụng dấu \``;
    console.log(msg1);
    console.log(msg2);
    console.log(msg3); // string trong ES6


    // Kiểu Boolean 
    var isDarkMode = true;
    var isDarkMode = false;

    // Kiểu Undefined : là kiểu dữ liệu mà khi khai báo ra một biến và không gán giá trị thì kết quả trả về là undefined
    var num;
    console.log(num)

    // Kiểu Null: 
    var a = null;
    console.log(a)

    // Kiểu dữ kiệu phức tạp (complex data : Function, Object)
    // Kiểu function:
    function sum_(a, b, c){
        return a + b + c;
    }

    console.log(sum_(10, 30, 20));

    function areaCircle(r){
        return Math.PI * r**2;
    }

    console.log(areaCircle(3));

    // Kiểu Object: same same kiểu list và dict trong python
    var dct = {
        fullName : 'Hoàng Minh Khương',
        age : 20,
        address : 'Thái Bình'
    }

    for(let key in dct){
        console.log(key, dct[key]); 
    }

    console.log(dct.fullName);
    console.log(dct.age);
    console.log(dct.address);

    var arr = [5, 3, 8, 10];
    for(let i in arr){
        console.log(arr[i])
    }
    for(var i = 0; i < arr.length; ++i){
        console.log(arr[i]);
    }

    console.log(arr.join(' '));
    console.log(arr.length);