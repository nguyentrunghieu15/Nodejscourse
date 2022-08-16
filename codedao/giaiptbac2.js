let A,B,C;

A=1;B=2;C=-4;
console.log('Giai phuong trinh : '+A+'*X^2+ '+B+'*X+ '+C+' =0');
const dental = Math.sqrt(B*B-4*A*C);

if(A===0){
    if(B===0 && C !==0){
        console.log('Phuong trinh vo nghiem')
    }else {
        console.log(' Nghiem cua phuong trinh la: X= '+-C/B)
    }
}else{
    if(dental<0)
        console.log('Phuong trinh vo nghiem')
    else if(dental===0){
        console.log('Nghiem cua phuong trinh la: X= '+-B/(2*A));
    }else{
        const X1=(-B-dental)/(2*A)
        const X2=(-B+dental)/(2*A)
        console.log('Nghiem cua phuong trinh la: X1= '+X1.toFixed(2)+" X2= "+X2.toFixed(2));
    }
}