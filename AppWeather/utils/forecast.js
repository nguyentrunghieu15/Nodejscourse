
const request= require('postman-request');

const forecast =({lat,lon},callback)=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=3f0dc79b218ef2c31dfe30cb39f61e34`;
    request({url:url, json:true},(error,{body})=>{
        if(error){
            callback(undefined,'Unable to connect to location services');
        }else if(body?.cod!==200){
            callback(undefined,reponse.body.message);
        }else{
            weather= `The weather is ${body.weather[0]?.description} and the temp is about ${(body?.main?.temp)}.What are you planning for today?`
            callback(true,weather);
        }
    });
}
module.exports=forecast;