// cach tao 1 call back function


const add = function(x, y, callback){
    console.log("Evalting");
    setTimeout(()=>{
        callback(x+y);
    },2000);
}


add(1,4,(x)=>{
    console.log(`Sum = ${x}`);
});