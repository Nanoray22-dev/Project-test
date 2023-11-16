// const apiKey = "d40959fafb5e97903b6f484063f5b01b"
const apiKey = "8d3d446b758f81250616c8dd9d602b5a"; // ¡Asegúrate de incluir tu API key!
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=" + apiKey + "&q=";
// https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore&appid=8d3d446b758f81250616c8dd9d602b5a

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');

async function checkWeather(city) {
    const response = await fetch(apiUrl + city);
    const data = await response.json();
    console.log(data);
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector('.humidity').innerHTML = data.main.humidity + ' %';
    document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
