
let url='https://api.openweathermap.org/data/2.5/weather?q=Le Mans&appid=40170a02e70a9dafdceed1c03133ef7b&units=metric&lang=fr';


fetch(url).then((response)=>
    response.json().then((data)=>{
        console.log(data);
        document.querySelector('#ville').innerHTML=data.name;
        document.querySelector('#temperature').innerHTML=data.main.temp + '°';
        document.querySelector('#motmeteo').innerHTML=data.weather[0].description;
        //document.querySelector('#testlogo').innerHTML=data.weather[0].icon;


        if(data.weather[0].icon=="01d"||"01n"){
        document.querySelector('#logometeo').innerHTML="<i class='fas fa-sun'></i>";       
         }else if(data.main.temp=="02d"||"02n"){
            document.querySelector('#logometeo').innerHTML="<i class='fas fa-cloud-sun'></i>";       
         }
         else if(data.main.temp=="03d"||"03n"){
            document.querySelector('#logometeo').innerHTML="<i class='fas fa-cloud'></i>";       
         }
         else if(data.main.temp=="04d"||"04n"){
            document.querySelector('#logometeo').innerHTML="<i class='fas fa-sun'></i>";       
         }
         else if(data.main.temp=="09d"||"09n"){
            document.querySelector('#logometeo').innerHTML="<i class='fas fa-cloud-sun-rain'></i>";       
         }
         else if(data.main.temp=="10d"||"10n"){
            document.querySelector('#logometeo').innerHTML="<i class='fas fa-cloud-showers-heavy'></i>";       
         }
         else if(data.main.temp=="11d"||"11n"){
            document.querySelector('#logometeo').innerHTML="<i class='fas fa-bolt'></i>";       
         }
         else if(data.main.temp=="13d"||"13n"){
            document.querySelector('#logometeo').innerHTML="<i class='fas fa-cloud-meatball'></i>";       
         }
         else if(data.main.temp=="50d"||"50n"){
            document.querySelector('#logometeo').innerHTML="<i class='fas fa-cloud'></i>";       
         }
     })
);