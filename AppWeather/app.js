

// use openweather api
const chalk = require('chalk').default;
const geocode = require('./utils/geocode');
const forecast= require('./utils/forecast')


geocode(process.argv[2],(error,data)=>{
    if(error==undefined){
        console.log(data);
    }else{
        forecast(data,(error1,data1)=>{
            if(error1==undefined){
                console.log(data1);
            }else{
                console.log(data1);
            }
        })
    }
})