const https= require('https')

const request=https.request('https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&units=metric&appid=3f0dc79b218ef2c31dfe30cb39f61e34',(reponse)=>{
    let data=''
    reponse.on('data', (chunk)=>{
        data=data+chunk.toString();
    })
    reponse.on('end',()=>{
        console.log(data);
    })
});

request.end();