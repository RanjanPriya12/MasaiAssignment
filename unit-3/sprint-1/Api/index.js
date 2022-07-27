let key="9175a05c5da3e98574f93973805f6647";

async function getWeatherData(){

    let container=document.getElementById("container");
    let city=document.getElementById("city").value;
    let res= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)

    let data= await res.json();
    //console.log("Data :", data)
    showWeather(data);
}

function showWeather(d){
    container.innerHTML="";
    console.log("D :", d);

    let name=document.createElement('p');
    name.innerHTML=`City :  ${d.name}`;

    let temp=document.createElement('p');
    temp.innerHTML=`Temp : ${d.main.temp}&#8451`;

    let humidity=document.createElement('p');
    humidity.innerHTML=`Humidity : ${d.main.humidity}`;

    let pressure=document.createElement('p');
    pressure.innerHTML=d.main.pressure;
    container.append(name,temp,humidity,pressure)
}