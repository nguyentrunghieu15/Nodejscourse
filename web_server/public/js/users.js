

console.log("Hello World");


const form = document.getElementById('getUsersData');
const inputData= document.getElementById('inputData');
const temp= document.getElementById('temp');
const weather= document.getElementById('weather');
const country=document.getElementById('country');

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    fetch(`/weather?adress=${inputData.value}`).then((response)=>{
        response.json().then((data)=>{
            temp.innerHTML=data?.main?.temp;
            if(data?.weather){
                weather.innerHTML=data.weather[0].description;
            }else weather.innerHTML="undefined"
            country.innerHTML=data?.sys?.country;
            console.log(data);
        })
    })
});
