let x="This is example string";
// Test function lenght;

let len = x.length;
console.log(len);

// test function slice

var str = x.slice(-12,-7);// so am la den tu cuoi day
console.log(str);
//substring test
var str = x.substring(-7);// so am thi mac dinh la dau
console.log(str);

var str =x.substr(7,4);// cat dua vao so luong
console.log(str);

var str = x.replace('example','  vis duj');// thay the chuoi con dau tien neu tim thay
console.log(str);
console.log(x);


// co /i dung de thong bao khong phan biet chu hoa chu thuong

var str = x.replace(/Example/i,'  vis duj');// thay the chuoi con dau tien neu tim thay
console.log(str);

// co /g (global dung de tahy the toan bo, bieu thuc cua ham nay khong can dau nhay)

var str=x+"example";

var str=str.replace(/example/g, " thay the toan bo");
console.log(str);

// viet hoa va viet thuong bang function toUpperCase(), toLowerCase()

console.log(str.toUpperCase());
console.log(str);
console.log(str.toLowerCase());
console.log(str);

// noi 2 xau bang ham concat()

console.log(str.concat("da noi ",x));


// xoa khoang trong bang function trim()


str+="       ";
console.log(str,"1");
console.log(str.trim(),1);
console.clear();


// Dem ki tu vao chuoi bang lenh padStart() hoac padEnd()
// 100 la so phan tu toi da cua mang sau khi dem, neu do dai cua mang lon hon thi coi nhu khoi can dem

console.log(str.padStart(100,"0"));


// ham charAt() la tra ve ki tu tai vi tri chi dinh

console.log(str.charAt(0));


// charCodeAt() tra ve ma code UTF 16 tai vi tri chi dinh

console.log(str.charCodeAt(0));

// Co the truy cap 1 phan tu giong nhu kieu mang

console.log(str[0]);

// Nhung khong the thay the no 
str[0]='A';// khong the thay the va cx khong co bao loi
console.log(str);

// Tach mang thanh cac chuoi con bang ham split()


console.log(str.split(" "));

//Phuong thuc idexOf(s), va lastIndexOf(s)  // tra ve vi tri dau tien , cuoi cung xuat hien xau s, neeu ko tim thay trar ve -1, car 2 deu chap nhan tham so thu 2 la vi tris bat dau tim kiem

console.log(x.indexOf('example',1));
console.log(x.indexOf('example',10));
console.log(x.lastIndexOf('example',1));// last index se tim kiem nguoc tu cuoi len, tuc la neu vi tri bat dau la 1 thi no se tim kiem toi 0 :))


// Phuong thuc search() cuung co chuc nag tim kiem va trar ve vij tri day tien cua 1 xau
/* Tuy nhien
ai phương pháp KHÔNG bằng nhau. Đây là những điểm khác biệt:

Phương search()thức không thể nhận đối số vị trí bắt đầu thứ hai.
Phương indexOf()thức không thể nhận các giá trị tìm kiếm mạnh mẽ (biểu thức chính quy).

nho chung laf search manh hon idex va search luon tim kiem tooan bo
 
*/

console.log(str.search("is"));


// ham macth() nhat nheo 

// tim va tra vef 1 mang cac chuoi can tim kiem neu co ton tai thi se co 1 phan tu tuong ung trong mang


console.log(str.match(/i/gi));


// Ham string.includes(searchvalue, start) tra ve true neu co ton tai searchvalue voi vi tri bat dau tim kiem tu start


console.log(x.includes('example',2));

//startWiths va endWiths() tra ve true neu dau hoac cuoi cua no la phan tu tim kiem
console.log(str.startsWith('This'));
console.log(str.endsWith('This'));


// Chung ta co the su dung ki tu mau ` ddeer dinh nghia 1 chuoi
// Cho phep chuoi nhieu dong co the viet nhu doan van luon :"))"


let ex=`example`;
console.log(ex);


// Ki tu mau cung cap cac bieu thuc noi suy

ex=`example${str.includes('This')}`;
console.log(ex);