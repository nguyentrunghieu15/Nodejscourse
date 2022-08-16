
const A =[1,2,3,34];
let B=[];
B=A;
console.log(B);

// nen khai bao mang la const khi do tat ca cac  phan tu cua mang co the thay doi, chi co phep gan la ko the

// Truy xuat 1 phan tu cho mang bang chi so
console.log(B[0]);

// Manng la 1 kieu Object dac biet


// Them 1 phan tu vao mang bang push hoac chi so(voi truong hop chi so co the gay loi)

B.push(Number("34"));
console.log(B);

// Ham length tra ve do day cua mang


console.log(B.length);

// Su dung for hoac foreach()// foreach kha hay

for(let i=0;i<B.length;i++){
    B[i]++;
}
B.forEach(print);
function print(x){
    console.log(x);
}

// lam sao de nhan biet 1 mang
// su dung ban isArray hoac instanceof

console.log(Array.isArray(B));
console.log(B instanceof Array);


// Method cua Array


// Chuyen 1 mamng thanh xau bang toString

console.log(B.toString());
// join () cung giong toString nhung nhin nay

console.log(B.join("")); // no se ko tu dong chen phay vao nhi toString dau


// push la theem vao coi, pop la lay ra cuoi


// shift()la lay ra dau
console.log(B.shift());
console.log(B);


// nguoc lai ta co unshift la them vao dau

console.log(B.unshift(2));// no se tra ve do dai mang moi


// de ghep 2 mang ta co the su dung concat

const C=B.concat(A);
console.log(C);

// Phuong thuc splice(a,b,...), minh se giai thich nhu sau, a la vi tri phan tu se them nao, b laf so phan tu can bo di, .... danh sach cac phan tu se them vao


console.log(C.splice(0,1,34));// tra ve mang phan tu bi xoa di
console.log(C);


// slice() khong khac j string ma luon, cung tao ra mang moi the thoi


// ham sort se nhan vao 1 ham, neu ko cos thi mac dinh xap xep tang dan
// ham resever dung de dao mang

// co the tim kiem phan tu len nhat bang class Math nhu sao(tuong tu voi min) 

console.log(Math.max.apply(null,B));


// Kha la hay ho va thu vi day eheh


// HAM MAP SE TAO 1 MANG MOI SO SO PHAN TU BANG SO PHAN TU CUA MANG CU VA CAC PHAN TU CUA MANG MOI SE BI DUA VAO FUNTION DE CAI TAO ,NHIN DAY NE
const MapArray= B.map(function(x){
    return ++x;
})
console.log(MapArray);


//HAM FILTER SE TAO RA MANG MOI VOI CAC PHAN TU THOA BAM DIEU KIEN CUA FUINTION

const FILTER=B.filter(function(x){
    return x%2===0;
})
console.log(FILTER);
console.log(B);

// Phuong thuc reduce se chay qua moi phan tu cua mang va tra ve 1 gia tri duy nhat, khong lam bien doi mang ban dau

// ham reduce chay tu trai sang phai con ham rightreduce chay tu phai sang trai
console.log(B.reduce(function(a,b,c,d){
    return a+b*2;
}))


// Phuong thuc every() kiem tra moi phan tu cua mang co vuoit qua 1 dieu kien cua ham function hay ko


console.log(B.every(function(x,y,z){
    return x%2===0;
}))
// Con phuong thuc some cung giong every nhunwg khong can phai tai ca ma chi can co it nhat 1 la dc

// Voi mang cung co phuong thuc indexOf() vaf lastIndexOf() , includes()nhu xau


// Phuong thuc find() tra ve phan tu dau tien vuot qua kiem tra

console.log(B.find(function(x){
    return x%2===0;
}));


// FindIdex() cung giong find nhung tra ve vi tri


//Phương Array.from()thức trả về một đối tượng Array từ bất kỳ đối tượng nào có thuộc tính length hoặc bất kỳ đối tượng nào có thể lặp lại.

// Kha la hay ho. maf cai co lenght thi cx chi co 1 vai thou

console.log(Array.from(B));
