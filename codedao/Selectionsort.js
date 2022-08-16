const Array_input=[];


for(let i=0;i<18;i++){
    Array_input.push(Math.floor(Math.random()*10000));
}
const B=Array_input.map(function(x){return x});
console.log('This is array before sort');
console.log(Array_input.join(" "));

// for(let i=1;i<18;i++){
//     let j=i;
//     while(j>0 && Array_input[j-1]>Array_input[j]){
//         const temp=Array_input[j-1];
//         Array_input[j-1]=Array_input[j];
//         Array_input[j]=temp;
//         j--;
//     }
// }
Array_input.sort(function (a,b){return a-b});
console.log('This is array af sort');
console.log(Array_input.join(" "));
console.log(B.join(" "));
