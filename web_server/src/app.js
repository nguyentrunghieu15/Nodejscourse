import express from 'express';
import path from 'path';
import hbs from 'hbs';
import url from 'url';
import geocode from './untils/geocode.js'
import forecast from './untils/forecast.js'

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


//define path for express config
const publicPath =path.join(__dirname,'../public');
const viewsPath= path.join(__dirname,'/templates/views');
const partialsPath= path.join(__dirname,'/templates/partials');


const app = express();



app.use(express.static(publicPath))
app.set('view engine','hbs');
app.set('views',viewsPath);
hbs.registerPartials(partialsPath);



app.get('',(request,response)=>{
    response.render('index',{
        name: 'Nguyen Trung Hieu'
    });
});
app.get('/about',(request,response)=>{
    response.render('about');
})
app.get('/help',(request,response)=>{
    response.render('help');
})
app.get('/weather',(request,response)=>{
    if(request?.query?.adress){
        const adress=request.query?.adress.toString();
        geocode(adress,(error,res)=>{
            if(error){
                response.send({
                    error:true,
                    data:res
                });
            }else{
                forecast(res,(errorForecast,resForecast)=>{

                    if(errorForecast){
                        response.send({
                            error:true,
                            data:resForecast
                        });
                    }else{
                        response.send(resForecast);
                    }
                })
            }
        })
    }else{
        response.send({
            error:true,
            data:"You should provide location for website"
        });
    }
})
app.get("*",(request,response)=>{
    response.render('page404');
})
app.listen(2000,()=>{
    console.log('Server is up on port 2000 ');
})

