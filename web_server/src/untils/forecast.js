import request from "postman-request";

const forecast= (data,callback)=>{

    request({url:`https://api.openweathermap.org/data/2.5/weather?lat=${data?.lat.toFixed(2)}&lon=${data?.lon.toFixed(2)}&units=metric&appid=3f0dc79b218ef2c31dfe30cb39f61e34`,json:true},
    (error,{body})=>{
        if(error){
            callback(true,"Unable to conect to server.Please check your internet!");
        }else if(body.cod!==200){
            callback(true,body.message);
        }else{
            callback(false,body);
        }
    }
    )
}
export default forecast