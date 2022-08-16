const fs= require('fs')
// Bien  1 ddoi tuong thanh JSON

// const Hieu={
//     fullname: "Nguyen Trung Hieu",
//     studentCode: "20204551",
//     birth: '15-11-2002'
// }

// const HieuJson=JSON.stringify(Hieu);
// fs.writeFileSync('data.json',HieuJson);

const data=fs.readFileSync('data.json').toString();

const Data=JSON.parse(data);

console.log(Data);
Data.id='0000';
Data.type='noodle';
Data.name='Omachi';

console.log(Data.batters);

fs.writeFileSync('data.json',JSON.stringify(Data));
