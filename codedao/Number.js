// phep cong vua la phep cong vua la phep noi


// khi su dung cac toan tu khac cong vs xau, node se tu dong convert sang number, neu khong ther se tra ve kieu NaN
//NaN laf 1 kieeur number dac biet
// Ham check NaN ;af isNaN

console.log(isNaN(10));


// Kieu Infinity(vo cung) la 1 kieu number dac biet, no xay ra khi chia cho 0

// js co ho tro viet so he hexa :))

let x= 0x3943;
console.log(x);


// mac dinh khi display number la he co so 10 , nhung ta cx co the in ra cac he co so khac bang ham toString()

console.log(x.toString(16));

// Phuong thuc toFixed() tra ve 1 string duoc lam tron toi so chi dinh

x=9.746374632;
console.log(x.toFixed(3));


// Phuong thuc toPrecision() cha ve 1 chuoi voi do dai chi diinh

console.log(x.toPrecision(3));


// phuong thuc valueOf() tra ve 1 so nguyen thuy(tuc kieu number)

console.log(x===x.valueOf());

//  parseInt() hoac parseFloat(), hoac Number() dung de chuyen 1 bien ve kieu so , neu ko ther chuyen thi tra vef NaN

console.log(parseInt("12.42"));
console.log(Number("32"));
console.log(Number("32 Apple"));
console.log(Number("3 2"));
console.log(parseInt("3   2"));// la chua, parseInt cho cho phep khang trang nhung no chi lay so day tien thoi




let test='2';
if(typeof(test)== "number"){
    console.log(true);
}