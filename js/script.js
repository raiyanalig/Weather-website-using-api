const input = document.getElementById("city-input");
const form = document.getElementById("change-city");
const city_name = document.getElementById("city_name");
const temperature = document.getElementById("temperature");
const humidity = document.getElementById("humidity");
const wind_speed = document.getElementById("wind_speed");
const weather = document.getElementById("weather");
const defaultday = document.getElementById("defaultday");
const defaultdate = document.getElementById("defaultdate");
const TEMPERATE = document.getElementById("TEMPERATE");

async function getData(cityName){
   const promise = await fetch(`https://api.weatherapi.com/v1/current.json?key=352b0a4dfc684a0ebdd204136240907&q=${cityName}&aqi=yes`);
   return await promise.json()
}

(async function (){
    const result = await getData("new delhi");
    city_name.innerText = result.location.name
    temperature.innerText = result.current.temp_c
    humidity.innerText = result.current.humidity
    wind_speed.innerText = result.current.wind_kph
    weather.innerHTML = result.current.condition.text
    TEMPERATE.innerText = result.current.temp_c
    // defaultdate.innerText = result.current.localtime
})();

form.addEventListener("submit", async (e) => {

    e.preventDefault()
    const result = await getData(input.value);
    city_name.innerText = result.location.name
    temperature.innerText = result.current.temp_c
    humidity.innerText = result.current.humidity
    wind_speed.innerText = result.current.wind_kph
    weather.innerHTML = result.current.condition.text
    defaultdate.innerText = result.location.localtime
    TEMPERATE.innerText = result.current.temp_c
    // defaultday.innerText = result.current.is_day
})

// const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// function getDayName(dayNumber) {
//   return days[dayNumber - 1]; // subtract 1 because array indices start at 0
// }
//n