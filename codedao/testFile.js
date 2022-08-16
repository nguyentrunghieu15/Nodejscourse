const fs =require('fs');

//
fs.writeFileSync("data.txt","HelllWorld\nCheck New Line");
fs.appendFileSync("data.txt","\nThis is test Program");
let x=10;
fs.appendFileSync('data.txt','\n'+x);
if(10=='10'){
    fs.appendFileSync("data.txt","\ntrue");
}
x='Jonhney Deep';
fs.appendFileSync("data.txt",'\n'+x);
// hoan toan phu hop neu ta gan 1 bien kieu nguyen sau do lai gan no la xau
// Hoan ton cos the khai bao bien tren nhieu dong voi cung 1 key word
// Mot dieu dac biet la chung ta co the declare lai 1 bien vs key word var va no cha co tac dung j , no van giu nguyen gia trij truoc khi dinh nghia, tuy nhien chung ta khong the lam dieu nay voi let va const
// co the delacre voi ky word var o bat cu dau trong chuong trinh
x=5+3+'3'+5+3;
let y=17;
fs.appendFileSync("data.txt",'\n'+x);
{
    let  y=10;
    console.log(y);
}
console.log(y);
{
    var z=10; // var co pham vi global scope
}
fs.appendFileSync("data.txt",'\n'+z);
// const kha giong java nhung khac const co the la 1 bien dia chi khong the thay doi va nhung co the thanh doi du lieu cua no tren vung nho heap
var z='';
z+=1;
z+=1;
fs.appendFileSync("data.txt",'\n'+z);
const k=10;
function encreasing(x){
    x++;
}
encreasing(k);
console.log(k);