

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

window.addEventListener('message',(event)=>{
    console.log(event);
    switch(event.data){
        case "synthesis":
            alert("synthesis");
            break;
        case "delegate":
            alert("delegate");
            break;
        case "baseLine":
            alert("Base Line");
            break;
        case "resource":
            alert("resource");
            break;
        case "resourceGroup":
            alert("resourceGroup");
            break;
        case "topDown":
            alert("topDown");
            break;
        case "importXML":
            alert("importXML");
            break;
        case "gridSetting":
            alert("gridSetting");
            break;  
    }
});
                