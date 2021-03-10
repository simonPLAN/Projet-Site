let url="https://coronavirusapi-france.now.sh/AllLiveData";


fetch(url).then((response)=>
    response.json().then((data)=>{
        console.log(data);
        
        /*
        document.querySelector('#city').innerHTML=data.name;
        document.querySelector('#temperature').innerHTML=data.main.temp + '°';
        document.querySelector('#ciel').innerHTML=data.weather.id;
        document.querySelector('#vent').innerHTML="<i class='fas fa-wind'></i>"+data.wind.speed +'km/h';
*/
     })
);