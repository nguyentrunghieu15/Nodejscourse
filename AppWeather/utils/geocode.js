const request = require('postman-request');


geocode = (adrress,callback)=>{
    const url =  `http://api.openweathermap.org/geo/1.0/direct?q=${adrress}&limit=1&appid=3f0dc79b218ef2c31dfe30cb39f61e34`;
    request({url:url, json: true},(error,{body})=>{
        if(error){
            callback(undefined,'Unable to connect to location services');
        }else if(body.length===0){
            callback(undefined,'Unable to find loaction , Try again');
        }else if(body?.cod){
            callback(undefined,body.message);
        }else{
            callback(true,{
                lon:body[0]?.lon,
                lat:body[0]?.lat,
                cousntry :body[0]?.country
            })
        }
    });
}
module.exports = geocode;